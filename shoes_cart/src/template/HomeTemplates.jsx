import React, { Component } from 'react'
import { NavLink, Outlet } from "react-router-dom"
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content" style={{ minHeight: '5vh' }}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        )
    }
}
