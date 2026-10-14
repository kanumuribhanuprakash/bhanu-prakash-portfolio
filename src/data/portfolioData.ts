import { ProjectItem, SkillCategory, CertificationActivity, EducationInfo } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'K. Bhanu Prakash',
  title: 'AI/ML Student | Full Stack Developer | Building Intelligent Applications',
  primaryFocus: 'AI/ML & Full Stack',
  university: 'GITAM University',
  degree: 'B.Tech in Computer Science and Engineering',
  graduationYear: '2028 (Expected)',
  cgpa: '9.35 / 10',
  cgpaNote: 'Subject to official semester confirmation',
  bio: 'I am a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building intelligent, user-focused applications that combine AI capabilities with practical software engineering. Through hands-on projects, I am continuously strengthening my skills in machine learning, web technologies, and problem-solving.',
  email: 'kanumuribhanupraksah9@gmail.com',
  studentEmail: 'bkanumur@student.gitam.edu',
  professionalEmail: 'kanumuribhanupraksah9@gmail.com',
  githubUrl: 'https://github.com/kanumuribhanuprakash',
  linkedinUrl: 'https://www.linkedin.com/in/kanumuri-bhanu-prakash-2b8364345/',
  leetcodeUrl: 'https://leetcode.com/u/Kanumuribahnuprakash/',
  location: 'Visakhapatnam, India',
};

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'netsentinel',
    title: 'NetSentinel — Intelligent Digital Twin for Network Security, OS Monitoring & Anomaly Detection',
    tagline: 'Network topology simulation, BFS algorithmic routing, and foundation for intelligent security anomaly detection.',
    category: 'AI/ML & Network Systems',
    status: 'In Development',
    problemStatement:
      'Computer networks need lightweight digital twins to simulate topology changes, evaluate path reachability during failures, and prepare data pipelines for automated anomaly detection without disrupting physical infrastructure.',
    solution:
      'Building a modular software architecture that models network nodes and links, constructs interconnected topology graphs, and runs BFS pathfinding for reachability checks, establishing the telemetry pipeline for an intelligent anomaly detection engine.',
    technologies: ['Python', 'Graph Algorithms', 'BFS Pathfinding', 'Topology Modeling', 'Automated Testing', 'Machine Learning (Planned)'],
    githubUrl: 'https://github.com/kanumuribhanuprakash',
    image: '/src/assets/images/showcase_network_topology_1791784684546.jpg',
    completedScope: [
      'Foundational system design & network entity models (nodes & links)',
      'Graph topology construction & adjacency representation',
      'BFS (Breadth-First Search) shortest path reachability algorithm',
      'Automated unit testing suite verifying pathfinding accuracy and node connectivity',
      'Baseline data structures prepared for metric collection',
    ],
    inProgressScope: [
      'Machine learning model training for traffic anomaly detection',
      'OS telemetry monitoring hooks and live packet event simulation',
      'Interactive visual dashboard for real-time traffic inspection',
    ],
    disclaimer: 'Status: In active development. Topology modeling, BFS reachability, and automated tests are implemented; the ML-based anomaly detection engine is in active development.',
    isFeatured: true,
  },
  {
    id: 'localiq',
    title: 'LOCALIQ — Private Multimodal Offline RAG System',
    tagline: 'Client-side multimodal RAG engine running browser-local embeddings, Whisper transcription, and cited semantic retrieval with zero cloud data egress.',
    category: 'AI / Multimodal Offline RAG',
    status: 'In Development',
    problemStatement:
      'Traditional cloud-based AI assistants require uploading confidential files and personal media to external servers, introducing data privacy risks, telemetry tracking, subscription costs, and hallucinations when source evidence is missing.',
    solution:
      'LOCALIQ eliminates cloud data transit by running document ingestion (PDF, DOCX, TXT, images), speech transcription (Whisper), neural embedding generation (all-MiniLM-L6-v2), and local LLM synthesis directly in the client browser runtime via WebAssembly, WebGPU, and IndexedDB.',
    technologies: ['WebAssembly (WASM)', 'WebGPU', 'Transformers.js', 'SmolLM-135M', 'Whisper Speech-to-Text', 'all-MiniLM-L6-v2', 'IndexedDB', 'React 19', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/LOCALIQ-1',
    completedScope: [
      '100% client-side document parsing and text chunking pipeline for PDF, DOCX, TXT, and images',
      'Browser-local vector embedding generation (all-MiniLM-L6-v2) and cosine similarity indexing',
      'Hybrid dense + BM25 lexical keyword retrieval with strict 0.35 similarity quality gate',
      'Grounded response integrity guaranteeing answers are subsets of retrieved evidence with clickable source citations',
      'Zero-evidence refusal mechanism deterministically refusing when no relevant document context exists',
      'Speech transcription pipeline with Whisper WASM integration',
    ],
    inProgressScope: [
      'WebGPU acceleration tuning for local LLM text generation (SmolLM-135M-Instruct)',
      'Multimodal audio and complex multi-page architectural diagram parsing pipelines',
      'Desktop offline packaging and native IndexedDB sync',
    ],
    disclaimer: 'Verified repository on GitHub (kanumuribhanuprakash/LOCALIQ-1). Built for client-side zero user-data egress; browser-local retrieval and embeddings are fully operational while local LLM acceleration is in active development.',
    isFeatured: true,
  },
  {
    id: 'pocket-health',
    title: 'Health AI Hub — Smart Healthcare Management System',
    tagline: 'Full-stack healthcare management application with structured symptom guidance, medication catalogs, and health record schemas.',
    category: 'Full Stack & Healthcare',
    status: 'In Development',
    problemStatement:
      'Users frequently experience difficulties organizing personal health records, understanding medical guidance steps, tracking medications, and quickly discovering verified local clinics.',
    solution:
      'A full-stack web application designed to provide structured symptom guidance, medication catalogs, health record schemas, nearby hospital discovery, appointment workflows, and planned AI-assisted report analysis.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Healthcare Schemas', 'Geolocation API', 'Tailwind CSS', 'AI Report Parser (Planned)'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/Health-AI-Hub',
    completedScope: [
      'Full-stack React client architecture with responsive healthcare UI',
      'Health record data models and structured medication catalogs',
      'Symptom exploration workflow and triage intake questionnaire',
      'Nearby hospital discovery and emergency contact directory wireframes',
    ],
    inProgressScope: [
      'AI report parsing using optical character recognition (OCR) and text summarization',
      'Automated medication schedule notifications and intake reminders',
      'Client-side encrypted record persistence',
    ],
    disclaimer: 'Disclaimer: In active development. This application is an educational software project and is NOT clinically validated, medically certified, or intended for medical diagnosis.',
    isFeatured: true,
  },
  {
    id: 'lecture-tracking-system',
    title: 'Lecture Tracking System',
    tagline: 'Java object-oriented console application for managing academic classroom occupancy, faculty assignments, and course materials.',
    category: 'Academic Project',
    status: 'Completed',
    problemStatement:
      'Educational institutions need organized tools to coordinate physical classroom availability, track faculty lecturer hall assignments, and systematically distribute study materials without scheduling conflicts.',
    solution:
      'A modular Java console application built with clean object-oriented architecture and Java Collections. It manages Lecturer and Classroom models, tracks real-time room occupancy states, allows faculty to upload lecture materials, and provides an administrative CLI.',
    technologies: ['Java', 'Object-Oriented Programming (OOP)', 'Java Collections Framework', 'System Administration CLI', 'Console UI'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/lecture-tracking-system-using-java-language',
    completedScope: [
      'Lecturer entity model managing faculty name, ID, current classroom, and uploaded course materials',
      'Classroom entity tracking unique room ID, occupied boolean status, and assigned lecturer reference',
      'Room occupancy management logic with assignLecturer and freeClassroom lifecycle methods',
      'Vacant classroom query routine (getAvailableClassrooms) for instant hall availability lookups',
      'Lecture material distribution mechanism enabling faculty uploads and student material access',
      'Interactive CLI console dashboard providing system status reporting and real-time room monitoring',
    ],
    inProgressScope: [
      'File-based or database persistence for multi-semester record preservation',
      'JavaFX desktop graphical user interface wrapper',
    ],
    disclaimer: 'Academic Project: Verified Java codebase implementing classroom allocation, faculty assignment, and lecture material distribution with clean OOP principles.',
    isFeatured: false,
  },
  {
    id: 'student-record-management',
    title: 'Student Record Management System',
    tagline: 'C-based academic record management system utilizing dynamic singly linked lists for memory-efficient student data operations and aggregate analytics.',
    category: 'Academic Project',
    status: 'Completed',
    problemStatement:
      'Managing student records in resource-constrained environments requires dynamic memory structures that allow flexible insertion and deletion without the fixed memory overhead or reallocation bottlenecks of static arrays.',
    solution:
      'Built a C console application implementing dynamic singly linked lists (struct Student with next pointers) to handle student IDs, marks, CGPA, academic year, and club memberships, providing full CRUD and analytical filtering routines.',
    technologies: ['C Language', 'Data Structures', 'Singly Linked Lists', 'Dynamic Memory Allocation (malloc)', 'Pointer Manipulation', 'CLI'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/student-record-management-system-datastucres',
    completedScope: [
      'Dynamic node allocation with malloc and linked list head pointer architecture',
      'Full CRUD operations: add student, display all records, search by ID, update student, and delete record with pointer realignment',
      'Categorical filtering by academic year and by student club affiliation',
      'Statistical calculation routine computing average CGPA across all enrolled student nodes',
      'Interactive terminal menu system with error handling for memory allocation',
    ],
    inProgressScope: [
      'File I/O serialization to persist linked list nodes across program restarts',
      'Sorting algorithms to order records by CGPA or student ID',
    ],
    disclaimer: 'Academic Project: Implemented in C using fundamental data structures (singly linked lists) demonstrating dynamic heap memory management and pointer-based record manipulation.',
    isFeatured: false,
  },
  {
    id: 'ads-lab',
    title: 'Academic Data Structures Laboratory (ADS Lab)',
    tagline: 'Comprehensive C implementation of foundational linear data structures, search algorithms, sorting techniques, and stack-based undo/redo mechanisms.',
    category: 'Academic Coursework',
    status: 'Completed',
    problemStatement:
      'Mastery of core computer science fundamentals requires rigorous, from-scratch implementation and benchmarking of fundamental abstract data types, recursive algorithms, and memory management in C.',
    solution:
      'A modular coursework repository for the GITAM University Academic Data Structures Laboratory covering linear structures, stack/queue variations, searching algorithms, divide-and-conquer sorting, and application architectures.',
    technologies: ['C Language', 'Data Structures & Algorithms', 'Pointers & Dynamic Memory', 'Quicksort & Radix Sort', 'Recursion', 'Time Complexity'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/ADS-lab',
    completedScope: [
      'Linear Data Structures: Singly linked lists, Stacks using arrays and linked lists, Queues using arrays and linked lists',
      'Sorting Algorithms: Quicksort with partition logic, and multi-digit Radix sort',
      'Searching Algorithms: Linear search and recursive binary search',
      'Specialized Implementations: Dual-stack Redo/Undo operational mechanism',
      'Clean procedural code with memory management best practices',
    ],
    inProgressScope: [
      'Non-linear structures: Binary Search Trees (BST) and Graph adjacency matrices',
      'Empirical performance benchmarks across differing input distributions',
    ],
    disclaimer: 'Coursework Repository: Laboratory coursework experiments implemented in C covering academic data structures and algorithmic complexity at GITAM University.',
    isFeatured: false,
  },
  {
    id: 'traffic-fine-management',
    title: 'Traffic Regulation & Fine Management System',
    tagline: 'Python-based command-line system managing traffic regulations, violation records, fine calculations, and location tracking with file storage.',
    category: 'Practical Systems',
    status: 'Prototype',
    problemStatement:
      'Manual management of traffic violation records leads to billing discrepancies, delayed penalty notices, and lack of transparency for vehicle owners and administrators.',
    solution:
      'A command-line administrative system designed to log traffic infractions, maintain vehicle records, calculate fines based on regulation rules, and manage payment verification states using file-based persistent storage.',
    technologies: ['Python', 'CLI Architecture', 'File-Based Storage', 'Data Validation', 'System Logic'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/traffic-regulation-fine-management',
    completedScope: [
      'Modular Python CLI application managing rules, locations, and violation penalties',
      'File-based persistence for fines, places, records, and rules definitions',
      'Violation logging interface calculating penalties according to specific traffic regulations',
      'Status tracking for pending vs settled penalties',
    ],
    inProgressScope: [
      'Citizen verification portal with vehicle registration lookup',
      'Integration testing for receipt generation & fine ledger audits',
      'Codebase refactoring and updated repository documentation',
    ],
    disclaimer: 'Status: Prototype stage. Python-based CLI application with file-based storage managing traffic rules and violation records.',
    isFeatured: false,
  },
  {
    id: 'ghostcustomer',
    title: 'GhostCustomer',
    tagline: 'Software project repository currently undergoing architecture review and repository verification.',
    category: 'Software Repository',
    status: 'Awaiting Verification',
    problemStatement:
      'Repository documentation and functional requirements are currently being organized for public release.',
    solution:
      'Maintained transparently as an active code repository. Detailed feature architecture, technical stack, and milestone achievements will be published once repository verification is completed.',
    technologies: ['Python', 'System Architecture', 'Git Workflow', 'Awaiting Verification'],
    githubUrl: 'https://github.com/kanumuribhanuprakash/GhostCustomer1',
    completedScope: [
      'Public GitHub repository initialized & version-controlled',
      'Initial codebase commit history recorded',
    ],
    inProgressScope: [
      'Formal technical documentation & README specification',
      'Test suite execution and verification report',
      'Public demonstration release notes',
    ],
    disclaimer: 'Note: Displayed transparently as a project awaiting repository verification. No unverified capabilities or features are claimed.',
    isFeatured: false,
  },
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Foundational languages utilized for algorithm implementation, systems development, and problem solving.',
    coreSkills: ['C', 'Java', 'Python', 'SQL'],
    learningSkills: ['TypeScript', 'Modern C++ (17/20)'],
  },
  {
    title: 'Web Development',
    description: 'Technologies used for building responsive frontend interfaces and verified backend services.',
    coreSkills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Node.js / Express (Backend Basics)'],
    learningSkills: ['Next.js', 'REST API Architecture & Microservices', 'Full-Stack Auth Flows'],
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Core machine learning fundamentals, intelligent application development, and practical AI tooling.',
    coreSkills: [
      'Machine Learning Fundamentals',
      'AI Application Development',
      'Prompt Engineering & Context Design',
      'Local Vector Embeddings & Retrieval',
      'NumPy & Scikit-Learn Basics',
    ],
    learningSkills: [
      'PyTorch & Deep Learning Models',
      'Local Model Quantization & Optimization',
      'Multimodal Audio & Vision Pipelines',
    ],
  },
  {
    title: 'Core Computer Science',
    description: 'Academic computer science foundations and system-level engineering concepts at GITAM University.',
    coreSkills: [
      'Data Structures & Algorithms (DSA)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
    ],
    learningSkills: [
      'Distributed Systems Principles',
      'System Design Fundamentals',
      'Cybersecurity & Network Defense',
    ],
  },
];

export const CERTIFICATIONS_AND_ACTIVITIES: CertificationActivity[] = [
  {
    id: 'forage-genai',
    title: 'GenAI Powered Data Analytics',
    organization: 'Forage',
    type: 'Program',
    verifiedStatus: 'Completed Job Simulation / Practical Task Modules',
    description:
      'Hands-on practical simulation covering real-world applications of generative AI in data analytics, prompt engineering for business intelligence, and synthesizing data-driven recommendations.',
    dateOrYear: 'Academic Year 2024–2025',
  },
  {
    id: 'gdg-techsprint',
    title: 'Google TechSprint 2025',
    organization: 'GDG on Campus GITAM',
    type: 'Developer Sprint',
    verifiedStatus: 'Active Participant & Collaborator',
    description:
      'Participated in collaborative developer sprint hosted by Google Developer Groups on campus, working through rapid prototyping sprints and engaging with Google developer technologies.',
    dateOrYear: '2025',
  },
  {
    id: 'schrodinger-cat',
    title: "Mission: Schrödinger’s Cat Hackathon",
    organization: 'Singularity Student Lab, SRM-AP',
    type: 'Hackathon',
    verifiedStatus: 'Verified Hackathon Participant',
    description:
      'Competitive multi-hour hackathon focused on problem-solving, rapid software ideation, algorithmic challenges, and engineering under strict project delivery deadlines.',
    dateOrYear: '2024–2025',
  },
  {
    id: 'aiesec-summit',
    title: "Women’s Leadership Summit",
    organization: 'AIESEC Visakhapatnam',
    type: 'Leadership Summit',
    verifiedStatus: 'Summit Delegate / Attendee',
    description:
      'Engaged in youth leadership forums, networking with community advocates and student leaders to exchange insights on sustainable leadership and community impact.',
    dateOrYear: '2024',
  },
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  institution: 'GITAM University (Visakhapatnam)',
  expectedGraduation: '2028',
  cgpa: '9.35 / 10.0',
  cgpaNote: 'Current academic standing; subject to confirmation before final publication',
  focusAreas: [
    'Artificial Intelligence & Machine Learning',
    'Full Stack Web Development',
    'Data Structures & Algorithmic Problem Solving',
    'Database Engineering & Computer Systems',
  ],
};
