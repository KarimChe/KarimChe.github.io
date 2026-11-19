// Shared layout and content. Edit the data arrays below to update the site.
const SITE = {
    name: 'Karim Cherifi',
    email: 'karim.cherifi@femto-st.fr',
    linkedin: 'https://www.linkedin.com/in/karim-cherifi-b6a69684',
    scholar: 'https://scholar.google.com/citations?user=gE5RRyEAAAAJ&hl=en'
};

// [date, html]
const NEWS = [
    ['2026', 'The book <a class="text-accent-600 underline" href="https://link.springer.com/book/10.1007/978-981-96-9108-1" target="_blank" rel="noopener"><em>Physics-Based and Data-Driven Modeling for Digital Twins</em></a>, which I co-edited with I. V. Gosea (ICIAM2023 Springer Series, vol. 8), is now published by Springer Nature.'],
    ['2026', 'New preprint: <em>PH-Symb: Sparse symbolic identification of nonlinear port-Hamiltonian systems using Kolmogorov-Arnold networks</em> (arXiv:2611.09334).'],
    ['2026', 'New preprint: <em>PH-KAN: Port-Hamiltonian Kolmogorov-Arnold Network</em> (arXiv:2606.14708).'],
    ['2026', 'New preprint: <em>Target Parameterization in Diffusion Models for Nonlinear Spatiotemporal System Identification</em> (arXiv:2604.17566).'],
    ['2026', 'Gave talks at <strong>WCCM-ECCOMAS 2026</strong> (Munich) and, as an invited speaker in a minisymposium, at <strong>SciCADE 2026</strong> (Edinburgh).'],
    ['2026', '<em>Neural Scaling Laws for Learning-Based Identification of Nonlinear Systems</em> published in IEEE Open Journal of Control Systems.'],
    ['2026', '<em>ISO-pHNN</em> published in Physica D: Nonlinear Phenomena.'],
    ['2026', '<em>Snapshot-driven rational interpolation of parametric systems</em> published in Automatica.'],
    ['Dec 2025', 'I joined SUPMICROTECH / FEMTO-ST in Besançon as Junior Professor (CPJ) in physics-informed AI for complex technical systems.'],
    ['2026', '<em>Computing the nearest scattering passive system</em> published in the Electronic Journal of Linear Algebra.'],
    ['2025', 'Invited talk at SIAM CSE 2025 (Fort Worth, Texas) on learning nonlinearly state-dependent port-Hamiltonian systems.'],
    ['2025', 'Poster on benchmarking for port-Hamiltonian systems at the PHS 2025 Spring School (Frauenchiemsee).'],
    ['2025', '<em>Relationship between dissipativity concepts for linear time-varying port-Hamiltonian systems</em> published in Math. Control Signals Syst.']
];

const EXPERIENCE = [
    ['Dec 2025 – present', 'Junior Professor (CPJ)', 'SUPMICROTECH, FEMTO-ST, Besançon, France', ['CPJ in physics-informed artificial intelligence for complex technical systems.']],
    ['Oct 2024 – Sep 2025', 'Postdoctoral Researcher', 'University of Wuppertal, Germany', ['Benchmark platform for port-Hamiltonian systems.', 'Scientific machine learning for port-Hamiltonian systems.']],
    ['Jan 2021 – Sep 2024', 'Postdoctoral Researcher', 'TU Berlin, Germany', ['Digital twins for large drive applications in the project “Elektrische Antriebe 2.0” (Werner-von-Siemens Centre for Industry and Science), with Prof. Volker Mehrmann.', 'Project “Distributed Dynamic Security Control” (DFG SPP 1984).']],
    ['Dec 2019 – Dec 2020', 'Postdoctoral Fellow', 'Max Planck Institute for Dynamics of Complex Technical Systems, Magdeburg, Germany', ['Nonlinear model reduction in electrochemistry for battery models.']],
    ['Jul 2018 – Feb 2019', 'Research Stay (DAAD)', 'Max Planck Institute, Magdeburg, Germany', ['Numerical analysis of minimal realization techniques, supervised by Prof. Peter Benner.']],
    ['Apr 2017 – Jun 2017', 'Research Stay', 'TU Berlin, Germany', ['Realization of port-Hamiltonian systems, supervised by Prof. Volker Mehrmann (MATLAB implementation).']]
];

