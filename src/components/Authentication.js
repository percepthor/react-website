import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Authentication extends Component {

	componentDidMount () {
		process.env.REACT_APP_RUNTIME === "Production" 
			? window.location.href = "https://verstand.com.mx/login"
			: process.env.REACT_APP_RUNTIME === "Test"
				? window.location.href = "http://test.verstand.com.mx/login"
				: window.location.href = "http://localhost.com/login"
	}

  render () {
		return (
      <div>
        <h1>Redirecting...</h1>
      </div>
    );
  }
  
}

Authentication.propTypes = {};

const mapStateToProps = state => ({});

export default compose(
  withRouter,
  connect (mapStateToProps, { }) 
)(Authentication);