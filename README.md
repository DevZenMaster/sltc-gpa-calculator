# SLTC GPA Calculator 🎓

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=vercel)](https://sltc-gpa-calculator.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

The **unofficial** but definitive academic companion for the **Faculty of Computing & IT (Batch of 2028)** at Sri Lanka Technology Campus (SLTC).

---

## ⚡ Features

This isn't just a calculator; it's a full academic tracker.

* **📚 Pre-loaded Curriculum:** Includes **all 8 semesters** of Core & Elective modules for:
    * BSc Hons in Software Engineering
    * BSc Hons in Cloud Computing
    * BSc Hons in Cyber Security
    * BSc Hons in Data Science
    * Degree in Applied IT
* **📊 Real-time Analytics:** Instantly calculates:
    * Semester GPA
    * Yearly GPA (Year 1, 2, 3, 4)
    * Final Degree GPA
* **🎯 Custom Electives:** Smart dropdowns filter electives based on your specific semester and degree.
* **📱 100% Responsive:** Works perfectly on mobile phones, tablets, and desktops.
* **🔒 Privacy First:** No database. No login. All calculations happen locally in your browser.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/DevZenMaster/sltc-gpa-calculator.git](https://github.com/DevZenMaster/sltc-gpa-calculator.git)
    cd sltc-gpa-calculator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 How to Use

1.  **Select Degree:** Choose your program from the dropdown (e.g., Software Engineering).
2.  **Select Semester:** Click on the tabs (1-8). Core modules will auto-load.
3.  **Enter Grades:** Select your grade (A+, A, A-, etc.) for each module.
4.  **Add Electives:** Use the dropdown at the bottom to add specific electives for that semester.
5.  **View Results:** Check the "GPA Dashboard" at the top to see your cumulative progress.

---

## 📝 Data Source & Accuracy

* **Source:** *SLTC Faculty of Computing and IT - Student Handbook (Batch of 2028)*.
* **Grading Schema:** Based on **Table 18** of the handbook.
    * `A+` = 4.0
    * `A` = 4.0
    * `A-` = 3.7
    * `E (Weak)` = 0.7 (Specific to SLTC)
    * `E` = 0.0

> **⚠️ Disclaimer:** This tool is for estimation purposes only. Always verify your official results with the SLTC Registrar's office.

---

## 🤝 Contributing

Contributions are welcome! If you find a missing module or a calculation error:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewModule`)
3.  Commit your Changes (`git commit -m 'Add missing elective'`)
4.  Push to the Branch (`git push origin feature/NewModule`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Made with ❤️ by **[DevZenMaster](https://github.com/DevZenMaster)** for the SLTC Community.