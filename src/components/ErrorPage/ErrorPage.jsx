import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import './ErrorPage.scss';
import Store from '../../utils/stores/Stores';

const ErrorPage = () => {
    const stores = useContext(Store);

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    stores.uiStore.actualLink = 4;

    return (
        <div className="ErrorPage">
            <Fade timeout={1000} delay={750}>
                <h3>Page not found</h3>
            </Fade>
        </div>
    )
}

export default observer(ErrorPage);
