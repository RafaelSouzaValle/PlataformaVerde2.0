import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Main from '../components/template/Main'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Routes />
            <Main icon="home" title="Início"
                subtitle="Projeto usando React" />
        </div>
    </BrowserRouter>
