import './Projects.css'
import * as React from 'react';
import { useState } from 'react';
/* Dialog modale */ 
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


import {ListProjects} from './ListProjects';

/* Transition Modale */
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function Projects() {

    /* Modale Project */
    const [selectedProject , setSelectedProject] = useState({
        "description":'',
        "outils":[]
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id_project) => {
        let project = ListProjects.filter(e => e.id === id_project)
        setSelectedProject(project[0]);
        setTimeout(() => {
            setOpen(true);
         }, 500);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div id="projects">
            <h1 className="skills-title title-section" data-aos="zoom-in">Projects</h1>
            <div className="projects">
                {ListProjects.map(project =>
                    <div className="project-item" data-aos="zoom-in">
                        <img src={project.image} width="350"/>
                        <h2>{project.title}</h2>
                        <p>
                            {project.short_desc}
                        </p>
                        <ul className="outils">
                            {project.outils.map(outil =>
                                <li>{outil}</li>
                            )}
                        </ul>
                        <button onClick={()=>handleClickOpen(project.id)}>View More</button>
                    </div>
                )}
            </div>
            
            {/* Modale Project*/}
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            className="modale_project"
            aria-describedby="alert-dialog-slide-description"
        >
            <div className="project_dialog">
                <img src={selectedProject.image} />
                <h2> {selectedProject.title} </h2>
                {selectedProject.description.split("<br>").map(e => {
                        return <p className='description'>{e}</p>
                })} 
                <ul className="outils">
                    {selectedProject.outils.map(outil =>
                        <li>{outil}</li>
                    )}
                </ul>
                <div className="actions">
                    {selectedProject.live_preview !== "" && <a href={selectedProject.live_preview} target='_blank'><button> View Live Demo</button></a>}
                    {selectedProject.code_source !== "" && <a href={selectedProject.code_source} target='_blank'><button> View Source Code</button></a>}
                </div>
            </div>
        </Dialog>
            
        </div>
    )
}