// [year, [title, authors, venue]]
const PUBS = [
    ['2026', [
        ['PH-Symb: Sparse symbolic identification of nonlinear port-Hamiltonian systems using Kolmogorov-Arnold networks', 'A El Messaoudi, K Cherifi, Y Le Gorrec, Y Wu', 'arXiv:2611.09334 (preprint)'],
        ['Computing the nearest scattering passive system', 'K Cherifi, N Gillis, P Sharma', 'Electronic Journal of Linear Algebra 42, 854–873'],
        ['PH-KAN: Port-Hamiltonian Kolmogorov-Arnold Network', 'A El Messaoudi, K Cherifi, Y Le Gorrec, Y Wu', 'arXiv:2606.14708 (preprint)'],
        ['Target Parameterization in Diffusion Models for Nonlinear Spatiotemporal System Identification', 'A El Messaoudi, N Khaous, K Cherifi', 'arXiv:2604.17566 (preprint)'],
        ['Physics-Based and Data-Driven Modeling for Digital Twins (eds.)', 'K Cherifi, IV Gosea', 'ICIAM2023 Springer Series, vol. 8, Springer Nature Singapore'],
        ['Neural Scaling Laws for Learning-Based Identification of Nonlinear Systems', 'M Roschkowski, K Cherifi, H Gernandt', 'IEEE Open Journal of Control Systems 5, 349–362'],
        ['Nonlinear port-Hamiltonian system identification from input-state-output data (ISO-pHNN)', 'K Cherifi, A El Messaoudi, H Gernandt, M Roschkowski', 'Physica D: Nonlinear Phenomena 497, 135368'],
        ['Snapshot-driven rational interpolation of parametric systems', 'AJR Pelling, K Cherifi, IV Gosea, E Sarradj', 'Automatica 189, 113023'],
        ['Hierarchical modeling for an industrial implementation of a Digital Twin for electrical drives', 'K Cherifi, P Schulze, V Mehrmann, L Goßlau, P Lünnemann', 'In Physics-Based and Data-Driven Modeling for Digital Twins, Springer, 87–127']
    ]],
    ['2025', [
        ['Relationship between dissipativity concepts for linear time-varying port-Hamiltonian systems', 'K Cherifi, H Gernandt, D Hinsen, V Mehrmann, R Morandin', 'Mathematics of Control, Signals, and Systems 37, 879–968'],
        ['A Novel Recursive Algorithm for Inverting Matrix Polynomials via a Generalized Leverrier–Faddeev Scheme', 'B Bekhiti, GF Fragulis, GS Maraslidis, K Hariche, K Cherifi', 'Mathematics 13 (13), 2101']
    ]],
    ['2024', [
        ['On discrete-time dissipative port-Hamiltonian (descriptor) systems', 'K Cherifi, H Gernandt, D Hinsen, V Mehrmann', 'Mathematics of Control, Signals, and Systems 36, 561–599'],
        ['The difference between port-Hamiltonian, passive and positive real descriptor systems', 'K Cherifi, H Gernandt, D Hinsen', 'Mathematics of Control, Signals, and Systems 36, 451–482']
    ]],
    ['2023', [
        ['A geometric framework for discrete-time port-Hamiltonian systems', 'K Cherifi, H Gernandt, D Hinsen, V Mehrmann', 'PAMM, e202300149']
    ]],
    ['2022', [
        ['Simulations in a digital twin of an electrical machine', 'K Cherifi, V Mehrmann, P Schulze', 'arXiv:2207.02171'],
        ['A greedy data collection scheme for linear dynamical systems', 'K Cherifi, P Goyal, P Benner', 'Data-Centric Engineering 3, e16'],
        ['A non-intrusive method to inferring linear port-Hamiltonian realizations using time-domain data', 'K Cherifi, PK Goyal, P Benner', 'Electronic Transactions on Numerical Analysis 56, 102–116']
    ]],
    ['2021', [
        ['Application of data-driven realizations to port-Hamiltonian flexible structures', 'K Cherifi, A Brugnoli', 'IFAC-PapersOnLine 54 (19), 180–185']
    ]],
    ['2020', [
        ['An overview on recent machine learning techniques for Port Hamiltonian systems', 'K Cherifi', 'Physica D: Nonlinear Phenomena 411, 132620'],
        ['Matlab toolbox and GUI for minimal realization of linear systems', 'K Cherifi, K Hariche', 'Indonesian Journal of Electrical Engineering and Computer Science 17 (2)']
    ]],
    ['2019 and earlier', [
        ['Numerical methods to compute a minimal realization of a port-Hamiltonian system', 'K Cherifi, V Mehrmann, K Hariche', 'arXiv:1903.07042'],
        ['Control, Design and Visual Autonomous Navigation of Quadrotor', 'M Boughellaba, R Boushaki, R Rabah, K Cherifi', 'ICAEE 2019, Algiers'],
        ['Model Reduction Based on Matrix Polynomials', 'K Cherifi, K Hariche', 'IEEE ARSO 2018, Genoa'],
        ['Review of MIMO Minimal Realization Techniques and Case Study on SCARA Robot Manipulator', 'K Cherifi, K Hariche', 'International Review of Automatic Control 10, 2017']
    ]]
];

