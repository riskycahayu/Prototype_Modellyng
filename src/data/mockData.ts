import { StructuredPaper, ResearchGap, TeamMember, RoadmapPhase } from '../types';

export const INITIAL_PAPERS: StructuredPaper[] = [
  {
    id: 'paper-chen-2024',
    title: 'Zero-shot Extraction and Claim Verification Using Graph Transformers',
    authors: 'Chen, L., Wu, K., & Zhang, Y.',
    year: 2024,
    journal: 'Journal of Artificial Intelligence Research, Vol. 42',
    doi: '10.1145/3639841.3649201',
    domain: 'Computer Science & NLP',
    objective: 'Zero-shot extraction of scientific entities and automated claim verification across disparate corpora',
    methodology: 'Graph Transformer Network (GTN) with multi-head attention over citation dependency graphs',
    dataset: '1,200 CS Papers & ArXiv Preprints (2018–2024)',
    sampleSize: '1,200 CS Papers',
    keyContributions: [
      'Introduced schema-guided node aggregation for scientific graphs',
      'Achieved 91.4% entity extraction precision on cross-domain academic texts',
      'Formulated bounding-box paragraph attribution for evidence mapping'
    ],
    empiricalResults: 'F1 score of 89.2% on zero-shot claim verification against peer-reviewed ground truth',
    limitations: 'High computational latency on dense citation networks (>500 nodes per paper)',
    claims: [
      {
        id: 'claim-c1',
        claim: 'Zero-shot graph transformer reduces hallucination by 41% compared to dense semantic embeddings alone.',
        page: 7,
        paragraph: 'Section 3.2, Paragraph 4',
        snippet: 'Empirical ablation confirms that graph-conditioned decoding curbs ungrounded assertions from 14.8% down to 8.7%, representing a 41% relative reduction in hallucinated claim formulation.',
        verified: true,
        confidence: 0.94
      },
      {
        id: 'claim-c2',
        claim: 'Attribution accuracy retains 98% consistency across standard IEEE and ACM manuscript formatting.',
        page: 11,
        paragraph: 'Section 4.5, Table 3 Note',
        snippet: 'OCR layout parsing coupled with bounding-box coordinate tracking maintained 98.2% exact paragraph attribution regardless of column layout.',
        verified: true,
        confidence: 0.98
      }
    ]
  },
  {
    id: 'paper-miller-2023',
    title: 'Cross-Corpus Synthesis and Limitation Mapping Across Biomedical Preprints',
    authors: 'Miller, S., Vance, H., & Rodriguez, M.',
    year: 2023,
    journal: 'Bioinformatics & Machine Learning, 19(4)',
    doi: '10.1093/bioinformatics/btad198',
    domain: 'Biomedical Informatics',
    objective: 'Synthesize contradictory clinical findings and map experimental constraints automatically',
    methodology: 'Semantic Vector Clustering with Contrastive Loss',
    dataset: '450 Med Preprints (bioRxiv & medRxiv)',
    sampleSize: '450 Med Preprints',
    keyContributions: [
      'Comparative matrix methodology for divergent clinical outcomes',
      'Taxonomy of 14 common empirical limitations reported in health literature'
    ],
    empiricalResults: 'Detected 83% of contradictory trial claims identified by human panel experts',
    limitations: 'Hallucination risk when handling poorly formatted supplementary appendices and tables',
    claims: [
      {
        id: 'claim-m1',
        claim: 'Contrastive cluster embeddings accurately group divergent methodologies without supervised labels.',
        page: 5,
        paragraph: 'Section 2.4, Paragraph 2',
        snippet: 'Unsupervised contrastive learning generated cohesive clusters grouping randomized controlled trials separately from retrospective cohort studies with silhouette score 0.74.',
        verified: true,
        confidence: 0.91
      }
    ]
  },
  {
    id: 'paper-nguyen-2024',
    title: 'Evidence-Grounded Literature Review: A Human-in-the-Loop Framework',
    authors: 'Nguyen, T., Alvarez, D., & Thorne, J.',
    year: 2024,
    journal: 'IEEE Transactions on Learning Technologies',
    doi: '10.1109/TLT.2024.1048291',
    domain: 'Edutech & Educational AI',
    objective: 'Enable university students and supervisors to co-verify AI-synthesized research matrix claims',
    methodology: 'Interactive human-in-the-loop interface with provenance audit trails',
    dataset: '320 Postgraduate Theses and Literature Reviews',
    sampleSize: '320 Thesis Corpora',
    keyContributions: [
      'Established verifiable audit trails linking every matrix cell to primary sources',
      'Demonstrated 58% reduction in literature review compilation time for thesis candidates'
    ],
    empiricalResults: 'Student cohorts produced 3.2x higher literature synthesis depth in supervisor blind evaluations',
    limitations: 'Requires onboarding for users unfamiliar with structured matrix schemas',
    claims: [
      {
        id: 'claim-n1',
        claim: 'Direct provenance links increase student trust and critical evaluation frequency by 74%.',
        page: 8,
        paragraph: 'Section 4.1, Paragraph 1',
        snippet: 'Post-study telemetry and qualitative interviews showed a 74% increase in student verification actions when source snippets were accessible via single-click overlays.',
        verified: true,
        confidence: 0.96
      }
    ]
  },
  {
    id: 'paper-vaswani-2017',
    title: 'Attention Is All You Need: Foundations of Self-Attention Transformers',
    authors: 'Vaswani, A., Shazeer, N., Parmar, N., et al.',
    year: 2017,
    journal: 'NeurIPS 2017 Proceedings',
    doi: '10.48550/arXiv.1706.03762',
    domain: 'Deep Learning Architecture',
    objective: 'Replace recurrent and convolutional models with multi-head self-attention mechanisms',
    methodology: 'Encoder-Decoder Multi-Head Scaled Dot-Product Attention',
    dataset: 'WMT 2014 English-German (4.5M pairs) and English-French (36M pairs)',
    sampleSize: '40.5M Sentence Pairs',
    keyContributions: [
      'Eliminated recurrence allowing full parallelization during training',
      'Set new state-of-the-art BLEU score of 28.4 on WMT 2014 En-De'
    ],
    empiricalResults: 'Trained in 3.5 days on 8 P100 GPUs, outperforming previous ensemble baselines',
    limitations: 'Quadratic memory complexity O(N^2) with respect to input sequence length',
    claims: [
      {
        id: 'claim-v1',
        claim: 'Multi-head attention allows the model to jointly attend to information from different representation subspaces.',
        page: 4,
        paragraph: 'Section 3.2.2, Paragraph 1',
        snippet: 'Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. With a single attention head, averaging inhibits this.',
        verified: true,
        confidence: 0.99
      }
    ]
  }
];

