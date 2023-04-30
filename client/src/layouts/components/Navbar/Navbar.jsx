import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "./NavbarConstants";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const {pathname} = useLocation()
  return (
    <nav className="border-b p-4 shadow-lg bg-white">
      <div className='flex justify-between mx-10 text-lg font-bold'>
        <div>
          <p>Logo</p>
        </div>
        <div className="flex space-x-10">
          {NAVBAR_LINKS.map((nav, index) => (
            <div key={index}>
              <Link className={`${pathname.includes(nav.path)?"text-black":"text-black"}`} to={`${nav.path}`}>
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
