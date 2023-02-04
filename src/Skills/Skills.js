import './Skills.css'
import { useState } from 'react';
import { Tabs,Tab,Box } from '@mui/material'
import ProgressBar from './ProgressBar'
import { Grid } from '@mui/material'
import photo_web_dev from '../assets/web-dev-skills.png'
import ListSkills from './ListSkills';
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
            <h1 className="skills-title title-section" data-aos="zoom-in">Skills</h1>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant="fullWidth"
            >
                
                <Tab className={"tabs-button"} label="Software Development" />
                <Tab className={"tabs-button"} label="Other Skills" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="skills-div">
                    <ListSkills />
                </div>   
            </TabPanel>
            <TabPanel value={value} index={1}>
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
                            <h4 className="skill-label">Spanish : Shool (A1)</h4>
                            <ProgressBar valueProgress="30" />  
                            <h4 className="skill-label">Wordpress 90%</h4>
                            <ProgressBar valueProgress="90" />    
                            <h4 className="skill-label">SEO 70%</h4>
                            <ProgressBar valueProgress="70" />              
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
        </div>
    )
}


