import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

ReactDOM.render(
    <div className='sentence'>
        <div>
            Welcome to imv
        </div>
        <div className='pushEffect'>
            <span>Individual</span>
            <span>Market</span>
            <span>Value</span>
        </div>
    </div>,
    document.querySelector(
        '#main-content'
    )
);