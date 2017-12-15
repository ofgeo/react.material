import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import {Drawer, Navigation, NavigationItem} from '@react.material/drawer'
import {ListItemDetail} from '@react.material/list'
import asyncComponent from "./AsyncComponent";
import logo from './logo.svg'

class App extends Component {
  render() {
    return [
      <Drawer
          ref="drawer"
          key="drawer" opened>
        <div className="mdc-persistent-drawer__toolbar-spacer">
          <Link style={{margin: "0 auto"}} to="/">
            <img alt="React Material Components" src={logo}/>
          </Link>
        </div>
        <div className="mdc-list-group">
          <Navigation>
            {
              components.map((route, index) =>
                  (
                      <DrawerNavigationItem key={index}
                                            to={route.route}
                                            label={route.title}
                                            icon={route.icon}/>
                  )
              )
            }
          </Navigation>
        </div>
      </Drawer>
      ,
      <div key="content" id="content">
        <header className="mdc-toolbar mdc-elevation--z4">
          <div className="mdc-toolbar__row">
            <section
                className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"
                   xmlns="http://www.w3.org/2000/svg"
                   className="demo-menu material-icons mdc-toolbar__menu-icon"
                   onClick={this.menuClicks.bind(this)}>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
              <span className="mdc-toolbar__title catalog-title">
                <Switch>
                  <Route exact path="/" component={() => "React Material Components"}/>
                  {
                    components.map((route, index) =>
                        (
                            <Route key={index}
                                   path={route.route}
                                   component={() => route.title}/>
                        )
                    )
                  }
                  <Route component={() => "Component Not Found"}/>
                </Switch>
              </span>
            </section>
            <section>
              <a href="https://github.com/ofgeo/react.material" style={{marginRight: "8px"}}>
                <svg aria-hidden="true" width="32" height="32" version="1.1" viewBox="0 0 16 16"
                     fill="#FFFFFF">
                  <GithubSvgPath/>
                </svg>
              </a>
            </section>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={asyncComponent(() => import('./Introduction'))}/>
          {
            components.map((route, index) => (
                <Route key={index}
                       path={route.route}
                       component={asyncComponent(() => import('./components/' + route.name))}/>
            ))
          }

          <Route component={asyncComponent(() => import('./NoMatch'))}/>
        </Switch>
      </div>
    ]
  }

  menuClicks(e) {
    e.preventDefault();
    this.refs.drawer.open(!this.refs.drawer.isOpen());
  }
}

const GithubSvgPath = () => (
    <path fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
);

const DrawerNavigationItem = ({to, label, icon}) => (
    <Route path={to} children={({match}) => (
        <NavigationItem selected={!!match}>
          <Link to={to}>
            <ListItemDetail start>
              {/*<img alt={label} src={icon}/>*/}
              <i className="material-icons">{icon}</i>
            </ListItemDetail>
            {label}
          </Link>
        </NavigationItem>
    )}/>
);

const components = [
  {
    name: "Buttons",
    title: "Button",
    icon: "add_circle_outline",
    route: '/button'
  }, {
    name: "Cards",
    title: "Card",
    icon: "view_agenda",
    route: '/card'
  }, {
    name: "Checkboxes",
    title: "Checkbox",
    icon: "check_box",
    route: '/checkbox'
  }, {
    name: "Lists",
    title: "List",
    icon: "view_list",
    route: '/list'
  }
];

export default App;
