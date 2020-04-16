import React from "react";
import PropTypes from 'prop-types';

export default class TabPane extends React.Component {
    state = {};
}

TabPane.propTypes = {
    tab: PropTypes.string.isRequired,
    children: PropTypes.oneOfType(
        [
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired
};