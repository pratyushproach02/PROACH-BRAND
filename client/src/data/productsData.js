export const categories = [
  { id: 'all', name: 'All Equipment' },
  { id: 'transformers', name: 'Transformers & Substations' },
  { id: 'generators', name: 'DG Sets & Generators' },
  { id: 'switchgear', name: 'HT / LT Switchgear & Panels' },
  { id: 'lighting', name: 'High-Mast & Defense Lighting' },
  { id: 'cables', name: 'Armored Cables & Conductors' },
  { id: 'earthing', name: 'Earthing & Protection Systems' }
];

export const products = [
  {
    id: 'tr-01',
    category: 'transformers',
    name: '33kV / 11kV Oil-Immersed Power Transformer',
    model: 'PRO-TR-33KV-5MVA',
    tag: 'MES Approved',
    badge: 'Heavy Infrastructure',
    description: 'High-efficiency step-down power transformer engineered for military cantonments, regional grid sub-stations, and heavy industrial distribution.',
    voltage: '33 kV / 11 kV / 433 V',
    capacity: '1000 kVA – 10 MVA',
    cooling: 'ONAN / ONAF',
    standards: 'IS 2026, IEC 60076, BIS Class-1 Efficiency',
    specs: [
      { label: 'Rated Capacity', value: '1 MVA to 10 MVA' },
      { label: 'Primary Voltage', value: '33,000 V / 11,000 V' },
      { label: 'Secondary Voltage', value: '433 V / 11 kV' },
      { label: 'Winding Material', value: 'High Conductivity Electrolytic Copper' },
      { label: 'Tap Changer', value: 'On-Load (OLTC) / Off-Circuit Tap Switch' },
      { label: 'Insulation Class', value: 'Class A (Mineral Oil / Synthetic Ester)' }
    ],
    features: [
      'Low loss CRGO silicon steel laminations',
      'Corrosion-resistant epoxy outer coating suited for harsh mountain terrain',
      'Fitted with Buchholz relay, PRV, and magnetic oil level gauge',
      'Compliant with Northern Command MES specification schedule'
    ]
  },
  {
    id: 'tr-02',
    category: 'transformers',
    name: 'Cast Resin Dry-Type Distribution Transformer',
    model: 'PRO-TR-DRY-1500',
    tag: 'Fire Safe / Indoor',
    badge: 'Defense Headquarters',
    description: 'Self-extinguishing, moisture-proof dry-type transformer designed for enclosed military HQ bunkers, strategic underground complexes, and hospitals.',
    voltage: '11 kV / 433 V',
    capacity: '250 kVA – 2500 kVA',
    cooling: 'AN / AF (Forced Air Option)',
    standards: 'IS 11171, IEC 60076-11, Class F/H',
    specs: [
      { label: 'Rated Power', value: '250 kVA to 2500 kVA' },
      { label: 'Voltage Class', value: '11 kV / 433 V' },
      { label: 'Fire Behavior', value: 'F1 Fire Survival Certified' },
      { label: 'Climate Class', value: 'C2 / E2 Environmental Grade' },
      { label: 'Enclosure', value: 'IP23 / IP33 Sheet Steel Enclosure' }
    ],
    features: [
      'Zero risk of leakage, explosion, or toxic gas emissions',
      'Direct installation near load centers minimizing LT cable losses',
      'High short-circuit withstand withstand capacity',
      'Temperature monitoring controller with RTD sensors embedded in windings'
    ]
  },
  {
    id: 'dg-01',
    category: 'generators',
    name: 'Heavy Duty Silent Acoustic DG Set (15kVA - 2000kVA)',
    model: 'PRO-DG-AMF-SERIES',
    tag: 'Prime & Standby Power',
    badge: 'Continuous Duty',
    description: 'Ruggedized diesel generator units housed in CPCB-IV+ acoustic enclosures for fail-safe mission-critical power in high altitude and extreme climate environments.',
    voltage: '415 V, 3-Phase, 50 Hz',
    capacity: '15 kVA – 2000 kVA',
    cooling: 'Heavy-duty Tropical Radiator',
    standards: 'CPCB IV+ Emission Norms, ISO 8528, BS 5514',
    specs: [
      { label: 'Power Range', value: '15 kVA to 2000 kVA' },
      { label: 'Engine Options', value: 'Cummins / Kirloskar / Perkins / Ashok Leyland' },
      { label: 'Alternator', value: 'Stamford / Leroy Somer / Crompton' },
      { label: 'Control Panel', value: 'Deep Sea / ComAp AMF Microprocessor Controller' },
      { label: 'Noise Level', value: '< 75 dBA @ 1 meter (CPCB Compliant)' }
    ],
    features: [
      'Cold-start kit for sub-zero Kashmir & Ladakh altitudes (-25°C operational capability)',
      'Integrated Auto Mains Failure (AMF) with auto-start within 5 seconds of grid interruption',
      'Heavy gauge zinc-galvanized soundproof acoustic canopy',
      'Large integral base fuel tank engineered for 12+ hours continuous full-load run'
    ]
  },
  {
    id: 'dg-02',
    category: 'generators',
    name: 'Auto Synchronizing & Load Sharing DG Control Desk',
    model: 'PRO-SYNC-DG-4X',
    tag: 'Power Management',
    badge: 'Multi-Genset Grid',
    description: 'Automated multi-generator paralleling switchboard for seamless power sharing across 2 to 6 DG sets in large institutional cantonments.',
    voltage: '415 V / 11 kV',
    capacity: 'Up to 10 MW Parallel Capacity',
    cooling: 'Natural / Forced Ventilation',
    standards: 'IEC 61439-1/2, IS 8623',
    specs: [
      { label: 'Busbar Capacity', value: 'Up to 6300A Copper Busbar' },
      { label: 'Short Circuit Rating', value: '50 kA / 65 kA for 1 sec' },
      { label: 'Controller', value: 'DEIF / Woodward / ComAp AGC-4' },
      { label: 'Protection', value: 'Reverse Power, Differential, Under/Over Frequency' }
    ],
    features: [
      'Peak shaving and automatic demand-based start/stop of auxiliary gensets',
      'Dual PLC redundancy with bumpless transfer',
      'RS485 Modbus & Ethernet telemetry for remote SCADA monitoring'
    ]
  },
  {
    id: 'sw-01',
    category: 'switchgear',
    name: '11kV / 33kV Vacuum Circuit Breaker (VCB) Panel',
    model: 'PRO-VCB-11-25KA',
    tag: 'HT Protection',
    badge: 'MES Standard',
    description: 'Indoor/Outdoor metal-clad drawout type VCB panels for high-voltage switching, distribution, and transformer feeder protection.',
    voltage: '11 kV / 33 kV',
    capacity: '630A – 2500A, 25kA/31.5kA',
    cooling: 'Air Insulated Metal Clad',
    standards: 'IEC 62271-100 / 200, IS 13118',
    specs: [
      { label: 'Rated Voltage', value: '12 kV / 36 kV' },
      { label: 'Current Rating', value: '630 A, 1250 A, 2000 A, 2500 A' },
      { label: 'Breaking Capacity', value: '25 kA / 31.5 kA / 40 kA for 3 sec' },
      { label: 'Operating Mechanism', value: 'Motorized Spring Charge / Manual Trip' },
      { label: 'Interlocks', value: 'Mechanical & Electrical Safety Interlocks' }
    ],
    features: [
      'Tested to withstand rigorous seismic and thermal stress',
      'Separate compartmentalization for breaker, busbars, cables, and low-voltage relays',
      'Numerical micro-controller based over-current, earth fault, and distance protection relays',
      'Comprehensive arc venting flap for operator safety'
    ]
  },
  {
    id: 'sw-02',
    category: 'switchgear',
    name: 'Main LT Power Distribution Board & Motor Control Center (PCC/MCC)',
    model: 'PRO-LT-PCC-4000',
    tag: 'LT Switchgear',
    badge: 'Industrial Grade',
    description: 'Heavy duty compartmentalized LT switchboards with Air Circuit Breakers (ACB) and Motor Control Centers engineered for high continuous current loads.',
    voltage: '415 V AC',
    capacity: '800A – 6300A',
    cooling: 'Internal Air Channels',
    standards: 'IEC 61439-1 & 2, IS 8623, IP54 Enclosure',
    specs: [
      { label: 'Busbar Rating', value: 'Up to 6300A 99.9% Pure Electrolytic Copper' },
      { label: 'Incomers', value: '3-Pole / 4-Pole Drawout Microprocessor ACBs' },
      { label: 'Feeders', value: 'MCCB with thermal/magnetic and microprocessor releases' },
      { label: 'Form of Separation', value: 'Form 3b / Form 4b Compartmentalization' }
    ],
    features: [
      'Automatic Power Factor Correction (APFC) with detuned harmonic filter reactors',
      'Modular expandable cubicle system for hassle-free field modifications',
      'Digital multifunction power meters with energy logging capabilities'
    ]
  },
  {
    id: 'lt-01',
    category: 'lighting',
    name: 'Heavy Duty Octagonal High-Mast Lighting System (16m - 30m)',
    model: 'PRO-MAST-25M-WINCH',
    tag: 'Strategic Illumination',
    badge: 'Defense Bases',
    description: 'High-tensile hot-dip galvanized octagonal high-mast lighting towers equipped with motorized double-drum raising and lowering winches and aviation obstruction systems.',
    voltage: '230 V / 415 V',
    capacity: '6 to 16 x 400W/500W High Efficiency LED Luminaires',
    cooling: 'Aviation Aluminum Heatsinks',
    standards: 'IS 875 (Wind Load up to 180 km/h), TR-7 ILE Specification',
    specs: [
      { label: 'Mast Height', value: '16m, 20m, 25m, 30m, 35m' },
      { label: 'Material', value: 'High Tensile Steel BS EN 10025 Grade S355' },
      { label: 'Galvanizing', value: 'Hot Dip Galvanized (Avg 86 Micron thickness, IS 4759)' },
      { label: 'Winch Gear', value: 'Motorized Dual Drum Self-Sustaining Winch with Wire Rope' },
      { label: 'Luminaires', value: 'IP66 High Lumen LED Floodlights (140 lm/W)' }
    ],
    features: [
      'Engineered for extreme valley wind pressure and heavy snowfall loading',
      'Equipped with dusk-to-dawn astronomical timer and lightning protection finial',
      'Twin LED aviation obstruction lamps with automatic blinkers',
      'Designed for cantonment sports complexes, parade grounds, and security check posts'
    ]
  },
  {
    id: 'lt-02',
    category: 'lighting',
    name: 'Industrial Defense Perimeter & Explosive-Proof LED Luminaires',
    model: 'PRO-EXP-LED-200W',
    tag: 'Hazardous & Perimeter',
    badge: 'Flameproof / IP66',
    description: 'Explosion-proof and high-survivability perimeter floodlights engineered for ammunition depots, POL fuel stations, and high-security defense borders.',
    voltage: '110V - 277V AC Wide Band',
    capacity: '50W, 100W, 150W, 200W, 300W',
    cooling: 'Die-cast Marine Grade Aluminum',
    standards: 'ATEX / PESO / IECEx Certified, IS/IEC 60079',
    specs: [
      { label: 'Protection', value: 'Ex d IIC T6 Gb / Ex tb IIIC T80°C Db' },
      { label: 'Ingress Rating', value: 'IP66 / IP67 Weatherproof' },
      { label: 'Surge Protection', value: '10 kV / 20 kV Built-in SPD' },
      { label: 'Optical Lens', value: 'Toughened Borosilicate Glass / Polycarbonate' }
    ],
    features: [
      'Vibration and shock resistant solid state LED design',
      'Wide operating temperature window from -35°C to +55°C',
      'Available with integrated PIR motion sensor and solar-battery auxiliary backup'
    ]
  },
  {
    id: 'cb-01',
    category: 'cables',
    name: '11kV XLPE Armored HT Power Cable (150 sq.mm)',
    model: 'PRO-CAB-11KV-150',
    tag: 'HT Underground Cable',
    badge: 'IS 7098 Part-II Certified',
    image: '/images/products/gloster_xlpe_cable_roll.jpg',
    description: 'Heavy-duty 11kV Cross-Linked Polyethylene (XLPE) insulated, galvanized steel armored HT electric cable certified strictly under IS 7098 (Part - II). Engineered for primary power distribution, direct underground burial, substation feeders, and high-altitude mountain grids.',
    voltage: '11 kV',
    capacity: '150 SQ MM',
    cooling: 'Direct Burial / Cable Trench',
    standards: 'IS 7098 (Part - II), ISI Marked, IEC 60502-2',
    specs: [
      { label: 'Voltage Grade', value: '11 kV' },
      { label: 'Cross Sectional Area', value: '150 SQ MM' },
      { label: 'Conductor Material', value: 'High Conductivity Electrolytic Grade Stranded Aluminum / Copper' },
      { label: 'Insulation Type', value: 'Dry Cured Cross-Linked Polyethylene (XLPE)' },
      { label: 'Armoring & Mechanical Protection', value: 'Galvanized Flat Steel Strip / Round Steel Wire' },
      { label: 'Outer Sheath', value: 'Heavy-Duty Extruded Blue FRLS (Moisture & Soil Resistant)' },
      { label: 'Continuous Operating Temp', value: '90°C Normal / 250°C Short-Circuit Rating' },
      { label: 'Standard Specification', value: 'IS 7098 (Part - II) with Official ISI Mark' },
      { label: 'Supply & Stock Status', value: 'In Stock at Regional Depot • Direct Site Dispatch & Laying Available' }
    ],
    features: [
      'Certified under IS 7098 Part-II with full ISI compliance for defense and public grid tenders',
      'Engineered for 11kV primary distribution with superior thermal withstand capacity up to 250°C',
      'Heavy-duty blue protective outer sheath engineered for rough mountain soil, sub-zero Himalayan conditions, and chemical resistance',
      'High-tensile galvanized steel armoring protects against shifting soil pressures and mechanical impacts',
      'Approved for Indian Army garrisons, MES defense contracts, State Power Development Departments, and industrial turnkey grids'
    ]
  },
  {
    id: 'cb-02',
    category: 'cables',
    name: 'LT Armored Power & Control Multi-Core Cables',
    model: 'PRO-CABLE-LT-1.1KV',
    tag: 'LT Distribution',
    badge: 'IS 1554 / IS 7098',
    description: 'Low-voltage 1100V grade PVC/XLPE insulated armored cables for industrial motor connections, power distribution boards, and control telemetry.',
    voltage: '1.1 kV Grade',
    capacity: 'Single core up to 1000 sq.mm; Multi-core 2C to 61C',
    cooling: 'Conduit / Tray / Trench',
    standards: 'IS 1554 (Part 1), IS 7098 (Part 1), IS 8130',
    specs: [
      { label: 'Conductor Material', value: 'EC Grade Aluminum / High Purity Copper' },
      { label: 'Insulation', value: 'General Purpose / Heat Resistant XLPE' },
      { label: 'Voltage Grade', value: '650 / 1100 Volts' },
      { label: 'Fire Rating', value: 'FRLS / Fire Survival Category C1' }
    ],
    features: [
      'High dielectric strength and low dielectric loss',
      'Armored protection against mechanical crushes during ground movements',
      'Flexible color-coded cores for easy phase identification'
    ]
  },
  {
    id: 'ea-01',
    category: 'earthing',
    name: 'Maintenance-Free Chemical Earthing Electrodes & Compound',
    model: 'PRO-EARTH-CU-80',
    tag: 'Substation Protection',
    badge: 'IEEE 80 Compliant',
    description: 'High conductivity copper-bonded and pure copper pipe-in-pipe chemical earthing systems with moisture-retaining conductive backfill compound.',
    voltage: 'All Voltage Classes',
    capacity: 'Fault Current Withstand up to 50 kA for 1 sec',
    cooling: 'Sub-soil Soil Absorption',
    standards: 'IS 3043-2018, IEEE 80, UL 467 Certified',
    specs: [
      { label: 'Electrode Material', value: 'Copper Bonded Steel (254 Micron) / Pure Copper Pipe' },
      { label: 'Electrode Diameter', value: '50mm, 75mm, 80mm' },
      { label: 'Electrode Length', value: '2.0 Meter, 3.0 Meter' },
      { label: 'Compound', value: 'Eco-Friendly Carbonaceous Earth Enhancement Compound' },
      { label: 'Earth Resistance', value: '< 1.0 Ohm achieved under proper installation' }
    ],
    features: [
      'Eliminates the periodic watering and salt-charcoal maintenance required in traditional earthing',
      'Highly stable earth resistance even in rocky and low-moisture Himalayan soil strata',
      'Expected operational lifespan exceeding 25+ years without corrosion decay'
    ]
  },
  {
    id: 'ea-02',
    category: 'earthing',
    name: 'Gapless Zinc Oxide (ZnO) Polymer Lightning Surge Arresters',
    model: 'PRO-SURGE-33KV-10KA',
    tag: 'Lightning Protection',
    badge: 'Station Class',
    description: 'Heavy duty metal oxide surge arresters designed for outdoor substation over-voltage protection against atmospheric lightning strikes and switching surges.',
    voltage: '11 kV / 33 kV / 66 kV System',
    capacity: '10 kA / 20 kA Nominal Discharge Current (Class 1 / 2)',
    cooling: 'Hydrophobic Polymer Housing',
    standards: 'IEC 60099-4, IS 3070',
    specs: [
      { label: 'Arrester Type', value: 'Gapless Metal Oxide (ZnO)' },
      { label: 'Rated Voltage (Ur)', value: '12 kV / 36 kV' },
      { label: 'Continuous Operating Voltage (Uc)', value: '9.6 kV / 30 kV' },
      { label: 'Discharge Class', value: 'Station Class 10 kA (Line Discharge Class 2)' },
      { label: 'Creepage Distance', value: 'High Creepage (31 mm/kV for severe pollution zones)' }
    ],
    features: [
      'High energy absorption capability with zinc oxide varistors',
      'Silicone rubber polymer housing preventing explosive shatter on severe fault',
      'Supplied with insulating base, surge monitor counter, and disconnection device'
    ]
  }
];
