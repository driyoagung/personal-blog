<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Laravel Inertia React Starter Kit

A robust, modern starter kit for building monolithic, single-page applications using **Laravel**, **React**, and **Inertia.js**. 

This starter template jumps straight over the boilerplate and equips you with a premium frontend tech stack pre-configured with **Tailwind CSS v4**, **Shadcn UI**, and **TanStack Table**, all seamlessly wrapped inside an Inertia persistent **Dashboard Layout**.

## ✨ Features

- **Backend Foundation**: Laravel 11/12
- **Frontend Engine**: React 18+ powered by Inertia.js (No separate API needed).
- **Styling**: Tailwind CSS v4, initialized with a sleek, native **Dark Mode** aesthetic.
- **UI Architecture**: Includes core [Shadcn UI](https://ui.shadcn.com/) components (`Button`, `Input`, `Label`, `Card`, `Table`) configured precisely for Laravel.
- **Advanced Tables**: Data tables heavily optimized with `@tanstack/react-table` displaying Global Search/Filtering and Column Sorting.
- **Persistent Layouts**: A responsive `DashboardLayout` featuring a collapsible sidebar navigation (using `lucide-react` icons) that persists state beautifully without page reloads.
- **Functional CRUD**: Comes with a working `Post` CRUD module to demonstrate exactly how the components, Layouts, routing, and Tanstack Table come together.
- **Toast Notifications**: Global notifications using `react-toastify`, instantly triggered by standard Laravel `->with('success', ...)` session flashes (handled centrally via Inertia middleware).

## 🚀 Getting Started

Ensure you have PHP (>= 8.2), Composer, and Node.js installed on your machine.

1. **Clone the repository**
   ```bash
   git clone <your-repo-url> <project-name>
   cd <project-name>
   ```

2. **Install PHP & Node dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   *Make sure to configure your `DB_*` variables in the `.env` file!*

4. **Run Database Migrations**
   ```bash
   php artisan migrate
   ```

5. **Serve the Application**
   You will need to run both the Laravel server and Vite asset bundler simultaneously:
   
   ```bash
   # Terminal 1: Vite Dev Server
   npm run dev
   ```
   ```bash
   # Terminal 2: Laravel Server (if not using Laragon/Valet)
   php artisan serve
   ```

## 🗺️ Project Structure Highlights

- `resources/js/Layouts/DashboardLayout.jsx` — The core persistent layout housing the Sidebar and Topbar.
- `resources/js/Pages/Dashboard.jsx` — The landing page displaying mock statistical Cards.
- `resources/js/Pages/Posts/` — The example CRUD, containing standard `Index`, `Create`, and `Edit` views utilizing Shadcn forms and Tanstack tables.
- `resources/js/components/ui/` — The directory containing all your localized Shadcn UI components.
- `resources/js/lib/utils.js` — Utility functions, notably `cn()` used by Shadcn for Tailwind classes.

## 🧩 Adding more Shadcn Components
Since Laravel Inertia has a highly specific filesystem pathing (`resources/js/...`), using the default Shadcn CLI might sometimes overwrite generic paths depending on your configuration. 

This starter kit has manually bootstrapped the foundational components. To add more components like Dialogs or Selects, it's highly recommended to just copy the component code from the [Shadcn Docs](https://ui.shadcn.com/) directly into `resources/js/components/ui/` or use the CLI very carefully ensuring it targets your `resources/js/` folders.

## 📄 License
Released under the MIT License. Feel free to use this as a foundation for any personal or commercial projects.
