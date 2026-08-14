"""
Database seeder for Proach Builders and Engineers catalog.
Run with: python seed_data.py
"""
import os
import sys
import django

# Setup Django Environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'proach_backend.settings')
django.setup()

from catalog.models import Category, Product, ProductSpec, ProjectCaseStudy

def seed():
    print("⚡ Seeding Proach Builders & Engineers Database...")

    # 1. Create Categories
    categories_data = [
        ('transformers', 'Transformers & Substations', 'High-voltage power & distribution transformers, dry type and oil cooled.', 1),
        ('generators', 'DG Sets & Generators', 'Silent acoustic diesel generator sets and auto synchronizing panels.', 2),
        ('switchgear', 'HT / LT Switchgear & Panels', 'Vacuum circuit breakers, PCC, MCC, APFC and motor control switchboards.', 3),
        ('lighting', 'High-Mast & Defense Lighting', 'High-mast towers, perimeter floodlights, and explosion-proof luminaires.', 4),
        ('cables', 'Armored Cables & Conductors', 'High-tension XLPE armored power cables and transmission conductors.', 5),
        ('earthing', 'Earthing & Protection Systems', 'Chemical earthing electrodes and station class lightning surge arresters.', 6),
    ]

    cat_map = {}
    for slug, name, desc, order in categories_data:
        cat, created = Category.objects.get_or_create(
            slug=slug,
            defaults={'name': name, 'description': desc, 'order': order}
        )
        cat_map[slug] = cat
        print(f"  ✓ Category: {name}")

    # 2. Create Products
    products_data = [
        {
            'slug': 'tr-01',
            'category': cat_map['transformers'],
            'name': '33kV / 11kV Oil-Immersed Power Transformer',
            'model_number': 'PRO-TR-33KV-5MVA',
            'tag': 'MES Approved',
            'badge': 'Heavy Infrastructure',
            'description': 'High-efficiency step-down power transformer engineered for military cantonments, regional grid sub-stations, and heavy industrial distribution.',
            'voltage_rating': '33 kV / 11 kV / 433 V',
            'capacity_range': '1000 kVA – 10 MVA',
            'cooling_type': 'ONAN / ONAF',
            'applicable_standards': 'IS 2026, IEC 60076, BIS Class-1 Efficiency',
            'features': [
                'Low loss CRGO silicon steel laminations',
                'Corrosion-resistant epoxy outer coating suited for harsh mountain terrain',
                'Fitted with Buchholz relay, PRV, and magnetic oil level gauge',
                'Compliant with Northern Command MES specification schedule'
            ],
            'specs': [
                ('Rated Capacity', '1 MVA to 10 MVA'),
                ('Primary Voltage', '33,000 V / 11,000 V'),
                ('Secondary Voltage', '433 V / 11 kV'),
                ('Winding Material', 'High Conductivity Electrolytic Copper'),
                ('Tap Changer', 'On-Load (OLTC) / Off-Circuit Tap Switch'),
                ('Insulation Class', 'Class A (Mineral Oil / Synthetic Ester)')
            ]
        },
        {
            'slug': 'tr-02',
            'category': cat_map['transformers'],
            'name': 'Cast Resin Dry-Type Distribution Transformer',
            'model_number': 'PRO-TR-DRY-1500',
            'tag': 'Fire Safe / Indoor',
            'badge': 'Defense Headquarters',
            'description': 'Self-extinguishing, moisture-proof dry-type transformer designed for enclosed military HQ bunkers, strategic underground complexes, and hospitals.',
            'voltage_rating': '11 kV / 433 V',
            'capacity_range': '250 kVA – 2500 kVA',
            'cooling_type': 'AN / AF (Forced Air Option)',
            'applicable_standards': 'IS 11171, IEC 60076-11, Class F/H',
            'features': [
                'Zero risk of leakage, explosion, or toxic gas emissions',
                'Direct installation near load centers minimizing LT cable losses',
                'High short-circuit withstand capacity',
                'Temperature monitoring controller with RTD sensors embedded in windings'
            ],
            'specs': [
                ('Rated Power', '250 kVA to 2500 kVA'),
                ('Voltage Class', '11 kV / 433 V'),
                ('Fire Behavior', 'F1 Fire Survival Certified'),
                ('Climate Class', 'C2 / E2 Environmental Grade'),
                ('Enclosure', 'IP23 / IP33 Sheet Steel Enclosure')
            ]
        },
        {
            'slug': 'dg-01',
            'category': cat_map['generators'],
            'name': 'Heavy Duty Silent Acoustic DG Set (15kVA - 2000kVA)',
            'model_number': 'PRO-DG-AMF-SERIES',
            'tag': 'Prime & Standby Power',
            'badge': 'Continuous Duty',
            'description': 'Ruggedized diesel generator units housed in CPCB-IV+ acoustic enclosures for fail-safe mission-critical power in high altitude and extreme climate environments.',
            'voltage_rating': '415 V, 3-Phase, 50 Hz',
            'capacity_range': '15 kVA – 2000 kVA',
            'cooling_type': 'Heavy-duty Tropical Radiator',
            'applicable_standards': 'CPCB IV+ Emission Norms, ISO 8528, BS 5514',
            'features': [
                'Cold-start kit for sub-zero Kashmir & Ladakh altitudes (-25°C operational capability)',
                'Integrated Auto Mains Failure (AMF) with auto-start within 5 seconds of grid interruption',
                'Heavy gauge zinc-galvanized soundproof acoustic canopy',
                'Large integral base fuel tank engineered for 12+ hours continuous full-load run'
            ],
            'specs': [
                ('Power Range', '15 kVA to 2000 kVA'),
                ('Engine Options', 'Cummins / Kirloskar / Perkins / Ashok Leyland'),
                ('Alternator', 'Stamford / Leroy Somer / Crompton'),
                ('Control Panel', 'Deep Sea / ComAp AMF Microprocessor Controller'),
                ('Noise Level', '< 75 dBA @ 1 meter (CPCB Compliant)')
            ]
        },
        {
            'slug': 'sw-01',
            'category': cat_map['switchgear'],
            'name': '11kV / 33kV Vacuum Circuit Breaker (VCB) Panel',
            'model_number': 'PRO-VCB-11-25KA',
            'tag': 'HT Protection',
            'badge': 'MES Standard',
            'description': 'Indoor/Outdoor metal-clad drawout type VCB panels for high-voltage switching, distribution, and transformer feeder protection.',
            'voltage_rating': '11 kV / 33 kV',
            'capacity_range': '630A – 2500A, 25kA/31.5kA',
            'cooling_type': 'Air Insulated Metal Clad',
            'applicable_standards': 'IEC 62271-100 / 200, IS 13118',
            'features': [
                'Tested to withstand rigorous seismic and thermal stress',
                'Separate compartmentalization for breaker, busbars, cables, and low-voltage relays',
                'Numerical micro-controller based over-current, earth fault, and distance protection relays',
                'Comprehensive arc venting flap for operator safety'
            ],
            'specs': [
                ('Rated Voltage', '12 kV / 36 kV'),
                ('Current Rating', '630 A, 1250 A, 2000 A, 2500 A'),
                ('Breaking Capacity', '25 kA / 31.5 kA / 40 kA for 3 sec'),
                ('Operating Mechanism', 'Motorized Spring Charge / Manual Trip')
            ]
        },
        {
            'slug': 'lt-01',
            'category': cat_map['lighting'],
            'name': 'Heavy Duty Octagonal High-Mast Lighting System (16m - 30m)',
            'model_number': 'PRO-MAST-25M-WINCH',
            'tag': 'Strategic Illumination',
            'badge': 'Defense Bases',
            'description': 'High-tensile hot-dip galvanized octagonal high-mast lighting towers equipped with motorized double-drum raising and lowering winches and aviation obstruction systems.',
            'voltage_rating': '230 V / 415 V',
            'capacity_range': '6 to 16 x 400W/500W High Efficiency LED Luminaires',
            'cooling_type': 'Aviation Aluminum Heatsinks',
            'applicable_standards': 'IS 875 (Wind Load up to 180 km/h), TR-7 ILE Specification',
            'features': [
                'Engineered for extreme valley wind pressure and heavy snowfall loading',
                'Equipped with dusk-to-dawn astronomical timer and lightning protection finial',
                'Twin LED aviation obstruction lamps with automatic blinkers',
                'Designed for cantonment sports complexes, parade grounds, and security check posts'
            ],
            'specs': [
                ('Mast Height', '16m, 20m, 25m, 30m, 35m'),
                ('Material', 'High Tensile Steel BS EN 10025 Grade S355'),
                ('Galvanizing', 'Hot Dip Galvanized (Avg 86 Micron thickness, IS 4759)'),
                ('Winch Gear', 'Motorized Dual Drum Self-Sustaining Winch with Wire Rope')
            ]
        },
        {
            'slug': 'cb-01',
            'category': cat_map['cables'],
            'name': '11kV / 33kV XLPE Armored HT Power Cables',
            'model_number': 'PRO-CABLE-XLPE-33KV',
            'tag': 'High Voltage Underground',
            'badge': 'IS 7098 Certified',
            'description': 'Heavy duty stranded aluminum/copper conductor, cross-linked polyethylene (XLPE) insulated, galvanized steel strip/wire armored underground HT power cables.',
            'voltage_rating': '3.3 kV, 6.6 kV, 11 kV, 22 kV, 33 kV',
            'capacity_range': '3 Core x 35 sq.mm to 3 Core x 630 sq.mm',
            'cooling_type': 'Direct Burial / Cable Trench',
            'applicable_standards': 'IS 7098 (Part 2), IEC 60502-2',
            'features': [
                'High thermal short-circuit rating up to 250°C',
                'Flame Retardant Low Smoke (FRLS) outer sheath resisting harsh chemicals and rodent attacks',
                'Excellent resistance to moisture ingress in marshy or mountainous sub-soil'
            ],
            'specs': [
                ('Conductor', 'Class 2 Stranded Electrolytic Grade Aluminum / Copper'),
                ('Insulation', 'Triple Extruded Cross-Linked Polyethylene (XLPE)'),
                ('Armoring', 'Galvanized Flat Steel Strip / Round Steel Wire'),
                ('Outer Sheath', 'Heavy Duty Extruded FRLS / Zero Halogen PVC')
            ]
        }
    ]

    for pdata in products_data:
        specs = pdata.pop('specs', [])
        prod, created = Product.objects.get_or_create(
            slug=pdata['slug'],
            defaults=pdata
        )
        ProductSpec.objects.filter(product=prod).delete()
        for idx, (lbl, val) in enumerate(specs):
            ProductSpec.objects.create(product=prod, label=lbl, value=val, order=idx)
        print(f"  ✓ Product: {prod.name}")

    # 3. Create Case Studies
    case_studies = [
        {
            'slug': 'cs-01',
            'title': 'Northern Command Strategic Substation & Power Distribution',
            'location': 'Udhampur Military Station, J&K',
            'sector': 'Defense Infrastructure',
            'scope_of_work': '33/11kV Substation Erection, HT Switchgear, 2000kVA Transformers & AMF DG Backup',
            'summary': 'Turnkey engineering, supply, erection, testing, and commissioning of primary high-voltage power distribution for critical command facilities.',
            'highlight': 'Designed for uninterrupted failover with dual grid synchronizing and zero downtime tolerance.',
            'order': 1
        },
        {
            'slug': 'cs-02',
            'title': 'High-Altitude Cantonment Electrification & Underground Cabling',
            'location': 'Srinagar & Kashmir Valley Strategic Bases',
            'sector': 'High Altitude Defense',
            'scope_of_work': '11kV XLPE Armored Trench Cabling, Compact Substations & Sub-Zero DG Units',
            'summary': 'Execution of winter-grade resilient electrical power networks capable of operating through extreme snowpack and sub-zero temperatures down to -25°C.',
            'highlight': 'Completed in harsh mountainous terrain under stringent defense security protocols.',
            'order': 2
        },
        {
            'slug': 'cs-03',
            'title': 'Industrial Estate 33kV Line & High-Mast Illumination Grid',
            'location': 'Bari Brahmana / Jammu Industrial Belt',
            'sector': 'Industrial EPC',
            'scope_of_work': 'High-Mast Towers (25m-30m), Transformer Yards & Motor Control Center Panels',
            'summary': 'Complete engineering procurement and installation of heavy industrial power feed lines, capacitor banks for power factor correction, and perimeter lighting.',
            'highlight': 'Reduced distribution losses by 14% with automated APFC panels and premium copper core transformers.',
            'order': 3
        }
    ]

    for cs in case_studies:
        study, created = ProjectCaseStudy.objects.get_or_create(
            slug=cs['slug'],
            defaults=cs
        )
        print(f"  ✓ Case Study: {study.title}")

    print(" Database seeding completed successfully!")

if __name__ == '__main__':
    seed()
