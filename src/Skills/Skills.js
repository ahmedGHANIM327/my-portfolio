import './Skills.css'
import { useState } from 'react';
import { Tabs,Tab,Box } from '@mui/material'
import ProgressBar from './ProgressBar'
import { Grid } from '@mui/material'
import photo_web_dev from '../assets/web-dev-skills.png'
import photo_mobile_dev from '../assets/mobile-dev-skills.png'
import phooto_languages from '../assets/languages-skills.png'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}



export default function Skills() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div id="skills">
            <h1 className="skills-title title-section">Skills</h1>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant="fullWidth"
            >
                
                <Tab className={"tabs-button"} label="Web development" />
                <Tab className={"tabs-button"} label="Mobile app development" />
                <Tab className={"tabs-button"} label="Spoken languages" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="skills-div">
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center" >
                            <img src={photo_web_dev} alt="Logo" title="ahmed ghanim - web development skills ( Angular , React , Java/Jee , Wordpress , Drupal , MySQL , Firebase )"/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <h4 className="skill-label">Angular 75%</h4>
                            <ProgressBar valueProgress="75" />     
                            <h4 className="skill-label">React 65%</h4>
                            <ProgressBar valueProgress="65" />  
                            <h4 className="skill-label">Java/Jee 80%</h4>
                            <ProgressBar valueProgress="80" />  
                            <h4 className="skill-label">Wordpress 80%</h4>
                            <ProgressBar valueProgress="80" />       
                            <h4 className="skill-label">MySQL 90%</h4>
                            <ProgressBar valueProgress="90" />  
                            <h4 className="skill-label">Firebase 60%</h4>
                            <ProgressBar valueProgress="60" />            
                        </Grid>
                    </Grid>
                </div>   
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className="skills-div">
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center" >
                            <img src={photo_mobile_dev} alt="Logo" title="ahmed ghanim - mobile development skills ( Android studio , XML , Firebase , MySQL , Java )"/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <h4 className="skill-label">Android Studio 70%</h4>
                            <ProgressBar valueProgress="70" />        
                            <h4 className="skill-label">MySQL 90%</h4>
                            <ProgressBar valueProgress="90" />  
                            <h4 className="skill-label">Firebase 60%</h4>
                            <ProgressBar valueProgress="60" />            
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="skills-div">
                    <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center" >
                            <img src={phooto_languages} alt="Logo" title="ahmed ghanim - Spoken languages ( Arabic  ,  French , English , Spanish )"/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <h4 className="skill-label">Arab : Native</h4>
                            <ProgressBar valueProgress="100" />        
                            <h4 className="skill-label">French : Fluent</h4>
                            <ProgressBar valueProgress="100" />  
                            <h4 className="skill-label">English : Fluent (C1)</h4>
                            <ProgressBar valueProgress="80" /> 
                            <h4 className="skill-label">English : Shool (A2)</h4>
                            <ProgressBar valueProgress="40" />              
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
        </div>
    )
}


