import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV = [
  { id: 'services', label: 'services' },
  { id: 'process', label: 'process' },
  { id: 'reviews', label: 'reviews' },
  { id: 'contact', label: 'contact' },
];

const PRODUCTS = [
  {
    label: 'GTSBOT',
    subtext: 'Instant answers powered by your data',
    description:
      'A GTS-powered chatbot that retrieves from your documents, websites, and FAQs — ideal for customer support, education, legal, and more.',
    route: '/aichatbot',
  },
  {
    label: 'GTSCANVAS',
    subtext: 'Auto-generate high-converting marketing banners',
    description:
      'Feed in your content, and let AI design eye‑catching visuals for web, social media, and ads — customized to your brand.',
    route: '/banner',
  },
];

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState('services');
  const location = useLocation();
  const navigate = useNavigate();
  const ioRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const ids = NAV.map(n => n.id);
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

  const go = id => {
    setActive(id);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const head = document.querySelector('header')?.offsetHeight || 0;
      const y = el.getBoundingClientRect().top + window.scrollY - head;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setDrawer(false);
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActive('services');
    setDrawer(false);
  };

  const goToProduct = route => {
    setDrawer(false);
    navigate(route);
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', drawer);
  }, [drawer]);

  return (
    <>
      {drawer && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawer(false)}
        />
      )}

      <header className="pointer-events-none fixed inset-x-0 top-4 z-[999]">
        {/* Brand logo before scroll */}
        {!shrink && (
          <button
            onClick={goHome}
            className="pointer-events-auto absolute left-6 top-1/2 flex -translate-y-1/2 items-center gap-2 outline-none"
          >
            <img src={logo} alt="logo" className="h-8 w-8 object-contain max-w-[40px]" />
            <span className="text-xl sm:text-2xl font-bold heading-gradient tracking-tight leading-tight">
              GenAI&nbsp;Technology&nbsp;Solutions
            </span>
          </button>
        )}

        {/* Pill Nav Bar (desktop) */}
        <div className="hidden lg:flex justify-center">
          <ul
            className={`list-none pointer-events-auto flex items-center gap-6
              border border-[#ffffff1a] bg-black/70 backdrop-blur-md text-gray-300
              ${shrink ? 'px-8 py-3' : 'px-10 py-4'}
              rounded-[22px] transition-all duration-300`}
          >
            {shrink && (
              <li>
                <button onClick={goHome} className="shrink-0 outline-none">
                  <img src={logo} alt="logo" className="h-8 w-8 object-contain max-w-[32px]" />
                </button>
              </li>
            )}

            {NAV.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className="w-full text-left text-xl capitalize text-white hover:opacity-80 transition"
                >
                  {label}
                </button>
              </li>
            ))}

            {PRODUCTS.map(({ label, route }) => (
              <li key={label}>
                <button
                  onClick={() => goToProduct(route)}
                  className="w-full text-left text-xl text-white hover:opacity-80 transition"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger icon */}
        <button
          onClick={() => setDrawer(!drawer)}
          className="pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 lg:hidden"
        >
          {drawer ? (
            <IoClose size={40} className="text-[#9ad5ff]" />
          ) : (
            <HiMenu size={36} className="text-[#9ad5ff]" />
          )}
        </button>
      </header>

      {/* Mobile drawer */}
      <nav
        className={`fixed inset-y-0 right-0 z-[1000] w-4/5 max-w-xs transform
          bg-[#0f0f0f] p-8 transition-transform duration-300 lg:hidden
          ${drawer ? 'translate-x-0' : 'translate-x-full'}`}
      >
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

          <hr className="border-[#ffffff1a] my-4" />

          {PRODUCTS.map(({ label, route }) => (
            <li key={label}>
              <button
                onClick={() => goToProduct(route)}
                className="w-full text-left text-xl text-[#9ad5ff] hover:text-white transition"
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
