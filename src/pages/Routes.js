import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import NotFound from './NotFound';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './Home'),
  loading: () => null,
  modules: ['home']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './About/About'),
  loading: () => null,
  modules: ['about']
});
const Studies = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './About/Studies'),
  loading: () => null,
  modules: ['studies']
});
const Teachers = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './About/Teachers'),
  loading: () => null,
  modules: ['teachers']
});
const Career = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './About/Career'),
  loading: () => null,
  modules: ['career']
});
const Programs = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Programs/Programs'),
  loading: () => null,
  modules: ['programs']
});
const Node = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Programs/Node'),
  loading: () => null,
  modules: ['node']
});
const PHP = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Programs/PHP'),
  loading: () => null,
  modules: ['php']
});
const ReactJS = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Programs/React'),
  loading: () => null,
  modules: ['react']
});
const Start = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Programs/Start'),
  loading: () => null,
  modules: ['start']
});
const Work = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Programs/Work'),
  loading: () => null,
  modules: ['work']
});
const Contacts = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Contacts'),
  loading: () => null,
  modules: ['work']
});
const NewsList = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './NewsList'),
  loading: () => null,
  modules: ['news-list']
});
const NewsSingle = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './NewsSingle'),
  loading: () => null,
  modules: ['news-single']
});
const Registration = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './Registration'),
  loading: () => null,
  modules: ['registration']
});


export default () => (
    <Route render={({location, props}) => (
        <TransitionGroup>
          <CSSTransition timeout={{enter: 1500, exit: 1000}} key={location.pathname} classNames="fade">
            <Switch location={location}>
              <Route path="/" exact component={Home}/>
              <Route exact path="/apie-mus" component={About}/>
              <Route path="/mokykla" component={Studies}/>
              <Route path="/karjeros-galimybes" component={Career}/>
              <Route path="/destytojai" component={Teachers}/>
              <Route exact path="/naujienos" component={NewsList}/>
              <Route path="/naujienos/:post" component={NewsSingle}/>
              <Route exact path="/programos" component={Programs}/>
              <Route path="/programos/programavimo-pagrindai" component={Start}/>
              <Route path="/programos/react" component={ReactJS}/>
              <Route path="/programos/node" component={Node}/>
              <Route path="/programos/php" component={PHP}/>
              <Route path="/programos/praktika-darbas" component={Work}/>
              <Route path="/kontaktai" component={Contacts}/>
              <Route path="/registracija" component={Registration}/>
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    )}/>
);
