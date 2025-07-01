"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingLeftAd() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (adContainerRef.current && !isMobile && !isHidden) {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "//pl27051946.profitableratecpm.com/5c91aa917f0e8e97d23848d02f5207b9/invoke.js";
      
      adContainerRef.current.appendChild(script);
      
      // 添加样式以移除广告内容的内边距和确保完全填充
      const style = document.createElement('style');
      style.textContent = `
        #container-5c91aa917f0e8e97d23848d02f5207b9 {
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          overflow: hidden !important;
        }
        #container-5c91aa917f0e8e97d23848d02f5207b9 > * {
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }
        #container-5c91aa917f0e8e97d23848d02f5207b9 iframe {
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          border: none !important;
          min-width: 100% !important;
          min-height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        if (adContainerRef.current) {
          const scripts = adContainerRef.current.getElementsByTagName("script");
          Array.from(scripts).forEach(script => script.remove());
        }
        // 清理添加的样式
        style.remove();
      };
    }
  }, [isMobile, isHidden]);

  const handleClose = () => {
    setIsHidden(true);
    localStorage.setItem("leftAdHidden", "true");
  };

  if (isMobile || isHidden) {
    return null;
  }

  return (
    <div className="fixed left-0 top-[100px] z-50 pl-[10px]">
      <div className="relative" style={{ transform: "scale(0.60)", transformOrigin: "left top" }}>
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
          aria-label="关闭广告"
        >
          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div 
          ref={adContainerRef}
          id="container-5c91aa917f0e8e97d23848d02f5207b9" 
          className="bg-transparent p-0 m-0 w-full h-full overflow-hidden"
          style={{ 
            minWidth: "300px", 
            minHeight: "250px",
            display: "block",
            width: "100%",
            height: "100%"
          }}
          aria-label="左侧广告"
          tabIndex={0}
        />
      </div>
    </div>
  );
} 