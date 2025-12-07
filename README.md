<div align="center">
    <h1>🎉 Birthday Card Generator</h1>
    <h3>Create Beautiful & Personalized Birthday Cards</h3>
    <h4>React + TypeScript + Vite</h4>

    <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Made%20With-Love-red?style=for-the-badge" />
</div>

<hr/>

<h2>🎉 Birthday Card Generator</h2>
<p>
A modern and creative <b>React + TypeScript + Vite</b> web application for generating beautiful, personalized birthday cards.
Designed especially for wishing <b>university batchmates</b>, friends, and loved ones with stylish and customizable digital cards.
</p>

<hr/>

<h2>🏅 Badges</h2>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />

<hr/>

<h2>✨ Features</h2>

<ul>
    <li>🎨 Create fully customized birthday cards</li>
    <li>🖼 Live preview while editing</li>
    <li>✏️ Edit text, layout, colors, and images</li>
    <li>📥 Download card as an image</li>
    <li>📱 Fully responsive design</li>
    <li>⚡ Powered by React + TypeScript + Vite</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
/project-root
│── App.tsx
│── index.html
│── index.tsx
│── metadata.json
│── package.json
│── package-lock.json
│── tsconfig.json
│── types.ts
│── vite.config.ts
│── README.md
│
├── components/
│     ├── BirthdayCard.tsx
│     └── Editor.tsx
│
├── hooks/
│     └── useCardState.ts
│
├── public/
│     ├── my-background.jpg
│     └── user.jpg
</pre>

<hr/>

<h2>🔧 Local Setup & Installation</h2>

<ol>
    <li><b>Clone the repository</b>
        <pre>git clone https://github.com/your-username/birthday-card-generator.git</pre>
    </li>

    <li><b>Navigate to project</b>
        <pre>cd birthday-card-generator</pre>
    </li>

    <li><b>Install dependencies</b>
        <pre>npm install</pre>
    </li>

    <li><b>Run development server</b>
        <pre>npm run dev</pre>
    </li>
</ol>

<p>App will be available at: <b>http://localhost:5173</b></p>

<hr/>

<h2>🚀 Deployment</h2>

<h3>✅ Deploy on Netlify</h3>

<h4>Method 1 — Build & Upload</h4>

<pre>npm run build</pre>

<ul>
    <li>Generates <b>dist/</b> folder</li>
    <li>Go to Netlify → Deploy site</li>
    <li>Upload <b>dist/</b> folder</li>
    <li>Done 🎉</li>
</ul>

<h4>Method 2 — Auto Deploy from GitHub</h4>

<ol>
    <li>Push project to GitHub</li>
    <li>Open Netlify → Add New Site</li>
    <li>Select your repository</li>
    <li>Build command: <pre>npm run build</pre></li>
    <li>Publish directory: <pre>dist</pre></li>
</ol>

<hr/>

<h2>🌐 Deploy on GitHub Pages (Vite)</h2>

<p>Add this to <b>vite.config.ts</b>:</p>

<pre>
export default defineConfig({
  base: "/birthday-card-generator/",
});
</pre>

<p>Then:</p>

<pre>npm run build</pre>

<p>Install gh-pages:</p>

<pre>npm install gh-pages --save-dev</pre>

<p>Update <b>package.json</b>:</p>

<pre>
"homepage": "https://your-username.github.io/birthday-card-generator",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
</pre>

<p>Deploy:</p>

<pre>npm run deploy</pre>

<hr/>

<h2>📘 Usage Guide</h2>

<ul>
    <li>Open the app</li>
    <li>Enter the name and birthday message</li>
    <li>Customize theme, colors, photo, and layout</li>
    <li>Preview updates instantly</li>
    <li>Click <b>Download</b> to save the card</li>
    <li>Share with friends or batchmates 🎉</li>
</ul>

<hr/>

<h2>🤝 Contributing</h2>

<p>Contributions are welcome!</p>
<ul>
    <li>Report bugs</li>
    <li>Suggest new features</li>
    <li>Improve UI/UX</li>
    <li>Submit pull requests</li>
</ul>

<hr/>

<h2>📜 License</h2>

<pre>
MIT License
Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
</pre>

<hr/>

<h2>👨‍💻 Author</h2>
<p><b>Hasaranga Lakshan</b></p>
<p>GitHub: <a href="https://github.com/UmEsH-HaSaRaNgA">https://github.com/UmEsH-HaSaRaNgA</a></p>
