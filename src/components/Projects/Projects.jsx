import React, { useContext, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './Projects.scss';
import Store from '../../utils/stores/Stores';
import { observer } from 'mobx-react-lite';
import ProjectCard from '../ProjectCard/ProjectCard';
import ComingCard from '../ComingCard/ComingCard';

const Projects = () => {

  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  stores.uiStore.actualLink = 2;

  return (
    <div className="Projects">

      <div className="Projects-containter">
        {stores.projectStore.arrayProjects.map((elem, index) => {
          return (
            (elem.type === "coming") ?
              <Fade key={index} timeout={1250} delay={index * 350}>
                <ComingCard project={elem} />
              </Fade> :
              <Fade key={index} timeout={1250} delay={index * 350}>
                <ProjectCard project={elem} />
              </Fade>)
        }
        )}
        <Fade timeout={1250} delay={1000} bottom>
          <div className="Projects-moreProjects">
            <h3>Coming soon!</h3>
          </div>
        </Fade>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(Projects);