// [year, title, venue, note]
const TALKS = {
    'Oral communications': [
        ['2026', 'Learning Port-Hamiltonian Systems and Neural Scaling Laws', 'WCCM-ECCOMAS 2026, Munich, Germany'],
        ['2026', 'Input-State-Output Learning of Port-Hamiltonian Systems and Neural Scaling Laws', 'SciCADE 2026, Edinburgh, UK (invited, minisymposium)'],
        ['2025', 'On Learning Nonlinearly State Dependent Port-Hamiltonian Systems', 'SIAM CSE, Fort Worth, Texas, USA (invited, MS “Learning to Learn: New Trends in Scientific Machine Learning”)'],
        ['2024', 'Snapshot based data driven modeling of parametric systems', 'Model Reduction and Surrogate Modeling (MORE), La Jolla, California, USA'],
        ['2024', 'Modeling time-varying port-Hamiltonian systems', 'WCCM, Vancouver, Canada (invited, MS “Modeling and learning of structured dynamical systems”)'],
        ['2024', 'Learning port-Hamiltonian structures using PINNs type architecture', 'Symposium on Machine Learning and Dynamical Systems, Fields Institute, Toronto, Canada'],
        ['2024', 'On the Relation Between Port-Hamiltonian Systems, Passivity and the Solution of KYPs', 'SIAM LA, Paris, France (invited, MS “Matrix and Tensor Equations in Action”)'],
        ['2024', 'Implementation of a digital twin for electrical machines', 'ECCOMAS, Lisbon, Portugal (invited, MS “Computational Methods for Enabling Digital Twins”)'],
        ['2023', 'Hierarchical modeling for digital twins of electrical machines', 'ICIAM, Tokyo, Japan'],
        ['2023', 'Discrete time scattering passive port-Hamiltonian systems', 'GAMM Annual Meeting, Dresden, Germany'],
        ['2023', 'Challenges and Requirements in Modeling Electrical Machines for Digital Twins', 'SIAM CSE, Amsterdam, Netherlands'],
        ['2022', 'Modeling electrical machines in the context of a digital twin', 'GAMM Annual Meeting, Aachen, Germany'],
        ['2022', 'Digital twins of electric machines', 'ECCOMAS, Oslo, Norway'],
        ['2021', 'Data-driven realization of port-Hamiltonian flexible structures', '7th IFAC Workshop on Lagrangian and Hamiltonian Methods for Nonlinear Control, Germany'],
        ['2021', 'On improving the data collection step for data driven modeling methods', '8th European Congress of Mathematics, Slovenia (hybrid)'],
        ['2021', 'Data driven modelling of port-Hamiltonian systems', 'SIAM CSE, online'],
        ['2020', 'Data Driven Port Hamiltonian systems modelling and control', 'Second Symposium on Machine Learning and Dynamical Systems, Fields Institute (online)'],
        ['2019', 'Minimal Realization of Port Hamiltonian systems from input/output time domain data', 'ICIAM, Valencia, Spain'],
        ['2018', 'Realization of Port Hamiltonian Systems', 'SIAM Annual Meeting, Portland, USA'],
        ['2017', 'Minimal realization of MIMO linear systems using Hermite form', 'SIAM Conference on Control and Its Applications (CT17), Pittsburgh, USA']
    ],
    'Invited seminars': [
        ['2025', 'Learning and data-driven modeling of port-Hamiltonian systems', 'Learning & Dynamics Seminars, FEMTO-ST, Besançon, France'],
        ['2024', 'Modelling Port Hamiltonian systems', 'University of Mons, Belgium'],
        ['2024', 'Dissipativity properties of time-varying port-Hamiltonian systems', 'PHS seminar, Wuppertal, Germany'],
        ['2023', 'A port-Hamiltonian formulation for dissipative discrete time linear systems', 'OSELOT online seminar'],
        ['2019', 'Numerical software for the realization of port Hamiltonian systems', 'Absolventen seminar Numerische Mathematik, TU Berlin, Germany'],
        ['2018', 'Realization of port Hamiltonian systems', 'CSC Seminar, MPI Magdeburg, Germany']
    ],
    'Poster communications': [
        ['2025', 'Benchmarking for Port Hamiltonian systems', 'Spring School on Theory and Applications of Port-Hamiltonian Systems (PHS 2025), Frauenchiemsee, Germany'],
        ['2020', 'Modelling Port Hamiltonian systems', 'Workshop on Mathematics of Reduced Order Models, Brown University, USA'],
        ['2019', 'Port Hamiltonian realizations', 'Symposium on Machine Learning and Dynamical Systems, Imperial College London, UK'],
        ['2018', 'Model Reduction Based on Matrix Polynomials', 'IEEE ARSO 2018, Genoa, Italy']
    ]
};

