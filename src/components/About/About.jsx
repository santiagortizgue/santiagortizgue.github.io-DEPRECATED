import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import './About.scss';
import Store from '../../utils/stores/Stores';

const About = () => {
  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  stores.uiStore.actualLink = 1;

  function changeRightInfoHandler(value) {
    return (
      <div className="About-infoRight">
        <img className="About-infoImg" src={`./img/about/${value.id}.png`} alt="skills and photos" />
        <h5 className="About-infoDetail">{value.data}</h5>
      </div>
    )
  }

  return (
    <div className="About">

      <div className="About-top">

        <div className="About-topLeft">

            <div className="About-imgContainer">

              <img src="./img/about.jpg" alt="Profile" className="About-img" />

              <div className="About-name">
                <h4>Santiago</h4>
                <h6>Ortiz Guevara</h6>
              </div>

            </div>
      
            <div className="About-title">
              <h4>About me</h4>
              <h6>Bio</h6>
            </div>
        
        </div>

        <Fade timeout={1000} delay={250}>
          <div className="About-topRight">
            <p>I’m Santiago, a 22 years old Colombian <strong>User Interface Designer</strong> . I’ve worked with <strong>user interface</strong>, <strong>user experience</strong> and <strong>development</strong> on multiple platforms.
              <br></br> <br></br> <br></br> My <strong>creativity</strong> allows me to build experiences and interfaces, based on human feelings and needs. I'm <strong>always learning</strong> new methodologies, software and strategies to develop these experiences.
            </p>
          </div>
        </Fade>
      </div>

      <div className="About-info">

        <Fade timeout={1000} delay={150} bottom>
          {changeRightInfoHandler(stores.uiStore.actualInfo)}
        </Fade>

        <Fade timeout={1000} delay={150} bottom>
          <div className="About-infoLeft">

            <h4>Experience & Skills</h4>

            <div className="About-contSkills">
              {stores.uiStore.arrayInfo.map((elem) => {
                let classInfo = (elem.id === stores.uiStore.idActualInfo) ? "About-infoItem About-infoItemSelected" : "About-infoItem";
                if (elem.type === stores.uiStore.typeSkill) {
                  return (
                    <div onClick={(e) => {
                      e.preventDefault();
                      stores.uiStore.changeInfoHandler(elem.id);
                    }} key={elem.id} className={classInfo}>

                      <p>{elem.name}</p>

                    </div>
                  )
                } else {
                  return '';
                }
              })}
            </div>

            <h4>Talents</h4>

            <div className="About-contTalents">
              {stores.uiStore.arrayInfo.map((elem) => {
                let classInfo = (elem.id === stores.uiStore.idActualInfo) ? "About-infoItem About-infoItemSelected" : "About-infoItem";
                if (elem.type === stores.uiStore.typeTalent) {
                  return (
                    <div onClick={(e) => {
                      e.preventDefault();
                      stores.uiStore.changeInfoHandler(elem.id);
                    }} key={elem.id} className={classInfo}>

                      <p>{elem.name}</p>

                    </div>
                  )
                } else {
                  return '';
                }
              })}
            </div>

          </div>
        </Fade>
      </div >

        <div className="About-research">

          <h3 className="About-researchTitle">
            Research
          </h3>

          <div className="About-researchList">

            {stores.projectStore.arrayResearch.map((elem, index) => {
              return (
                <div key={index} className="About-data">
                  <h6>{elem.year}</h6>
                  {elem.link !== null ? <a rel="noopener noreferrer" target="_blank" href={elem.link}>{elem.name}</a> : <p>{elem.name}</p>}
                </div>
              )
            })}

          </div>

          <img src='./img/imgResearch.png' alt="Research" className="About-researchImg"/>
        </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(About);
