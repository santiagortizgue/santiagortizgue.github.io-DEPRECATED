import React, { useEffect, useContext } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './App.scss';

import Store from '../../utils/stores/Stores';

import { Menu, Logo, MenuSocialMedia, Message, ScrollIcon } from '../UIMenu/UIMenu';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ProjectView from 'components/ProjectView/ProjectView';
import ErrorPage from 'components/ErrorPage/ErrorPage';

const App = () => {

  const stores = useContext(Store);

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    stores.projectStore.sortArrayProjects();
  }, [stores.projectStore]);

  return (
    <div className="App">

      <HashRouter>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/project/:id" component={ProjectView} exact />
          <Route path="/*" component={ErrorPage} />
        </Switch>

        <Logo />
        <MenuSocialMedia />
        <Menu />
        <ScrollIcon />
        <Message />

      </HashRouter>

    </div>
  )
}

export default observer(App);
