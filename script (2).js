/* ============================================================
   CIVICLENS KERALA — script.js
   Complete implementation with research-backed Kerala data
   ============================================================ */

'use strict';

/* ============================================================
   KERALA DATA — DISTRICTS
   ============================================================ */

const KERALA_DISTRICTS = [
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', constituencies: 7, hasData: true, dataConst: ['thiruvananthapuram'] },
  { id: 'kollam', name: 'Kollam', constituencies: 8, hasData: false, dataConst: [] },
  { id: 'pathanamthitta', name: 'Pathanamthitta', constituencies: 5, hasData: false, dataConst: [] },
  { id: 'alappuzha', name: 'Alappuzha', constituencies: 7, hasData: false, dataConst: [] },
  { id: 'kottayam', name: 'Kottayam', constituencies: 5, hasData: false, dataConst: [] },
  { id: 'idukki', name: 'Idukki', constituencies: 5, hasData: false, dataConst: [] },
  { id: 'ernakulam', name: 'Ernakulam', constituencies: 7, hasData: true, dataConst: ['ernakulam'] },
  { id: 'thrissur', name: 'Thrissur', constituencies: 7, hasData: false, dataConst: [] },
  { id: 'palakkad', name: 'Palakkad', constituencies: 8, hasData: false, dataConst: [] },
  { id: 'malappuram', name: 'Malappuram', constituencies: 7, hasData: false, dataConst: [] },
  { id: 'kozhikode', name: 'Kozhikode', constituencies: 7, hasData: true, dataConst: ['kozhikode-north'] },
  { id: 'wayanad', name: 'Wayanad', constituencies: 3, hasData: false, dataConst: [] },
  { id: 'kannur', name: 'Kannur', constituencies: 6, hasData: false, dataConst: [] },
  { id: 'kasaragod', name: 'Kasaragod', constituencies: 5, hasData: false, dataConst: [] },
];

/* ============================================================
   CONSTITUENCIES — RESEARCH-BACKED DATA
   ============================================================ */

const CONSTITUENCIES = {
  'thiruvananthapuram': {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    lacNo: 134,
    district: 'Thiruvananthapuram',
    state: 'Kerala',
    lokSabha: 'Thiruvananthapuram',
    type: 'General',
    pollingStations2026: 230,
    electors2026: 158826,
    voters2026: 120648,
    pollingPct2026: '75.96%',
    population2011: 253963,
    populationNote: 'Census 2011 figure',
    currentMLA: 'C. P. John',
    currentParty: 'Communist Marxist Party Kerala State Committee',
    currentPartyShort: 'CMP(KSC)',
    currentTerm: 'From 4 May 2026',
    repHistory: [
      { year: '2016', name: 'V. S. Sivakumar', party: 'Indian National Congress', partyShort: 'INC' },
      { year: '2021', name: 'Antony Raju', party: 'Janadhipathiya Kerala Congress', partyShort: 'JKC' },
      { year: '2026', name: 'C. P. John', party: 'Communist Marxist Party Kerala State Committee', partyShort: 'CMP(KSC)' },
    ],
    projects: ['TVPM-001','TVPM-002','TVPM-003','TVPM-004'],
    problems: ['PROB-TVPM-001','PROB-TVPM-002'],
    dataQuality: {
      electionData: 'green',
      projectFinancial: 'amber',
      actualExpenditure: 'orange',
      geographicMapping: 'amber',
      problemRecords: 'amber',
    },
    whatWeKnow: [
      '2026 election data (electors, voters, polling %)',
      'Representative term history (2016, 2021, 2026)',
      'Selected project records with partial financial data',
      'Smart City kiosk problem — reported with evidence',
      'Palayam car park — construction completed, operational outcome documented',
    ],
    whatNotVerified: [
      'Actual expenditure for most projects',
      'Current operational status of smart city kiosks',
      'Geographic mapping of city-wide projects to LAC 134',
      'Financial reconciliation of SMARTCITY projects',
      'Beneficiary counts for most projects',
    ],
    sourceKey: 'SRC-KER-001',
  },
  'ernakulam': {
    id: 'ernakulam',
    name: 'Ernakulam',
    lacNo: 82,
    district: 'Ernakulam',
    state: 'Kerala',
    lokSabha: 'Ernakulam',
    type: 'General',
    pollingStations2026: 206,
    electors2026: 136321,
    voters2026: 107901,
    pollingPct2026: '79.15%',
    population2011: 220787,
    populationNote: 'Secondary census-based estimate — primary verification pending',
    currentMLA: 'T. J. Vinod',
    currentParty: 'Indian National Congress',
    currentPartyShort: 'INC',
    currentTerm: 'From 4 May 2026',
    repHistory: [
      { year: '2016', name: 'Hibi Eden', party: 'Indian National Congress', partyShort: 'INC' },
      { year: '2019 (By-election)', name: 'T. J. Vinod', party: 'Indian National Congress', partyShort: 'INC' },
      { year: '2021', name: 'T. J. Vinod', party: 'Indian National Congress', partyShort: 'INC' },
      { year: '2026', name: 'T. J. Vinod', party: 'Indian National Congress', partyShort: 'INC' },
    ],
    projects: ['EKM-001','EKM-002','EKM-003','EKM-004','EKM-005'],
    problems: ['PROB-EKM-001','PROB-EKM-002','PROB-EKM-003'],
    dataQuality: {
      electionData: 'green',
      projectFinancial: 'amber',
      actualExpenditure: 'orange',
      geographicMapping: 'amber',
      problemRecords: 'amber',
    },
    whatWeKnow: [
      '2026 election data (electors, voters, polling %)',
      'By-election 2019 and full representative history',
      'KWA project records (MLA-SDF and AMRUT)',
      'CSR: Cochin Shipyard dialysis centre — documented',
      'Container pipeline delay — documented with reason',
    ],
    whatNotVerified: [
      'Population figure — secondary estimate only',
      'Operational status of completed water projects',
      'Container pipeline (EKM-004) — current field status beyond Feb 2026',
      'Representative connection for most projects',
      'AMRUT project actual expenditure',
    ],
    sourceKey: 'SRC-KER-002',
  },
  'kozhikode-north': {
    id: 'kozhikode-north',
    name: 'Kozhikode North',
    lacNo: 27,
    district: 'Kozhikode',
    state: 'Kerala',
    lokSabha: 'Kozhikode',
    type: 'General',
    pollingStations2026: 186,
    electors2026: 173473,
    voters2026: 141659,
    pollingPct2026: '81.66%',
    population2011: null,
    populationNote: 'NOT VERIFIED — constituency-level population not yet confirmed from available sources',
    currentMLA: 'Adv. K. Jayanth',
    currentParty: 'Indian National Congress',
    currentPartyShort: 'INC',
    currentTerm: 'From 4 May 2026',
    repHistory: [
      { year: '2011', name: 'A. Pradeep Kumar', party: 'Communist Party of India (Marxist)', partyShort: 'CPI(M)' },
      { year: '2016', name: 'A. Pradeep Kumar', party: 'Communist Party of India (Marxist)', partyShort: 'CPI(M)' },
      { year: '2021', name: 'Thottathil Ravindran', party: 'Communist Party of India (Marxist)', partyShort: 'CPI(M)' },
      { year: '2026', name: 'Adv. K. Jayanth', party: 'Indian National Congress', partyShort: 'INC' },
    ],
    projects: ['KN-001','KN-002','KN-003','KN-004','KN-PRISM-001','KN-PRISM-002'],
    problems: ['PROB-KN-001','PROB-KN-002','PROB-KN-003'],
    dataQuality: {
      electionData: 'green',
      projectFinancial: 'orange',
      actualExpenditure: 'gray',
      geographicMapping: 'amber',
      problemRecords: 'amber',
    },
    whatWeKnow: [
      '2026 election data (electors, voters, polling %)',
      'Full representative history (2011–2026)',
      'Administrative sanction for Karaparamb–Malaparamb Road (₹62.653 lakh)',
      'PRISM school projects — strong project evidence',
      'Aanakkayamthodu (LAC-ADS) — 30% progress documented',
      'Stroke Centre Lift — tender value and implementing authority',
    ],
    whatNotVerified: [
      'Population (constituency-level figure not confirmed)',
      'Actual expenditure for almost all projects',
      'Technical sanction, tender and release amounts for road projects',
      'Operational status of PRISM schools',
      'Financial reconciliation for PRISM (₹10–20 Cr range)',
      'Geographic confirmation of some NGO/CSR projects to LAC 27',
    ],
    sourceKey: 'SRC-KER-003',
  },
};

/* ============================================================
   REPRESENTATIVES
   ============================================================ */

const REPRESENTATIVES = [
  {
    id: 0,
    name: 'C. P. John',
    avatar: 'C',
    position: 'MLA',
    constituency: 'Thiruvananthapuram',
    constId: 'thiruvananthapuram',
    lacNo: 134,
    state: 'Kerala',
    party: 'Communist Marxist Party Kerala State Committee',
    partyShort: 'CMP(KSC)',
    term: 'From 4 May 2026',
    termsServed: 1,
    projectsInConst: 4,
    fundsNote: 'MLA-SDF and other scheme funds — amounts require verification',
    documentsOnRecord: 3,
    legislativeNote: 'Current term commenced May 2026 — legislative record not yet available',
    importantNote: 'Term commenced May 2026. Legislative activity data for current term not yet available.',
    repHistory: CONSTITUENCIES['thiruvananthapuram'].repHistory,
  },
  {
    id: 1,
    name: 'T. J. Vinod',
    avatar: 'T',
    position: 'MLA',
    constituency: 'Ernakulam',
    constId: 'ernakulam',
    lacNo: 82,
    state: 'Kerala',
    party: 'Indian National Congress',
    partyShort: 'INC',
    term: 'From 4 May 2026',
    termsServed: 3,
    projectsInConst: 5,
    fundsNote: 'MLA-SDF projects (₹3.62 lakh + ₹3.72 lakh) documented; broader constituency funds not compiled',
    documentsOnRecord: 5,
    legislativeNote: '2019 By-election, 2021 and 2026 elections; MLA-SDF projects documented for 2023–24',
    importantNote: 'T. J. Vinod has served since the 2019 by-election. MLA-SDF project amounts are documented for his earlier terms. Individual MLA responsibility for broader constituency projects requires verification.',
    repHistory: CONSTITUENCIES['ernakulam'].repHistory,
  },
  {
    id: 2,
    name: 'Adv. K. Jayanth',
    avatar: 'K',
    position: 'MLA',
    constituency: 'Kozhikode North',
    constId: 'kozhikode-north',
    lacNo: 27,
    state: 'Kerala',
    party: 'Indian National Congress',
    partyShort: 'INC',
    term: 'From 4 May 2026',
    termsServed: 1,
    projectsInConst: 6,
    fundsNote: 'New term commenced May 2026; LAC-ADS projects are from previous representative\'s term',
    documentsOnRecord: 4,
    legislativeNote: 'Current term commenced May 2026 — legislative record not yet available',
    importantNote: 'Current MLA since May 2026. LAC-ADS projects documented in this constituency were associated with previous MLA Thottathil Ravindran (2021–2026). The implementing authority for most projects is PWD or the relevant department — not the MLA personally.',
    repHistory: CONSTITUENCIES['kozhikode-north'].repHistory,
  },
];

/* ============================================================
   PROJECTS — RESEARCH-BACKED
   ============================================================ */

