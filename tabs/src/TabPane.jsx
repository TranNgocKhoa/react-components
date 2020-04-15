import React from "react";
import PropTypes from 'prop-types';

export default class TabPane extends React.Component {
    render() {
        const {
            className,
            active,
            children,
            tab,
            onClick
        } = this.props;

        return (
            <div
                tabIndex={active ? 0 : 0}
                className={active ? className + " " + "active" : className}
            >
                <a className={active ? "active" : ""} href="#" onClick={onClick}>{tab}</a>
                {children}
            </div>
        );
    }
}

TabPane.propTypes = {
    active: PropTypes.bool,
    tab: PropTypes.string,
};