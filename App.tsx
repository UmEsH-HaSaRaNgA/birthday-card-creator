import React, { useRef, useState } from 'react';
import BirthdayCard from './components/BirthdayCard';
import Editor from './components/Editor';
import { useCardState } from './hooks/useCardState';
import { toPng } from 'html-to-image';

const DownloadIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const LoadingIcon: React.FC = () => (
  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default function App() {
  const { cardData, handleTextChange, handleImageChange, handleBackgroundImageChange } = useCardState();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    setIsDownloading(true);
    
    // Track modifications to restore them later
    const originalSrcs = new Map<HTMLImageElement, string>();
    let injectedStyle: HTMLStyleElement | null = null;
    const removedLinks: { node: Element, parent: Node, nextSibling: Node | null }[] = [];

    try {
      await document.fonts.ready;

      // 1. PRE-PROCESS IMAGES TO BASE64
      // This bypasses html-to-image's internal fetcher which often fails with CORS
      const images = Array.from(cardRef.current.querySelectorAll('img'));
      
      await Promise.all(images.map(async (img) => {
        const src = img.src;
        // Skip already local data URLs
        if (src.startsWith('data:')) return;

        try {
          // Add timestamp to bypass cache
          const fetchUrl = src.startsWith('http') && !src.includes('placehold.co') 
            ? `${src}${src.includes('?') ? '&' : '?'}t=${Date.now()}` 
            : src;

          const response = await fetch(fetchUrl, { mode: 'cors' });
          const blob = await response.blob();
          
          return new Promise<void>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              if (reader.result) {
                originalSrcs.set(img, src); // Save original
                img.src = reader.result as string; // Swap to Base64
              }
              resolve();
            };
            reader.readAsDataURL(blob);
          });
        } catch (e) {
          console.warn("Failed to convert image to Base64, leaving original", src, e);
        }
      }));

      // Give React/DOM a moment to render the Base64 images
      await new Promise(resolve => setTimeout(resolve, 100));

      // 2. MANUALLY INJECT FONTS (Bypass CORS)
      // We fetch the CSS text and inject it locally into the card.
      try {
        const fontRes = await fetch('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Satisfy&display=swap');
        const fontCss = await fontRes.text();
        injectedStyle = document.createElement('style');
        injectedStyle.textContent = fontCss;
        cardRef.current.appendChild(injectedStyle);
      } catch (e) {
        console.warn("Manual font fetch failed", e);
      }

      // 3. REMOVE EXTERNAL LINKS (The "Nuclear" Fix)
      // We physically remove the <link> tag from the DOM so html-to-image can't find it to crash.
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        const href = link.getAttribute('href') || '';
        // Target Google Fonts or other external sheets
        if (href.includes('fonts.googleapis.com')) {
          const parent = link.parentNode;
          if (parent) {
            removedLinks.push({ node: link, parent, nextSibling: link.nextSibling });
            parent.removeChild(link);
          }
        }
      });

      // 4. CAPTURE
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        quality: 1.0,
        backgroundColor: '#0f172a',
        filter: (node) => {
          // Double safety: ignore any LINK tags if they managed to sneak in
          return (node instanceof Element) ? node.tagName !== 'LINK' : true;
        }
      });

      // 5. DOWNLOAD
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `birthday-card-${cardData.name.toLowerCase().replace(/ /g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error: any) {
      console.error(error);
      const msg = error.message || JSON.stringify(error, Object.getOwnPropertyNames(error));
      alert(`Download failed: ${msg}`);
    } finally {
      setIsDownloading(false);
      
      // RESTORE STATE
      
      // 1. Put the font links back
      removedLinks.forEach(({ node, parent, nextSibling }) => {
        parent.insertBefore(node, nextSibling);
      });

      // 2. Remove the temporary injected style
      if (injectedStyle && injectedStyle.parentNode) {
        injectedStyle.parentNode.removeChild(injectedStyle);
      }

      // 3. Restore original image sources
      originalSrcs.forEach((src, img) => {
        img.src = src;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
            Birthday Card Generator
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Customize your heartfelt wishes and download the perfect card.
          </p>
        </header>

        <div className="flex justify-center mb-8">
            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all duration-300 ease-in-out ${isDownloading ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'}`}
            >
                {isDownloading ? (
                  <>
                    <LoadingIcon />
                    Generating...
                  </>
                ) : (
                  <>
                    <DownloadIcon />
                    Download Card
                  </>
                )}
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Editor 
              cardData={cardData} 
              onTextChange={handleTextChange} 
              onImageChange={handleImageChange}
              onBackgroundImageChange={handleBackgroundImageChange}
            />
          </div>
          <div className="lg:col-span-2 flex items-center justify-center">
             <div className="w-full max-w-lg aspect-[3/4] shadow-2xl rounded-lg overflow-hidden bg-transparent">
                <BirthdayCard ref={cardRef} {...cardData} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
