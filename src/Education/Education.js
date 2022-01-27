import './Education.css';
import { Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
    return (
        <div id="education">
            <h1 className="skills-title title-section" data-aos="zoom-in">Education</h1>
            <Grid container spacing={5} direction="row" justifyContent="space-evenly" alignItems="center">
                    <Grid item xs={12} sm={4} >
                        <div className="bloc-education"  data-aos="zoom-out-up">
                            <h4>2016-2017</h4>
                            <SchoolIcon />
                            <h2>Mohamed 5 high school</h2>
                            <h3>Bac with high honours </h3>
                            <h5>Mathematical sciences French option</h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <div className="bloc-education"  data-aos="zoom-out-up">
                            <h4>2017-2019</h4>
                            <SchoolIcon />
                            <h2>CPGE Ibn-Baja Beni-Mellal</h2>
                            <h3>Mathematics and Physics</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <div className="bloc-education"  data-aos="zoom-out-up">
                            <h4>2019-2022</h4>
                            <SchoolIcon />
                            <h2>INP-ENSEEIHT Toulouse</h2>
                            <h3>Engineering degree in digital sciences</h3>
                            <h5>Specialized in software development</h5>
                        </div>
                    </Grid>
                </Grid>
        </div>
    )
}
