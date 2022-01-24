import { Link } from 'react-router-dom'
import Logo from '../../assets/img/LogoTesigue.png'

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="navigation">
        <ul>
          <li><a href="#">About</a> </li>
          <li> <a href="#">Support</a></li>
          <li> <a href="#">Purchase</a> </li>
        </ul>
      </nav>
    </div>
  )
}