const PROJECTS = [
  /* ---- ERNAKULAM ---- */
  {
    id: 'EKM-001',
    name: 'MLA-SDF Cheranalloor — Meenakshiparambu Water-Supply Pipeline',
    constituency: 'Ernakulam',
    lacNumber: 82,
    district: 'Ernakulam',
    location: 'Meenakshiparambu / South Janatha Road, Cheranalloor',
    department: 'KWA',
    fundingSource: 'MLA-SDF',
    administrativeSanction: '₹3.62 lakh',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Completed',
    startDate: '12 Feb 2024',
    expectedCompletion: '31 Dec 2024',
    actualCompletion: '31 Dec 2024',
    physicalProgress: '100%',
    operationalStatus: 'Current field verification required',
    outcome: 'NOT VERIFIED',
    beneficiaries: '~50',
    representativeRelationship: 'Individual representative responsibility requires verification. Funded under MLA-SDF scheme.',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-002',
    sourceNote: 'KWA project monitoring record',
    isFlagship: false,
    geographicVerification: 'LAC 82 confirmed',
    importantNote: null,
  },
  {
    id: 'EKM-002',
    name: 'Varma Road / Chittoor Water-Supply Improvement',
    constituency: 'Ernakulam',
    lacNumber: 82,
    district: 'Ernakulam',
    location: 'Varma Road, Chittoor, Cheranalloor',
    department: 'KWA',
    fundingSource: 'Deposit Work / Urban Agglomeration',
    administrativeSanction: '₹10 lakh',
    technicalSanction: '₹10 lakh',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Completed',
    startDate: '3 Apr 2023',
    expectedCompletion: '31 Jul 2023',
    actualCompletion: '31 Jul 2023',
    physicalProgress: '100%',
    operationalStatus: 'Current functionality requires verification',
    outcome: 'NOT VERIFIED',
    beneficiaries: '~1,000',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-002',
    sourceNote: 'KWA project record',
    isFlagship: false,
    geographicVerification: 'LAC 82 confirmed',
    importantNote: null,
  },
  {
    id: 'EKM-003',
    name: 'AMRUT — 15 LL OHSR + 2 LL CWR at Vadathode',
    constituency: 'Ernakulam',
    lacNumber: 82,
    district: 'Ernakulam',
    location: 'Vadathode, Cheranalloor',
    department: 'KWA / AMRUT',
    fundingSource: 'AMRUT',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: '₹5 crore',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Ongoing',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: null,
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'Not yet applicable',
    outcome: 'Not yet applicable',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-002',
    sourceNote: 'AMRUT scheme record',
    isFlagship: true,
    geographicVerification: 'LAC 82 confirmed',
    importantNote: 'Technical sanction amount is ₹5 crore. This is NOT the expenditure figure — actual expenditure is not verified.',
  },
  {
    id: 'EKM-004',
    name: 'MLA-SDF Cheranalloor — Container Extension Pipeline',
    constituency: 'Ernakulam',
    lacNumber: 82,
    district: 'Ernakulam',
    location: 'Container Terminal Service Road → Pandit Karuppan Road',
    department: 'KWA',
    fundingSource: 'MLA-SDF',
    administrativeSanction: '₹3.72 lakh',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Delayed',
    startDate: '22 Feb 2024',
    expectedCompletion: '31 Oct 2024',
    actualCompletion: null,
    physicalProgress: '0% (as of Feb 2026)',
    operationalStatus: 'Not commenced',
    outcome: 'Not yet applicable',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'Funded under MLA-SDF scheme. Individual representative responsibility requires verification.',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-002',
    sourceNote: 'KWA project monitoring record, Feb 2026 status',
    isFlagship: false,
    geographicVerification: 'LAC 82 confirmed',
    importantNote: 'Classified as DELAYED — not abandoned. Reason: Site handover pending as of latest available record (February 2026). Progress: 0%.',
  },
  {
    id: 'EKM-005',
    name: 'Vaduthala Railway Overbridge',
    constituency: 'Ernakulam',
    lacNumber: 82,
    district: 'Ernakulam',
    location: 'Vaduthala, Ernakulam',
    department: 'NOT VERIFIED',
    fundingSource: 'NOT VERIFIED',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'NOT VERIFIED',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: null,
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'NOT VERIFIED',
    outcome: 'NOT VERIFIED',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Verification Pending',
    evidenceCode: 'ev-pending',
    source: 'SRC-KER-002',
    sourceNote: 'Project referenced in research dossier; detailed fields require primary source verification',
    isFlagship: false,
    geographicVerification: 'LAC 82 — general area; project-level geographic mapping pending',
    importantNote: 'Detailed financial and status information not yet verified from primary sources.',
  },

  /* ---- KOZHIKODE NORTH ---- */
  {
    id: 'KN-001',
    name: 'Karaparamb–Malaparamb Road Restoration',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    district: 'Kozhikode',
    location: 'Karaparamb to Malaparamb, Kozhikode',
    department: 'PWD',
    fundingSource: 'PWD',
    administrativeSanction: '₹62.653 lakh',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Sanctioned',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: null,
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'NOT VERIFIED',
    outcome: 'NOT VERIFIED',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-003',
    sourceNote: 'Administrative sanction order on record',
    isFlagship: false,
    geographicVerification: 'LAC 27 — implementation to be verified',
    importantNote: '₹62.653 lakh is the ADMINISTRATIVE SANCTION amount — not expenditure. Actual expenditure is not verified. Do not treat sanction as funds spent.',
  },
  {
    id: 'KN-002',
    name: 'Aanakkayamthodu Improvement',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    district: 'Kozhikode',
    location: 'Ward 16, Kozhikode Corporation',
    department: 'Local Authority / Corporation',
    fundingSource: 'LAC-ADS 2025–26',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Ongoing',
    startDate: 'NOT VERIFIED',
    expectedCompletion: '8 Jan 2027',
    actualCompletion: null,
    physicalProgress: '30%',
    operationalStatus: 'Ongoing',
    outcome: 'Not yet applicable',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'LAC-ADS project — associated with 2021–2026 term of Thottathil Ravindran. Does not automatically establish personal responsibility of any MLA.',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-003',
    sourceNote: 'LAC-ADS project record',
    isFlagship: false,
    geographicVerification: 'Ward 16, Kozhikode Corporation — LAC 27 confirmed',
    importantNote: 'LAC-ADS project associated with previous MLA Thottathil Ravindran (2021–2026 term). Current MLA: Adv. K. Jayanth (from May 2026).',
  },
  {
    id: 'KN-003',
    name: 'Francis Road–Vengali Gate Road Improvement',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    district: 'Kozhikode',
    location: 'Francis Road to Vengali Gate Road, Kozhikode',
    department: 'PWD',
    fundingSource: 'Road Improvement Programme 2024–25',
    administrativeSanction: '~₹426.1 lakh (estimate/context)',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Sanctioned',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: null,
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'NOT VERIFIED',
    outcome: 'NOT VERIFIED',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    source: 'SRC-KER-003',
    sourceNote: 'Research dossier; implementation/tender status requires primary source verification',
    isFlagship: false,
    geographicVerification: 'LAC 27 — to be verified from primary source',
    importantNote: '~₹426.1 lakh is an estimated sanction context figure — not verified expenditure.',
  },
  {
    id: 'KN-004',
    name: 'Stroke Centre Lift — Government Medical College Kozhikode',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    district: 'Kozhikode',
    location: 'Government Medical College, Kozhikode',
    department: 'PWD (Implementing Authority)',
    fundingSource: 'LAC-ADS 2025–26',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: '~₹2.49 lakh',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Tendered',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: null,
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'NOT VERIFIED',
    outcome: 'NOT VERIFIED',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'LAC-ADS funding. Representative named in tender record: Thottathil Ravindran (2021–2026 term). Implementing authority: PWD. The project should not be described as personally built or funded by the MLA.',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-003',
    sourceNote: 'PWD tender record; LAC-ADS funding',
    isFlagship: false,
    geographicVerification: 'Government Medical College, Kozhikode — geographic confirmation pending for LAC 27 boundary',
    importantNote: 'Funding: LAC-ADS. Representative named in project record: Thottathil Ravindran. Implementing authority: PWD. The project lift was not personally built by the MLA.',
  },
  {
    id: 'KN-PRISM-001',
    name: 'PRISM — Nadakkavu Government Girls School Transformation',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    district: 'Kozhikode',
    location: 'Nadakkavu, Kozhikode',
    department: 'PRISM Programme / Multi-stakeholder',
    fundingSource: 'Government + Faizal & Shabana Foundation + ISRO + Infosys + IIM Kozhikode + other partners',
    administrativeSanction: '~₹10 crore (Government Order, initial)',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Completed',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: 'NOT VERIFIED',
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'Implemented',
    outcome: 'School transformed — operational outcome requires field verification',
    beneficiaries: 'School students, Nadakkavu area',
    representativeRelationship: 'Historical — A. Pradeep Kumar (2011–2021 terms). PRISM is a multi-stakeholder programme; the project should not be attributed solely to any individual MLA.',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    source: 'SRC-KER-004',
    sourceNote: 'PRISM programme documentation; strong project evidence',
    isFlagship: true,
    geographicVerification: 'Nadakkavu, Kozhikode — within LAC 27 boundary (to be confirmed)',
    importantNote: 'Reported investment: ₹10–20 crore (various reports). Do not add these figures — they are alternative reported totals for the same broad transformation. Financial reconciliation required.',
    financialNote: 'Reported investment range: ₹10–20 crore across various sources. These are NOT cumulative — they represent different estimates for the same project. Financial reconciliation required.',
  },
  {
    id: 'KN-PRISM-002',
    name: 'PRISM — Karaparamba Government Higher Secondary School',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    district: 'Kozhikode',
    location: 'Karaparamba, Kozhikode',
    department: 'PRISM Programme',
    fundingSource: 'PRISM Programme',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Completed',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: 'NOT VERIFIED',
    physicalProgress: '100%',
    operationalStatus: 'Operational',
    outcome: 'School upgraded — smart classrooms, labs, dining hall, multipurpose hall, basketball court, amphitheatre, landscaping, rainwater harvesting, solar power',
    beneficiaries: 'School students, Karaparamba area',
    representativeRelationship: 'Historical — A. Pradeep Kumar (2011–2021 terms). The ₹12 crore is not "A. Pradeep Kumar\'s money" — it is a programme investment through PRISM.',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    source: 'SRC-KER-004',
    sourceNote: 'PRISM project record; reported cost ₹12 crore',
    isFlagship: true,
    geographicVerification: 'Karaparamba, Kozhikode — within LAC 27 boundary (to be confirmed)',
    importantNote: 'Reported project cost: ₹12 crore. This is not verified actual expenditure from primary audit sources.',
    financialNote: 'Reported cost: ₹12 crore. Not verified from primary financial sources.',
  },

  /* ---- THIRUVANANTHAPURAM ---- */
  {
    id: 'TVPM-001',
    name: 'Palayam Multi-Level Car Parking',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    district: 'Thiruvananthapuram',
    location: 'Palayam, Thiruvananthapuram',
    department: 'Smart City / TRIDA',
    fundingSource: 'Smart City Mission',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: '~₹30 crore (contract context)',
    status: 'Completed',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: 'NOT VERIFIED',
    physicalProgress: '100%',
    operationalStatus: 'Yes — operational',
    outcome: 'PARTIALLY ACHIEVED / UNDERUTILIZED — Capacity ~300 cars; reported as underutilized',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    source: 'SRC-KER-001',
    sourceNote: 'Research dossier; Smart City project reference',
    isFlagship: true,
    geographicVerification: 'Palayam, Thiruvananthapuram — within LAC 134 area',
    importantNote: 'Construction COMPLETED. Operational: YES. However, outcome is PARTIALLY ACHIEVED — the facility is reported as underutilized. Completion ≠ successful outcome.',
    outcomeDetail: 'underutilized',
  },
  {
    id: 'TVPM-002',
    name: 'Manaveeyam Veedhi Pedestrian Improvement',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    district: 'Thiruvananthapuram',
    location: 'Palayam / Althara, Thiruvananthapuram',
    department: 'Smart City / Corporation',
    fundingSource: 'Smart City Mission',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: '₹1.25 crore',
    status: 'Completed',
    startDate: 'May 2023',
    expectedCompletion: 'Aug 2023',
    actualCompletion: 'Aug 2023',
    physicalProgress: '100%',
    operationalStatus: 'Operational',
    outcome: 'Pedestrian improvements, food kiosks, street lighting, open libraries, sculptures, cultural lighting, accessibility improvements',
    beneficiaries: 'General public, pedestrians',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    source: 'SRC-KER-001',
    sourceNote: 'Smart City project record',
    isFlagship: false,
    geographicVerification: 'Palayam–Althara area — LAC 134 boundary confirmation pending',
    importantNote: null,
  },
  {
    id: 'TVPM-003',
    name: 'Althara–Chenthitta Smart Road',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    district: 'Thiruvananthapuram',
    location: 'Vellayambalam → Althara → Vazhuthacaud → Thycaud → Chenthitta',
    department: 'Smart City / PWD',
    fundingSource: 'Smart City Mission',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: 'NOT VERIFIED',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Completed',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: 'NOT VERIFIED',
    physicalProgress: 'NOT VERIFIED',
    operationalStatus: 'NOT VERIFIED',
    outcome: 'NOT VERIFIED',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    source: 'SRC-KER-001',
    sourceNote: 'Smart City project reference',
    isFlagship: false,
    geographicVerification: 'Multi-section project. Total cost ₹77.81 crore covers full route. LAC 134 component = Vazhuthacaud + Thycaud sections only. LAC-specific expenditure NOT ESTABLISHED.',
    importantNote: 'Total project cost ₹77.81 crore is for the ENTIRE route across multiple areas. Do not assign ₹77.81 crore to LAC 134. The Vazhuthacaud and Thycaud sections fall within LAC 134; the LAC-specific expenditure has not been established from available sources.',
    totalCostNote: '₹77.81 crore is total project cost for full route. LAC 134 portion is NOT the full amount.',
  },
  {
    id: 'TVPM-004',
    name: 'Vazhuthacaud Sewer-Line Project',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    district: 'Thiruvananthapuram',
    location: 'Vazhuthacaud Junction → MP Appan Road, Thiruvananthapuram',
    department: 'KWA',
    fundingSource: 'SMARTCITY',
    administrativeSanction: 'NOT VERIFIED',
    technicalSanction: '₹46.01 lakh',
    tenderAmount: 'NOT VERIFIED',
    releasedAmount: 'NOT VERIFIED',
    billsSubmitted: 'NOT VERIFIED',
    billsPaid: 'NOT VERIFIED',
    actualExpenditure: 'NOT VERIFIED',
    status: 'Completed',
    startDate: 'NOT VERIFIED',
    expectedCompletion: 'NOT VERIFIED',
    actualCompletion: 'NOT VERIFIED',
    physicalProgress: '100%',
    operationalStatus: 'Requires verification',
    outcome: 'Requires verification',
    beneficiaries: 'NOT VERIFIED',
    representativeRelationship: 'NOT ESTABLISHED',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
    source: 'SRC-KER-001',
    sourceNote: 'KWA project monitoring system — 100% completion recorded',
    isFlagship: false,
    geographicVerification: 'Vazhuthacaud Junction area — LAC 134 boundary to be confirmed',
    importantNote: 'Technical sanction ₹46.01 lakh is NOT the expenditure. Actual expenditure is not verified from available sources.',
  },
];

/* ============================================================
   PROBLEMS
   ============================================================ */

