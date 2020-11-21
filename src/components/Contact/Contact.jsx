import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import './Contact.scss';
import Store from '../../utils/stores/Stores';

const Contact = () => {
  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  stores.uiStore.actualLink = 3;

  return (
    <div className="Contact">

      <div className="Contact-contact">
        <div className="Contact-leftContact">

          <Fade timeout={1000} top>
            <div style={{ backgroundImage: "url('./img/ContactImg.png')" }} className="Home-contactImg"></div>
          </Fade>
          <Fade timeout={1000} delay={50} bottom>
            <h5>Let’s <strong> work </strong> together!</h5>
          </Fade>
          <Fade timeout={1500} delay={350} bottom>
            <h3>sdot.about@gmail.com</h3>
          </Fade>
        </div>
        <div className="Contact-rightContact">
          <div className="Contact-containerContact">
            <h3>More</h3>
            <h5>About me</h5>
            <a target='_blank' rel='noopener noreferrer' href="./file/CV.pdf" className="Contact-cv">Download CV</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(Contact);
