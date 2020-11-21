import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = (props) => {

    const [displayCard, setDisplayCard] = useState(false);

    return (
        <div onMouseOver={() => { setDisplayCard(true) }} onMouseLeave={() => { setDisplayCard(false) }} className="ProjectCard">
            
            <img className="ProjectCard-background" src={`./img/projects/${props.project.id}/card.png`} alt="Project card img"/>

            <Fade collapse timeout={750} in={displayCard} exit>
                <div className="ProjectCard-info">
                    <Link to={`/project/${props.project.id}`}>
                        <h3>see more</h3>
                    </Link>
                </div>
            </Fade>

        </div>
    )
}

export default ProjectCard;
