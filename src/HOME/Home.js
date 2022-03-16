import { Grid } from '@mui/material'
import './Home.css'
import photo from '../assets/imageAhmed.png'
import Typed from 'react-typed';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import myresume from '../assets/GHANIM_AHMED_CV .pdf'

export default function Home() {
    return (

        <div id="home">
                <Grid container spacing={5} direction="row" justifyContent="space-evenly" alignItems="center">
                    <Grid item xs={12} md={6} className="about-div" style={{paddingleft:"105px " ,textAlign:"center"}}>
                        <h4 className="home-description">Hi there , I am <span className="home-name">AHMED GHANIM</span></h4>
                        <Typed className="home-description" strings={["Software Development Engenieer at CAPGEMINI ", "M2 Student at ENSEEIHT Toulouse"]} typeSpeed={30} backSpeed={50} loop />
                        <div className="button-div">
                            <Button href={myresume} target="_blank" className="download-button" variant="outlined" endIcon={<DownloadIcon />}>
                                Download Resume
                            </Button>
                            <Button href="#contact" className="contact-button" variant="contained" endIcon={<SendIcon />}>
                                Contact Me
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

