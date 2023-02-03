import './Social.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Social() {
  return (
    <div id="social">
        <a href="https://www.linkedin.com/in/ahmed-ghanim-11b4a31a5/" rel="noreferrer">
                    <LinkedInIcon sx={{ fontSize: 30 }}/>
                </a>
                <a rel="noreferrer" href="https://github.com/ahmedGHANIM327">
                    <GitHubIcon sx={{ fontSize: 30 }}/>
                </a>
                <a rel="noreferrer" href="mailto: contact@ahmed-ghanim.com">
                    <EmailIcon sx={{ fontSize: 30 }}/>
                </a>
                <a href="tel:+33674311624" rel="noreferrer">
                    <PhoneIcon sx={{ fontSize: 30 }}/>
                </a>
    </div>
  )
}