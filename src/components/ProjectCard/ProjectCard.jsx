import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './ProjectCard.scss';

const ProjectCard = (props) => {

    const [hoverState, setHoverState] = useState(false);

    return (

        <Link to={`/project/${props.project.id}`}>
            <div
            className="ProjectCard"
            style={{ backgroundImage: `url(./img/projects/${props.project.id}/card.png)` }}
            onMouseEnter={(e) => {e.preventDefault(); setHoverState(true);}}
            onMouseLeave={(e) => {e.preventDefault(); setHoverState(false);}}>

                <Fade duration={450} when={!hoverState}>
                    <div className="ProjectCard-title">
                        <h3>{props.project.subtitle}</h3>
                    </div>
                </Fade>

                <Fade duration={450} when={hoverState}>
                    <div className="ProjectCard-data">
                        <h3>{props.project.subtitle}</h3>
                        <p>{props.project.title}</p>
                        <svg viewBox="0 0 18 13" fill="none">
                            <path d="M1 6.50085L17 6.50086"/>
                            <path d="M11 1L17 6.5L11 12"/>
                        </svg>
                    </div>
                </Fade>
            </div>

        </Link>
    )
}

export default ProjectCard;
