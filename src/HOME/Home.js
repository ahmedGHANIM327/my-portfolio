import { Grid } from '@mui/material'
import './Home.css'
import photo from '../assets/imageAhmed.png'
import Typed from 'react-typed';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import myresume from '../assets/Ahmed_GHANIM_CV_ENG.pdf'

export default function Home() {

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left:0,
            top:location-70,
        })
    }

    return (

        <div id="home">
                <Grid container spacing={5} direction="row" justifyContent="space-evenly" alignItems="center">
                    <Grid item xs={12} md={6} className="about-div" style={{paddingleft:"105px " ,textAlign:"center"}}>
                        <p class="desc1">Hi, my name is</p>
                        <h4 className="home-description"><span className="home-name">AHMED GHANIM</span></h4>
                        <Typed className="home-description" strings={["Software Engineer at CAPGEMINI - Skywise Airbus ", "Full Stack Developer"]} typeSpeed={30} backSpeed={50} loop />
                        <div className="button-div">
                            <Button href={myresume} target="_blank" className="download-button" variant="outlined" endIcon={<DownloadIcon />}>
                                Download Resume
                            </Button>
                            <Button className="contact-button" variant="contained" endIcon={<SendIcon />}>
                                <a href="#contact" onClick={handleClick}>Contact Me</a>
                            </Button>
                        </div>  
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign:"center"}}>
                            <img src={photo} alt="Logo" title="ahmed ghanim - I help people build their websites with templates and web development tutorials."/>
                    </Grid>
                </Grid>
        </div>
        
    )
}

