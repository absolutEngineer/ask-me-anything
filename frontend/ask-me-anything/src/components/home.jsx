import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Welcome to AskMeAnything</h2>
                <div className="row">
                    <div className="col-lg-5 my-2">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h4>Questions per day chart</h4>
                        </div>
                    </div>
                    <div className="col-lg-5 my-2">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h5>Top 10 Keywords</h5>
                            <ol>
                                <li>Lorem - 100</li>
                                <li>Ipsum - 88</li>
                                <li>Dolor - 42</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-lg-2 my-2 p-0">
                        <div className="row">
                            <div className="col-12 my-2">
                                <NavLink to='/question' style={{ textDecoration: 'none' }}>
                                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                                        <h5 className="m-0 justify-content-center">Create a question</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-12 my-2">
                                <NavLink to='/answer' style={{ textDecoration: 'none' }}>
                                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                                        <h5 className="m-0 justify-content-center">Answer a question</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-lg-3 my-2">*/}
                    {/*    <NavLink to='/about'>*/}
                    {/*        <div className="h-100 p-5 text-white bg-dark rounded-3">*/}
                    {/*            <h4>Questions per day</h4>*/}
                    {/*        </div>*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;