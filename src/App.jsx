import React, { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Details from './pages/Details';
import More from './pages/More'
const App = () => {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const [lastScrollPos, setLastScrollPos] = useState(0);

//   useEffect(() => {
// 	console.log(lastScrollPos)
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const isScrollingDown = currentScrollPos > lastScrollPos;

//       if (homeRef.current && aboutRef.current && projectsRef.current) {
//         const homeHeight = homeRef.current.clientHeight;
//         const aboutHeight = aboutRef.current.clientHeight;

//         if (isScrollingDown) {
//           if (currentScrollPos < homeHeight) {
//             aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//           }
//           else if (currentScrollPos < homeHeight + aboutHeight) {
//             projectsRef.current.scrollIntoView({ behavior: 'smooth' });
//           }
//         } else {
//           if (currentScrollPos >= homeHeight + aboutHeight / 2) {
//             aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//           }
//           else if (currentScrollPos < homeHeight) {
//             homeRef.current.scrollIntoView({ behavior: 'smooth' });
//           }
//         }
//       }
//       setLastScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollPos]);

  return (
    <>
      {/* <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div> */}
        <Home />
        <About />
        <Projects />
		<Details/>
		<More/>

    </>
  );
};

export default App;
