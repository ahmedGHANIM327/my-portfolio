import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';


export default function Navbar() {

    const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur,setLargeur] = useState(window.innerWidth);

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left:0,
            top:location - 70,
        })

        setToggleMenu(false);
    }

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeLargeur = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize' , changeLargeur);

        return () =>
        {
            window.removeEventListener('resize',changeLargeur);
        }
    }, [])

    return (
                <nav>
                    {(toggleMenu || largeur>700) && (
                        <ul className="nav-liste">
                            <li className="nav-items" ><a href="#home" onClick={handleClick}>Home</a></li>
                            <li className="nav-items" ><a href="#skills" onClick={handleClick}>Skills</a></li>
                            <li className="nav-items"><a href="#experiences" onClick={handleClick}>Experiences</a></li>
                            <li className="nav-items"><a href="#projects" onClick={handleClick}>Projects</a></li>
                            <li className="nav-items"><a href="#education" onClick={handleClick}>Education</a></li>
                            <li className="nav-items"><a href="#contact" onClick={handleClick}>Contact</a></li>
                        </ul>
                    )}
                    <span className="button-menu" onClick={toggleNav}><MenuIcon /></span>
                </nav>
    )
}