export const INITIAL_GAPS: ResearchGap[] = [
  {
    id: 'gap-01',
    title: 'Multi-modal claim verification in non-English academic datasets',
    domain: 'Cross-Lingual AI & Academia',
    description: 'Current models excel in English preprint verification, but lack robust grounding across multilingual datasets (Indonesian, Spanish, Mandarin) where formatting standards vary widely.',
    confidence: 0.89,
    citationClustersCount: 4,
    relatedPaperIds: ['paper-chen-2024', 'paper-nguyen-2024'],
    potentialImpact: 'Groundbreaking',
    status: 'Unexplored'
  },
  {
    id: 'gap-02',
    title: 'Real-time hallucination scoring in low-resource academic domains',
    domain: 'Responsible AI & Bibliometrics',
    description: 'Existing systems lack lightweight confidence calibration when comparing niche disciplines with fewer than 50 published papers per annum.',
    confidence: 0.84,
    citationClustersCount: 3,
    relatedPaperIds: ['paper-chen-2024', 'paper-miller-2023'],
    potentialImpact: 'High',
    status: 'Emerging'
  },
  {
    id: 'gap-03',
    title: 'Reconciling divergent empirical conclusions in pre-clinical studies',
    domain: 'Biomedical & Methodological Rigor',
    description: 'Absence of an automated reasoning engine that isolates whether contradictory findings stem from sampling bias, dosage variations, or statistical artifact.',
    confidence: 0.92,
    citationClustersCount: 6,
    relatedPaperIds: ['paper-miller-2023'],
    potentialImpact: 'High',
    status: 'Contradictory'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lawrencius',
    name: 'Lawrencius C.K. Panjaitan',
    role: 'Chief Executive Officer (CEO)',
    shortRole: 'CEO — Chief Executive Officer',
    initials: 'LP',
    bio: 'Memimpin arah strategis Modellyng, mengoordinasikan pengembangan startup, menentukan prioritas bisnis, serta membangun komunikasi dengan inkubator, perguruan tinggi, dan calon mitra.',
    focusAreas: ['Leadership', 'Business Strategy', 'Partnership & Alliances', 'Team Coordination'],
    gradient: 'from-blue-600 to-indigo-700',
    email: 'lawrencius@modellyng.startup',
    photo: '/src/assets/images/regenerated_image_1792770426199.png'
  },
  {
    id: 'risky',
    name: 'Risky Cahayu',
    role: 'CTO Full-Stack & CMO',
    shortRole: 'CTO Full-Stack & CMO',
    initials: 'RC',
    bio: 'Mengembangkan sisi front-end dan back-end pada beberapa fitur aplikasi, membantu integrasi fitur dengan sistem utama, serta mendukung pengujian fungsionalitas. Di bidang pemasaran, berperan dalam strategi branding, komunikasi produk, riset kebutuhan pengguna, dan materi promosi Modellyng.',
    focusAreas: ['Full-Stack Development', 'Product Marketing', 'User Research', 'Brand Communication'],
    gradient: 'from-indigo-600 to-purple-700',
    email: 'riskycahayu83@gmail.com',
    photo: '/src/assets/images/regenerated_image_1792770436185.png'
  },
  {
    id: 'arby',
    name: 'Arby Nassandro',
    role: 'Chief Technology Officer (CTO)',
    shortRole: 'CTO — Chief Technology Officer',
    initials: 'AN',
    bio: 'Bertanggung jawab atas pengembangan teknis seluruh bagian aplikasi, termasuk arsitektur sistem, pengembangan front-end dan back-end, integrasi fitur, pengelolaan basis data, serta koordinasi implementasi teknologi agar seluruh komponen Modellyng berjalan secara terpadu.',
    focusAreas: ['System Architecture', 'Application Development', 'Feature Integration', 'Cloud & Database'],
    gradient: 'from-cyan-600 to-blue-700',
    email: 'arby@modellyng.startup',
    photo: '/src/assets/images/regenerated_image_1792770446792.png'
  },
  {
    id: 'aarif',
    name: 'Aarif Rahmaan J. Faqiih',
    role: 'CTO — Application Development',
    shortRole: 'CTO — Application Development',
    initials: 'AF',
    bio: 'Mendukung pengembangan teknis aplikasi dengan membantu implementasi fitur, integrasi antarkomponen, perbaikan bug, dan pengujian fungsionalitas. Berkolaborasi dengan Arby dalam pengembangan aplikasi dengan cakupan tanggung jawab yang lebih terfokus.',
    focusAreas: ['Feature Implementation', 'Application Testing', 'Bug Fixing', 'Component Integration'],
    gradient: 'from-emerald-600 to-teal-700',
    email: 'aarif@modellyng.startup',
    photo: '/src/assets/images/regenerated_image_1792770464381.png'
  },
  {
    id: 'fatih',
    name: 'Fatih Al-Fakhri Muhammad',
    role: 'CTO — AI Modeling',
    shortRole: 'CTO — AI Modeling',
    initials: 'FM',
    bio: 'Berfokus pada pengembangan dan pemodelan kecerdasan buatan untuk mendukung fitur analisis literatur ilmiah Modellyng, termasuk perancangan pendekatan pemrosesan informasi dari paper, pengembangan logika model AI, serta evaluasi hasil model agar relevan dengan kebutuhan pengguna.',
    focusAreas: ['AI Modeling', 'Information Extraction', 'NLP & Embeddings', 'Model Evaluation'],
    gradient: 'from-purple-600 to-pink-700',
    email: 'fatih@modellyng.startup',
    photo: '/src/assets/images/regenerated_image_1792770473867.png'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'PHASE 01',
    number: '01',
    title: 'Customer Discovery & Academic Needs Validation',
    status: 'In Progress',
    category: 'Research & Validation',
    duration: 'Current Milestone',
    description: 'Melakukan wawancara mendalam, survei, dan diskusi kelompok terarah dengan mahasiswa, dosen pembimbing, serta peneliti untuk memetakan pain point penulisan kajian pustaka dan perbandingan literatur.',
    deliverables: [
      '50+ wawancara pengguna (mahasiswa S1/S2/S3 & dosen)',
      'Dokumentasi taksonomi sintesis literatur ilmiah',
      'Spesifikasi kebutuhan produk (PRD) v1.0'
    ]
  },
  {
    phase: 'PHASE 02',
    number: '02',
    title: 'Product Design & Core MVP Development',
    status: 'Planned',
    category: 'Product & Engineering',
    duration: 'Planned 3–4 Month MVP',
    description: 'Merancang pengalaman pengguna (UI/UX) minimalis yang estetis dan mengembangkan fitur inti: Structured Paper Model, Comparative Paper Matrix, serta Research Gap Discovery awal.',
    deliverables: [
      'Desain antarmuka responsif mobile & web',
      'Engine ekstraksi skema paper otomatis (Objective, Method, Limitation)',
      'Interaksi matriks komparatif multi-paper'
    ]
  },
  {
    phase: 'PHASE 03',
    number: '03',
    title: 'Testing & Campus Pilot Implementation',
    status: 'Planned',
    category: 'Usability & Academic Trial',
    duration: 'Target Q3/Q4',
    description: 'Melakukan functional testing, usability testing, dan User Acceptance Testing (UAT) melalui uji coba pilot di lingkungan kampus mitra bersama laboratorium riset dan mahasiswa tingkat akhir.',
    deliverables: [
      'Program pilot di 3–5 fakultas mitra universitas',
      'Evaluasi tingkat akurasi claim traceability bersama dosen',
      'Iterasi feedback pengguna dan penyempurnaan fitur'
    ]
  },
  {
    phase: 'PHASE 04',
    number: '04',
    title: 'Cloud Deployment & Model Scalability',
    status: 'Planned',
    category: 'Infrastructure & Performance',
    duration: 'Target Q4',
    description: 'Mengimplementasikan aplikasi pada infrastruktur cloud berkeandalan tinggi, memantau latensi pemrosesan dokumen PDF, dan mengevaluasi kualitas model AI berbasis standar etika riset.',
    deliverables: [
      'Infrastruktur cloud berskala tinggi dengan isolasi data pengguna',
      'Pipeline evaluasi automated benchmarking untuk sitasi',
      'Keamanan data akademik dan perlindungan hak cipta berkas'
    ]
  },
  {
    phase: 'PHASE 05',
    number: '05',
    title: 'Growth & University Licensing Commercialization',
    status: 'Planned',
    category: 'Business Expansion',
    duration: 'Roadmap Target',
    description: 'Menyempurnakan produk berdasarkan validasi pasar, mengembangkan peluang paket langganan riset individual, serta skema lisensi institusi perguruan tinggi dan perpustakaan akademik.',
    deliverables: [
      'Skema langganan individu (Student & Researcher Pro)',
      'Paket lisensi institusi kampus & riset lab',
      'Integrasi dengan reference managers (Zotero, Mendeley)'
    ]
  }
];
