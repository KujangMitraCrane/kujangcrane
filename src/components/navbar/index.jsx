import React, { useState } from 'react';
import { useNavigate, Link as WaLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './navbar.css';
import { MdSearch, MdMenu, MdOutlineKeyboardDoubleArrowUp, MdWhatsapp } from 'react-icons/md';
import { ActiveLink, LinkNavbar } from './Link';
import Search from './search';
import logo from '../../assets/kmc.png';

const Navbar = ({ isScrolled }) => {
  const whatsappLink = `https://wa.me/081511020455`;

  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`navbar ${isScrolled ? 'fixed' : ''}`}>
      <div className="logo">
        <img src={logo} alt="kujang-mitra-crane" onClick={() => navigate('/')} />
      </div>
      <nav className="navlink">
        <LinkNavbar onClose={() => setIsNavbar(false)} />
      </nav>
      {isNavbar && (
        <nav className="activeLink">
          <ActiveLink onClose={() => setIsNavbar(false)} />
        </nav>
      )}
      <Search search={search} setSearch={setSearch} isSearchOpen={isSearch} />
      <div className={`navbarToggle ${isNavbar ? 'active' : ''}`} onClick={() => setIsNavbar(!isNavbar)}>
        <MdMenu />
      </div>
      <div className={`searchToggle ${isSearch ? 'active' : ''}`} onClick={() => setIsSearch(!isSearch)}>
        <MdSearch />
      </div>
      <div className="hub">
        <WaLink className="whatsapp" to={whatsappLink} title="whatsapp" target="_blank">
          <MdWhatsapp />
        </WaLink>
      </div>
      <div className="toTop">
        <Link to="support" smooth={true} duration={1000}>
          <MdOutlineKeyboardDoubleArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
