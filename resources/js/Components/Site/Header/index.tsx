import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import {
  FaPhoneFlip,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from 'react-icons/fa6';
import { IoChevronUpSharp, IoMail } from 'react-icons/io5';
import { PiMapPinFill } from 'react-icons/pi';
import BotoesSociais from '../BotoesSociais';
import { animateScroll as scroll } from 'react-scroll';
import NavBar from './NavBar';

const Header = () => {
  const { conf, cat, pag } = usePage().props;
  const [scrollPosition, setScrollPosition] = useState<any>();

  const irParaOTopo = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const getScrollPosition = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', getScrollPosition);
    return () => window.removeEventListener('scroll', getScrollPosition);
  }, []);

  return (
    <>
      {scrollPosition > 700 && (
        <button
          onClick={irParaOTopo}
          className="fixed bottom-5 right-5 bg-red-um bg-opacity-80 text-white h-10 w-10 rounded flex items-center justify-center  transition-all duration-300 ease-in-out"
        >
          <IoChevronUpSharp size={30} />
        </button>
      )}

      <header className="bg-blue-quatro">
        <div className="container mx-auto hidden md:flex items-center justify-between">
          <ul className="flex flex-1 items-center justify-between py-4 w-full">
            <li className="flex items-center justify-center">
              <PiMapPinFill size={20} color="#eeaa17ab" />
              <span className="text-sm text-gray-50 ml-1">
                {conf
                  ? conf[0]?.address +
                    ' - ' +
                    conf[0].neighborhood +
                    ' - ' +
                    conf[0].city
                  : ''}
              </span>
            </li>
            <li className="flex items-center justify-center">
              <FaPhoneFlip size={20} color="#eeaa17ab" />
              <span className="text-sm text-gray-50 ml-1">
                {conf ? conf[0]?.phone : ''}
              </span>
            </li>
            <li className="flex items-center justify-center">
              <IoMail size={20} color="#eeaa17ab" />
              <span className="text-sm text-gray-50 ml-1">
                {conf ? conf[0]?.email : ''}
              </span>
            </li>
          </ul>
          <div className="flex-1">
            <BotoesSociais className="flex items-center justify-end gap-4" />
          </div>
        </div>
      </header>
      <nav
        className={`sticky top-0 bg-blue-cinco shadow-md flex items-center z-40 ${scrollPosition > 125 ? 'bg-opacity-90' : ''}`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <div className="w-14">
                  <ApplicationLogo />
                </div>
              </Link>
            </div>
            <div>
              <NavBar pages={pag[0]} categories={cat[0]} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
