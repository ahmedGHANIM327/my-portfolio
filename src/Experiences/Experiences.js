import './Experiences.css';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from 'react';

export default function Experiences() {

    const [largeur,setLargeur] = useState(window.innerWidth);
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
        <div id="experiences">
            <h1 className="skills-title title-section" data-aos="zoom-in">Professional Experiences</h1>
            <div className="experience-left" >
                <div className="border-top"></div>
                <div className="experience-content" data-aos="fade-right" >
                    <WorkIcon /> 
                    <h2 >CAPGEMINI</h2>
                    <p><LocationOnIcon sx={{marginRight:"2px"}}/>Toulouse , France</p>
                    <p><AccessTimeFilledIcon sx={{marginRight:"2px"}}/>  09/2021-NOW</p>
                    <h3>Software Development Engenieer</h3>
                </div>
            </div>
            <div className={largeur>700 ? "experience-right" : "experience-left"}>
                <div className="border-top"></div>
                <div className="experience-content" data-aos={largeur>700 ? "fade-left" : "fade-right"} >
                    <WorkIcon /> 
                    <h2 >Capitole Formation</h2>
                    <p><LocationOnIcon sx={{marginRight:"2px"}}/>Toulouse , France</p>
                    <p><AccessTimeFilledIcon sx={{marginRight:"2px"}}/>  06/2021-08/2021</p>
                    <h3>Web Developer</h3>
                </div>
            </div>
        </div>
    )
}
