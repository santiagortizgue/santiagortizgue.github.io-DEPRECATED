import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationButton.scss';

const NavigationButton = (props) => {

    function CreateButton() {
        switch (props.type) {
            default:
                return '';
            case 'left':
                return (
                    <div className="NavigationButton">

                        <svg className="NavigationButton-left" viewBox="0 0 18 13"  fill="none" >
                            <path d="M17 6.49902L1 6.49902"/>
                            <path d="M7 12L1 6.5L7 1"/>
                        </svg>

                        <h3>{props.text}</h3>

                    </div>
                )

            case 'right':
                return (
                    <div className="NavigationButton">

                        <h3>{props.text}</h3>

                        <svg className="NavigationButton-right" viewBox="0 0 18 13"  fill="none" >
                            <path d="M1 6.50085L17 6.50086"/>
                            <path d="M11 1L17 6.5L11 12"/>
                        </svg>
                    </div>
                )
        }
    }

    return (
        <Link to={props.route}>
            {CreateButton()}
        </Link>
    )
}

export default NavigationButton;
