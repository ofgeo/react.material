import React, {Component, PureComponent} from 'react';
import './App.css';
import {List} from '@react.material/list/index'
import {Ripple} from '@react.material/ripple/index'
import {Button} from '@react.material/button/index'

class App extends Component {
    render() {
        return (
            <List>
                <Button className={'aaaaaa'}>AAA</Button>
                <Ripple className={'AAAAA'}>
                    asdasd
                </Ripple>
                <Ripple>
                    <List.Item>
                        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                            network_wifi
                        </i>
                        Wi-Fi
                    </List.Item>
                </Ripple>
                <Ripple>
                    <List.Item>
                        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                            network_wifi
                        </i>
                        Wi-Fi
                    </List.Item>
                </Ripple>
            </List>

        )
    }
}

export default App;
