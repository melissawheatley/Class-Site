import React, { Component } from 'react';
import './PeopleDeets.css';
// import '../App.css';
import email from './social/envelope.png';
import github from './social/github.png';
import linkedin from './social/linkedin-in.png';
import personalsite from './social/address-card.png';
import { Link } from 'react-router-dom'

class PeopleDeetz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: this.props.location.state.pic
        };
        this.funny = this.funny.bind(this);
        this.stopfunny = this.stopfunny.bind(this);
    }

    funny() {
        this.setState({
            imgSrc: this.props.location.state.silly
        });
    }

    stopfunny() {
        this.setState({
            imgSrc: this.props.location.state.pic
        });
    }

    render() {
        let data = this.props.location.state;
        return (
            <div className="peopleDiv">
                <div className="d-flex justify-content-center peopledeetzpage">
                    <div className="picturediv col-12 col-sm-5">
                        <img src={this.state.imgSrc} className="classpicture" alt="classpicture" onMouseEnter={this.funny} onMouseLeave={this.stopfunny} />
                    </div>
                    <div className="aboutdiv col-12 col-sm-6 align-self-center text-left">
                        <h1 className="class-h1 black  text-center text-uppercase mb-3">{data.name}</h1>
                        <h3 className="class-h3 black  mb-3">"{data.quote}"</h3>
                        <p className="class-p black">
                            {data.bio}
                        </p>
                    </div>
                    <div className="socialdiv col-12 col-sm-1 d-flex">
                        <a href={data.linkedIn} target="_blank" ><img src={linkedin} alt="" className="icon m-2" /></a>
                        <a href={data.git} target="_blank" ><img src={github} alt="" className="icon m-2" /></a>
                        <a href={`mailTo:${data.email}`} target="_blank" ><img src={email} alt="icon" className="icon m-2" /></a>
                        <a href={data.site} target="_blank" ><img src={personalsite} alt="icon" className="icon m-2" /></a>
                    </div>
                </div>
                <Link id="backButton" aria-current="false" to='/Class-Site/#Meet'>BACK</Link>
                </div>
        );
    }
}

export default PeopleDeetz;