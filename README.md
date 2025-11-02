# cv-creator
Simple "CV as code" Next.js CV creator app.
It aims to provide a **single source of truth** for your profetional life.

The template is designed for you to fork, clone, and make your own.

# Core Features
- **Data-Driven:** All your content (jobs, skills, awards) lives in one file: `src/data/cv-data.js`.
- **Themeable:** All your styling (colors, fonts) lives in one file: `src/styles/theme.css`.
- **Privacy First:** Your personal `cv-data.js` and `theme.css` files are **already in** `.gitignore`. You can update your private CV data without ever committing it to your public repository.
- **Preset System:** Define tags (e.g., "frontend", "product-manager") for your skills and jobs. The CV can be filtered with a URL (`/?preset=frontend`), allowing you to generate tailored CVs for different roles.
- **Easy PDF Export:** Uses CSS print styles. The "Download as PDF" button simply triggers the browser's print dialog, which is styled to look like a perfect A4 document.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4

---

# Getting Started
This project is a template. Here's how you set it up for yourself.

## 1. Clone & Install

```bash
git clone https://github.com/Moeren588/cv-creator
cd cv-creator
npm install
```

## 2. Create Your Personal Files
This template uses `.template` files for your personal content and theme. You need to **copy** them to create the "real" files that the app will use.

These new files (`cv-data.js`, `theme.css`) are already gitignored.

```bash
# 1. Create your data file
cp src/data/cv-data.js.template src/data/cv-data.js

# 2. Create your theme file
cp src/styles/theme.css.template src/styles/theme.css
```

## 3. Customize Your Content
Open `src/data/cv-data.js` and fill it out with your personal information. This is your new "single source of truth."

- Define your `presets` (the filters for your CV).
- Add your `experience`, `skills`, `contact` info, etc.
- Use the `tags` array on each item to control which preset it appears in. An item tagged `"all"` will appear in *every* preset.

## 4. Customize your Theme

### A. Choose Your Fonts: 
Open `src/app/layout.js.` This is the only source-controlled file you need to edit. Import your desired fonts from `next/font/google` and assign them to the `--font-body` and `--font-heading` variables.

### B. Choose Your Colors: 
Open `src/styles/theme.css`. This file is gitignored, so your changes are your own.

- Update the `font-family` names in `:root` to match the fonts you chose in `layout.js`.
- Change all the CSS color variables to match your personal brand. The template is already set up for light and dark modes.

## 5. Run the App

```bash
npm run dev
```

Open the localhost adress (most likely [http://localhost:3000](http://localhost:3000)) to see your new CV. Click the preset buttons to see it filter in real-time.

## 6. Export to PDF
Click the "Download as PDF" button. This will open your browser's print dialog.

- Set the **Destination** to "Save as PDF".
- In **More settings**, ensure **"Background graphics"** is checked. This is essential for your theme's colors to show up. (if you have colored backgrounds that is)
- Set **Scale** to **100%** and **Margins** to **None** for the best result.

---

# How It Works: The Core Concepts

## Theming (theme.css)
The application is styled with Tailwind, but all color and font values are controlled by CSS variables defined in `src/styles/theme.css`.

When you want to change the accent color, you don't hunt through components. You just change the `--text-accent` variable, and the change is applied everywhere.

If you want to fully utilize the built in features of TailwindCSS, check out their predefined colors [here](https://tailwindcss.com/docs/colors).

##  Data (cv-data.js)
The `src/app/page.js` file is a "dumb" layout component. It simply imports the `cvData` object and maps over its arrays.

To add, remove, or edit a job, you *only* touch `cv-data.js`.

## Presets (Tag Filtering)
The filtering logic is handled on the server. The `src/app/page.js` component reads the `searchParams.preset` from the URL.

It then filters every list using this logic: "Show this item if the preset is 'all', OR if the item is tagged 'all', OR if the item's tags include the current preset."

This makes for an extremely fast and powerful way to generate tailored CVs on the fly.