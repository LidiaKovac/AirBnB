import React from 'react'
import "../styling/Home.scss"
import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./SearchForm"
import Navigation from "./Navigation"
import Suggested from './Suggested';

class Home extends React.Component {
    render() {
        return (
            <>
            <div className="home-wrapper">
                <Navigation/>
                <div className="home-search">
                    <div className="home-title">
                        Go Near
                            <Button className='home-btn'>Explore nearby stays</Button>

                    </div>
                    
                </div>
                <div className='search-wrap'>
                    <div className='search-form'><SearchForm /></div>
                </div>
                
            </div>
            <Suggested/>
            </>
        )
    }
} export default Home