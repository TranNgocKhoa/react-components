import React from "react";
import PropTypes from 'prop-types';

export default class TabPane extends React.Component {

}

TabPane.propTypes = {
    tab: PropTypes.string.isRequired,
    children: PropTypes.element,
};