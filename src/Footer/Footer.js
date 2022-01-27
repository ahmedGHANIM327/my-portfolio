import './Footer.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Footer() {

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            left:0,
            top:0,
        })
    }

    return (
        <div id="footer">
            <a href="#home" onClick={handleClick}><ExpandLessIcon /></a>
            <p >© Designed by <a href="https://ahmed-ghanim.com">ahmed-ghanim.com</a></p>
        </div>
    )
}
