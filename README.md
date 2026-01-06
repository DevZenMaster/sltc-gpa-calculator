# SLTC GPA Intelligence Hub 🎓

[![Live Deployment](https://img.shields.io/badge/Live_Engine-Visit_Now-3b82f6?style=for-the-badge&logo=vercel)](https://sltc-gpa-calculator.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

The **unofficial** definitive academic strategist and GPA intelligence engine for **Sri Lanka Technological Campus (SLTC)**. Designed for the Batch of 2028 and beyond.

---

## ⚡ Intelligence Suite Features

This platform transcends simple math, providing a high-precision academic roadmap for students.

* **📚 Pre-loaded Ecosystem:** Complete Core & Elective modules for all major faculties:
    * **Computing & IT:** Software Engineering, Cloud, Cyber Security, Data Science, Applied IT.
    * **Engineering:** Civil, Mechanical, Electronic, etc.
    * **Business, Technology, Science & Music.**
* **📊 Predictive Analytics:** * Real-time Semester GPA (SGPA) & Cumulative GPA (CGPA).
    * **Strategic Roadmap:** Logic that tells you exactly what GPA you need to average in future semesters to hit "First Class" or "Second Upper."
* **📄 Professional Reports:** Generate and download official-style academic statements and PDF transcripts instantly.
* **🔒 Privacy-Centric Architecture:** Zero-server processing. Your grades are processed locally in your browser's runtime and never leave your device.
* **📱 Ultra-Responsive UI:** Optimized for mobile-first interaction with Next.js 16/React 19 for zero-lag performance.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16.1.1](https://nextjs.org/) (App Router & Turbopack)
* **Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Glassmorphism & Custom Spectrum Glows)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Local Development

Initialize the intelligence engine on your local machine.

### Prerequisites

* Node.js (v20 or higher recommended)
* npm (v10 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/DevZenMaster/sltc-gpa-calculator.git](https://github.com/DevZenMaster/sltc-gpa-calculator.git)
    cd sltc-gpa-calculator
    ```

2.  **Install dependencies**
    *Note: Due to Next.js 16 peer dependencies, use the legacy flag if needed.*
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📖 Operational Guide

1.  **Select Faculty & Degree:** Choose your specific academic pathway.
2.  **Initialize Semester:** Select tabs 1-8 to load pre-configured modules.
3.  **Data Input:** Select grades from the dropdowns; the engine calculates totals in real-time.
4.  **Analyze Forecast:** View the **Target GPA** cards to understand your required trajectory for Honors classifications.
5.  **Export Statement:** Use the "Download Report" button to generate a PDF academic statement.



---

## 📝 Calculation Logic & Accuracy

* **Protocol:** Strictly follows the *SLTC Student Handbook (Batch of 2028)*.
* **Logic Engine:** Weighted average based on Credit values ($GPA = \sum(GP \times C) / \sum C$).
* **Grading Matrix:**
    * `A+` / `A` = 4.0
    * `A-` = 3.7
    * `B+` = 3.3
    * ...down to `E` = 0.0

> **⚠️ Legal Disclaimer:** This is an unofficial tool. It is intended for estimation and strategic planning only. Final degree classifications are exclusively determined by the SLTC Registrar’s Office.

---

## 🤝 Technical Contributions

We welcome optimizations to the logic engine or updates to faculty module data.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/LogicUpdate`).
3. Commit your Changes (`git commit -m 'Refactor GPA forecast algorithm'`).
4. Push to the Branch (`git push origin feature/LogicUpdate`).
5. Open a Pull Request.

---

Made with 💻 by **[Ruwan Sanjeewa](https://www.ruwansanjeewa.com)** (DevZenMaster) for the SLTC Academic Community.