const PROBLEMS = [
  /* ---- THIRUVANANTHAPURAM ---- */
  {
    id: 'PROB-TVPM-001',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    category: 'Water',
    title: 'Smart City Drinking-Water Kiosks — Reported Non-Functional',
    location: 'Multiple locations, Thiruvananthapuram',
    evidence: '25 kiosks installed; 13 reported defunct as of 2026',
    responsibleAuthority: 'Smart City Mission / Thiruvananthapuram Corporation / KWA — coordination across agencies',
    currentStatus: 'NON-FUNCTIONAL / REVIVAL UNDERWAY',
    impact: 'Intended public drinking-water access not fully achieved',
    correctiveAction: 'Revival reported — current status requires field verification',
    firstReported: '2026',
    lastReported: '2026',
    verificationLevel: 'Credible secondary source',
    evidenceCode: 'ev-secondary',
    lacMapping: 'LAC 134 area — specific locations of defunct kiosks to be mapped',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-001',
    importantNote: 'This is an infrastructure failure — not evidence of corruption or waste. The platform does not allege misconduct. Reported causes include electricity bills, water supply, maintenance coordination issues.',
  },
  {
    id: 'PROB-TVPM-002',
    constituency: 'Thiruvananthapuram',
    lacNumber: 134,
    category: 'Infrastructure',
    title: 'Sewage-Related Infrastructure Concerns',
    location: 'Various locations, Thiruvananthapuram',
    evidence: 'Secondary reports; specific locations documented in research dossier',
    responsibleAuthority: 'KWA / Thiruvananthapuram Corporation',
    currentStatus: 'REPORTED — location-specific verification required',
    impact: 'Potential public health and sanitation impact',
    correctiveAction: 'NOT VERIFIED',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Reported concern',
    evidenceCode: 'ev-reported',
    lacMapping: 'Various locations within constituency — specific mapping pending',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-001',
    importantNote: null,
  },

  /* ---- ERNAKULAM ---- */
  {
    id: 'PROB-EKM-001',
    constituency: 'Ernakulam',
    lacNumber: 82,
    category: 'Water',
    title: 'Water Supply Concerns — Selected Areas',
    location: 'Reported locations, Ernakulam',
    evidence: 'Secondary reports; stronger evidence available for specific water project delays',
    responsibleAuthority: 'Kerala Water Authority / Ernakulam Corporation',
    currentStatus: 'REPORTED — location-specific verification required',
    impact: 'Household water supply interruptions',
    correctiveAction: 'Ongoing KWA projects documented',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Credible secondary source for specific locations',
    evidenceCode: 'ev-secondary',
    lacMapping: 'LAC 82 — specific locations to be verified',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-002',
    importantNote: null,
  },
  {
    id: 'PROB-EKM-002',
    constituency: 'Ernakulam',
    lacNumber: 82,
    category: 'Roads',
    title: 'Road and Drainage Issues — Reported Concerns',
    location: 'Multiple reported locations, Ernakulam',
    evidence: 'Credible secondary evidence for specific road segments',
    responsibleAuthority: 'PWD / Ernakulam Corporation / GCDA',
    currentStatus: 'REPORTED — ongoing concern',
    impact: 'Road connectivity and waterlogging during monsoon',
    correctiveAction: 'NOT VERIFIED',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Credible secondary source',
    evidenceCode: 'ev-secondary',
    lacMapping: 'LAC 82 — specific mapping pending',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-002',
    importantNote: null,
  },
  {
    id: 'PROB-EKM-003',
    constituency: 'Ernakulam',
    lacNumber: 82,
    category: 'Healthcare',
    title: 'Healthcare Infrastructure — Reported Gaps',
    location: 'Ernakulam constituency area',
    evidence: 'Reported in secondary sources; verification of specific facilities required',
    responsibleAuthority: 'Kerala Health Department / District Medical Office',
    currentStatus: 'REPORTED — specifics require verification',
    impact: 'Access to healthcare services',
    correctiveAction: 'CSR contribution documented (Cochin Shipyard dialysis centre)',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Reported concern — treat with caution',
    evidenceCode: 'ev-reported',
    lacMapping: 'LAC 82 — to be verified',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-002',
    importantNote: 'Evidence for healthcare/drainage issues should be treated more cautiously than water and road data per research dossier guidance.',
  },

  /* ---- KOZHIKODE NORTH ---- */
  {
    id: 'PROB-KN-001',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    category: 'Water',
    title: 'Drinking-Water Availability — Reported Constituency Concern',
    location: 'Location-specific verification required, Kozhikode North',
    evidence: 'Credible secondary evidence; affected locations require verification',
    responsibleAuthority: 'Kerala Water Authority / Kozhikode Municipal Corporation (depending on location)',
    currentStatus: 'REPORTED CONSTITUENCY-LEVEL CONCERN — location-specific verification required',
    impact: 'Household drinking-water access in affected areas',
    correctiveAction: 'NOT VERIFIED',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Credible secondary source',
    evidenceCode: 'ev-secondary',
    lacMapping: 'LAC 27 — specific locations not yet mapped',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-003',
    importantNote: 'This platform does not state "Kozhikode North has a water shortage." The accurate representation is: drinking-water availability has been reported as a constituency-level public concern; affected locations require verification.',
  },
  {
    id: 'PROB-KN-002',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    category: 'Waste',
    title: 'Solid Waste Management — Reported Concern',
    location: 'Kozhikode Corporation area, Kozhikode North',
    evidence: 'Credible secondary evidence',
    responsibleAuthority: 'Kozhikode Municipal Corporation / relevant waste management authorities',
    currentStatus: 'REPORTED CONSTITUENCY-LEVEL CONCERN',
    impact: 'Public cleanliness and environment',
    correctiveAction: 'NOT VERIFIED',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Credible secondary source',
    evidenceCode: 'ev-secondary',
    lacMapping: 'Kozhikode Corporation area — LAC 27 specific mapping pending',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-003',
    importantNote: null,
  },
  {
    id: 'PROB-KN-003',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    category: 'Roads',
    title: 'Mananchira–Vellimadukunnu Road — Reported Incomplete Components',
    location: 'Mananchira to Vellimadukunnu Road, Kozhikode',
    evidence: 'Reported deficiency — incomplete road development components',
    responsibleAuthority: 'PWD / Kozhikode Corporation',
    currentStatus: 'REPORTED INCOMPLETE',
    impact: 'Road usability; pedestrian and traffic safety',
    correctiveAction: 'NOT VERIFIED',
    firstReported: 'NOT VERIFIED',
    lastReported: 'NOT VERIFIED',
    verificationLevel: 'Reported concern',
    evidenceCode: 'ev-reported',
    lacMapping: 'LAC 27 — route confirmation pending',
    representativeConnection: 'NOT ESTABLISHED',
    source: 'SRC-KER-003',
    importantNote: 'Reported incomplete components may include: medians, covered drains, footpaths, streetlights, foot-overbridge, bus bays, U-turn lanes, pedestrian markings, final surfacing. This is a reported deficiency — not an established project failure from official audit.',
  },
];

/* ============================================================
   NGO / CSR PROJECTS
   ============================================================ */

const CSR_PROJECTS = [
  {
    id: 'CSR-EKM-001',
    org: 'Cochin Shipyard Limited',
    project: 'Dialysis Centre + Children\'s Play Area — General Hospital Ernakulam',
    constituency: 'Ernakulam',
    lacNumber: 82,
    location: 'General Hospital, Ernakulam',
    sector: 'Healthcare',
    investment: '₹1.23 crore',
    type: 'CSR',
    date: 'Implemented (date not specified)',
    status: 'Implemented',
    facilities: '18 dialysis machines and associated equipment',
    geographicNote: 'General Hospital, Ernakulam — within constituency area',
    source: 'SRC-KER-002',
    evidenceLevel: 'Government Record',
    evidenceCode: 'ev-gov',
  },
  {
    id: 'CSR-KN-001',
    org: 'Faizal & Shabana Foundation + partners (ISRO, Infosys, IIM Kozhikode)',
    project: 'PRISM — Nadakkavu Government Girls School Transformation',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Nadakkavu, Kozhikode',
    sector: 'Education',
    investment: '₹10–20 crore (reported range — financial reconciliation required)',
    type: 'NGO',
    date: 'NOT VERIFIED',
    status: 'Implemented',
    facilities: 'School transformation — infrastructure, labs, digital facilities',
    geographicNote: 'Nadakkavu, Kozhikode — geographic verification to LAC 27 pending',
    source: 'SRC-KER-004',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
    importantNote: 'Investment figures (₹10–20 crore) represent alternative reported totals for the same transformation — do not add them. Financial reconciliation required.',
  },
  {
    id: 'CSR-KN-002',
    org: 'ISRO',
    project: 'Science Laboratories — Nadakkavu School',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Nadakkavu, Kozhikode',
    sector: 'Education',
    investment: 'NOT VERIFIED',
    type: 'Government / CSR',
    date: 'NOT VERIFIED',
    status: 'Implemented',
    facilities: 'Science laboratories',
    geographicNote: 'Part of PRISM programme — geographic confirmation pending',
    source: 'SRC-KER-004',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
  },
  {
    id: 'CSR-KN-003',
    org: 'Infosys',
    project: 'Computer Facilities — Nadakkavu School',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Nadakkavu, Kozhikode',
    sector: 'Education',
    investment: 'NOT VERIFIED',
    type: 'CSR',
    date: 'NOT VERIFIED',
    status: 'Implemented',
    facilities: 'Computer facilities',
    geographicNote: 'Part of PRISM programme — geographic confirmation pending',
    source: 'SRC-KER-004',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
  },
  {
    id: 'CSR-KN-004',
    org: 'SurakshitMarg / Road Safety NGO',
    project: 'SurakshitMarg 2025 Road Safety Programme',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'Kozhikode area',
    sector: 'Road Safety',
    investment: 'NOT VERIFIED',
    type: 'NGO',
    date: '2025',
    status: 'Reported',
    facilities: 'Road safety awareness and infrastructure improvements',
    geographicNote: 'Kozhikode area — LAC 27 specific mapping pending',
    source: 'SRC-KER-003',
    evidenceLevel: 'Secondary Report',
    evidenceCode: 'ev-secondary',
  },
  {
    id: 'CSR-KN-005',
    org: 'Freebirds',
    project: 'Freebirds Open Shelter',
    constituency: 'Kozhikode North',
    lacNumber: 27,
    location: 'LOCATION VERIFICATION PENDING',
    sector: 'Social Welfare',
    investment: 'NOT VERIFIED',
    type: 'NGO',
    date: 'NOT VERIFIED',
    status: 'Reported',
    facilities: 'Open shelter facility',
    geographicNote: 'LOCATION VERIFICATION PENDING — not confirmed as LAC 27 project',
    source: 'SRC-KER-003',
    evidenceLevel: 'Verification Pending',
    evidenceCode: 'ev-pending',
    importantNote: 'Location verification pending — this project is NOT confirmed as a LAC 27 project.',
  },
];

/* ============================================================
   SOURCES
   ============================================================ */

const SOURCES = [
  {
    id: 'SRC-KER-001',
    type: 'Official',
    org: 'Kerala Election Commission / Research Dossier',
    title: 'Thiruvananthapuram LAC 134 — 2026 Election Data and Project Records',
    date: '2026',
    section: 'Election results, KWA records, Smart City project references',
    docId: 'CL-KER-TVPM-134-2026',
    verificationLevel: '🟢 Official election data; 🟡 Secondary for project details',
    geographicVerification: 'LAC 134 confirmed for election data; project-level mapping partial',
    financialVerification: 'Partial — sanction amounts available; actual expenditure limited',
    url: null,
  },
  {
    id: 'SRC-KER-002',
    type: 'Government Record',
    org: 'Kerala Water Authority (KWA) / Research Dossier',
    title: 'Ernakulam LAC 82 — 2026 Election Data and KWA Project Records',
    date: '2024–2026',
    section: 'KWA project monitoring records, AMRUT scheme records, 2026 election data',
    docId: 'CL-KER-EKM-082-2026',
    verificationLevel: '🟢 Official election data; 🔵 KWA project records; 🟡 Secondary for some details',
    geographicVerification: 'LAC 82 confirmed for election data and KWA projects',
    financialVerification: 'Administrative and technical sanction amounts available; actual expenditure limited',
    url: null,
  },
  {
    id: 'SRC-KER-003',
    type: 'Government Record',
    org: 'PWD Kerala / LAC-ADS Records / Research Dossier',
    title: 'Kozhikode North LAC 27 — 2026 Election Data and Project Records',
    date: '2024–2026',
    section: 'PWD sanction records, LAC-ADS project records, 2026 election data',
    docId: 'CL-KER-KNR-027-2026',
    verificationLevel: '🟢 Official election data; 🔵 PWD/LAC-ADS records; 🟡 Secondary for others',
    geographicVerification: 'LAC 27 confirmed for election data; project-level geographic mapping partial',
    financialVerification: 'Administrative sanction available for road project; most financial details not verified',
    url: null,
  },
  {
    id: 'SRC-KER-004',
    type: 'Secondary Report',
    org: 'PRISM Programme / Multi-stakeholder reports',
    title: 'PRISM School Transformation Programme — Kozhikode',
    date: '2015–2021',
    section: 'School project documentation, CSR partner reports',
    docId: 'CL-KER-PRISM-KZD',
    verificationLevel: '🟡 Strong project evidence; financial reconciliation required',
    geographicVerification: 'Nadakkavu and Karaparamba locations confirmed; LAC 27 boundary confirmation pending',
    financialVerification: 'Reported investment range ₹10–20 crore; financial reconciliation required — figures are alternative estimates, not cumulative',
    url: null,
  },
  {
    id: 'SRC-KER-005',
    type: 'Official',
    org: 'Kerala Legislative Assembly',
    title: 'Kerala Assembly Election 2026 — Official Results',
    date: '4 May 2026',
    section: 'Constituency-wise results, MLA declarations',
    docId: 'KLA-ELECTION-2026-RESULTS',
    verificationLevel: '🟢 Official',
    geographicVerification: 'All constituencies confirmed',
    financialVerification: 'N/A',
    url: null,
  },
];

/* ============================================================
   FOLLOW THE MONEY NODES
   ============================================================ */

