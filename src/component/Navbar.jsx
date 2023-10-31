import { IconCode } from '@tabler/icons';
import clsx from 'clsx';
import { Link } from 'react-scroll';

export default function Navbar() {
  const navs = [
    {
      name: 'Home',
      link: 'About',
    },
    {
      name: 'Projects',
      link: 'Works',
    },
    {
      name: 'Contact',
      link: 'Contact',
    },
  ];
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white flex items-center justify-between font-inter z-20">
      <div
        className={clsx(
          'text-sm',
          'flex items-center gap-1',
          'sm:text-lg sm:font-bold'
        )}
      >
        <IconCode />
        <span>Randy Portofolio's</span>
      </div>
      <div>
        <ul className={clsx('text-md pr-5', 'flex gap-2')}>
          {navs.map((nav, index) => (
            <Link
              to={nav.link}
              activeClass="font-bold"
              spy={true}
              smooth={true}
              key={index}
            >
              <li className="cursor-pointer">{nav.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
