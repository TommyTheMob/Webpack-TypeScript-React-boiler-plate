import React from 'react'
import classes from './App.module.scss'
import {Outlet} from "react-router-dom"
import ReactSVG from '@/assets/reactsvg.svg'
import WebpackSVG from '@/assets/webpacksvg.svg'
import TSSVG from '@/assets/typescriptsvg.svg'

export const App = () => {
    return (
        <div className={classes.page}>
            <div className={classes.content}>
                <h1>Your Webpack + TS + React build is ready to use!</h1>
                <div style={{textAlign: 'center', marginTop: '25px'}}>
                    <WebpackSVG style={{marginRight: 25}} width={150} height={150}/>
                    <TSSVG style={{marginRight: 25}} width={150} height={150}/>
                    <ReactSVG style={{marginRight: 25}} width={150} height={150}/>
                </div>
                <div style={{color: '#ccc', textAlign: "center", marginTop: '25px'}}>
                    <a href="https://github.com/TommyTheMob/Webpack-TypeScript-React-boiler-plate" target='_blank'>Github Repo</a>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};