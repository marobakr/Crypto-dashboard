## 🌟 New Features

### 🔹 1. Crypto Details Page

- Added a new **Crypto Details** page to display detailed information about a specific cryptocurrency.
- The page fetches **real-time data** based on the selected coin’s slug.

---

### 🔹 2. Tailwind → SCSS Refactor

- All **Tailwind utility classes** have been **refactored into pure SCSS**.
- This improves maintainability and provides more flexibility for custom styling.

---

### 🔹 3. Dark & Light Themes

- Implemented a complete **theme system** supporting both **dark** and **light** modes.
- Themes are managed through a **global service** using Angular’s `Renderer2`.
- A **floating toggle button** allows smooth switching between themes.

---

### 🔹 4. Role-Based Access Control (RBAC)

- Added **role-based access control** with two user roles:
  - **Admin** → Can _view_ crypto details and _delete_ crypto Row And Show The Live Chart .
  - **User** → Can _view only_ the table, **without live chart**, **without delete permissions**, and **without access to detailed views**.
- Access behavior is handled dynamically to ensure a secure and consistent UI.
