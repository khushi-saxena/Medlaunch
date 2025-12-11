# FE MultiStep Form Challenge

A premium, responsive, multi-step form implementation built with React, showcasing modern UI/UX principles and robust state management.

## 🚀 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🛠 Tech Stack

*   **Framework:** React (Vite)
*   **Language:** JavaScript
*   **Styling:** Vanilla CSS (Glassmorphism Design System) with CSS Variables
*   **State Management:** React Hook Form + Context API
*   **Routing:** Conditional Rendering (Single Page Flow)

## 💡 Development Approach

### Architecture
I adopted a component-based architecture where the form state is centralized using `React Hook Form`'s `FormProvider`. This allows:
*   **State Persistence:** Data is retained when navigating back and forth between steps.
*   **Seamless Validation:** Each step validates its specific fields before proceeding.
*   **Performance:** Uncontrolled inputs with `register` reduce re-renders compared to traditional controlled states.

### Design System
To meet the "Premium" and "Wow" factor requirements, I implemented a **Glassmorphism** theme:
*   Use of `backdrop-filter: blur` for depth.
*   Vibrant gradients and neon accents.
*   Smooth micro-interactions (hover states, focus effects, transitions).
*   Fully responsive layout (centered card on desktop, fluid on mobile).

### Assumptions & Limitations
*   **Figma Access:** Due to restricted access to the specific Figma frame details (login wall), I implemented a standard, comprehensive generic multi-step flow (Personal -> Address -> Preferences -> Review) focusing on the *structure* and *visual quality* requested in the prompt.
*   **Validation:** Implemented strict regex patterns for Email and Zip Code to demonstrate robustness.

## 📝 Features

*   **Multi-Step Navigation:** Smooth transitions between steps.
*   **Form Validation:** Real-time feedback and "Next" prevention on errors.
*   **Review Step:** Summary allowing users to edit previous sections.
*   **Console Logging:** Submits payload to console as requested.
*   **Bonus:** Theme toggle (Dark/Light preference included in form data).
