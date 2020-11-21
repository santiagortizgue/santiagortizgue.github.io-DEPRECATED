import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import './ComingCard.scss';

const ComingCard = (props) => {

    const [displayCard, setDisplayCard] = useState(false);

    return (
        <div onMouseOver={() => { setDisplayCard(true) }} onMouseLeave={() => { setDisplayCard(false) }} className="ProjectCard">
            
            <img className="ComingCard-background" src={`./img/projects/${props.project.id}/card.png`} alt="Project card img"/>

            <Fade collapse timeout={750} in={displayCard} exit>
                <div className="ComingCard-info">
                    <h3>Coming soon!</h3>
                </div>
            </Fade>

        </div>
    )
}

export default ComingCard;
