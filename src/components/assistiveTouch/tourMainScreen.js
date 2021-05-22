import React, { useState, Component } from 'react';
import './App.css';
import AssistiveTouchContainer from './components/assistiveTouch/index';
import propTypes from "prop-types";
const background = require("../../images/bg.png");

export default class TourMainScreen extends Component  {
    propTypes = {
        prop: typeof propTypes
    };

    render() {
        return (
            <>
            <div data-tour={props.dataTour}>
            <AssistiveTouchContainer/>
            <div className="main-container" style={{ 
            backgroundImage: background 
        }}>
            </div>
            </div>
            </>
        );
    }
}