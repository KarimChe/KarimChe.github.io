"""Find Google Scholar publications missing from assets/site.js and list them in pending-publications.md."""
import html
import pathlib
import re
import sys

import requests

USER = "gE5RRyEAAAAJ"
URL = f"https://scholar.google.com/citations?user={USER}&hl=en&view_op=list_works&sortby=pubdate&pagesize=100"
ROOT = pathlib.Path(__file__).resolve().parents[2]


def norm(text):
    return re.sub(r"[^a-z0-9]+", " ", html.unescape(text).lower()).strip()


def fetch_entries():
    resp = requests.get(URL, headers={"User-Agent": "Mozilla/5.0"}, timeout=30)
    resp.raise_for_status()
    resp.encoding = "utf-8"
    rows = re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', resp.text, re.S)
    if not rows:
        sys.exit("No publications found on the Scholar page (blocked or layout changed).")
    entries = []
    for row in rows:
        title = re.search(r'class="gsc_a_at"[^>]*>(.*?)</a>', row, re.S)
        meta = re.findall(r'<div class="gs_gray">(.*?)</div>', row, re.S)
        year = re.search(r'class="gsc_a_h gsc_a_hc gs_ibl">(\d{4})<', row)
        if title:
            entries.append({
                "title": html.unescape(re.sub(r"<.*?>", "", title.group(1))).strip(),
                "authors": html.unescape(re.sub(r"<.*?>", "", meta[0])).strip() if meta else "",
                "venue": html.unescape(re.sub(r"<.*?>", "", meta[1])).strip() if len(meta) > 1 else "",
                "year": year.group(1) if year else "",
            })
    return entries


def main():
    known = norm((ROOT / "assets" / "site.js").read_text(encoding="utf-8"))
    new = []
    for e in fetch_entries():
        key = norm(re.sub(r"[…\s.]+$", "", e["title"]))
        if key and key[:60] not in known:
            new.append(e)

    out = ROOT / "pending-publications.md"
    if not new:
        if out.exists():
            out.unlink()
        print("No new publications.")
        return
    lines = [
        "# Pending publications",
        "",
        "New on Google Scholar. Check each entry, then add it to `PUBS` in `assets/site.js` and delete this file.",
        "",
    ]
    for e in new:
        lines.append(f"- **{e['title']}** ({e['year']})  \n  {e['authors']}  \n  {e['venue']}")
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"{len(new)} new publication(s) found.")


if __name__ == "__main__":
    main()
