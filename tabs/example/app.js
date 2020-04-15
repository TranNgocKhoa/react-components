import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Tabs, TabPane } from '../src'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Tabs>
                <TabPane active={false} tab={"Tab1"}>
                   <h3>Hello</h3>
                </TabPane>
                <TabPane active={true} tab={"Tab2"}>
                    <h3>Hello2</h3>
                </TabPane>
            </Tabs>);
    }
}

ReactDOM.render(<App />, document.getElementById("app"));