import React from 'react';
import ReactDOM from "react-dom";
import PrimaryLayout from './PrimaryLayout';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);