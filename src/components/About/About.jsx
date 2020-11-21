import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import './About.scss';
import Store from '../../utils/stores/Stores';
import { InfoSVG } from '../../utils/JSHelpers/Helper';

const About = () => {
  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  stores.uiStore.actualLink = 1;

  function changeRightInfoHandler(value) {
    return (
      <Fade timeout={1000} delay={150} right>
        <div className="About-infoRight">
            <img className="About-infoImg" src={`${value.img}`} alt="Imagen"/>
            <div className="About-infoDetail">
              <h3>{value.name}</h3>
              {(value.type === 'talent') ?
                <h5>{value.data}</h5> : ''}
              {(value.type === 'skill') ?
                <div className="About-contSofware">
                  {value.data.map((idImg, id) => {
                    return (
                      <Fade key={idImg} timeout={1000} delay={id*100}>
                        <img src={`./img/iconSoftware/${idImg}.png`} alt="software logo" />
                      </Fade>
                      )
                  })}
                </div>
                : ''}
            </div>
        </div>
      </Fade>
    )
  }

  return (
    <div className="About">

      <div className="About-top">
        <div className="About-topLeft">

          <Fade timeout={1000} left>
            <div style={{ backgroundImage: "url('./img/about.jpg')" }} className="About-img">
              <div className="About-name">
                <h4>Santiago</h4>
                <h6>Ortiz Guevara</h6>
              </div>
            </div>
          </Fade>

          <Fade timeout={1000} delay={250} cascade>
            <div className="About-title">
              <h4>About me</h4>
              <h6>Bio</h6>
            </div>
          </Fade>
        </div>

        <Fade timeout={2000} delay={350}>
          <div className="About-topRight">
            <p>I’m Santiago, a 21 years old Colombian <strong>‘Interactive Designer’</strong> from ICESI University. I’ve worked with <strong className="strongColor">user experience</strong> and <strong className="strongColor">development</strong> on multiple platforms.
              <br></br> <br></br> <br></br> My <strong className="strongColor2">creativity</strong> allows me to build experiences and interfaces, based on human feelings and needs. I'm <strong className="strongColor2">always learning</strong> new methodologies, software and strategies to develop these experiences.
            </p>
          </div>
        </Fade>
      </div>

      <div className="About-info">
        <div className="About-infoLeft">

          <h4>Experience & Skills</h4>

          <div className="About-contSkills">
            {stores.uiStore.arrayInfo.map((elem) => {
              let classInfo = (elem.id === stores.uiStore.idActualInfo) ? "About-infoItem About-infoItemSelected" : "About-infoItem";
              if (elem.type === stores.uiStore.typeSkill) {
                return (
                  <Fade key={elem.id} timeout={1000} delay={elem.id * 150}>
                    <div onClick={(e) => {
                      e.preventDefault();
                      stores.uiStore.changeInfoHandler(elem.id);
                    }} key={elem.id} className={classInfo}>

                      <InfoSVG i={elem.icon} selected={elem.id === stores.uiStore.idActualInfo} />

                    </div>
                  </Fade>
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
                  <Fade key={elem.id} timeout={1000} delay={elem.id * 150}>
                    <div onClick={(e) => {
                      e.preventDefault();
                      stores.uiStore.changeInfoHandler(elem.id);
                    }} key={elem.id} className={classInfo}>
                      <InfoSVG i={elem.icon} selected={elem.id === stores.uiStore.idActualInfo} />
                    </div>
                  </Fade>
                )
              } else {
                return '';
              }
            })}
          </div>

        </div>
        {changeRightInfoHandler(stores.uiStore.actualInfo)}
      </div >

      <div className="About-research">
        <div className="About-researchLeft">
          <div className="About-data">
            <Fade timeout={1000} left>
              <h4>2018 - 2019</h4>
              <h6>Audio-tactile priming to guide information recall in edutainment</h6>
            </Fade>
            <Fade timeout={1000} delay={250} left>
              <h4>2019</h4>
              <h6>Thesis (Coming Soon!)</h6>
            </Fade>
          </div>
        </div>
        <div className="About-researchRight">

          <h3>Research</h3>

          <Fade timeout={1000} right>
            <div style={{ backgroundImage: "url('./img/imgPortada.jpg')" }} className="About-researchImg"></div>
          </Fade>
        </div>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(About);
