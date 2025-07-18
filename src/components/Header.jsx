import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const NAV = [
  { id: 'services', label: 'services' },
  { id: 'process',  label: 'process'  },
  { id: 'reviews',  label: 'reviews'  },
  { id: 'contact',  label: 'contact'  },
];

export default function Header() {
  const [drawer, setDrawer]   = useState(false);
  const [shrink, setShrink]   = useState(false);
  const [active, setActive]   = useState('services');
  const location              = useLocation();
  const ioRef                 = useRef(null);

  /* ---- shrink pill after hero ---- */
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- observe sections to highlight active ---- */
  useEffect(() => {
    if (location.pathname !== '/') return;
    const ids     = NAV.map(n => n.id);
    const options = { rootMargin: '-30% 0px -60% 0px', threshold: 0 };

    ioRef.current = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, options);

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) ioRef.current.observe(el);
    });

    return () => ioRef.current?.disconnect();
  }, [location.pathname]);

  /* ---- go to a specific section ---- */
  const go = id => {
    setActive(id);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const head = document.querySelector('header')?.offsetHeight || 0;
      const y    = el.getBoundingClientRect().top + window.scrollY - head;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setDrawer(false);
  };

  /* ---- goHome (logo click) ---- */
  const goHome = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActive('services');
    setDrawer(false);
  };

  /* ---- lock body when drawer open ---- */
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', drawer);
  }, [drawer]);

  return (
    <>
      {drawer && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawer(false)}
        />
      )}

      {/* -- HEADER WRAPPER -- */}
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
        {/* brand block (logo + gradient text) | only before scroll */}
        {!shrink && (
          <button
            onClick={goHome}
            className="pointer-events-auto absolute left-6 top-1/2 flex -translate-y-1/2 items-center gap-2 outline-none"
          >
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-2xl font-bold heading-gradient tracking-tight leading-tight">
              GenAI&nbsp;Technology&nbsp;Solutions
            </span>
          </button>
        )}

        {/* pill nav bar */}
        <div className="hidden lg:flex justify-center">
          <div
            className={`pointer-events-auto flex items-center gap-6
              border border-[#ffffff1a] bg-black/70 backdrop-blur-md text-gray-300
              ${shrink ? 'px-8 py-3' : 'px-10 py-4'}
              rounded-[22px] transition-all duration-300`}
          >
            {/* logo inside pill after scroll */}
            {shrink && (
              <button onClick={goHome} className="shrink-0 outline-none">
                <img src={logo} alt="logo" className="h-8 w-8" />
              </button>
            )}

            {/* nav items */}
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`text-base md:text-lg capitalize transition-colors duration-200 outline-none
                  ${active === id ? 'text-[#9ad5ff]' : 'hover:text-white'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* hamburger icon */}
        <button
          onClick={() => setDrawer(!drawer)}
          className="pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 lg:hidden"
        >
          {drawer ? (
            <IoClose size={40} className="text-[#9ad5ff]" />
          ) : (
            <HiOutlineMenuAlt4 size={36} className="text-[#9ad5ff]" />
          )}
        </button>
      </header>

      {/* mobile drawer */}
      <nav
        className={`fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs transform
          bg-[#0f0f0f] p-8 transition-transform duration-300 lg:hidden
          ${drawer ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button inside drawer */}
         <div className="flex justify-end mb-6">
          <button onClick={() => setDrawer(false)} className="text-[#9ad5ff]">
            <IoClose size={32} />
          </button>
         </div>
        <ul className="flex flex-col space-y-8">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`w-full text-left text-xl capitalize transition
                  ${active === id ? 'text-[#9ad5ff]' : 'text-gray-300'} hover:text-white`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
