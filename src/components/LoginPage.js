import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <GoogleLoginButton text="Login with Google" onClick={startLoginGoogle} />
            <FacebookLoginButton className="button-fb" text="Login with Facebook" onClick={startLoginFacebook} />
        </div>
    </div>    
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);