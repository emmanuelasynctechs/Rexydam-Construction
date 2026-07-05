import { Service, Project, Testimonial, TeamMember, TimelineEvent, CoreValue } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "building-construction",
    title: "Building Construction",
    tagline: "Delivering architectural marvels with timeless structural durability.",
    iconName: "Home",
    shortDescription: "End-to-end modern building construction for residential, commercial, industrial, and institutional sectors, built to the highest safety and design criteria.",
    fullDescription: "REXYDAM NIG LTD provides turn-key building construction services that turn blueprint designs into magnificent, functional structures. From high-rise commercial complexes to luxury residential estates, we manage all phases of construction including excavation, foundation laying, structural framework, custom interior outfitting, and structural finishing. Our focus remains on combining cost efficiency with state-of-the-art materials.",
    benefits: [
      "Rigorous structural compliance and advanced materials",
      "Comprehensive warranty on all structural elements",
      "Sustainable build methodologies reducing energy footprints",
      "Flawless project handovers within pre-agreed timelines"
    ],
    process: [
      "Site Excavation & Base Foundation Engineering",
      "Reinforced Concrete Framework and Core Framing",
      "MEP (Mechanical, Electrical, Plumbing) Utility Integration",
      "Interior Drywalling, Finishes, and Quality Detailing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    subServices: [
      {
        name: "Residential Buildings",
        description: "Bespoke residential estates, multi-family smart townhomes, and luxury high-rise apartments tailored for exquisite living.",
        benefits: ["Smart home preparation", "Acoustic insulation", "Premium material sourcing"],
        process: ["Concept alignment", "Detailed architecture review", "Substructure build", "Superstructure execution", "Final handovers"]
      },
      {
        name: "Commercial Buildings",
        description: "State-of-the-art office buildings, premium business hubs, shopping malls, and corporate headquarters built for peak productivity.",
        benefits: ["Flexible open floor-plans", "Energy-efficient structural envelopes", "A-grade occupancy approvals"],
        process: ["Core and shell development", "HVAC integration", "Modern curtain walling", "Commercial fit-out"]
      },
      {
        name: "Industrial Buildings",
        description: "Robust manufacturing plants, distribution warehouses, processing factories, and cold storage storage centers engineered for heavy-duty workflows.",
        benefits: ["Heavy-load floor slabs", "Advanced ventilation layouts", "Integrated loading docks"],
        process: ["Soil compaction testing", "Pre-engineered metal structure framing", "Heavy utility setup"]
      },
      {
        name: "Institutional Buildings",
        description: "Modern, safe, and highly accessible structures for universities, healthcare facilities, schools, and civic government assets.",
        benefits: ["Acoustic dampening", "Optimized accessibility compliance", "Long-term low maintenance costs"],
        process: ["Safety design review", "Zoned HVAC & cleanroom design", "Phased educational/civic integration"]
      }
    ]
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering Works",
    tagline: "Shaping national landscapes and heavy infrastructure assets.",
    iconName: "HardHat",
    shortDescription: "Specialized civil engineering solutions covering roads, sophisticated drainage networks, concrete structures, bridges, and high-volume earthworks.",
    fullDescription: "Our civil engineering division tackles large-scale infrastructure projects that drive economic progress. We employ heavy machinery fleets and computer-aided layout engineering to deliver lasting roads, intricate storm-water drainage canals, earth retaining structures, and advanced foundation works. Safety, durability, and hydrological stability are the cornerstones of our designs.",
    benefits: [
      "High-durability grade materials built for heavy traffic loads",
      "Advanced ecological drainage and run-off modeling",
      "State-of-the-art surveying equipment and soil mechanics",
      "Full compliance with international federal transport standards"
    ],
    process: [
      "Topographical Ground Surveying & Hydrology Modeling",
      "Subgrade Soil Stabilization and High-Volume Earthworks",
      "Concrete Formwork, Pouring, and Structural Curing",
      "Surfacing, Compacting, and Quality Inspections"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200",
    subServices: [
      {
        name: "Road Construction",
        description: "From highways to city arterials, we execute rigid concrete and asphalt road surfacing built to resist climate wear and high axle loads.",
        benefits: ["Optimized water shedding", "Premium aggregate compounds", "Long-term rutting resistance"],
        process: ["Clearing and grubbing", "Base-course compaction", "Asphalt/concrete laying", "Thermoplastic marking"]
      },
      {
        name: "Drainage Systems",
        description: "Subsurface culverts, concrete drainage networks, storm-water channels, and sediment control basins protecting public infrastructures.",
        benefits: ["Flood risk mitigation", "Self-cleaning gradient design", "Heavy-duty precast materials"],
        process: ["Hydrology assessment", "Trench shoring", "Precast installation", "Backfilling and grading"]
      },
      {
        name: "Concrete Works",
        description: "Heavy structural foundations, grade beams, concrete retaining walls, slip-form barriers, and high-strength concrete framing.",
        benefits: ["Extreme load thresholds", "Reinforcement durability engineering", "Chemical exposure resilience"],
        process: ["Steel rebar tying", "Formwork alignment check", "High-slump pouring", "Humidity-controlled curing"]
      },
      {
        name: "Earthworks",
        description: "Precision grading, bulk excavations, complex slope stability, cut-and-fill balances, and heavy soil replacement.",
        benefits: ["Optimized mass hauling", "Shoring protection systems", "Minimized environmental siltation"],
        process: ["3D GPS grading setup", "Excavator loading operations", "Vibratory compaction roller passes"]
      },
      {
        name: "Retaining Structures",
        description: "Reinforced concrete cantilevers, gravity walls, sheet pile walls, and mechanically stabilized earth (MSE) structures for slopes.",
        benefits: ["Landslip prevention", "Aesthetic cladding options", "Long-term lateral load resistance"],
        process: ["Soil pressure analysis", "Foundation piling", "Structural panel assembly", "Weep-hole drainage setup"]
      }
    ]
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    tagline: "Fusing mathematical precision with architectural beauty.",
    iconName: "Cpu",
    shortDescription: "Advanced structural analysis, safety diagnostics, customized steel frame drafting, and heavy-duty reinforced concrete engineering.",
    fullDescription: "Safety is non-negotiable. REXYDAM's structural engineering team applies finite element analysis (FEA) and modern BIM software to design structural skeletons that stand resilient against seismic movements, heavy dynamic loading, and environmental elements. We collaborate directly with architects to ensure visual concepts have rigorous structural integrity.",
    benefits: [
      "State-of-the-art structural modeling using leading industry software",
      "Cost-optimized steel and concrete sizing to avoid material over-ordering",
      "Retrofitting engineering for ageing structures needing reinforcement",
      "Accurate safety and occupancy certification for compliance"
    ],
    process: [
      "Load Path Analysis & Architectural Layout Review",
      "Finite Element Modeling & Dynamic Wind/Seismic Calculations",
      "Structural Detail Drafting & Steel Rebar Scheduling",
      "On-site Inspection of Reinforcements Prior to Casting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    subServices: [
      {
        name: "Structural Design",
        description: "Drafting structural skeletons for multi-story apartments, complex industrial shells, and custom buildings.",
        benefits: ["Perfect safety margins", "Integration with BIM workflows", "Optimized material usage"],
        process: ["Architectural model sync", "Static analysis", "Structural member sizing"]
      },
      {
        name: "Structural Analysis",
        description: "Stress testing, load path verification, vibration limits, and seismic assessment using computer simulation.",
        benefits: ["Identify structural weak spots", "Prevent fatigue failure", "Determine maximum load ratings"],
        process: ["3D computational mesh creation", "Dynamic load input", "Stress concentration diagnostics"]
      },
      {
        name: "Reinforced Concrete Structures",
        description: "High-integrity beam-column designs, post-tensioned floor slabs, and heavy foundation designs.",
        benefits: ["Excellent fire rating", "High structural mass damping", "Exceptional design flexibility"],
        process: ["Bending moment scheduling", "Rebar cage fabrication", "Pouring check"]
      },
      {
        name: "Steel Structures",
        description: "Pre-fabricated steel framing, structural steel trusses, customized portal frames, and high-span clear roofs.",
        benefits: ["Rapid dry construction on-site", "Long span clearance capabilities", "100% recyclable structural members"],
        process: ["Fabrication detail drafting", "Bolt-and-weld design", "Crane erection planning"]
      }
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    tagline: "On Time. On Budget. Flawless Execution.",
    iconName: "Briefcase",
    shortDescription: "Comprehensive master planning, cost controls, safety oversight, construction supervision, and turn-key contract administration.",
    fullDescription: "Great projects require flawless orchestration. Our project managers serve as the client's champion, aligning general contractors, material vendors, quantity surveyors, and local authorities. We implement strict scheduling (CPM), real-time cost tracking, and rigorous quality circles to ensure every dollar of your budget works at peak efficiency.",
    benefits: [
      "Zero-slack scheduling with critical path tracking",
      "Aggressive cost control minimizing budget overruns",
      "On-site safety protocols achieving zero accident records",
      "Single-point-of-contact reporting for client convenience"
    ],
    process: [
      "Project Charters, Resource Allocations, and Scope Outlines",
      "Weekly CPM Schedule Adjustments and Supply Logistics Syncs",
      "Daily Quality Gate Audits and Safety Briefings",
      "Client Walkthroughs, Defect Rectification, and Handover"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200",
    subServices: [
      {
        name: "Project Planning",
        description: "Establishing comprehensive project lifecycles, critical path diagrams, resource charts, and material mobilization schedules.",
        benefits: ["Clear milestone transparency", "Prevent resource bottlenecks", "Proactive risk buffering"],
        process: ["Scope defining workshop", "Work breakdown structure (WBS)", "Gantt timeline baseline"]
      },
      {
        name: "Cost Control",
        description: "Real-time cost matching, variance analysis, invoice auditing, and material procurement optimization.",
        benefits: ["Avoid surprise expenditures", "Value engineering optimizations", "Monthly cash-flow predictability"],
        process: ["Budget capping", "Quantity takeoff verification", "Contingency buffer monitoring"]
      },
      {
        name: "Quality Assurance",
        description: "Establishing rigorous material testing protocols, slump tests, cylinder break tests, and finishing grade checklists.",
        benefits: ["Eliminate expensive reworks", "Guaranteed code compliance", "Elite structural aesthetic standards"],
        process: ["Material sourcing inspection", "Field validation testing", "Milestone sign-off gates"]
      },
      {
        name: "Construction Supervision",
        description: "Daily on-site oversight of labor, sub-contractors, and machine safety to ensure alignment with structural drawings.",
        benefits: ["Immediate field error detection", "Higher productivity levels", "Safe, clean, and organized job-sites"],
        process: ["Pre-work toolbox talks", "Ongoing dimensional audits", "Daily supervisor logs"]
      },
      {
        name: "Contract Administration",
        description: "Managing subcontractors, client-owner contracts, variation claims, and municipal occupancy permitting.",
        benefits: ["Legally sound documentation", "Smooth payment milestones", "Mitigated liability risks"],
        process: ["Scope creep identification", "Drafting variation orders", "Final permit packaging"]
      }
    ]
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    tagline: "Restoring, modernizing, and breathing new life into structures.",
    iconName: "Layers",
    shortDescription: "Complete rehabilitation, spatial modernizations, office retrofits, structural reinforcements, and premium building updates.",
    fullDescription: "REXYDAM NIG LTD elevates existing spaces to modern luxury standards. We carefully evaluate historical or dated structures, introducing contemporary amenities, smart-building components, energy-efficient layouts, and high-end finishes. Whether transforming a commercial skyscraper or upgrading a luxury home, our execution is clean and minimally disruptive.",
    benefits: [
      "Turn old, inefficient buildings into modern, smart structures",
      "Seamless blending of existing structures with brand-new expansions",
      "Substantial increase in overall asset valuation and rental yields",
      "Structural rehabilitation extending building lifespans by decades"
    ],
    process: [
      "Comprehensive Structural Integrity & Utility Diagnostics",
      "Demolition, Load-Bearing Re-shoring, and Spatial Stripping",
      "Modern Utility Laying & Smart Insulated Refitting",
      "Architectural Wall-Cladding, Lighting, and Modern Finishes"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    subServices: [
      {
        name: "Building Renovation",
        description: "Comprehensive restoration of residential, historical, or commercial structures with updated insulation and windows.",
        benefits: ["Reduced utility bills", "Modern moisture-barrier installations", "Fresh luxurious facade"],
        process: ["Moisture/crack mapping", "Facade power-wash and treatment", "Insulation upgrade", "Premium painting"]
      },
      {
        name: "Office Remodeling",
        description: "Transforming traditional workspace desks into collaborative open-plan corporate headquarters with executive meeting pods.",
        benefits: ["Boost employee morale", "Acoustic privacy partitions", "Modular cable management layouts"],
        process: ["Acoustic mapping", "Drywall redesign", "Architectural LED lighting install", "Smart conference room fit-out"]
      },
      {
        name: "Structural Rehabilitation",
        description: "Carbon-fiber column wrapping, underpinning weak foundations, concrete spall repair, and seismic retrofitting.",
        benefits: ["Restores structural safety rating", "Corrects historic settlement cracks", "Extends commercial operating license"],
        process: ["Column load-relief setup", "High-pressure epoxy injections", "Carbon-fiber sheet bonding"]
      },
      {
        name: "Property Upgrades",
        description: "Replacing outmoded plumbing, obsolete electrical panels, introducing smart home sensors and luxury visual upgrades.",
        benefits: ["Smart phone lighting & HVAC integration", "Lower insurance premiums", "Modern aesthetic finishes"],
        process: ["Panel upgrades", "PEX plumbing retrofits", "Premium marble/flooring installations"]
      }
    ]
  },
  {
    id: "architectural-services",
    title: "Architectural Services",
    tagline: "Scribbling dreams. Engineering reality.",
    iconName: "PenTool",
    shortDescription: "Stunning conceptual designs, functional spatial planning, precise working drawings, and photorealistic 3D rendering.",
    fullDescription: "Our architecture division crafts visual narratives of space. We balance space dynamics, solar paths, natural airflow, and local culture to design residential towers and commercial buildings that inspire. Utilizing state-of-the-art 3D BIM modelling and architectural visualization, you will experience your project's volume before we break ground.",
    benefits: [
      "Stunning custom-crafted conceptual ideas reflecting client personality",
      "Optimum daylight exposure and natural cross-ventilation layouts",
      "Highly detailed construction drawings minimizing on-site guesswork",
      "Virtual Reality walkthroughs of the interior spaces during design"
    ],
    process: [
      "Client Ideation, Mood-boarding, and Spatial Program Sizing",
      "Massing Studies, Floor-plan Layouts, and Elevations",
      "Photorealistic Rendering & Virtual Reality Interior Models",
      "Technical Construction Documentation & Structural Drafting Coordination"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    subServices: [
      {
        name: "Building Design",
        description: "Original architectural designs for homes, commercial office towers, civic institutions, and retail shops.",
        benefits: ["Distinctive streetscape aesthetics", "Optimized floor space indices", "Harmonious material selections"],
        process: ["Sketching & massing options", "Render mock-ups", "Aesthetics agreement"]
      },
      {
        name: "Working Drawings",
        description: "Highly detailed 1:50 scale construction floor-plans, ceiling layouts, joinery details, and sanitary fittings maps.",
        benefits: ["On-site contractor bidding clarity", "Saves time on-site", "Precision fixture mounting"],
        process: ["Drafting details", "Utility-clash reviews", "Multi-trade coordination notes"]
      },
      {
        name: "Space Planning",
        description: "Ergonomic interior zoning, traffic flow analysis, acoustic separation, and natural light optimization.",
        benefits: ["Fluid user movement layouts", "Reduced dead-end hallways", "Efficient furniture placement grids"],
        process: ["Adjacency diagrams", "Drafting zoning limits", "Furniture mockups"]
      },
      {
        name: "Construction Documentation",
        description: "Developing comprehensive material schedules, door/window schedules, finish legends, and structural blueprints.",
        benefits: ["A-Grade municipal approvals", "Bulletproof contract billing terms", "Standardized construction standards"],
        process: ["Specification writing", "Building code compliance audit", "Submission package generation"]
      }
    ]
  },
  {
    id: "consultancy-services",
    title: "Consultancy Services",
    tagline: "Strategic advisory. Expert engineering opinions.",
    iconName: "TrendingUp",
    shortDescription: "Rigorous feasibility studies, engineering technical advisory, quantity surveying, cost forecasting, and peer reviews.",
    fullDescription: "Mitigate project risks before investing capital. REXYDAM NIG LTD offers strategic corporate consultancy, performing soil suitability reviews, quantity takeoffs, cost forecasting, feasibility studies, and detailed engineering audits. We provide independent third-party assessments that protect investors and ensure absolute technical compliance.",
    benefits: [
      "Unbiased technical engineering audits for property acquisitions",
      "Highly accurate bill of quantities (BOQ) preventing invoice inflation",
      "Data-backed financial feasibility studies securing bank loans",
      "Expert arbitration on structural engineering disputes"
    ],
    process: [
      "Project Parameters Gathering & Site Diagnostic Visits",
      "Rigorous Analytical, Hydrology, or Material Testing",
      "Detailed Quantity Sizing, Estimating, and Financial Calculations",
      "Formal Engineering Report Submission & Board Presentations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200",
    subServices: [
      {
        name: "Engineering Consultancy",
        description: "Third-party plan audits, structural health monitoring, soil mechanics evaluation, and safety compliance advisory.",
        benefits: ["Risk avoidance for complex works", "Second-opinion professional security", "Insurance liability compliance"],
        process: ["Drawing review", "Static-load calculations audit", "Certificate stamping"]
      },
      {
        name: "Quantity Surveying Coordination",
        description: "Creating precise Bill of Quantities (BOQ), material cost audits, and progress payment evaluations.",
        benefits: ["Avoid vendor overpricing", "Accurate construction budget benchmarks", "Subcontractor claim validation"],
        process: ["Measurement from drawings", "Market rate validation", "Drafting official BOQ documents"]
      },
      {
        name: "Feasibility Studies",
        description: "Analyzing site topography, zoning limitations, utility access, and calculating ROI on real-estate developments.",
        benefits: ["Prevents investing in bad sites", "Detailed financial modeling", "Zoning waiver risk assessments"],
        process: ["Site inspection", "Economic market review", "Sensitivity analysis reporting"]
      },
      {
        name: "Technical Advisory Services",
        description: "Expert engineering representation in corporate boards, legal expert-witness testifying, and high-level strategy.",
        benefits: ["Protects investor liability", "Objective technical arbitration", "Saves millions in structural disputes"],
        process: ["Discovery analysis", "Technical forensic review", "Formal advisory delivery"]
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "Building Construction",
    category: "Commercial",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOzTFKv7S_ryGVC4sSFhC9p1HX5_6zhFvW04nPe9up7juaDHH9LybppErXLPVQ0fCiJ-N4RDrlKywtV44PpUFIrHz7ch90gjRDMK8MujksUmCy05Zln8fxWOOoKPxog8kkvIMxKImbyw3dqSm6zVGQ=w871-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  },
  {
    id: "project-2",
    title: "Building Construction",
    category: "Residential",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNSpViTho4yqEgoTpMxahGKer0Y14fP4T3XGu-sF7rXVTRNa4Hf5mNFe5NF9BkVTGMfzqqZiBZXDFcb82oi1GwxWLUEBreGNO-tN9fwD_gucbNkOi8w8PLvrW7wz1EKFvrYXePozB5jXpcYPj7wQ0s=w871-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  },
  {
    id: "project-3",
    title: "Building Construction",
    category: "Industrial",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOUYxDE2b45prqOj_DKb1m0FHPrk2IYysOYn8np5w5My3xra8yczI8adqnrHJByLcOsQRw2TLpSzSpbTC8ed25OqX9AToaqqlXAaSz8Y6m6mYOqsP4v7Q-GcN8nHencLMdcqVbH3XqW-pMBZogquwk=w871-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  },
  {
    id: "project-4",
    title: "Building Construction",
    category: "Engineering",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczP8fp6LxnRjPsQc_451bKwwxQWJDXjBxBhKuSuKhpGhnbDFuhQCmPxtoagny1Heeyj35okK_sN2xXHv80cPPPZb44w9KPMyWq7LSREBav5xS1VPz43nmBqUjXVkiC_K_On188kQTxLLYt6zFpGXCx4=w871-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  },
  {
    id: "project-5",
    title: "Building Construction",
    category: "Architecture",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPY_3PnGG3nDihA4n7U952cSCGT2AsOfGPoRcOPP0TwU3g04U41tYvGRc2q0TtLZXA9XZE-vSpKmZk74xyCt9Ey_9lwblYk4lZwYZQwKvAjYegH4BNTECe-722yQ7flCuY08FsOxCJGfqSiuAOUVro=w871-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  },
  {
    id: "project-6",
    title: "Building Construction",
    category: "Commercial",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPeLrnvg8iikoTJEzxCY2Wv7zPpQtJ6Rn92mC7LjHkgisxWmhouZRdSdtqALn4yjemSv5cjrtexzscOJV2bnnAubY1wz3LlRIkUqx8LS2agCstp5vySkcVTEKP2m1W0t8n6SkZW7NQiEq6sWhvivyw=w871-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  },
  {
    id: "project-7",
    title: "Building Construction",
    category: "Residential",
    client: "Rexydam Development",
    location: "Abuja, Nigeria",
    year: "2026",
    size: "Standard Site",
    value: "Premium",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczP-VFVgE-RUugfjRAv8ZHArerQ-Nb_LIOtp1VGpRWYsiqeBAaUicxtfGtVYUTyqnRJ_x6ynDdbFTSqRlQzYyatyY00w1v7Dp44kc49sgcW3TxiDBq3pKQnvqGVODcfhqmI6ZpPu6m60-eScQt7eOE8=w490-h653-s-no-gm?authuser=4",
    summary: "Building Construction",
    description: "Building Construction",
    challenges: [],
    solutions: [],
    scope: []
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Engr. Charles Adeleke",
    role: "Director of Infrastructure Development",
    company: "Lagos State Infrastructure Council",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
    quote: "REXYDAM NIG LTD exceeded all our expectations on the Lekki commercial projects. Their structural engineering team solved complex coastal foundation problems that had stalled other general contractors for months. Absolute professionals from start to finish.",
    projectAssociated: "The Royal Crest Plaza"
  },
  {
    id: "2",
    name: "Dr. Aliyu Olanrewaju",
    role: "Private Investor & Client",
    company: "Apex Healthcare Holdings",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    rating: 5,
    quote: "As a client who demands absolute design perfection, I was amazed by REXYDAM's architectural fusion. They listened to my organic hill design concept and delivered a jaw-dropping structural masterpiece that stays completely cool in the Abuja heat.",
    projectAssociated: "Apex Modernist Pavilion"
  },
  {
    id: "3",
    name: "Arch. Sarah Ibrahim",
    role: "Principal Partner",
    company: "Vanguard Design Consultants",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    rating: 5,
    quote: "We have partnered with REXYDAM on multiple high-value commercial builds. Their structural drawings are extraordinarily precise, and their project managers maintain absolute transparency with budgets and materials. They are our go-to contractor.",
    projectAssociated: "Elysium Smart Luxury Estates"
  },
  {
    id: "4",
    name: "Senator Kunle Falola",
    role: "Chairman on Highway Works",
    company: "Federal Infrastructure Committee",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    rating: 5,
    quote: "The rigid concrete pavement constructed by REXYDAM on the Enugu Route has held up perfectly under intense tropical heat and endless multi-ton freight trucks. On-time and on-budget delivery is rare in public works—REXYDAM achieved it flawlessly.",
    projectAssociated: "Golden Gate Federal Highway"
  }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "1",
    name: "Engr. Adejuwon Kolade E., MNSE, MNICE",
    role: "CEO, Chairman & Principal Engineering Director",
    bio: "Engr. Adejuwon Kolade E. is a distinguished civil and structural engineering leader. As CEO, Chairman & Principal Engineering Director of REXYDAM NIG LTD, he steers our strategic direction, structural design approvals, and project safety standards. His extensive career is defined by delivering elite residential, commercial, and highway infrastructure works with zero compromise on engineering integrity.",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczMUxd88OfwnHOcRe3WVI_daIetnWWqdOVLp5Wtd9uYqrzcZsZ5QOc3eL7g8FCCjJF96V6-mXD59uHX_3i1mzWWmxulwuAPPb38l6NwEDeuxVKVVmqQjeTqfPRdbYf8cZv4eJlzHvVbmMYP0D-MgCHA=w717-h653-s-no-gm?authuser=4",
    qualifications: [
      "B.Sc in Civil Engineering",
      "COREN Registered Engineer",
      "Member of the Nigerian Society of Engineers (NSE)",
      "Member of the Nigerian Institution of Civil Engineers (NICE)",
      "Certified in HSE & Project Management"
    ],
    email: "adejuwon.kolade@rexydamnig.com"
  },
  {
    id: "2",
    name: "Adejuwon Oluwadamilola Olayinka",
    role: "Company Administrator & Lead Operations Coordinator",
    bio: "Adejuwon Oluwadamilola Olayinka is the Head of Corporate Administration and Chief Procurement Coordinator at REXYDAM NIG LTD. She oversees central administrative logistics, legal policy compliance, contract registry management, and high-level partner relations. She ensures the company's daily corporate operations match the strict transparency and quality standards required for premium infrastructure project execution.",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczM40FiPTSO4DtnmRXS0EPaQVQ-GAfEEnITN3dhLyXHP2PugwatL87R4ZKDZpmUxnmr8YvNKc0w405RKBgzPSLrfvBOdViTmP_sFr_6fJtulh5dtj7mo_LxSZlKocQqsrAIYX08JT1g9amsqilCUKHM=w523-h653-s-no-gm?authuser=4",
    qualifications: [
      "B.Sc in Business Administration & Management",
      "Certified Executive Administrative Professional (CEAP)",
      "Lead Procurement and Contract Logistics Specialist",
      "HSE Level II Certified Compliance Administrator"
    ],
    email: "damilola.adejuwon@rexydamnig.com"
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2012",
    title: "Company Foundation",
    description: "REXYDAM NIG LTD was incorporated, beginning operations with a small team of passionate structural engineers and architects focused on private residential developments in Abuja."
  },
  {
    year: "2016",
    title: "Civil Engineering Expansion",
    description: "Acquired a major heavy equipment fleet and established a specialized civil infrastructure wing. Secured our first major federal road drainage and landslip defense projects."
  },
  {
    year: "2020",
    title: "State-of-the-Art BIM Integration",
    description: "Completely digitized our workflows by introducing Building Information Modeling (BIM) and virtual reality walkthroughs, allowing clients to experience materials and layout prior to build."
  },
  {
    year: "2023",
    title: "Coastal Marine Landmark",
    description: "Commissioned the Victoria Island Coastal defense project, solidifying REXYDAM as a premier structural engineering expert capable of executing under extreme maritime conditions."
  },
  {
    year: "2026",
    title: "Carbon-Neutral Commitment",
    description: "Launched our Eco-Steel & Geothermal foundation integrations, pledging to reduce concrete carbon footprints by 30% across all luxury commercial builds by 2030."
  }
];

export const CORE_VALUES_DATA: CoreValue[] = [
  {
    title: "Absolute Integrity",
    description: "We source true material grades, deliver transparent billing without hidden costs, and honor our contracts to the letter.",
    iconName: "Shield"
  },
  {
    title: "Rigorous Safety First",
    description: "Our sites enforce stringent protective controls, achieving a proud milestone of over 1.8 million hours of zero accident records.",
    iconName: "FlameKindling"
  },
  {
    title: "Innovation & Precision",
    description: "We use finite element engineering, 3D laser-guided grading, and BIM models to guarantee accuracy down to the millimeter.",
    iconName: "Cpu"
  },
  {
    title: "Uncompromising Quality",
    description: "We implement daily concrete slump tests, cylinder compression checks, and luxury grade finish inspections before every sign-off.",
    iconName: "Award"
  }
];
