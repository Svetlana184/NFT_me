import {Link} from 'react-router-dom';
import './Header.scss'
import logo from '../../assets/logo.svg'

export default function Header(){
  return (
    <header className="header_nft">
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>Marketplace</li>
                <li>Artists</li>
                <li>Contact</li>
            </ul>
        </nav>
        <button>Buy Template</button>
    </header>
  )
}