const SUPERVISION = [
    ['2026 – ongoing', 'PhD (co-supervision)', 'Adrien Mathieu', 'Soft and hard constraints in scientific machine learning. Director: Jean-Julien Aucouturier.'],
    ['2025 – ongoing', 'PhD (co-supervision)', 'Achraf El Messaoudi', 'Estimation and control of flexible structures with physics-informed learning. Directors: Yann Le Gorrec and Yongxin Wu.'],
    ['2024 – 2025', 'Master', 'Achraf El Messaoudi', 'System identification of port-Hamiltonian systems using machine learning.'],
    ['2023', 'Master', 'Thierry Tchouto Mbatchou', 'The learning of linear port-Hamiltonian systems.'],
    ['2019', 'Master', 'Mouaad Boughellaba and Rabah Hazila Ramzi', 'Control of a quadrotor.']
];

const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const me = s => esc(s).replace('K Cherifi', '<strong>K Cherifi</strong>');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function renderNav() {
    const links = [['index.html#about', 'About'], ['news.html', 'News'], ['research.html', 'Research'], ['talks.html', 'Talks'], ['teaching.html', 'Teaching'], ['index.html#publications', 'Publications'], ['index.html#contact', 'Contact']];
    document.getElementById('nav').innerHTML = `
    <nav class="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">${SITE.name}</a>
            <div class="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                <div class="hidden md:flex gap-5 mr-2">${links.map(([h, t]) => `<a href="${h}" class="hover:text-accent-600">${t}</a>`).join('')}</div>
                <button onclick="toggleDarkMode()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle dark mode">
                    <i class="ph-fill ph-moon block dark:hidden text-lg"></i>
                    <i class="ph-fill ph-sun hidden dark:block text-lg text-amber-400"></i>
                </button>
                <button id="menu-btn" class="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu" aria-expanded="false">
                    <i id="menu-icon" class="ph ph-list text-2xl"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden border-t border-slate-100 dark:border-slate-800 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            ${links.map(([h, t]) => `<a href="${h}" class="block py-2 hover:text-accent-600">${t}</a>`).join('')}
        </div>
    </nav>`;
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('menu-btn');
    btn.addEventListener('click', () => {
        const open = menu.classList.toggle('hidden') === false;
        btn.setAttribute('aria-expanded', open);
        document.getElementById('menu-icon').className = open ? 'ph ph-x text-2xl' : 'ph ph-list text-2xl';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
    document.getElementById('footer').innerHTML = `
    <footer class="border-t border-slate-100 dark:border-slate-800 py-8 text-center text-xs text-slate-400">© ${new Date().getFullYear()} ${SITE.name}</footer>`;
}

function newsList(items) {
    return `<ul class="space-y-4">${items.map(([d, t]) => `<li><span class="font-semibold text-accent-600 mr-1">${d}</span>· ${t}</li>`).join('')}</ul>`;
}

function renderPubs(el) {
    el.innerHTML = PUBS.map(([year, items]) => `
        <div>
            <h4 class="text-lg font-semibold text-accent-600 mb-2">${year}</h4>
            <ul class="space-y-3 border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                ${items.map(([t, a, v]) => `<li>
                    <div class="font-medium text-slate-900 dark:text-white">${esc(t)}</div>
                    <div class="text-slate-600 dark:text-slate-400">${me(a)}</div>
                    <div class="text-slate-500 italic">${esc(v)}</div></li>`).join('')}
            </ul>
        </div>`).join('');
}

const PREVIOUS = [
    ['Oct 2024 – Sep 2025', 'University of Wuppertal, Germany', 'Postdoctoral researcher: built a benchmark platform for port-Hamiltonian systems and worked on scientific machine learning for pH systems.'],
    ['Jan 2021 – Sep 2024', 'TU Berlin, Germany', 'Postdoctoral researcher: digital twins for large electrical drives (project “Elektrische Antriebe 2.0”, with Prof. Volker Mehrmann) and the DFG SPP 1984 project “Distributed Dynamic Security Control”.'],
    ['2017 – 2020', 'Max Planck Institute for Dynamics of Complex Technical Systems, Magdeburg, Germany', 'Postdoctoral fellow (Dec 2019 – Dec 2020) on nonlinear model reduction for battery models; DAAD research stay (2018–2019) on minimal realization techniques with Prof. Peter Benner.']
];

function renderExperience(el) {
    const [d, role, org, pts] = EXPERIENCE[0];
    el.innerHTML = `
        <div class="p-5 rounded-2xl border-2 border-accent-100 dark:border-accent-700 bg-accent-50/50 dark:bg-slate-800/60">
            <div class="text-xs text-accent-600 font-semibold uppercase tracking-wider mb-1">Current position · ${d}</div>
            <div class="text-lg font-semibold text-slate-900 dark:text-white">${role}</div>
            <div class="text-slate-600 dark:text-slate-300 mb-2">${org}</div>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${pts[0]} My work covers physics-informed and structure-preserving learning, port-Hamiltonian modeling, model reduction and digital twins.</p>
        </div>
        <div>
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-2 mt-6">Previous positions</h4>
            <ul class="list-disc ml-5 space-y-2 text-slate-600 dark:text-slate-400">
                ${PREVIOUS.map(([dt, o, desc]) => `<li><strong class="text-slate-800 dark:text-slate-200">${o}</strong> <span class="text-xs text-slate-500">(${dt})</span><br>${desc}</li>`).join('')}
            </ul>
        </div>`;
}

function renderTalks(el) {
    el.innerHTML = Object.entries(TALKS).map(([cat, items]) => `
        <section class="mb-12">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">${cat}</h3>
            <ul class="space-y-3 text-sm">${items.map(([y, t, v]) => `
                <li class="flex gap-4"><span class="w-12 shrink-0 font-semibold text-accent-600">${y}</span>
                <span><span class="font-medium text-slate-900 dark:text-white">“${esc(t)}”</span><br><span class="text-slate-600 dark:text-slate-400">${esc(v)}</span></span></li>`).join('')}
            </ul>
        </section>`).join('');
}

function renderSupervision(el) {
    el.innerHTML = SUPERVISION.map(([d, lvl, who, topic]) => `
        <li class="flex gap-4"><span class="w-28 shrink-0 font-semibold text-accent-600">${d}</span>
        <span><span class="font-medium text-slate-900 dark:text-white">${lvl}: ${esc(who)}</span><br><span class="text-slate-600 dark:text-slate-400">${esc(topic)}</span></span></li>`).join('');
}