const FTM_NODES = [
  { id: 'central', label: 'Government / Budget', amount: 'Allocated in State/Central Budget', dept: 'Finance Department / Union Budget', stage: 'Budget Allocation', note: 'Fund origin — annual budget allocation by government.' },
  { id: 'dept', label: 'Department / Agency', amount: 'Departmental allocation', dept: 'PWD / KWA / Smart City / etc.', stage: 'Department Allocation', note: 'Funds allocated to implementing department or agency.' },
  { id: 'scheme', label: 'Scheme / Programme', amount: 'Scheme funds', dept: 'AMRUT / MLA-SDF / LAC-ADS / SMARTCITY / PRISM', stage: 'Scheme', note: 'Specific scheme under which project is funded.' },
  { id: 'admin-sanction', label: 'Administrative Sanction', amount: 'See project records', dept: 'Competent Authority', stage: 'Administrative Sanction', note: 'Formal approval of project and estimated cost. Does NOT mean funds have been spent.' },
  { id: 'tech-sanction', label: 'Technical Sanction', amount: 'See project records', dept: 'Engineering Department', stage: 'Technical Sanction', note: 'Technical approval of design and specifications. Separate from financial release.' },
  { id: 'tender', label: 'Tender', amount: 'See project records', dept: 'Tendering Authority', stage: 'Tender', note: 'Competitive bidding process. Tender amount may differ from sanction amount.' },
  { id: 'release', label: 'Amount Released', amount: 'NOT VERIFIED for most projects', dept: 'Finance / Treasury', stage: 'Release', note: 'Funds actually released from treasury to implementing agency.' },
  { id: 'bills', label: 'Bills Submitted / Paid', amount: 'NOT VERIFIED for most projects', dept: 'Contractor / Agency', stage: 'Bills', note: 'Bills raised by contractor and paid by department.' },
  { id: 'expenditure', label: 'Actual Expenditure', amount: 'NOT VERIFIED for most projects', dept: 'Audit Records', stage: 'Expenditure', note: 'Actual funds spent, as recorded in audit. This is the most important figure — and for most Kerala projects, it is NOT YET VERIFIED.' },
  { id: 'project', label: 'Project / Asset', amount: 'Physical output', dept: 'Implementation Site', stage: 'Project', note: 'The physical infrastructure or service created.' },
  { id: 'outcome', label: 'Operational Outcome', amount: 'See individual projects', dept: 'Beneficiaries / Field', stage: 'Outcome', note: 'Whether the project is operational and delivering intended benefits. Completion ≠ successful outcome.' },
];

/* ============================================================
   GLOSSARY
   ============================================================ */

const GLOSSARY = [
  { term: 'Administrative Sanction (AS)', def: 'Formal approval by a competent government authority for a project and its estimated cost. Administrative sanction does NOT mean the money has been released or spent — it is the first step in the approval process.', tag: 'Finance' },
  { term: 'Technical Sanction (TS)', def: 'Technical approval of the design, specifications and cost estimates by an engineering authority. Issued after administrative sanction, before tender.', tag: 'Finance' },
  { term: 'Tender Amount', def: 'The amount bid by the selected contractor and accepted through the tender process. May differ from the sanctioned amount.', tag: 'Procurement' },
  { term: 'Amount Released', def: 'Funds actually released from the treasury or department to the implementing agency. Release does not mean the money has been spent on the project.', tag: 'Finance' },
  { term: 'Bills Submitted / Paid', def: 'Bills raised by the contractor for completed work portions and paid by the department. Cumulative bills paid is closer to actual expenditure.', tag: 'Finance' },
  { term: 'Actual Expenditure', def: 'The total amount actually spent on a project, as recorded in accounts and audit. This is the most important financial metric — and is often not publicly available for ongoing projects.', tag: 'Finance' },
  { term: 'MLA-SDF', def: 'MLA Special Development Fund — a scheme allowing MLAs to recommend local development works. The MLA recommends; implementation is done by PWD, KWA or another department. MLA-SDF spending is not personal money of the MLA.', tag: 'Kerala Scheme' },
  { term: 'LAC-ADS', def: 'Legislative Assembly Constituency Area Development Scheme — another Kerala MLA fund scheme for constituency-level development. Funds are released to the Local Self-Government Institution or implementing agency.', tag: 'Kerala Scheme' },
  { term: 'AMRUT', def: 'Atal Mission for Rejuvenation and Urban Transformation — a central government scheme for urban infrastructure (water supply, sewerage, urban mobility, parks).', tag: 'Central Scheme' },
  { term: 'PRISM', def: 'A school transformation programme in Kerala involving multiple government, NGO and corporate stakeholders. PRISM projects are multi-partner efforts — the investment should not be attributed to any single MLA.', tag: 'Kerala Programme' },
  { term: 'LAC', def: 'Legislative Assembly Constituency — the electoral unit for which an MLA is elected. Kerala has 140 LACs.', tag: 'Electoral' },
  { term: 'RTI', def: 'Right to Information Act, 2005 — allows citizens to request documents and records from government bodies. RTI responses are a primary source of civic accountability information.', tag: 'Legal' },
  { term: 'KWA', def: 'Kerala Water Authority — the state agency responsible for drinking water supply and sewerage infrastructure in Kerala.', tag: 'Agency' },
  { term: 'PWD', def: 'Public Works Department — responsible for construction and maintenance of roads, bridges, government buildings and related infrastructure in Kerala.', tag: 'Agency' },
  { term: 'Polling Percentage', def: 'The percentage of registered electors who actually voted in an election. A higher polling percentage generally indicates greater voter participation.', tag: 'Electoral' },
  { term: 'Representative Connection', def: 'On CivicLens, this field shows whether a documented relationship exists between a project and a specific representative. NOT ESTABLISHED means no such relationship is documented — it does not mean one does not exist.', tag: 'Platform' },
  { term: 'Geographic Verification', def: 'Confirmation that a project or problem physically falls within the boundaries of a specific constituency. City-wide projects may span multiple LACs — CivicLens does not assign them to a single constituency without geographic verification.', tag: 'Platform' },
  { term: 'Smart City Mission', def: 'A central government initiative to develop 100 Indian cities with improved urban infrastructure and services. Thiruvananthapuram is a Smart City Mission city.', tag: 'Central Scheme' },
];

/* ============================================================
   STATE
   ============================================================ */

let currentConstituencyId = null;
let currentSection = 'home';
let currentNGOFilter = 'all';
let currentSourceFilter = 'all';
let currentProblemFilter = 'all';
let currentStatusTab = '';
let currentCompareTab = 'constituencies';
let currentLang = 'en';

/* ============================================================
   NAVIGATION
   ============================================================ */

function showSection(section) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('section-' + section);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === section));
  currentSection = section;
  closeNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initSection(section);
}

function initSection(section) {
  if (section === 'constituencies') { renderConstDirectory(); }
  if (section === 'representatives') renderRepresentatives();
  if (section === 'money') { renderMoneyKPIs(); renderFTM(); renderNGO(); }
  if (section === 'projects') renderProjects();
  if (section === 'problems') renderProblems();
  if (section === 'compare') { renderComparison(); renderRepComparison(); }
  if (section === 'sources') renderSources();
}

document.getElementById('hamburger').addEventListener('click', function () {
  const nav = document.getElementById('navLinks');
  const open = nav.classList.toggle('open');
  this.classList.toggle('open', open);
  this.setAttribute('aria-expanded', open);
});
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
}

/* ============================================================
   DARK MODE
   ============================================================ */

function initTheme() {
  const saved = localStorage.getItem('civiclens-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('civiclens-theme', next);
});

/* ============================================================
   LANGUAGE
   ============================================================ */

const I18N = {
  en: { nav_home: 'Home', nav_const: 'Constituencies' },
  ml: { nav_home: 'ഹോം', nav_const: 'മണ്ഡലങ്ങൾ' },
};
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  showToast('info', '🌐', lang === 'ml' ? 'Malayalam UI (partial) — Official documents shown in original language' : 'English selected');
}

/* ============================================================
   TICKER
   ============================================================ */

const TICKER_ITEMS = [
  { text: 'Kozhikode North: Aanakkayamthodu — 30% progress documented', color: '#3B82F6', section: 'projects' },
  { text: 'Ernakulam: Container pipeline delayed — site handover pending as of Feb 2026', color: '#F59E0B', section: 'projects' },
  { text: 'Thiruvananthapuram: 13 of 25 smart water kiosks reported non-functional in 2026', color: '#EF4444', section: 'problems' },
  { text: 'Kozhikode North: PRISM — Karaparamba school transformation completed', color: '#10B981', section: 'projects' },
  { text: 'Ernakulam: Cochin Shipyard CSR — dialysis centre implemented at General Hospital', color: '#10B981', section: 'money' },
  { text: '2026 Kerala Assembly election data now available for LAC 27, 82, 134', color: '#1B6FEB', section: 'constituencies' },
  { text: 'Thiruvananthapuram LAC 134: Vazhuthacaud sewer-line 100% completion recorded (KWA)', color: '#10B981', section: 'projects' },
  { text: 'Kozhikode North: Karaparamb–Malaparamb Road — ₹62.653 lakh admin sanction (NOT expenditure)', color: '#7C3AED', section: 'projects' },
];

function renderTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  track.innerHTML = items.map(t => `
    <span class="ticker-item" onclick="showSection('${t.section}')">
      <span class="ticker-dot" style="background:${t.color}"></span>
      ${escapeHTML(t.text)}
    </span>
  `).join('');
}

/* ============================================================
   HOME PAGE
   ============================================================ */

function renderFeaturedConst() {
  const grid = document.getElementById('featuredConstGrid');
  if (!grid) return;
  const keys = ['thiruvananthapuram', 'ernakulam', 'kozhikode-north'];
  grid.innerHTML = keys.map(k => {
    const c = CONSTITUENCIES[k];
    return `
      <div class="fc-card" onclick="openConstituency('${k}')" role="button" tabindex="0" aria-label="Explore ${c.name}">
        <div class="fc-lac">LAC ${c.lacNo} · ${c.district} District</div>
        <div class="fc-name">${c.name}</div>
        <div class="fc-district">${c.state} · ${c.type}</div>
        <div class="fc-stats">
          <div><div class="fc-stat-val">${c.electors2026.toLocaleString()}</div><div class="fc-stat-key">2026 Electors</div></div>
          <div><div class="fc-stat-val">${c.pollingPct2026}</div><div class="fc-stat-key">Polling %</div></div>
          <div><div class="fc-stat-val">${PROJECTS.filter(p => p.constituency === c.name).length}</div><div class="fc-stat-key">Projects</div></div>
          <div><div class="fc-stat-val">${PROBLEMS.filter(p => p.constituency === c.name).length}</div><div class="fc-stat-key">Problems</div></div>
        </div>
        <div class="fc-mla">Current MLA: <strong>${c.currentMLA}</strong> <span style="font-size:11px;color:var(--text-muted);">(${c.currentPartyShort})</span></div>
        <button class="btn-kerala">Explore Constituency →</button>
      </div>
    `;
  }).join('');
}

function renderKeralaDistricts() {
  const grid = document.getElementById('keralaDistrictsGrid');
  if (!grid) return;
  grid.innerHTML = KERALA_DISTRICTS.map(d => `
    <div class="district-card${d.hasData ? ' has-data' : ''}" onclick="clickDistrict('${d.id}')" role="button" tabindex="0" aria-label="${d.name} district">
      <div class="dc-name"><span class="dc-dot"></span>${d.name}</div>
      <div class="dc-count">${d.constituencies} constituencies${d.hasData ? ' · Data available' : ''}</div>
    </div>
  `).join('');
}

function clickDistrict(districtId) {
  const district = KERALA_DISTRICTS.find(d => d.id === districtId);
  if (!district) return;
  const sidebar = document.getElementById('keralaPreviewCard');
  const constKeys = district.dataConst;

  let constHtml = '';
  if (constKeys.length > 0) {
    constHtml = `<div class="const-chips">${constKeys.map(k => {
      const c = CONSTITUENCIES[k];
      return `<button class="const-chip" onclick="openConstituency('${k}')">${c.name} (LAC ${c.lacNo}) →</button>`;
    }).join('')}</div>`;
  } else {
    constHtml = `<div class="const-chips"><button class="const-chip no-data" disabled>Constituency data collection in progress</button></div>`;
  }

  sidebar.innerHTML = `
    <div class="mpc-header">
      <span class="mpc-badge">${district.name}</span>
      <span class="mpc-type">Kerala District</span>
    </div>
    <h3 class="mpc-name">${district.name}</h3>
    <p class="mpc-rep">${district.constituencies} Assembly Constituencies</p>
    <div class="mpc-stats">
      <div class="mpc-stat"><span class="mpc-val">${district.dataConst.length}</span><span class="mpc-key">With Data</span></div>
      <div class="mpc-stat"><span class="mpc-val">${district.constituencies - district.dataConst.length}</span><span class="mpc-key">Coming Soon</span></div>
    </div>
    ${constHtml}
  `;
}

function openConstituency(key) {
  showSection('constituencies');
  setTimeout(() => loadConstituency(key), 100);
}

function renderCoverageGrid() {
  const el = document.getElementById('coverageGrid');
  if (!el) return;
  const totalProjects = PROJECTS.length;
  const totalProblems = PROBLEMS.length;
  const totalSources = SOURCES.length;
  const totalCSR = CSR_PROJECTS.length;
  const items = [
    { num: 14, label: 'Kerala Districts', note: 'All districts in directory' },
    { num: 3, label: 'Detailed Constituencies', note: 'Research-backed data' },
    { num: totalProjects, label: 'Project Records', note: 'With source references' },
    { num: totalProblems, label: 'Problem Records', note: 'Civic issues documented' },
    { num: totalCSR, label: 'NGO / CSR Records', note: 'Non-government investments' },
    { num: totalSources, label: 'Source Documents', note: 'Evidence index' },
  ];
  el.innerHTML = items.map(i => `
    <div class="coverage-card">
      <div class="cov-num">${i.num}</div>
      <div class="cov-label">${i.label}</div>
      <div class="cov-note">${i.note}</div>
    </div>
  `).join('');

  // Update hero stats
  const sp = document.getElementById('stat-projects');
  const spr = document.getElementById('stat-problems');
  if (sp) animateNum(sp, 0, totalProjects, 800);
  if (spr) animateNum(spr, 0, totalProblems, 800);
}

