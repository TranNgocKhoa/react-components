import React from "react";
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {
    state = {
        tabState: []
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.activeTab ? this.props.activeTab : this.props.children[0].props.tab,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab: tab});
    };

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const {tab} = child.props;

                        return (
                            <li
                                key={tab}
                                className={activeTab === tab ? "tab-list-item tab-list-active" : "tab-list-item"}
                                onClick={() => onClickTabItem(tab)}
                            >
                                {tab}
                            </li>
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.tab !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
};

Tabs.propTypes = {
    activeTab: PropTypes.string,
    children: PropTypes.oneOfType(
        [
            PropTypes.arrayOf(PropTypes.node),
        ]).isRequired
};