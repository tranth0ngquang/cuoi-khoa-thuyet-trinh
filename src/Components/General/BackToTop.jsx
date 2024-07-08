// src/Components/General/BackToTop.jsx
import React, { useEffect, useState } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 z-40 text-3xl text-white border border-white shadow-xl bg-cyan-500 rounded-full px-2.5 py-1.5 hover:bg-cyan-900 duration-500'
        // style={{ position: 'fixed', bottom: '30px', right: '40px', zIndex: 1000, fontSize: '2.5rem', color: 'rgb(6 182 212)',  }}
      >
        <i class="fa-solid fa-angle-up"></i>     </button>
    )
  );
};