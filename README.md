# Proach Builders & Engineers (Proach Associates)

> **40+ Years of High-Voltage Electrical Infrastructure, Defense Installations, and Equipment Distribution.**  
> *Class MES Approved Contractors • Serving Jammu, Udhampur, Srinagar, Kashmir Valley & Northern Command.*

---

## ⚡ Overview

**Proach Builders and Engineers** (Proach Associates) is a trusted engineering firm and specialized electrical contractor with over four decades of legacy in delivering mission-critical power systems. We specialize in the supply, turnkey erection, and testing of industrial electrical infrastructure for defense establishments (Military Engineer Services - MES, Northern Command), government power utilities, healthcare institutions, and industrial sectors across **Jammu & Kashmir**.

---

## 🏗️ Technology Architecture

The platform is architected as a modern decoupled full-stack application:

- **Frontend (`/client`)**: React 18 with Vite, Lucide Icons, interactive power grid animation, dynamic catalog search/filtering, modal specification viewer, and institutional RFQ tender builder.
- **Backend (`/server`)**: Django REST Framework (DRF) with SQLite/PostgreSQL, modular catalog and quotation apps, admin desk, and automated seeder.

```
PROACH-BRAND/
├── client/                     # React + Vite Frontend
│   ├── public/                 # Static assets (official logo, favicons)
│   ├── src/
│   │   ├── components/         # Modular UI (Navbar, Hero, ProductCatalog, RFQModal, DefenseCredentials, etc.)
│   │   ├── data/               # Seed catalog and case study dataset
│   │   ├── services/           # Django REST API client with offline fallback
│   │   ├── App.jsx             # Main interactive application
│   │   └── index.css           # Custom Navy & Industrial Gold Design System
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Django REST API Backend
│   ├── manage.py
│   ├── requirements.txt
│   ├── proach_backend/         # Django project settings, WSGI, ASGI, URLs
│   ├── catalog/                # Products, Categories, Specifications API
│   ├── inquiries/              # RFQ & Tender Quote submissions API
│   └── seed_data.py            # Automated equipment catalog seeder
│
└── README.md                   # System documentation & deployment guide
```

---

## 🚀 Quick Start Guide

### 1. Running the React Frontend

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

To create an optimized production build:
```bash
npm run build
```

---

### 2. Running the Django REST Backend

```bash
# Navigate to the server directory
cd server

# (Optional) Create & activate a virtual environment
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Seed catalog database with industrial equipment
python seed_data.py

# Start Django development server
python manage.py runserver
```
The Django API will be accessible at [http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/) and the Admin Desk at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/).

---

## 📋 Core Product & Equipment Lines

1. **Transformers & Substations**:
   - 33kV / 11kV Oil-Immersed Power Transformers (1 MVA – 10 MVA)
   - Cast Resin Dry-Type Fire Survival Transformers (250 kVA – 2500 kVA)
2. **Heavy Duty DG Sets & Paralleling Panels**:
   - Silent Acoustic Generator Units (15 kVA – 2000 kVA, CPCB-IV+)
   - Automated AMF & Multi-Genset Paralleling Desks
3. **HT / LT Switchgear & Control**:
   - 11kV / 33kV Vacuum Circuit Breaker (VCB) Panels
   - Heavy LT Power Control Centers (PCC), MCC, and APFC Harmonic Filter Panels
4. **Strategic & High-Mast Illumination**:
   - Hot-Dip Galvanized Octagonal High Masts (16m – 30m) with motorized winches
   - Defense Perimeter & ATEX Flameproof LED Luminaires
5. **Armored Cables & Conductors**:
   - 11kV / 33kV HT XLPE Armored Power Cables (IS 7098 compliant)
   - 1.1kV Multi-Core Control and Power Armored Cables
6. **Substation Protection & Earthing**:
   - Maintenance-Free Chemical Earthing Systems (IS 3043 / IEEE 80)
   - Gapless Zinc Oxide (ZnO) Station Class Lightning Surge Arresters

---

## 🏛️ Defense & Institutional Credentials

- **Class MES Contractor**: Qualified for high-value tenders under Northern Command.
- **Standards Compliance**: IS 2026, IS 7098, IS 3043, IEC 60076, IEC 61439, IEEE 80, CPCB IV+.
- **High Altitude Resilience**: Sub-zero operation kit tested down to -25°C for Kashmir and Ladakh sectors.
- **Regional Logistics Coverage**: Jammu Central Logistics Base, Udhampur Defense Division, Srinagar & Kashmir Valley Rapid Response Base.

---

## 📞 Direct Contact Desk

- **Direct Calling / WhatsApp**: [+91-97976-81768](tel:+919797681768)
- **Tender Inquiries Email**: [dkumar2711@rediffmail.com](mailto:dkumar2711@rediffmail.com)
- **Headquarters**: Jammu & Kashmir, India

---
*© 1984 – Present Proach Builders and Engineers (Proach Associates). All rights reserved.*
