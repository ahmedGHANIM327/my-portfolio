import './Contact.css';
import { Grid } from '@mui/material';
import photo_contact from '../assets/Contact-Me.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/Github.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'

export default function Contact() {
    return (
        <div id="contact">
            <h1 className="skills-title title-section">Contact</h1>
            <div className="contact-div">
                <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center" >
                        <img src={photo_contact} alt="Logo" title="ahmed ghanim - CONTACT"/>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <div className="contact-items">
                            <div className="item">
                                <a href="https://www.linkedin.com/in/ahmed-ghanim-11b4a31a5/" rel="noreferrer">
                                <img src={linkedin} alt="Logo" style={{marginRight:'5px'}} title="ahmed ghanim - Linkedin"/>
                                </a>
                                <a rel="noreferrer" href="https://www.linkedin.com/in/ahmed-ghanim-11b4a31a5/">ahmed-ghanim-11b4a31a5</a>
                            </div>
                            <div className="item">
                                <a rel="noreferrer" href="https://github.com/ahmedGHANIM327">
                                <img src={github} alt="Logo" style={{marginRight:'5px'}} title="ahmed ghanim - Github"/>
                                </a>
                                <a rel="noreferrer" href="https://github.com/ahmedGHANIM327">ahmedGHANIM327</a>
                            </div>
                            <div className="item">
                                <a rel="noreferrer" href="mailto: ahmedghanim902@gmail.com">
                                <img src={email} alt="Logo" style={{marginRight:'5px'}} title="ahmed ghanim - Email"/>
                                </a>
                                <a rel="noreferrer" href="mailto: ahmedghanim902@gmail.com">ahmedghanim902@gmail.com</a>
                            </div>
                            <div className="item">
                                <a href="tel:+33674311624" rel="noreferrer">
                                <img src={phone} alt="Logo" style={{marginRight:'5px'}} title="ahmed ghanim - Phone"/>
                                </a>
                                <a href="tel:+33674311624" rel="noreferrer">+336 74 31 16 24</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
