import React, { Component, Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';

//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Footer from './Footer';

class Landing extends Component {

  render () {
		return (
      <div>
        <h1 className='text-center'>React Website</h1>
      </div>
    );
  }
  
}

Landing.propTypes = {};

const mapStateToProps = state => ({});

export default compose(
  withRouter,
  connect (mapStateToProps, { }) 
)(Landing);