function renderLatestRecords() {
  const el = document.getElementById('latestRecords');
  if (!el) return;
  const records = [
    { cat: 'Project Update', title: 'Kozhikode North: Aanakkayamthodu — 30% progress as of LAC-ADS 2025–26', loc: 'Ward 16, Kozhikode', icon: '🏗', src: 'SRC-KER-003' },
    { cat: 'Fund Record', title: 'Ernakulam: Varma Road water supply — ₹10 lakh admin & technical sanction', loc: 'Chittoor, Cheranalloor', icon: '💧', src: 'SRC-KER-002' },
    { cat: 'Problem Record', title: 'Thiruvananthapuram: 13 of 25 smart water kiosks reported non-functional', loc: 'Multiple locations', icon: '⚠', src: 'SRC-KER-001' },
    { cat: 'CSR Record', title: 'Ernakulam: Cochin Shipyard — ₹1.23 crore dialysis centre at General Hospital', loc: 'General Hospital, Ernakulam', icon: '🏥', src: 'SRC-KER-002' },
    { cat: 'Election Data', title: '2026 Kerala election results: LAC 27, 82, 134 data now available', loc: 'Kerala', icon: '🗳', src: 'SRC-KER-005' },
    { cat: 'Project Record', title: 'PRISM — Karaparamba school: smart classrooms, labs, solar power completed', loc: 'Karaparamba, Kozhikode', icon: '🏫', src: 'SRC-KER-004' },
  ];
  el.innerHTML = records.map(r => `
    <div class="record-card">
      <div class="rc-category">${r.icon} ${r.cat}</div>
      <div class="rc-title">${r.title}</div>
      <div class="rc-meta"><span>📍 ${r.loc}</span></div>
      <div style="margin-top:10px;"><button class="view-source-btn" onclick="openSourceModal('${r.src}')">View Source</button></div>
    </div>
  `).join('');
}

/* ============================================================
   SEARCH
   ============================================================ */

const ALL_SEARCH_INDEX = [
  ...Object.values(CONSTITUENCIES).map(c => ({ name: c.name, meta: `LAC ${c.lacNo} · ${c.district} · ${c.currentMLA}`, type: 'Constituency', section: 'constituencies', action: () => openConstituency(c.id), icon: '🗺' })),
  ...REPRESENTATIVES.map(r => ({ name: r.name, meta: `${r.position} · ${r.constituency} · ${r.partyShort}`, type: 'MLA', section: 'representatives', action: () => { showSection('representatives'); setTimeout(() => openRepProfile(r.id), 150); }, icon: '👤' })),
  ...PROJECTS.map(p => ({ name: p.name, meta: `${p.constituency} · ${p.status} · ${p.department}`, type: 'Project', section: 'projects', action: () => { showSection('projects'); setTimeout(() => openProjectModal(p.id), 150); }, icon: '🏗' })),
  ...PROBLEMS.map(p => ({ name: p.title, meta: `${p.constituency} · ${p.category} · ${p.currentStatus}`, type: 'Problem', section: 'problems', action: () => showSection('problems'), icon: '⚠' })),
  ...SOURCES.map(s => ({ name: s.title, meta: `${s.type} · ${s.org}`, type: 'Source', section: 'sources', action: () => showSection('sources'), icon: '📄' })),
  ...KERALA_DISTRICTS.map(d => ({ name: d.name + ' District', meta: `Kerala · ${d.constituencies} constituencies`, type: 'District', section: 'home', action: () => { showSection('home'); setTimeout(() => clickDistrict(d.id), 200); }, icon: '📍' })),
];

document.getElementById('searchTrigger').addEventListener('click', openSearch);
document.getElementById('globalSearch').addEventListener('input', function () { runSearch(this.value); });
document.getElementById('heroSearch').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  const dd = document.getElementById('heroDropdown');
  if (!q) { dd.classList.remove('open'); return; }
  const results = ALL_SEARCH_INDEX.filter(r => r.name.toLowerCase().includes(q) || r.meta.toLowerCase().includes(q)).slice(0, 5);
  if (!results.length) { dd.classList.remove('open'); return; }
  dd.innerHTML = results.map(r => `<div class="hd-item" onclick="searchNavigate(${ALL_SEARCH_INDEX.indexOf(r)})">${r.icon} ${escapeHTML(r.name)} <span style="font-size:11px;color:var(--text-muted);margin-left:6px;">${r.type}</span></div>`).join('');
  dd.classList.add('open');
});
document.addEventListener('click', e => { if (!e.target.closest('.hero-search-box')) document.getElementById('heroDropdown').classList.remove('open'); });

function openSearch() { document.getElementById('searchOverlay').classList.add('open'); setTimeout(() => document.getElementById('globalSearch').focus(), 80); }
function closeSearch() { document.getElementById('searchOverlay').classList.remove('open'); document.getElementById('globalSearch').value = ''; document.getElementById('searchResults').innerHTML = ''; }
document.getElementById('searchOverlay').addEventListener('click', function (e) { if (e.target === this) closeSearch(); });

function runSearch(query) {
  const q = (query || '').trim().toLowerCase();
  const el = document.getElementById('searchResults');
  if (!q) { el.innerHTML = ''; return; }
  const results = ALL_SEARCH_INDEX.filter(r => r.name.toLowerCase().includes(q) || r.meta.toLowerCase().includes(q)).slice(0, 8);
  if (!results.length) { el.innerHTML = '<div class="no-results" style="padding:16px 20px;font-size:14px;">No results for "' + escapeHTML(query) + '"</div>'; return; }
  el.innerHTML = results.map((r, i) => `
    <div class="search-result-item" onclick="searchNavigate(${ALL_SEARCH_INDEX.indexOf(r)})">
      <div class="sri-icon">${r.icon}</div>
      <div class="sri-info"><div class="sri-name">${highlight(r.name, q)}</div><div class="sri-meta">${r.meta}</div></div>
      <span class="sri-type">${r.type}</span>
    </div>
  `).join('');
}

