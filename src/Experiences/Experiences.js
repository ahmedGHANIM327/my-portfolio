import './Experiences.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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

            <div className="experiences">
                <div className="experience" data-aos="zoom-in">
                    <h2>CAPGEMINI</h2>
                    <p className='description'>Toulouse , France</p>
                    <p className='description'> 09/2021 - NOW</p>
                    <h3>Software Engineer</h3>
                    <div className="missions">
                        <div>
                            <ArrowRightIcon />
                            <p> Data engineer activity as part of an agile project in the aeronautics sector. - Skywise Platform</p>
                        </div>
                        <div>
                            <ArrowRightIcon />
                            <p> Data visualization using Contour/Palantir.</p>
                        </div>
                        <div>
                            <ArrowRightIcon />
                            <p> Back-end development using Spark-SQL, PySpark and Java.</p>
                        </div>
                        <div>
                            <ArrowRightIcon />
                            <p> Front-End and Dashboarding development using Slate, HTML , CSS , Javascript and PostgreSQL.</p>
                        </div>
                        <div>
                            <ArrowRightIcon />
                            <p> Participation in PIs/Sprints demos (Demo for the client).</p>
                        </div>
                    </div>
                </div>
                <div className="experience right" data-aos="zoom-in">
                    <h2>Capitole Formation</h2>
                    <p className='description'>Toulouse , France</p>
                    <p className='description'> 06/2021 - 08/2021</p>
                    <h3>Web Developer</h3>
                    <div className="missions">
                        <div>
                            <ArrowRightIcon />
                            <p> Update web sites and installing new plugins.</p>
                        </div>
                        <div>
                            <ArrowRightIcon />
                            <p> Create new websites using Wordpress.</p>
                        </div>
                    </div>
                </div>
                <div className="experience" data-aos="zoom-in">
                    <h2>N7 Consulting</h2>
                    <p className='description'>Toulouse , France</p>
                    <p className='description'> 03/2021 - 06/2021</p>
                    <h3>Web Developer</h3>
                    <div className="missions">
                        <div>
                            <ArrowRightIcon />
                            <p> Develop a web application with Angular , Django and MongoDB.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
