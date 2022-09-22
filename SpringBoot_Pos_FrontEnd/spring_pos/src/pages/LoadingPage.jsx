import React from 'react';
import '../assets/mainPage.css'

function LoadingPage(props) {
    return (
        <div className="loader-container">
            <div className="spinner"/>
            <h1 className={"header-shop"}>Sports  360</h1>
            <img className={"load-image"} src={"https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png"} alt={"s"}/>
        </div>
    );
}

export default LoadingPage;