function searchNavigate(index) {
  closeSearch();
  if (ALL_SEARCH_INDEX[index] && ALL_SEARCH_INDEX[index].action) ALL_SEARCH_INDEX[index].action();
}
function heroSearchSubmit() { const q = document.getElementById('heroSearch').value.trim(); if (q) { openSearch(); document.getElementById('globalSearch').value = q; runSearch(q); } }
function highlight(text, q) { const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'); return text.replace(re, '<mark style="background:var(--kerala-green-light);color:var(--kerala-green);border-radius:2px;padding:0 2px;">$1</mark>'); }

/* ============================================================
   CONSTITUENCY DIRECTORY
   ============================================================ */

function renderConstDirectory() {
  const dir = document.getElementById('constDirectory');
  const block = document.getElementById('constDirectoryBlock');
  const dashBlock = document.getElementById('constDashboardBlock');
  if (!dir) return;
  block.style.display = 'block';
  dashBlock.style.display = 'none';

  const byDistrict = {};
  KERALA_DISTRICTS.forEach(d => { byDistrict[d.name] = { district: d, consts: [] }; });

  // Populate known constituencies
  Object.values(CONSTITUENCIES).forEach(c => {
    if (byDistrict[c.district]) byDistrict[c.district].consts.push({ key: c.id, name: c.name, lacNo: c.lacNo, mla: c.currentMLA, hasData: true });
  });

  let html = '';
  KERALA_DISTRICTS.forEach(d => {
    const distData = byDistrict[d.name];
    const constList = distData ? distData.consts : [];
    html += `<div class="const-dir-district">
      <div class="cdd-header">${d.name} District <span style="font-weight:400;font-size:11px;">(${d.constituencies} constituencies)</span></div>
      <div class="cdd-cards">
        ${constList.map(c => `
          <div class="cdd-card" onclick="loadConstituency('${c.key}')" role="button" tabindex="0">
            <div class="cdd-lac">LAC ${c.lacNo}</div>
            <div class="cdd-name">${c.name}</div>
            <div class="cdd-mla">MLA: ${c.mla}</div>
            <div style="margin-top:10px;"><button class="btn-kerala btn-sm">View Dashboard →</button></div>
          </div>
        `).join('')}
        ${d.constituencies > constList.length ? `<div class="cdd-card no-data"><div class="cdd-coming">+${d.constituencies - constList.length} more constituencies</div><div class="cdd-coming" style="margin-top:4px;">Data collection in progress</div></div>` : ''}
      </div>
    </div>`;
  });
  dir.innerHTML = html;
}

function filterConstByDistrict(district) {
  if (!district) { renderConstDirectory(); return; }
  // Filter to show only matching district
  renderConstDirectory(); // simplified — full filtering for brevity
}

function showConstDirectory() {
  document.getElementById('constDirectoryBlock').style.display = 'block';
  document.getElementById('constDashboardBlock').style.display = 'none';
  currentConstituencyId = null;
}

/* ============================================================
   CONSTITUENCY DASHBOARD
   ============================================================ */

function loadConstituency(key) {
  const c = CONSTITUENCIES[key];
  if (!c) return;
  currentConstituencyId = key;
  document.getElementById('constDirectoryBlock').style.display = 'none';
  document.getElementById('constDashboardBlock').style.display = 'block';

  // Update selector
  const sel = document.getElementById('constSelector');
  if (sel) sel.value = key;

  renderConstDashboard(c);
  renderWhatWeKnow(c);
  renderDataQuality(c);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderConstDashboard(c) {
  const el = document.getElementById('constDashboard');
  if (!el) return;

  const constProjects = PROJECTS.filter(p => p.constituency === c.name);
  const completed = constProjects.filter(p => p.status === 'Completed').length;
  const ongoing = constProjects.filter(p => p.status === 'Ongoing').length;
  const delayed = constProjects.filter(p => p.status === 'Delayed').length;

  el.innerHTML = `
    <div class="cd-header">
      <div>
        <div class="cd-lac">LAC ${c.lacNo} · ${c.lokSabha} Lok Sabha · ${c.type}</div>
        <div class="cd-name">${c.name}</div>
        <div class="cd-meta">${c.district} District · ${c.state}</div>
      </div>
      <div class="cd-updated">
        <span class="badge badge-ongoing">2026 Election Data</span>
        &nbsp;<span style="font-size:12px;color:var(--text-muted);">Research-backed prototype</span>
      </div>
    </div>

    <div class="cd-kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">2026 Polling Stations</div>
        <div class="kpi-value">${c.pollingStations2026.toLocaleString()}</div>
        <div class="kpi-sub"><span class="ev-badge ev-official">🟢 Official</span></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">2026 Registered Electors</div>
        <div class="kpi-value">${c.electors2026.toLocaleString()}</div>
        <div class="kpi-sub"><span class="ev-badge ev-official">🟢 Official</span></div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">2026 Votes Cast</div>
        <div class="kpi-value">${c.voters2026.toLocaleString()}</div>
        <div class="kpi-sub">Polling: ${c.pollingPct2026}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">2011 Population</div>
        <div class="kpi-value" style="font-size:${c.population2011 ? '22px' : '14px'};${!c.population2011 ? 'font-style:italic;color:var(--text-muted);font-weight:400;' : ''}">${c.population2011 ? c.population2011.toLocaleString() : 'Not Verified'}</div>
        <div class="kpi-sub" style="font-size:11px;color:${c.population2011 ? 'var(--amber)' : 'var(--red)'};">${c.populationNote}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Documented Projects</div>
        <div class="kpi-value text-blue">${constProjects.length}</div>
        <div class="kpi-sub">${completed} completed · ${ongoing} ongoing · ${delayed} delayed</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Civic Problems</div>
        <div class="kpi-value text-amber">${PROBLEMS.filter(p => p.constituency === c.name).length}</div>
        <div class="kpi-sub">Documented issues on record</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px;">
      <div>
        <h3 style="font-size:16px;font-weight:700;margin-bottom:14px;">Current MLA</h3>
        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-md);padding:18px;display:flex;gap:16px;align-items:center;box-shadow:var(--card-shadow);">
          <div class="rep-avatar">${c.currentMLA[0]}</div>
          <div>
            <div style="font-size:17px;font-weight:700;">${c.currentMLA}</div>
            <div style="font-size:13px;color:var(--text-muted);">MLA · ${c.name}</div>
            <div style="font-size:12px;color:var(--text-muted);">${c.currentTerm}</div>
            <span class="rep-party">${c.currentPartyShort}</span>
          </div>
        </div>
        <div style="margin-top:12px;padding:10px 14px;background:var(--amber-light);border-radius:var(--radius-sm);font-size:12px;color:#92400E;">
          ⚠ CivicLens does not provide political performance scores or rankings. Documented factual metrics are shown separately.
        </div>
      </div>
      <div>
        <h3 style="font-size:16px;font-weight:700;margin-bottom:14px;">Representative History</h3>
        <div class="rep-history">
          ${c.repHistory.map(r => `
            <div class="rh-item">
              <div class="rh-year">${r.year}</div>
              <div><div class="rh-name">${r.name}</div><div class="rh-party">${r.partyShort}</div></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div style="margin-bottom:20px;">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:14px;">Documented Projects in ${c.name}</h3>
      <div class="projects-grid">
        ${constProjects.slice(0, 4).map(p => projectCardHTML(p)).join('')}
      </div>
      ${constProjects.length > 4 ? `<div style="margin-top:14px;"><button class="btn-outline" onclick="showSection('projects');document.getElementById('constFilter').value='${c.name}';filterProjects();">View all ${constProjects.length} projects →</button></div>` : ''}
    </div>

    <div style="margin-top:8px;display:flex;gap:10px;flex-wrap:wrap;">
      <button class="view-source-btn" onclick="openSourceModal('${c.sourceKey}')">View Source</button>
      <button class="explain-btn" onclick="openExplainModal('MLA-SDF')">What is MLA-SDF? ✦</button>
      <button class="explain-btn" onclick="openExplainModal('LAC-ADS')">What is LAC-ADS? ✦</button>
    </div>
  `;
}

function renderWhatWeKnow(c) {
  const el = document.getElementById('whatWeKnow');
  if (!el) return;
  el.innerHTML = `
    <div style="margin-bottom:24px;"><h2 style="font-size:22px;font-weight:700;">What We Know / What Is Not Yet Verified</h2><p class="section-sub">Transparency about data completeness for ${c.name}.</p></div>
    <div class="wwk-grid">
      <div class="wwk-card wwk-known">
        <div class="wwk-head">✅ What We Know</div>
        <div class="wwk-list">
          ${c.whatWeKnow.map(item => `<div class="wwk-item"><div class="wwk-dot"></div><span>${item}</span></div>`).join('')}
        </div>
      </div>
      <div class="wwk-card wwk-unknown">
        <div class="wwk-head">⚠ What Is Not Yet Verified</div>
        <div class="wwk-list">
          ${c.whatNotVerified.map(item => `<div class="wwk-item"><div class="wwk-dot"></div><span>${item}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderDataQuality(c) {
  const el = document.getElementById('dataQuality');
  if (!el) return;
  const q = c.dataQuality;
  const map = {
    green: { icon: '🟢', label: 'Available', cls: 'dq-green' },
    amber: { icon: '🟡', label: 'Partial', cls: 'dq-amber' },
    orange: { icon: '🟠', label: 'Limited', cls: 'dq-orange' },
    gray: { icon: '⚪', label: 'Not available', cls: 'dq-gray' },
  };
  const items = [
    { label: 'Official election data', key: q.electionData },
    { label: 'Project financial data', key: q.projectFinancial },
    { label: 'Actual expenditure', key: q.actualExpenditure },
    { label: 'Geographic mapping', key: q.geographicMapping },
    { label: 'Problem records', key: q.problemRecords },
  ];
  el.innerHTML = `
    <h3 style="font-size:17px;font-weight:700;margin-bottom:16px;">Data Quality — ${c.name}</h3>
    <div class="dq-grid">
      ${items.map(i => {
        const m = map[i.key] || map.gray;
        return `<div class="dq-item"><span class="dq-icon">${m.icon}</span><span class="dq-label">${i.label}</span><span class="dq-status ${m.cls}">${m.label}</span></div>`;
      }).join('')}
    </div>
  `;
}

/* ============================================================
   ASK CONSTITUENCY
   ============================================================ */

function askPreset(q) {
  document.getElementById('askInput').value = q;
  askConstituency();
}

function askConstituency() {
  const input = document.getElementById('askInput').value.trim().toLowerCase();
  const el = document.getElementById('askAnswer');
  if (!input) { el.innerHTML = '<em style="color:var(--text-muted);">Please enter a question above.</em>'; return; }
  const c = currentConstituencyId ? CONSTITUENCIES[currentConstituencyId] : null;
  if (!c) { el.innerHTML = '<em style="color:var(--text-muted);">Please select a constituency first.</em>'; return; }

  const constProjects = PROJECTS.filter(p => p.constituency === c.name);
  let answer = '';

  if (input.includes('mla') || input.includes('representative') || input.includes('who')) {
    answer = `<strong>Current MLA:</strong> ${c.currentMLA} (${c.currentPartyShort}), elected ${c.currentTerm}.<br><br><strong>Previous:</strong> ${c.repHistory.slice(0, -1).map(r => `${r.year}: ${r.name} (${r.partyShort})`).join(', ')}.`;
  } else if (input.includes('voter') || input.includes('election') || input.includes('turnout') || input.includes('polling')) {
    answer = `<strong>2026 Election Data for ${c.name} (LAC ${c.lacNo}):</strong><br>Registered Electors: ${c.electors2026.toLocaleString()}<br>Votes Cast: ${c.voters2026.toLocaleString()}<br>Polling Percentage: ${c.pollingPct2026}<br>Polling Stations: ${c.pollingStations2026}<br><br><span class="ev-badge ev-official">🟢 Official Kerala Election Commission data</span>`;
  } else if (input.includes('project')) {
    const done = constProjects.filter(p => p.status === 'Completed');
    const ongoing = constProjects.filter(p => p.status === 'Ongoing');
    const delayed = constProjects.filter(p => p.status === 'Delayed');
    answer = `<strong>${constProjects.length} projects documented for ${c.name}:</strong><br>Completed: ${done.length} · Ongoing: ${ongoing.length} · Delayed: ${delayed.length}<br><br>${constProjects.slice(0, 4).map(p => `• <strong>${p.name}</strong> — ${p.status} (${p.fundingSource})`).join('<br>')}`;
  } else if (input.includes('problem') || input.includes('issue')) {
    const probs = PROBLEMS.filter(p => p.constituency === c.name);
    answer = `<strong>${probs.length} civic problems documented for ${c.name}:</strong><br>${probs.map(p => `• ${p.title} — <em>${p.currentStatus}</em>`).join('<br>')}`;
  } else if (input.includes('population')) {
    answer = c.population2011
      ? `<strong>2011 Census population:</strong> ${c.population2011.toLocaleString()}<br><em style="color:var(--text-muted);">${c.populationNote}</em>`
      : `<strong>Population:</strong> NOT VERIFIED<br><em>${c.populationNote}</em>`;
  } else if (input.includes('money') || input.includes('fund') || input.includes('spent')) {
    answer = `<strong>Funding information for ${c.name}:</strong><br>Actual expenditure figures are NOT VERIFIED for most documented projects.<br>Available sanction amounts: <br>${constProjects.filter(p => p.administrativeSanction !== 'NOT VERIFIED').slice(0,3).map(p => `• ${p.name}: AS ${p.administrativeSanction}`).join('<br>') || 'Limited financial data available'}<br><br><em>Remember: Administrative Sanction ≠ Actual Expenditure</em>`;
  } else {
    answer = `This prototype searches across election data, project records and civic problems for <strong>${c.name}</strong>. Try asking about: the current MLA, voter turnout, projects, problems, population, or funding.`;
  }

  el.innerHTML = `<div style="border-left:3px solid var(--kerala-green);padding-left:14px;">${answer}</div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-muted);">⚠ Responses are drawn from the research dataset. All information is subject to the verification levels noted in each record.</div>`;
}

/* ============================================================
   REPRESENTATIVES
   ============================================================ */

function renderRepresentatives() {
  document.getElementById('repProfilePanel').style.display = 'none';
  document.getElementById('repGrid').parentElement.style.display = 'block';
  filterRepresentatives();
}

function filterRepresentatives() {
  const grid = document.getElementById('repGrid');
  const search = (document.getElementById('repSearch')?.value || '').toLowerCase();
  const constF = document.getElementById('repConstFilter')?.value || '';
  const filtered = REPRESENTATIVES.filter(r =>
    (!search || r.name.toLowerCase().includes(search) || r.constituency.toLowerCase().includes(search) || r.party.toLowerCase().includes(search)) &&
    (!constF || r.constituency === constF)
  );
  grid.innerHTML = filtered.length ? filtered.map(r => `
    <div class="rep-card" onclick="openRepProfile(${r.id})" tabindex="0" role="button" aria-label="View ${r.name}">
      <div class="rep-card-header">
        <div class="rep-avatar">${r.avatar}</div>
        <div>
          <div class="rep-name">${r.name}</div>
          <div class="rep-role">${r.position} · ${r.constituency} · LAC ${r.lacNo}</div>
          <span class="rep-party">${r.partyShort}</span>
        </div>
      </div>
      <div class="rep-card-stats">
        <div><div class="rcs-val">${r.projectsInConst}</div><div class="rcs-key">Projects</div></div>
        <div><div class="rcs-val">${r.termsServed}</div><div class="rcs-key">Terms</div></div>
        <div><div class="rcs-val">${r.documentsOnRecord}</div><div class="rcs-key">Documents</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:12px;margin-top:4px;">
        <span class="badge badge-ongoing">${r.position} · From May 2026</span>
        <button class="btn-outline" onclick="event.stopPropagation();openRepProfile(${r.id})">View Profile</button>
      </div>
    </div>
  `).join('') : '<div class="no-results">No representatives found.</div>';
}

function openRepProfile(id) {
  const r = REPRESENTATIVES[id];
  const panel = document.getElementById('repProfilePanel');
  const content = document.getElementById('repProfileContent');
  const c = CONSTITUENCIES[r.constId];
  const constProjects = PROJECTS.filter(p => p.constituency === r.constituency).slice(0, 3);

  content.innerHTML = `
    <div class="rp-header">
      <div class="rp-avatar-lg">${r.avatar}</div>
      <div class="rp-info">
        <h1>${r.name}</h1>
        <div class="rp-meta">${r.position} · ${r.constituency} (LAC ${r.lacNo}) · ${r.state}</div>
        <div class="rp-meta">${r.term}</div>
        <span class="rep-party">${r.party}</span>
      </div>
    </div>

    <div class="rp-no-score-note">⚠ CivicLens does not provide performance scores, rankings or political assessments. The factual metrics below are documented records only.</div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px;margin-bottom:28px;">
      <div style="background:var(--gray-100);border-radius:var(--radius-sm);padding:14px 16px;"><div style="font-size:18px;font-weight:700;">${r.projectsInConst}</div><div style="font-size:12px;color:var(--text-muted);">Projects in Constituency</div></div>
      <div style="background:var(--gray-100);border-radius:var(--radius-sm);padding:14px 16px;"><div style="font-size:18px;font-weight:700;">${r.termsServed}</div><div style="font-size:12px;color:var(--text-muted);">Terms Served</div></div>
      <div style="background:var(--gray-100);border-radius:var(--radius-sm);padding:14px 16px;"><div style="font-size:18px;font-weight:700;">${r.documentsOnRecord}</div><div style="font-size:12px;color:var(--text-muted);">Documents on Record</div></div>
    </div>

    <div class="rp-sections">
      <div class="rp-section">
        <h3>Important Note</h3>
        <div style="background:var(--blue-light);border-radius:var(--radius-sm);padding:12px 16px;font-size:13px;color:#1E40AF;line-height:1.65;">${r.importantNote}</div>
      </div>

      <div class="rp-section">
        <h3>Term History</h3>
        <div class="rep-history">
          ${r.repHistory.map(h => `<div class="rh-item"><div class="rh-year">${h.year}</div><div><div class="rh-name">${h.name}</div><div class="rh-party">${h.partyShort}</div></div></div>`).join('')}
        </div>
      </div>

      <div class="rp-section">
        <h3>Legislative Record</h3>
        <div style="background:var(--gray-100);border-radius:var(--radius-sm);padding:12px 16px;font-size:13px;color:var(--text-secondary);">${r.legislativeNote}</div>
      </div>

      <div class="rp-section">
        <h3>Funding Records Note</h3>
        <div style="font-size:13px;color:var(--text-secondary);">${r.fundsNote}</div>
      </div>

      <div class="rp-section">
        <h3>Associated Constituency Projects</h3>
        <div class="projects-grid" style="margin-top:0;">
          ${constProjects.map(p => projectCardHTML(p)).join('')}
        </div>
        <button class="btn-outline" style="margin-top:14px;" onclick="showSection('projects');document.getElementById('constFilter').value='${r.constituency}';filterProjects();">View all projects →</button>
      </div>
    </div>
  `;

  document.getElementById('repGrid').parentElement.style.display = 'none';
  panel.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeRepProfile() {
  document.getElementById('repProfilePanel').style.display = 'none';
  document.getElementById('repGrid').parentElement.style.display = 'block';
}

/* ============================================================
   MONEY
   ============================================================ */

function renderMoneyKPIs() {
  const el = document.getElementById('moneyKpiRow');
  if (!el) return;
  const items = [
    { label: 'Administrative Sanction', val: 'See project records', note: 'Formal project approval — NOT expenditure', color: '' },
    { label: 'Technical Sanction', val: 'Partial — see records', note: 'Engineering approval', color: '' },
    { label: 'Tender Amount', val: 'Largely not verified', note: 'Competitive bid amount', color: '' },
    { label: 'Amount Released', val: 'NOT VERIFIED', note: 'Funds released to agency', isNV: true },
    { label: 'Bills Submitted/Paid', val: 'NOT VERIFIED', note: 'Contractor bills', isNV: true },
    { label: 'Actual Expenditure', val: 'NOT VERIFIED (most projects)', note: 'Actual spend — primary metric', isNV: true },
  ];
  el.innerHTML = `
    <div style="grid-column:1/-1;background:var(--kerala-green-light);border:1px solid var(--kerala-green);border-radius:var(--radius-sm);padding:12px 16px;font-size:13px;color:var(--kerala-green);font-weight:500;margin-bottom:4px;">
      📌 Sanction ≠ Release ≠ Expenditure — These are different stages in the fund flow. Where values are not verified from primary sources, they are shown as "NOT VERIFIED" rather than ₹0.
    </div>
    ${items.map(i => `
      <div class="money-kpi">
        <div class="mk-label">${i.label}</div>
        <div class="mk-value${i.isNV ? ' nv' : ''}">${i.val}</div>
        <div class="mk-note">${i.note}</div>
      </div>
    `).join('')}
  `;
}

function renderFTM() {
  const el = document.getElementById('ftmContainer');
  if (!el) return;
  el.innerHTML = FTM_NODES.map((node, i) => `
    ${i > 0 ? `<div class="ftm-arrow"><svg width="16" height="20" viewBox="0 0 16 24" fill="none"><path d="M8 0v18M2 12l6 8 6-8" stroke="var(--kerala-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>` : ''}
    <div class="ftm-node${i === 0 ? ' central' : ''}" onclick="openFTMModal(${i})" role="button" tabindex="0">
      <div class="ftm-node-title">${node.label}</div>
      <div class="ftm-node-amount">${node.amount}</div>
      ${node.amount.includes('NOT VERIFIED') ? `<div class="ftm-node-nv">Verification required</div>` : ''}
    </div>
  `).join('');
}

function openFTMModal(index) {
  const node = FTM_NODES[index];
  document.getElementById('ftmModalTitle').textContent = node.stage;
  document.getElementById('ftmModalBody').innerHTML = `
    <div class="ftm-detail-row"><span class="ftm-detail-key">Stage:</span><span class="ftm-detail-val">${node.label}</span></div>
    <div class="ftm-detail-row"><span class="ftm-detail-key">Responsible:</span><span class="ftm-detail-val">${node.dept}</span></div>
    <div class="ftm-detail-row"><span class="ftm-detail-key">In Kerala dataset:</span><span class="ftm-detail-val">${node.amount}</span></div>
    <div style="margin-top:14px;background:var(--gray-100);border-radius:var(--radius-sm);padding:12px 14px;font-size:13px;color:var(--text-secondary);line-height:1.65;">${node.note}</div>
    <div style="margin-top:12px;font-size:12px;color:var(--text-muted);">⚠ All Kerala project data is from the research dossier. Actual fund-flow figures for individual projects require primary source verification.</div>
  `;
  openModal('ftmModal');
}
function closeFTMModal(e) { if (!e || e.target === e.currentTarget) closeModal('ftmModal'); }

function renderNGO() {
  filterNGO(currentNGOFilter, null);
}

function filterNGO(type, btn) {
  currentNGOFilter = type;
  if (btn) { document.querySelectorAll('.ngo-filters .filter-chip').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
  const grid = document.getElementById('ngoGrid');
  if (!grid) return;
  const filtered = type === 'all' ? CSR_PROJECTS : CSR_PROJECTS.filter(n => n.type === type || (type === 'NGO' && n.type.includes('NGO')));
  grid.innerHTML = filtered.map(n => `
    <div class="ngo-card">
      <div class="ngo-org">${n.org}</div>
      <div class="ngo-project">${n.project}</div>
      <div class="ngo-meta">
        <span>📍 ${n.location}</span>
        <span>📂 ${n.sector}</span>
        <span>🏷 ${n.type}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
        <div class="ngo-amount">${n.investment}</div>
        <span class="badge badge-${n.status === 'Implemented' || n.status === 'Completed' ? 'completed' : 'reported'}">${n.status}</span>
      </div>
      ${n.importantNote ? `<div class="ngo-note">⚠ ${n.importantNote}</div>` : ''}
      <div class="ngo-geo-note">Geographic note: ${n.geographicNote}</div>
      <div style="margin-top:10px;"><button class="view-source-btn" onclick="openSourceModal('${n.source}')">View Source</button> <span class="ev-badge ${n.evidenceCode}">${n.evidenceLevel}</span></div>
    </div>
  `).join('');
}

/* ============================================================
   PROJECTS
   ============================================================ */

function renderProjects() { filterProjects(); }

function setStatusTab(status, btn) {
  currentStatusTab = status;
  document.querySelectorAll('.status-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const sf = document.getElementById('statusFilter');
  if (sf) sf.value = status;
  filterProjects();
}

function filterProjects() {
  const search = (document.getElementById('projectSearch')?.value || '').toLowerCase();
  const status = document.getElementById('statusFilter')?.value || currentStatusTab || '';
  const constF = document.getElementById('constFilter')?.value || '';
  const dept = document.getElementById('deptFilter')?.value || '';
  const sort = document.getElementById('sortProjects')?.value || 'name';

  let filtered = PROJECTS.filter(p => {
    const ms = !search || p.name.toLowerCase().includes(search) || p.location.toLowerCase().includes(search) || p.department.toLowerCase().includes(search);
    const mst = !status || p.status === status;
    const mc = !constF || p.constituency === constF;
    const md = !dept || p.department.includes(dept) || p.fundingSource.includes(dept);
    return ms && mst && mc && md;
  });

  if (sort === 'const') filtered.sort((a, b) => a.constituency.localeCompare(b.constituency));
  else filtered.sort((a, b) => a.name.localeCompare(b.name));

  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = filtered.length ? filtered.map(p => projectCardHTML(p)).join('') : '<div class="no-results">No projects match the current filters.</div>';
}

function projectCardHTML(p) {
  const statusCls = { Completed: 'completed', Ongoing: 'ongoing', Delayed: 'delayed', Sanctioned: 'sanctioned', Tendered: 'tendered' }[p.status] || 'proposed';
  const hasNote = p.importantNote || p.totalCostNote || p.financialNote;
  return `
    <div class="project-card" onclick="openProjectModal('${p.id}')" role="button" tabindex="0">
      <div class="pc-top">
        <div class="pc-title">${p.name}</div>
        <span class="badge badge-${statusCls}">${p.status}</span>
      </div>
      <div class="pc-const">LAC ${p.lacNumber} · ${p.constituency}</div>
      <div class="pc-dept">${p.department} · ${p.fundingSource}</div>
      <div class="pc-location">📍 ${p.location}</div>
      <div class="pc-money-grid">
        <div class="pc-money-item">
          <div class="pc-money-label">Admin Sanction</div>
          <div class="pc-money-val${p.administrativeSanction === 'NOT VERIFIED' ? ' nv' : ''}">${p.administrativeSanction}</div>
        </div>
        <div class="pc-money-item">
          <div class="pc-money-label">Actual Expenditure</div>
          <div class="pc-money-val${p.actualExpenditure === 'NOT VERIFIED' ? ' nv' : ''}">${p.actualExpenditure}</div>
        </div>
      </div>
      ${hasNote ? `<div style="background:var(--amber-light);border-radius:4px;padding:6px 8px;font-size:11px;color:#92400E;margin-top:6px;line-height:1.5;">⚠ ${(p.importantNote || p.totalCostNote || p.financialNote || '').substring(0,120)}${(p.importantNote || '').length > 120 ? '…' : ''}</div>` : ''}
      <div class="pc-footer">
        <div class="pc-dates">Start: ${p.startDate || 'NV'} · End: ${p.expectedCompletion || p.actualCompletion || 'NV'}</div>
        <div class="pc-actions">
          <button class="view-source-btn" onclick="event.stopPropagation();openSourceModal('${p.source}')">Source</button>
          <button class="btn-outline" onclick="event.stopPropagation();openProjectModal('${p.id}')">Details</button>
        </div>
      </div>
    </div>
  `;
}

function openProjectModal(id) {
  const p = PROJECTS.find(pr => pr.id === id);
  if (!p) return;
  const statusCls = { Completed: 'completed', Ongoing: 'ongoing', Delayed: 'delayed', Sanctioned: 'sanctioned' }[p.status] || 'proposed';

  document.getElementById('projectModalTitle').textContent = p.name;
  document.getElementById('projectModalBody').innerHTML = `
    <div class="pm-section">
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:14px;">
        <span class="badge badge-${statusCls}">${p.status}</span>
        <span class="ev-badge ${p.evidenceCode}">${p.evidenceLevel}</span>
        ${p.isFlagship ? '<span class="badge badge-sanctioned">Flagship</span>' : ''}
      </div>
      <div class="pm-info-grid">
        <div><div class="pm-info-key">Constituency</div><div class="pm-info-val">${p.constituency} (LAC ${p.lacNumber})</div></div>
        <div><div class="pm-info-key">Location</div><div class="pm-info-val">${p.location}</div></div>
        <div><div class="pm-info-key">Department</div><div class="pm-info-val">${p.department}</div></div>
        <div><div class="pm-info-key">Funding Source</div><div class="pm-info-val">${p.fundingSource}</div></div>
        <div><div class="pm-info-key">Start Date</div><div class="pm-info-val ${p.startDate === 'NOT VERIFIED' ? 'nv' : ''}">${p.startDate}</div></div>
        <div><div class="pm-info-key">Expected Completion</div><div class="pm-info-val ${p.expectedCompletion === 'NOT VERIFIED' ? 'nv' : ''}">${p.expectedCompletion}</div></div>
        <div><div class="pm-info-key">Actual Completion</div><div class="pm-info-val ${!p.actualCompletion ? 'nv' : ''}">${p.actualCompletion || 'NOT VERIFIED'}</div></div>
        <div><div class="pm-info-key">Physical Progress</div><div class="pm-info-val ${p.physicalProgress === 'NOT VERIFIED' ? 'nv' : ''}">${p.physicalProgress}</div></div>
      </div>
    </div>

    <div class="pm-section">
      <h3>Fund Flow Record <span style="font-size:11px;font-weight:400;color:var(--text-muted);">(Sanction ≠ Expenditure)</span></h3>
      <div class="pm-info-grid">
        ${[
          ['Administrative Sanction', p.administrativeSanction],
          ['Technical Sanction', p.technicalSanction],
          ['Tender Amount', p.tenderAmount],
          ['Amount Released', p.releasedAmount],
          ['Bills Submitted', p.billsSubmitted],
          ['Bills Paid', p.billsPaid],
          ['Actual Expenditure', p.actualExpenditure],
        ].map(([k,v]) => `<div><div class="pm-info-key">${k}</div><div class="pm-info-val ${v === 'NOT VERIFIED' ? 'nv' : ''}">${v}</div></div>`).join('')}
        <div><div class="pm-info-key">Beneficiaries</div><div class="pm-info-val ${p.beneficiaries === 'NOT VERIFIED' ? 'nv' : ''}">${p.beneficiaries}</div></div>
      </div>
    </div>

    ${p.importantNote || p.totalCostNote || p.financialNote ? `
    <div class="pm-section">
      <h3>⚠ Important Note</h3>
      <div class="pm-outcome-box warning">${p.importantNote || p.totalCostNote || p.financialNote}</div>
    </div>` : ''}

    <div class="pm-section">
      <h3>Operational Outcome</h3>
      <div class="pm-outcome-box${p.outcomeDetail === 'underutilized' ? ' warning' : ' info'}">${p.operationalStatus}<br>${p.outcome !== 'NOT VERIFIED' && p.outcome !== 'Not yet applicable' ? p.outcome : ''}</div>
    </div>

    <div class="pm-section">
      <h3>Representative Relationship</h3>
      <div class="pm-rep-rel-box">${p.representativeRelationship}</div>
    </div>

    <div class="pm-section">
      <h3>Geographic Verification</h3>
      <div style="font-size:13px;color:var(--text-secondary);">${p.geographicVerification}</div>
    </div>

    <div class="pm-section">
      <h3>Evidence</h3>
      <div style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">${p.sourceNote}</div>
      <button class="view-source-btn" onclick="openSourceModal('${p.source}')">View Source Document</button>
      &nbsp;<button class="explain-btn" onclick="openExplainModal('Administrative Sanction (AS)')">Explain Admin Sanction ✦</button>
    </div>
    <div style="font-size:11px;color:var(--text-muted);border-top:1px solid var(--border);padding-top:10px;margin-top:10px;">⚠ All project data is from the research dossier. Primary source verification is recommended before citing figures.</div>
  `;
  openModal('projectModal');
}
function closeProjectModal(e) { if (!e || e.target === e.currentTarget) closeModal('projectModal'); }

/* ============================================================
   PROBLEMS
   ============================================================ */

function renderProblems() { filterProblems(currentProblemFilter, null); }

function filterProblems(cat, btn) {
  currentProblemFilter = cat;
  if (btn) { document.querySelectorAll('.pcat-tab').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
  const grid = document.getElementById('problemsGrid');
  if (!grid) return;
  const filtered = cat === 'all' ? PROBLEMS : PROBLEMS.filter(p => p.category === cat);
  grid.innerHTML = filtered.map(p => `
    <div class="problem-card">
      <div class="prob-category">${p.category}</div>
      <div class="prob-const">LAC ${p.lacNumber} · ${p.constituency}</div>
      <div class="prob-title">${p.title}</div>
      <div class="prob-location">📍 ${p.location}</div>
      <div class="prob-desc">${p.evidence}</div>
      <div class="prob-authority">Authority: <strong>${p.responsibleAuthority}</strong></div>
      ${p.importantNote ? `<div class="prob-important-note">ℹ ${p.importantNote}</div>` : ''}
      <div class="prob-footer">
        <span class="prob-ev"><span class="ev-badge ${p.evidenceCode}">${p.verificationLevel}</span></span>
        <span class="badge badge-${p.currentStatus.includes('RESOLVED') ? 'completed' : p.currentStatus.includes('VERIFIED') || p.currentStatus.includes('REPORTED') ? 'reported' : 'ongoing'}" style="font-size:10px;">${p.currentStatus.split(' ')[0]}</span>
      </div>
      <div style="margin-top:8px;"><button class="view-source-btn" onclick="openSourceModal('${p.source}')">View Source</button></div>
    </div>
  `).join('');
}

/* ============================================================
   COMPARE
   ============================================================ */

function setCompareTab(tab, btn) {
  currentCompareTab = tab;
  document.querySelectorAll('.compare-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('compareConstPanel').style.display = tab === 'constituencies' ? 'block' : 'none';
  document.getElementById('compareRepPanel').style.display = tab === 'representatives' ? 'block' : 'none';
}

const COMPARE_METRICS = [
  { key: 'lacNo', label: 'LAC Number' },
  { key: 'district', label: 'District' },
  { key: 'type', label: 'Constituency Type' },
  { key: 'electors2026', label: '2026 Registered Electors', numeric: true, format: v => v ? v.toLocaleString() : 'NV' },
  { key: 'voters2026', label: '2026 Votes Cast', numeric: true, format: v => v ? v.toLocaleString() : 'NV' },
  { key: 'pollingPct2026', label: '2026 Polling %' },
  { key: 'pollingStations2026', label: '2026 Polling Stations', numeric: true, format: v => v ? v.toLocaleString() : 'NV' },
  { key: 'population2011', label: '2011 Population', format: (v, c) => v ? v.toLocaleString() + (c.populationNote.includes('estimate') ? ' ⚠est.' : '') : 'Not verified' },
  { key: 'currentMLA', label: 'Current MLA (2026)' },
  { key: 'currentPartyShort', label: 'Party (2026)' },
];

function renderComparison() {
  const keys = [
    document.getElementById('cmp1')?.value,
    document.getElementById('cmp2')?.value,
    document.getElementById('cmp3')?.value,
  ].filter(Boolean);
  const data = keys.map(k => CONSTITUENCIES[k]).filter(Boolean);
  if (!data.length) return;
  const wrap = document.getElementById('comparisonTableWrap');
  if (!wrap) return;

  const headers = `<tr><th class="metric-col">Metric</th>${data.map(d => `<th class="ct-header-cell">${d.name}<br><span style="font-size:11px;font-weight:400;color:var(--text-muted);">LAC ${d.lacNo}</span></th>`).join('')}</tr>`;
  const rows = COMPARE_METRICS.map(m => {
    const vals = data.map(d => {
      const raw = d[m.key];
      const formatted = m.format ? m.format(raw, d) : (raw || 'N/A');
      return { raw, formatted };
    });
    return `<tr><td class="metric-col">${m.label}</td>${vals.map(v => `<td class="value-col${v.raw === null || v.raw === undefined ? ' value-nv' : ''}">${v.formatted}</td>`).join('')}</tr>`;
  }).join('');

  // Also add project counts
  const projRow = `<tr><td class="metric-col">Documented Projects</td>${data.map(d => `<td class="value-col">${PROJECTS.filter(p => p.constituency === d.name).length}</td>`).join('')}</tr>`;
  const probRow = `<tr><td class="metric-col">Documented Problems</td>${data.map(d => `<td class="value-col">${PROBLEMS.filter(p => p.constituency === d.name).length}</td>`).join('')}</tr>`;

  wrap.innerHTML = `
    <div class="no-score-note">⚠ This comparison shows raw documented metrics only. CivicLens does not provide performance scores or political rankings.</div>
    <table class="comparison-table"><thead>${headers}</thead><tbody>${rows}${projRow}${probRow}</tbody></table>
  `;
}

function renderRepComparison() {
  const i1 = parseInt(document.getElementById('repCmp1')?.value) || 0;
  const i2 = parseInt(document.getElementById('repCmp2')?.value) || 1;
  const r1 = REPRESENTATIVES[i1], r2 = REPRESENTATIVES[i2];
  const el = document.getElementById('repComparisonContent');
  if (!el || !r1 || !r2) return;

  const metrics = [
    { label: 'Position', v1: r1.position, v2: r2.position },
    { label: 'Constituency', v1: r1.constituency, v2: r2.constituency },
    { label: 'LAC Number', v1: 'LAC ' + r1.lacNo, v2: 'LAC ' + r2.lacNo },
    { label: 'Party (2026)', v1: r1.partyShort, v2: r2.partyShort },
    { label: 'Current Term', v1: r1.term, v2: r2.term },
    { label: 'Terms Served', v1: r1.termsServed, v2: r2.termsServed },
    { label: 'Projects in Constituency', v1: r1.projectsInConst, v2: r2.projectsInConst },
    { label: 'Documents on Record', v1: r1.documentsOnRecord, v2: r2.documentsOnRecord },
  ];

  el.innerHTML = `
    <div class="no-score-note">⚠ Factual metrics only. CivicLens does not create performance scores, "best MLA" or "worst MLA" rankings, or political assessments of any kind.</div>
    <table class="comparison-table">
      <thead><tr><th>Metric</th><th class="ct-header-cell">${r1.name}</th><th class="ct-header-cell">${r2.name}</th></tr></thead>
      <tbody>${metrics.map(m => `<tr><td class="metric-col">${m.label}</td><td class="value-col">${m.v1}</td><td class="value-col">${m.v2}</td></tr>`).join('')}</tbody>
    </table>
  `;
}

/* ============================================================
   SOURCES
   ============================================================ */

function renderSources() { filterSources('all', null); }

function filterSources(type, btn) {
  currentSourceFilter = type;
  if (btn) { document.querySelectorAll('.source-filters .filter-chip').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
  const grid = document.getElementById('sourcesGrid');
  if (!grid) return;
  const filtered = type === 'all' ? SOURCES : SOURCES.filter(s => s.type === type);
  grid.innerHTML = filtered.map(s => `
    <div class="source-card">
      <div class="sc-type">${s.type}</div>
      <div class="sc-title">${s.title}</div>
      <div class="sc-org">${s.org}</div>
      <div class="sc-meta">Date: ${s.date} · ${s.section}</div>
      <div class="sc-doc-id">${s.docId}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">${s.verificationLevel}</div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">Geographic: ${s.geographicVerification}</div>
      <button class="view-source-btn" onclick="openSourceModal('${s.id}')">View Details</button>
      ${s.url ? `<button class="btn-ghost" style="font-size:12px;margin-left:6px;" onclick="window.open('${s.url}','_blank')">Official Link ↗</button>` : `<span style="font-size:11px;color:var(--text-muted);margin-left:8px;">Source reference available in research dossier</span>`}
    </div>
  `).join('');
}

/* ============================================================
   MODALS — SOURCE & EXPLAIN
   ============================================================ */

function openSourceModal(srcId) {
  const s = SOURCES.find(x => x.id === srcId);
  if (!s) { showToast('warning', '📋', 'Source reference available in research dossier'); return; }
  document.getElementById('sourceModalTitle').textContent = s.title.substring(0, 50) + (s.title.length > 50 ? '…' : '');
  document.getElementById('sourceModalBody').innerHTML = `
    <div style="margin-bottom:12px;"><span class="ev-badge ev-${s.type === 'Official' ? 'official' : s.type === 'Government Record' ? 'gov' : s.type === 'Audit' ? 'audit' : s.type === 'RTI' ? 'rti' : 'secondary'}">${s.type}</span></div>
    <div class="source-row"><span class="source-key">Organisation</span><span class="source-val">${s.org}</span></div>
    <div class="source-row"><span class="source-key">Document</span><span class="source-val">${s.title}</span></div>
    <div class="source-row"><span class="source-key">Date</span><span class="source-val">${s.date}</span></div>
    <div class="source-row"><span class="source-key">Section</span><span class="source-val">${s.section}</span></div>
    <div class="source-row"><span class="source-key">Reference ID</span><span class="source-val"><code style="font-size:12px;background:var(--gray-100);padding:2px 6px;border-radius:3px;">${s.docId}</code></span></div>
    <div class="source-row"><span class="source-key">Evidence Level</span><span class="source-val">${s.verificationLevel}</span></div>
    <div class="source-row"><span class="source-key">Geographic</span><span class="source-val">${s.geographicVerification}</span></div>
    <div class="source-row"><span class="source-key">Financial</span><span class="source-val">${s.financialVerification}</span></div>
    <div style="border-top:1px solid var(--border);padding-top:12px;margin-top:4px;">
      ${s.url ? `<button class="source-link-btn">↗ View Official Source</button>` : `<div class="modal-nv-note">Official URL not available in research dossier. This source reference is for research provenance tracking only.</div>`}
      <div class="modal-nv-note">⚠ This is a prototype. Source records are from the research dossier and have not been independently verified by CivicLens.</div>
    </div>
  `;
  openModal('sourceModal');
}
function closeSourceModal(e) { if (!e || e.target === e.currentTarget) closeModal('sourceModal'); }

const EXPLAIN_DICT = {};
GLOSSARY.forEach(g => { EXPLAIN_DICT[g.term] = g.def; });

function openExplainModal(term) {
  const def = EXPLAIN_DICT[term] || EXPLAIN_DICT[Object.keys(EXPLAIN_DICT).find(k => k.toLowerCase().includes(term.toLowerCase()))] || 'This term refers to a government process or document. For precise definitions, consult the relevant Act, Rule or Ministry circular.';
  document.getElementById('explainModalTitle').textContent = term;
  document.getElementById('explainModalBody').innerHTML = `
    <div class="explain-term">${term}</div>
    <div class="explain-text">${def}</div>
    <div class="explain-note">✦ Plain-language explanation for general understanding. For legal or official definitions, refer to the relevant Act, Rule or government circular.</div>
  `;
  openModal('explainModal');
}
function closeExplainModal(e) { if (!e || e.target === e.currentTarget) closeModal('explainModal'); }

/* ============================================================
   RTI HELPER
   ============================================================ */

function openRTI() {
  document.getElementById('rtiModalBody').innerHTML = `
    <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;">Select a project and authority to generate a draft RTI request. This is a template — review and edit before submitting.</p>
    <div class="rti-select-row">
      <select id="rtiProject" onchange="generateRTIDraft()">
        <option value="">Select a project…</option>
        ${PROJECTS.map(p => `<option value="${p.id}">${p.name.substring(0,50)}</option>`).join('')}
      </select>
    </div>
    <div class="rti-draft" id="rtiDraft">Select a project above to generate a draft RTI request.</div>
    <div class="rti-actions">
      <button class="btn-primary" onclick="copyRTI()">Copy Draft</button>
      <button class="btn-ghost" onclick="closeRTI()">Close</button>
    </div>
    <div style="font-size:11px;color:var(--text-muted);margin-top:10px;">⚠ This is an AI-generated template. Verify the correct Public Information Officer and authority before submitting.</div>
  `;
  openModal('rtiModal');
}

function generateRTIDraft() {
  const sel = document.getElementById('rtiProject');
  const p = PROJECTS.find(pr => pr.id === sel.value);
  const el = document.getElementById('rtiDraft');
  if (!p || !el) return;
  el.textContent = `To,
The Public Information Officer,
${p.department}
[Address of Department]

Subject: RTI Application under the Right to Information Act, 2005

Sir/Madam,

I, [Your Name], [Address], wish to seek the following information under the RTI Act, 2005:

Project: ${p.name}
Location: ${p.location}
Constituency: ${p.constituency} (LAC ${p.lacNumber})
Funding Source: ${p.fundingSource}

1. Administrative sanction order number and date for this project.
2. Technical sanction amount and date.
3. Tender notice number, tender opening date and awarded contractor name.
4. Amount released to the implementing agency and date(s) of release.
5. Actual expenditure incurred as of date of this application.
6. Physical progress as of date of this application.
7. Expected completion date and reason for any delay.
8. Operational status and beneficiary count.

I am enclosing the application fee of ₹10/- [by [mode]].

Yours faithfully,
[Your Name]
[Address]
[Date]`;
}

function copyRTI() {
  const el = document.getElementById('rtiDraft');
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => showToast('success', '📋', 'RTI draft copied to clipboard'));
}
function closeRTI(e) { if (!e || e.target === e.currentTarget) closeModal('rtiModal'); }

/* ============================================================
   GLOSSARY
   ============================================================ */

function openGlossary() {
  document.getElementById('glossaryOverlay').classList.add('open');
  renderGlossaryItems(GLOSSARY);
}
function closeGlossary(e) { if (!e || e.target === e.currentTarget) document.getElementById('glossaryOverlay').classList.remove('open'); }
function filterGlossary() {
  const q = document.getElementById('glossarySearch').value.toLowerCase();
  renderGlossaryItems(q ? GLOSSARY.filter(g => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)) : GLOSSARY);
}
function renderGlossaryItems(items) {
  const el = document.getElementById('glossaryBody');
  if (!el) return;
  el.innerHTML = items.map((g, i) => `
    <div class="glossary-item" onclick="toggleGlossary(${i})" id="gi-${i}">
      <div class="gi-term">${g.term} <span class="gi-arrow">▶</span></div>
      <div class="gi-def">${g.def}<br><span class="gi-tag">${g.tag}</span></div>
    </div>
  `).join('');
}
function toggleGlossary(i) {
  const el = document.getElementById('gi-' + i);
  if (el) el.classList.toggle('open');
}

/* ============================================================
   MODAL HELPERS
   ============================================================ */

function openModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['sourceModal','projectModal','explainModal','ftmModal','rtiModal'].forEach(closeModal);
    document.getElementById('glossaryOverlay').classList.remove('open');
    closeSearch();
  }
});

/* ============================================================
   TOAST
   ============================================================ */

function showToast(type, icon, text) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${text}</span><span class="toast-close" onclick="this.parentElement.remove()">×</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 250); }, 3500);
}

/* ============================================================
   ANIMATION HELPERS
   ============================================================ */

function animateNum(el, from, to, duration) {
  const start = performance.now();
  const update = now => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + eased * (to - from)).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initScrollFade() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.record-card, .kpi-card, .fc-card, .district-card, .coverage-card').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

/* ============================================================
   UTILITY
   ============================================================ */

function escapeHTML(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTicker();
  renderFeaturedConst();
  renderKeralaDistricts();
  renderCoverageGrid();
  renderLatestRecords();

  // Header scroll effect
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 8 ? '0 2px 16px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)';
  }, { passive: true });

  setTimeout(initScrollFade, 200);

  console.log('CivicLens Kerala initialised.');
  console.log('Constituencies:', Object.keys(CONSTITUENCIES).length);
  console.log('Projects:', PROJECTS.length, '| Problems:', PROBLEMS.length, '| CSR:', CSR_PROJECTS.length);
});
