import './Projects.css'
import { Grid } from '@mui/material';
import englishfirst from '../assets/englishfirst-project.jpg';
import coursdefrance from '../assets/coursdefrance-project.jpg';
import artisan7 from '../assets/artisan7-project.jpg';
import burgercode from '../assets/burger-code-project.jpg';
import blogahmedghanim from '../assets/ahmed-ghanim-blog-project.jpg';
import myresume from '../assets/my-resume-project.JPG'

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="skills-title title-section" data-aos="zoom-in">Projects</h1>
            <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className="bloc-project" data-aos="zoom-in-right">
                            <img src={blogahmedghanim} alt="Logo" title="ahmed ghanim - Personel Blog : website created with The Most Popular WordPress Theme Divi"/>
                            <h2><a href="https://ahmed-ghanim.com/" rel="noreferrer" title="ahmed ghanim - Personel Blog: website created with The Most Popular WordPress Theme Divi" target="_blank">ahmed-ghanim.com</a></h2>
                            <h4>Divi</h4>
                            <h4>WORDPRESS</h4>
                            <button ><a href="https://ahmed-ghanim.com/" rel="noreferrer" title="ahmed ghanim - Personel Blog : website created with The Most Popular WordPress Theme Divi" target="_blank">View website</a></button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className="bloc-project" data-aos="zoom-in">
                            <img src={englishfirst} alt="Logo" title="ahmed ghanim - English First : website created with The Most Popular WordPress Theme Divi"/>
                            <h2><a href="https://english-first.org/" rel="noreferrer" title="ahmed ghanim - English First : website created with The Most Popular WordPress Theme Divi" target="_blank">english-first.org</a></h2>
                            <h4>Divi</h4>
                            <h4>WORDPRESS</h4>
                            <button ><a href="https://english-first.org/" rel="noreferrer" title="ahmed ghanim - English First : website created with The Most Popular WordPress Theme Divi" target="_blank">View website</a></button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className="bloc-project" data-aos="zoom-in-left">
                            <img src={coursdefrance} alt="Logo" title="ahmed ghanim - Cours de France : website created with The Most Popular WordPress Theme Divi"/>
                            <h2><a href="https://coursdefrance.org/" rel="noreferrer" title="ahmed ghanim - Cours de France : website created with The Most Popular WordPress Theme Divi" target="_blank">coursdefrance.org</a></h2>
                            <h4>Divi</h4>
                            <h4>WORDPRESS</h4>
                            <button ><a href="https://coursdefrance.org/" rel="noreferrer" title="ahmed ghanim - Cours de France : website created with The Most Popular WordPress Theme Divi" target="_blank">View website</a></button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className="bloc-project" data-aos="zoom-in-right">
                            <img src={myresume} alt="Logo" title="ahmed ghanim - My Resume : website created with ReactJS and Material ui"/>
                            <h2><a href="https://myresume.ahmed-ghanim.com" rel="noreferrer" title="ahmed ghanim - My Resume : website created with ReactJS and Material ui" target="_blank">My Resume</a></h2>
                            <h4>React</h4>
                            <h4>Material ui</h4>
                            <button ><a href="https://myresume.ahmed-ghanim.com" rel="noreferrer" title="ahmed ghanim - My Resume : website created with ReactJS and Material ui" target="_blank">Download source code</a></button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className="bloc-project" data-aos="zoom-in">
                            <img src={artisan7} alt="Logo" title="ahmed ghanim - Artisan7 : website created in a school project with Angular , Java/Jee , MySQL , Firebase"/>
                            <h2><a href="https://github.com/ahmedGHANIM327/artisan7" rel="noreferrer" title="ahmed ghanim - Artisan7 : website created in a school project with Angular , Java/Jee , MySQL , Firebase" target="_blank">Artisan7</a></h2>
                            <h4>Front-end : Angular</h4>
                            <h4>Backend : Java/Jee - MySQL - Firebase</h4>
                            <button ><a href="https://github.com/ahmedGHANIM327/artisan7" rel="noreferrer" title="ahmed ghanim - Artisan7 : website created in a school project with Angular , Java/Jee , MySQL , Firebase" target="_blank">View source code</a></button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div className="bloc-project" data-aos="zoom-in-left">
                            <img src={burgercode} alt="Logo" title="ahmed ghanim - Burger Code : website created with HTML/CSS , JavaScript , PHP , MySQL"/>
                            <h2><a href="https://github.com/ahmedGHANIM327/Burger-Code" rel="noreferrer" title="ahmed ghanim - Burger Code : website created with HTML/CSS , JavaScript , PHP , MySQL" target="_blank">Burger Code</a></h2>
                            <h4>Front-end : HTML/CSS - JS</h4>
                            <h4>Backend : PHP - MySQL - Firebase</h4>
                            <button ><a href="https://github.com/ahmedGHANIM327/Burger-Code" rel="noreferrer" title="ahmed ghanim - Burger Code : website created with HTML/CSS , JavaScript , PHP , MySQL" target="_blank">View source code</a></button>
                        </div>
                    </Grid>
                </Grid>
        </div>
    )
}
