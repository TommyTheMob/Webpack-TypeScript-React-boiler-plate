import React from 'react'
import classes from './App.module.scss'
import {Outlet} from "react-router-dom";

function TODO(str: string): string {
    if (str) return 'ok'
    return 'not ok'
}


export const App = () => {

    if (__PLATFORM__ === 'desktop') {
        return <div>ISDESKTOPPLATFORM</div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>ISMOBILEPLATFORM</div>
    }

    if (__ENV__ === 'development') {
        // addDevTools()
    }

    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            Hello World
            <Outlet />
        </div>
    );
};