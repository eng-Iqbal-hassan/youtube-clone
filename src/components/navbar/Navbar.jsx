import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className='flex-div nav-left'>
        <img
          className='menu-icon'
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt='menu'
        />
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='flex-div nav-middle'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='search' />
          <img src={search_icon} alt='search' />
        </div>
      </div>
      <div className='flex-div nav-right'>
        <img src={upload_icon} alt='upload' />
        <img src={more_icon} alt='more' />
        <img src={notification_icon} alt='notification' />
        <img src={profile_icon} className='user-icon' alt='profile' />
      </div>
    </nav>
  );
};

export default Navbar;
