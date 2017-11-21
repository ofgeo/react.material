import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import './App.css';
import {Drawer} from '@react.material/drawer/index'

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route exact={activeOnlyWhenExact} path={to} children={({match}) => {
      console.log(match);
      return (
          <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={to}>{label}</Link>
          </div>)
    }}/>
)

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
      <h2>About</h2>
    </div>
)

class App extends Component {
  // render(){
  //   return (
  //
  //         <div>
  //           <Switch>
  //           <OldSchoolMenuLink  to="/" label="Home"/>
  //           <OldSchoolMenuLink to="/about" label="About"/>
  //           </Switch>
  //           <hr/>
  //           <Switch>
  //           <Route path="/" component={Home}/>
  //           <Route path="/about" component={About}/>
  //           </Switch>
  //         </div>
  //
  //   );
  // }
  render() {
    return (<div>
      <Drawer
          ref="drawer"
          key="drawer"
          opened>
        <div className="mdc-persistent-drawer__toolbar-spacer"/>
        <div className="mdc-list-group">
          <OldSchoolMenuLink activeOnlyWhenExact to="/" label="Home"/>
          <OldSchoolMenuLink to="/about" label="About"/>
          {/*<Nav>*/}
          {/*<Route exact path="/button" children={({match}) => (*/}
          {/*<NavLink href={"button"} selected={!!match}>*/}
          {/*<ListItemDetail start>*/}
          {/*<img alt="Button" src={ic_button}/>*/}
          {/*</ListItemDetail>*/}
          {/*<Link to="button">Button</Link>*/}
          {/*<ListItemDetail end>*/}
          {/*<img alt="Button" src={ic_exit}/>*/}
          {/*</ListItemDetail>*/}
          {/*</NavLink>*/}
          {/*)}/>*/}


          {/*/!*</Ripple>*!/*/}
          {/*<NavLink href={"#"}>*/}
          {/*<ListItemDetail>*/}
          {/*<img alt="Card" src={ic_card}/>*/}
          {/*</ListItemDetail>*/}
          {/*Card*/}
          {/*<ListItemDetail end>*/}
          {/*<img alt="Card" src={ic_exit}/>*/}
          {/*</ListItemDetail>*/}
          {/*</NavLink>*/}
          {/*<NavLink href={"/list2"}>*/}
          {/*<ListItemDetail>*/}
          {/*<img alt="Checkbox" src={ic_checkbox}/>*/}
          {/*</ListItemDetail>*/}
          {/*Checkbox*/}
          {/*<ListItemDetail end>*/}
          {/*<img alt="Checkbox" src={ic_exit}/>*/}
          {/*</ListItemDetail>*/}
          {/*</NavLink>*/}
          {/*<NavLink href={"list"}>*/}
          {/*<ListItemDetail>*/}
          {/*<img alt="List" src={ic_list}/>*/}
          {/*</ListItemDetail>*/}
          {/*List*/}
          {/*<ListItemDetail end>*/}
          {/*<img alt="Checkbox" src={ic_exit}/>*/}
          {/*</ListItemDetail>*/}
          {/*</NavLink>*/}
          {/*</Nav>*/}

        </div>
      </Drawer>
      <AAAA>
        <aside>
          <nav>
            <OldSchoolMenuLink activeOnlyWhenExact to="/" label="Home"/>
            <OldSchoolMenuLink to="/about" label="About"/>
          </nav>
        </aside>
      </AAAA>

      <div key="content" id="content">
        <header className="mdc-toolbar mdc-elevation--z4">
          <div className="mdc-toolbar__row">
            <section
                className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <button
                  className="demo-menu material-icons mdc-toolbar__menu-icon"
                  tabIndex="-1"
                  onMouseDown={e => e.preventDefault()}
                  onClick={this.menuClicks.bind(this)}>menu
              </button>
              <span
                  className="mdc-toolbar__title catalog-title">Persistent Drawer</span>
            </section>
          </div>
        </header>

        {/*<Switch>*/}
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        {/*</Switch>*/}
        {/*<div key="switch">*/}
        {/*<Switch>*/}
        {/*/!*<Redirect exact from="/" to='/material-components'/>*!/*/}
        {/*/!*<Route exact path="/" component={App}/>*!/*/}
        {/*<Route exact path="/button" component={Buttons}/>*/}
        {/*<Route path="/list" component={Lists}/>*/}
        {/*/!*<Route path="*" component={NotFound}/>*!/*/}
        {/*/!*</div>*!/*/}
        {/*</Switch>*/}
      </div>
    </div>)
  }

  menuClicks(e) {
    e.preventDefault();
    this.refs.drawer.open(!this.refs.drawer.isOpen());
  }
}

class AAAA extends Component {
  render() {
    return (
        <aside ref={(root) => this.root = root}>
          <nav ref={(drawer) => this.drawer = drawer}>
            {this.props.children}
          </nav>
        </aside>
    );
  };
}

export default App;
