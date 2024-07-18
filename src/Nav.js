import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { MdMenu, MdClose } from 'react-icons/md';

import Select from "./Select";
import "./Nav.css";
 
const Nav = ({ handleInputChange, query,handleClick }) => {
  return (
    <nav className="nav1">
      <div className="nav-container">
         <input
          className="input1"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder=" Search..."
        />
      </div>
      <div className="profile-container  ">
        <Select handleClick={handleClick} className='location1' />
      </div>
    </nav>
  );
};

export default Nav;