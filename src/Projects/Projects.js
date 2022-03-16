import './Projects.css'
import { Grid } from '@mui/material';

import myportfolioIMG from '../assets/portfolio-image.png';
import blogwebsiteIMG from '../assets/blog-website-image.png';
import artisan7IMG from '../assets/artisan7-image.png';
import burgercodeIMG from '../assets/burger-code-image.png';
import notifymeIMG from '../assets/notifyme-image.png';
import englishfirstIMG from '../assets/english-first-image.png';
import coursdefranceIMG from '../assets/coursdefrance-image.png';

import reactLogo from '../assets/react-logo.png';
import materialuiLogo from '../assets/materialui-logo.png';
import wordpressLogo from '../assets/wordpress-logo.png';
import diviLogo from '../assets/divi-logo.png';
import angularLogo from '../assets/angular-logo.png';
import javaLogo from '../assets/java-logo.png';
import sqlLogo from '../assets/mysql-logo.png';
import firebaseLogo from '../assets/firebase-logo.png';
import phpLogo from '../assets/php-logo.png';
import jsLogo from '../assets/js-logo.png';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import djangoLogo from '../assets/django-logo.png';
import arduinoLogo from '../assets/arduino-logo.png';

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="skills-title title-section" data-aos="zoom-in">Projects</h1>
                <div>
                <Swiper
                    spaceBetween={0}
                    autoHeight={true}
                    autoplay={{
                        delay: 10000,
                    }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[ Autoplay ,Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={myportfolioIMG} title="ahmed ghanim - My Resume : website created with React and Material ui" alt="ahmed ghanim - My Resume : website created with React and Material ui"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">My Portfolio</h1>
                                    <p className="project-description">
                                    My Portfolio is my personal website that I use as a digital CV to present my skills, my academic career, my professional experience, 
                                    my personal and academic projects, and finally my contact information including my GitHub account, my LinkedIn account my email, and my phone number.<br></br>
                                    It is created using React and the famous CSS framework Material-UI, and it is 100% responsive so compatible with 
                                    all types of devices (pc, desktop, tablet, phone).
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={reactLogo}/> React</li>
                                        <li><img src={materialuiLogo}/> Material-UI</li>
                                    </ul>
                                    <button className='project-action'><a href="https://resume.ahmed-ghanim.com/" rel="noreferrer" title="ahmed ghanim - My Resume : website created with ReactJS and Material ui" target="_blank">View website <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                    <button className='project-action' sx={{marginTop:"15px"}}><a href="https://github.com/ahmedGHANIM327/my-portfolio" rel="noreferrer" title="ahmed ghanim - My Resume : website created with ReactJS and Material ui" target="_blank">View Source Code <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={artisan7IMG} title="ahmed ghanim - Artisan7 : website created in a school project with Angular , Java/Jee , MySQL , Firebase" alt="ahmed ghanim - Artisan7 : website created in a school project with Angular , Java/Jee , MySQL , Firebase"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">Artisan7</h1>
                                    <p className="project-description">
                                    A project was realized during my second year in a team of 4 students. 
                                    The objective of this website is to allow the artisans of the region of Toulouse to 
                                    present themselves with their phone number, their email, their location, their availability.<br></br>
                                    The customers can also publish an ad and wait for quotations from the artisans or they can 
                                    directly look for someone according to their need.<br></br>
                                    To finalize this project, we used in front-end the framework Angular with the framework CSS 
                                    Material-UI, in the back-end we used Java/JEE. For the database, we used two solutions MySQL 
                                    for the management and the storage of the information of the customers and the artisans and Firebase for the storage of the media (photos and videos).
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={angularLogo}/> Angular</li>
                                        <li><img src={materialuiLogo}/> Material-UI</li>
                                        <li><img src={javaLogo}/> Java/JEE</li>
                                        <li><img src={sqlLogo}/> MySQL</li>
                                        <li><img src={firebaseLogo}/>Firebase</li>
                                    </ul>
                                    <button className='project-action' sx={{marginTop:"15px"}}><a href="https://github.com/ahmedGHANIM327/artisan7" rel="noreferrer" title="ahmed ghanim - Artisan7 : website created in a school project with Angular , Java/Jee , MySQL , Firebase" target="_blank">View Source Code <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={burgercodeIMG} title="ahmed ghanim - Burger Code : website created with HTML/CSS , JavaScript , PHP , MySQL" alt="ahmed ghanim - Burger Code : website created with HTML/CSS , JavaScript , PHP , MySQL"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">Burger Code</h1>
                                    <p className="project-description">
                                    This is one of the first projects that I created to master the basics 
                                    of web development, HTML, CSS, JavaScript, PHP, and MySQL.<br></br>
                                    The idea of the website is to present the menu of a restaurant in addition 
                                    to an admin dashboard to add, delete and even modify the products.
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={phpLogo}/> Php</li>
                                        <li><img src={jsLogo}/> Javascript</li>
                                        <li><img src={htmlLogo}/> Html</li>
                                        <li><img src={cssLogo}/>Css</li>
                                        <li><img src={sqlLogo}/> MySQL</li>
                                        
                                    </ul>
                                    <button className='project-action' sx={{marginTop:"15px"}}><a href="https://github.com/ahmedGHANIM327/Burger-Code" rel="noreferrer" title="ahmed ghanim - Burger Code : website created with HTML/CSS , JavaScript , PHP , MySQL" target="_blank">View Source Code <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={notifymeIMG} title="ahmed ghanim - Notify Me : website created in a school project with React , Django , MySQL , Arduino" alt="ahmed ghanim - Notify Me : website created in a school project with React , Django , MySQL , Arduino"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">Notify Me</h1>
                                    <p className="project-description">
                                    A project was realized during my last year in a team of 4 students. The objective 
                                    of this application is to broadcast announcements to employees once a badge is detected.<br></br>
                                    This application has an admin dashboard that helps to manage employees, groups of 
                                    employees, and messages, so it gives statistics on the number of employees, 
                                    the number of groups, and the status of messages seen or not yet seen.<br></br>
                                    To finalize this project, we used front-end React with the framework CSS Material-UI, 
                                    in the back-end we used Django. For the database, we used MySQL for the management 
                                    and the storage of all the pieces of information of the employees, groups, and messages.
                                    In addition to a badge detector manufactured and programmed with an Arduino-Uno that its role is to detect and send the ID of the detected badge to our application.
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={phpLogo}/> React</li>
                                        <li><img src={djangoLogo}/> Django</li>
                                        <li><img src={sqlLogo}/> MySQL</li>
                                        <li><img src={arduinoLogo}/>Arduino</li>
                                        
                                    </ul>
                                    <button className='project-action' sx={{marginTop:"15px"}}><a href="https://github.com/ahmedGHANIM327/Arduino-Project" rel="noreferrer" title="ahmed ghanim - Notify Me : website created in a school project with React , Django , MySQL , Arduino" target="_blank">View Source Code <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={blogwebsiteIMG} title="ahmed ghanim - Personel Blog : website created with The Most Popular WordPress Theme Divi" alt="ahmed ghanim - Personel Blog : website created with The Most Popular WordPress Theme Divi"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">My Personel Blog</h1>
                                    <p className="project-description">
                                    This is my personal blog that I created with Wordpress and the famous DIVI theme.
                                    I use it mainly to post courses and tutorials on web development (React, Angular, HTML , CSS, Javascript,...).
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={wordpressLogo}/> Wordpress</li>
                                        <li><img src={diviLogo}/> Divi</li>
                                    </ul>
                                    <button className='project-action'><a href="https://ahmed-ghanim.com/" rel="noreferrer" title="ahmed ghanim - Personel Blog : website created with The Most Popular WordPress Theme Divi" target="_blank">View website <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={englishfirstIMG} title="ahmed ghanim - English First : website created with The Most Popular WordPress Theme Divi" alt="ahmed ghanim - English First : website created with The Most Popular WordPress Theme Divi"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">English First</h1>
                                    <p className="project-description">
                                    This is a website that I created during my internship at Capitole Formation with Wordpress and the DIVI theme.<br></br>
                                    The website is set up to present Capitole Formation's English courses with general presentations of each course in
                                    addition to quizzes and contact forms.
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={wordpressLogo}/> Wordpress</li>
                                        <li><img src={diviLogo}/> Divi</li>
                                    </ul>
                                    <button className='project-action'><a href="https://english-first.org/" rel="noreferrer" title="ahmed ghanim - English First : website created with The Most Popular WordPress Theme Divi" target="_blank">View website <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={5} direction="row" justifyContent="center" alignItems="flex-start" className='container-bloc-project'>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-image-project" data-aos="fade-right">
                                    <img src={coursdefranceIMG} title="ahmed ghanim - Cours De France : website created with The Most Popular WordPress Theme Divi" alt="ahmed ghanim - Cours De France : website created with The Most Popular WordPress Theme Divi"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6}>
                                <div className="bloc-details-project" data-aos="fade-left">
                                    <h1 className="project-title">Cours De France</h1>
                                    <p className="project-description">
                                    This is a website that I created during my internship at 
                                    Capitole Formation with Wordpress and the DIVI theme.<br></br>
                                    The website is set up to present Capitole Formation's courses with general
                                    presentations of each course in addition to quizzes and contact forms.
                                    </p>
                                    <h3 className="project-tools"><CheckCircleIcon /> Technologies used :</h3>
                                    <ul className="project-tools-logos">
                                        <li><img src={wordpressLogo}/> Wordpress</li>
                                        <li><img src={diviLogo}/> Divi</li>
                                    </ul>
                                    <button className='project-action'><a href="https://coursdefrance.org/" rel="noreferrer" title="ahmed ghanim - Cours De France : website created with The Most Popular WordPress Theme Divi" target="_blank">View website <ChevronRightIcon sx={{fontSize:"22px"}}/></a></button>
                                </div>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                </Swiper>
                </div>
        </div>
    )
}
