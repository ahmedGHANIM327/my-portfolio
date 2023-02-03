import './Education.css';
import { Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
    return (
        <div id="education">
            <h1 className="skills-title title-section" data-aos="zoom-in">Education</h1>
            <div className="experiences">
                <div className="experience">
                    <h2>INP-ENSEEIHT Toulouse</h2>
                    <p className='description'>Specialized in software development</p>
                    <p className='description'>2019 - 2022</p>
                    <h3>Engineering degree in digital sciences</h3>
                </div>
                <div className="experience right">
                    <h2>CPGE Ibn-Baja Beni-Mellal</h2>
                    <p className='description'>2017 - 2019</p>
                    <h3>Mathematics and Physics</h3>
                </div>
                <div className="experience">
                    <h2>Mohamed 5 high school</h2>
                    <p className='description'>Mathematical sciences French option</p>
                    <p className='description'>2017</p>
                    <h3>Bac with high honours</h3>
                </div>
            </div>
        </div>
    )
}
