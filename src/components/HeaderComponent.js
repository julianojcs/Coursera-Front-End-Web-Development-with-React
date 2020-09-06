import React, { Component } from 'react';
import Brand from './Brand';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <>
                {
                    // <> </> -> Short way to use <React.Fragment></React.Fragment>
                }
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/"><Brand /></NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, amd create a unique fusion experience. Our lipsmaking creation will tickle your culinary sense!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;