import React from "react";
import TabPane from "./TabPane";

export default class Tabs extends React.Component {
    state = {
        tabState: []
    };

    constructor(props) {
        super(props);

        this.tabPanes = React.Children.toArray(this.props.children);

        const tabState = this.tabPanes.map(tabPane => tabPane.props.active);
        this.state = {
            tabState
        };

        this.currentTabIndex = 0;
    }

    componentDidMount() {

    }

    onTabChange(tabIndex) {
        if (tabIndex === this.currentTabIndex) {
            return;
        }

        const newTabState = this.state.tabState.map((item, index) => index === tabIndex);

        this.setState({
            tabState: newTabState
        });
    }

    _renderActiveTabPaneContent = () => {
        console.log(this.state);
        const activeTabIndex = this.state.tabState.findIndex(index => index);
        this.currentTabIndex = activeTabIndex;

        console.log(this.tabPanes);

        console.log(activeTabIndex);

        return this.tabPanes[activeTabIndex].props.children;
    };

    _renderTabPanes() {
        return this.tabPanes.map((item, index) => {
            return (
                <TabPane key={`tab${index}`} active={this.state.tabState[index]} tab={item.props.tab} onClick={this.onTabChange.bind(this, index)} />
            );
        });
    }

    render() {
        return (
            <div className="tab-container">
                <div className="header">
                    <div className="header-content">
                        <ul className="tabs">{this._renderTabPanes()}</ul>
                    </div>
                </div>
                <div className="tab-pane">{this._renderActiveTabPaneContent()}</div>
            </div>
        );
    }
};
