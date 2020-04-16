import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {Tabs, TabPane} from '../src'
import "../src/style/_tabs.scss";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Tabs activeTab={"Tab2"}>
            <TabPane tab="Tab1">
                Hello this is Tab1
            </TabPane>
            <TabPane tab="Tab2">
                Hello this is Tab2
            </TabPane>
            <TabPane tab="Tab3">
                Hello this is Tab3
            </TabPane>
        </Tabs>);
    }
};

ReactDOM.render(<App/>, document.getElementById("app"));