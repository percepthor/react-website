import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {compose} from 'redux';

import Moment from 'react-moment';

import { auth_token_remove } from '../actions/authActions';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.auth_token_remove();
    }

    handleGoHome(e){
        e.preventDefault();
        let url = ''
        if (process.env.REACT_APP_RUNTIME === 'Production'){
            url = `https://verstand.com.mx/`
        }
        if (process.env.REACT_APP_RUNTIME === 'Test') {
            url = `http://test.verstand.com.mx/`
        }
        if (process.env.REACT_APP_RUNTIME === 'Development') {
            url = `http://localhost.com/`
        }
        window.location.href = url
    }

    render () {
        let time_display = '';
        time_display = <Moment date={new Date()} format="DD/MM/YYYY - HH:mm" utc={false}/>
        const {user } = this.props;
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark main-blue-background">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Percepthor</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {user !== undefined  
                                   ? <a href="/#" onClick={e => e.preventDefault()} className="navbar-brand text-white">{user.username} - {user.role}</a>
                                   : null
                                }
                            </li>
                            <li className="nav-item">
                                <a href="/#" onClick={e=>e.preventDefault()} className="navbar-brand text-white">{time_display}</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" onClick={(e)=>this.handleLogout(e)} className="navbar-brand text-white">Cerrar sesión</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" onClick={(e)=>this.handleGoHome(e)} className="navbar-brand text-white">Regresar a Inicio</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
          </nav>

          {/* <Alert /> */}
        </div>
        );
    }

}

Navbar.propTypes = {};

const mapStateToProps = state => ({
    user: state.auth.user
});

export default compose(
    withRouter,
    connect (mapStateToProps, {auth_token_remove} )
)(Navbar);
