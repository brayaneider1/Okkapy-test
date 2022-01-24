import { InputComponent } from "../Inputs/InputComponent"
import { IoMdNotifications, IoMdSunny } from 'react-icons/io'
export const Header = ({ filterData }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <h2>Logo & Notifications</h2>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a> </li>
            <li> <a href="#">Crafted</a></li>
            <li> <a href="#">Account</a> </li>
            <li><a href="#">Logs</a></li>
          </ul>
        </nav>
      </div>
      <div className="header__options">
        <InputComponent placeholder="Search for ip" onChange={filterData} />
        <div className="item">
          <IoMdNotifications />
          <div className="dot"></div>
        </div>
        <div className="item">
          <IoMdNotifications />
        </div>
        <div className="item">
          <IoMdSunny />
        </div>
      </div>
    </div>
  )
}
