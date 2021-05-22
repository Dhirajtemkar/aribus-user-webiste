import React, { useState } from 'react';
import './App.css';
import AssistiveTouchContainer from './components/assistiveTouch/index';
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation';

const App = () => {
    // const [query, setQuery] = useState('');
    // const search = async (e) => {
    //     if(e.key === 'Enter') {
    //         setQuery('');
    //     }
    // }

    return (
        <>
        <BrowserRouter>
            <AssistiveTouchContainer/>
            <Navigation />
        </BrowserRouter>
        </>
    );
}

export default App;