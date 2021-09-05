import React from 'react';

import version from '../version.json';

const Footer = () => {

    return (
        <footer className="text-center percepthor-page-footer dark">
            <div className="footer-copyright text-center">
                <p>Copyright &copy; { new Date().getFullYear() } Percepthor - { version.version_name } - { version.version_date } - Runtime: { process.env.REACT_APP_RUNTIME }</p>
            </div>
        </footer>
    );

};

export default Footer;
