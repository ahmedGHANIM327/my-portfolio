import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
    return (
        <div id="contact">
            <h1 className="skills-title title-section" data-aos="zoom-in">Contact</h1>
            <p>
            I’m currently looking new opportunities,
            so my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <div className='social-contact'>
                <a href="https://www.linkedin.com/in/ahmed-ghanim-11b4a31a5/" rel="noreferrer">
                    <LinkedInIcon sx={{ fontSize: 40 }}/>
                </a>
                <a rel="noreferrer" href="https://github.com/ahmedGHANIM327">
                    <GitHubIcon sx={{ fontSize: 40 }}/>
                </a>
                <a rel="noreferrer" href="mailto: contact@ahmed-ghanim.com">
                    <EmailIcon sx={{ fontSize: 40 }}/>
                </a>
                <a href="tel:+33674311624" rel="noreferrer">
                    <PhoneIcon sx={{ fontSize: 40 }}/>
                </a>
            </div>   
        </div>
    )
}
