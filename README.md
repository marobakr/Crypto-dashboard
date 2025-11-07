# 🪙 Crypto Dashboard

A responsive Angular application for live cryptocurrency tracking and data visualization.

🔗 **Repository:** [github.com/marobakr/Crypto-dashboard](https://github.com/marobakr/Crypto-dashboard)

---

## Project Overview

This project follows a **feature-based structure** to keep the code scalable and maintainable.
Below is an explanation of the core setup and implementation details.

---

### 1. Global HTTP Interceptor

A global interceptor is created to handle all outgoing HTTP requests.
It automatically:

- Injects the **base URL** into every request instead of manually adding it for each HTTP method.
- Sets the **API key** in the request headers to avoid repeating this logic across different services.

This ensures cleaner code and a single point of control for request configuration.

---

### 2. HTTP Service

A single HTTP service is created that includes all common HTTP methods:
`GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

This service:

- Prevents code duplication by reusing the same request methods.
- Avoids injecting `HttpClient` multiple times across different files — it’s injected only once here.

All other features or services can use this centralized HTTP service to make API calls.

---

### 3. API Configuration File

An `api-config.ts` file is created to store all endpoint names as key-value pairs.

```ts
export const API_CONFIG = {
  COINS: '/COINS',
};
```

---

## 🔧 Installation & Running the Project

Follow these steps to install and run the Angular project locally:

1. **Clone the repository**

```bash
git clone https://github.com/marobakr/Crypto-dashboard.git
cd Crypto-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
ng serve
```

4. **Access the application**

Open your browser and navigate to:
[http://localhost:4200](http://localhost:4200)

5. **Build for production**

```bash
ng build --prod
```

This will generate the production-ready files in the `dist/` folder.

---
