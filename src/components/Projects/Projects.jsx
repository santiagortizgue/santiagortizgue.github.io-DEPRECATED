import React, { useContext, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './Projects.scss';
import Store from '../../utils/stores/Stores';
import { observer } from 'mobx-react-lite';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {

  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  stores.uiStore.actualLink = 2;

  return (
    <div className="Projects">

      <div className="Projects-projects">
        <h1 className="Projects-projectsLeft">
          Projects
        </h1>

        <div className="Projects-projectsRight">
          {
          stores.projectStore.arrayProjects.map((elem, index) => {
            return (
                <Fade key={index} timeout={750} delay={index * 350}>
                  <ProjectCard project={elem} />
                </Fade>)
          }
          )}
        </div>
      </div>

      <div className="Projects-concepts">

        <h1 className="Projects-conceptsLeft">
          Concepts
        </h1>

        <div className="Projects-conceptsRight">
          
          {stores.projectStore.arrayConcepts.length === 0 ? <h3>Coming soon</h3> : ''}

          {stores.projectStore.arrayConcepts.map((elem, index) => {
            return (
                <Fade key={index} timeout={750} delay={index * 350}>
                  <div>Concept</div>
                </Fade>)
          }
          )}
        </div>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(Projects);
