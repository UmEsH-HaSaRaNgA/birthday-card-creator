<div align="center">

# 🎉 Birthday Card Generator
### Create Beautiful & Personalized Birthday Cards  
#### React + TypeScript + Vite

<img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/Made%20With-Love-red?style=for-the-badge" />

</div>
🎉 Birthday Card Generator
A modern and creative React + TypeScript + Vite web application for generating beautiful, personalized birthday cards.
Designed especially for wishing university batchmates, friends, and loved ones with stylish and customizable digital cards.
🏅 Badges
￼ ￼ ￼ ￼ ￼
✨ Features

🎨 Create fully customized birthday cards
🖼️ Live preview while editing
✏️ Edit text, layout, colors, and images
📥 Download card as an image
📱 Fully responsive design
⚡ Powered by React + TypeScript + Vite

📁 Project Structure
/project-root │── App.tsx │── index.html │── index.tsx │── metadata.json │── package.json │── package-lock.json │── tsconfig.json │── types.ts │── vite.config.ts │── README.md │ ├── components/ │ ├── BirthdayCard.tsx │ └── Editor.tsx │ ├── hooks/ │ └── useCardState.ts │ ├── public/ │ ├── my-background.jpg │ └── user.jpg 

🔧 Local Setup & Installation

1. Clone the Repository
git clone https://github.com/your-username/birthday-card-generator.git 
2. Navigate to the Project
cd birthday-card-creator 
3. Install Dependencies
npm install 
4. Run the Development Server
npm run dev 
The app will be available at:
👉 http://localhost:5173

🚀 Deployment

✅ Deploy on Netlify
Method 1 — Build & Upload
npm run build 
Generate the dist/ folder
Go to Netlify → Deploy site
Upload the dist/ folder
Done 🎉
Method 2 — Auto Deploy from GitHub
Push project to GitHub
Open Netlify → Add New Site
Select your GitHub repository
Build command: npm run build 
Publish directory: dist 
Deploy and Netlify will generate your URL 🎉

🌐 Deploy on GitHub Pages (Vite)

Add this to vite.config.ts:
export default defineConfig({ base: "/birthday-card-creator/", }); 
Then:
npm run build 
Install gh-pages:
npm install gh-pages --save-dev 
Add to package.json:
"homepage": "https://your-username.github.io/birthday-card-generator", "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" } 
Finally deploy:
npm run deploy 

🖼️ Screenshots

Add images inside your README:
![Preview](./public/my-background.jpg) 
Or UI screenshots:
![UI Screenshot](./assets/screenshot.png)

📘 Usage Guide

Open the app
Enter the name and birthday message
Customize theme, colors, photo, and layout
Preview updates instantly
Click Download to save card
Share with your friends or batchmates 🎉

🤝 Contributing

Contributions are always welcome!
You can:
Report bugs
Suggest new features
Improve UI/UX
Submit pull requests
📜 License
This project is licensed under the MIT License.
MIT License Copyright (c) 2025 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files... 
👨‍💻 Author
hasaranga Lakshan
GitHub: https://[github.com/UmEsH-HaSaRaNgA)]
