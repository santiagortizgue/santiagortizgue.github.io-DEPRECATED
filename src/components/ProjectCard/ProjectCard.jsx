import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = (props) => {

    return (

        <Link to={`/project/${props.project.id}`}>

            <div className="ProjectCard" style={{backgroundImage: `url(./img/projects/${props.project.id}/card.png)`}}>
                <div className="ProjectCard-data">
                    <h3>{props.project.subtitle}</h3>
                    <h1>{props.project.title}</h1>
                </div>
            </div>
        
        </Link>
    )
}

export default ProjectCard;
