import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import BCButton from "../BCButton"
import SignupForm from "./SignupForm";
import { Step } from "..";

const Signup = props => {
  const {goTo} = props;
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);

  const handleEmailButton = () => {
    setIsSignupFormVisible(true);
  };

  return (
      <LoginView>
        <LoginCard>
          <LoginContainer>
            {!isSignupFormVisible && (
              <RegisterDisclaimer>
                Crea tu cuenta para empezar a vender
              </RegisterDisclaimer>
            )}
            {!isSignupFormVisible && (
              <LoginSocial>
                <Facebook>
                  <FaFacebookF />
                  <span>Regístrate con Facebook</span>
                </Facebook>
                <Twitter>
                  <FaTwitter />
                  <span>Regístrate con Twitter</span>
                </Twitter>
                <LoginDivider>
                  <LoginDividerText>o</LoginDividerText>
                </LoginDivider>
                <LoginButton onClick={handleEmailButton}>
                  Registrate con tu Email
                </LoginButton>
              </LoginSocial>
            )}
            {isSignupFormVisible && <SignupForm />}
            <AccountFooter>
              <span>¿Ya tienes una cuenta en Buena Tienda?</span>
                <RegisterButton onClick={()=>goTo(Step.login)}>Inicia tu sesión</RegisterButton>
            </AccountFooter>
          </LoginContainer>
        </LoginCard>
      </LoginView>
  );
};

const LoginView = styled.div`
  @media only screen and (min-width: 48em) {
    margin: 2rem 0;
  }
`;

const LoginCard = styled.div`
  grid-template-columns: minmax(auto, 405px);
  text-align: center;
  @media only screen and (min-width: 48em) {
    grid-template-columns: minmax(auto, 376px);
    display: grid;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
`;

const LoginContainer = styled.div`
  margin-bottom: 1.5rem;
  @media only screen and (min-width: 48em) {
    background-color: #fff;
    width: 376px;
    margin: 0 auto 1.5rem auto;
    -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
  }
`;

const RegisterDisclaimer = styled.span`
  text-align: center;
  line-height: 20px;
  font-weight: bold;
  margin: 2rem 0 -0.5rem 0;
  display: block;
`;

const LoginSocial = styled.div`
  padding: 16px 10px 0 10px;
  @media only screen and (min-width: 48em) {
    padding: 24px 40px 0px 40px;
  }
  @media only screen and (min-width: 64em) {
    padding: 24px 32px 0px 32px;
  }

  button {
    display: block;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #d3d3d3;
  border: none;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: 13px;
  padding: 8px 0.8em 6px 0.8em;
  text-decoration: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  transition: 0.2s;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  &:active {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  svg {
    margin-right: 0.5em;
    vertical-align: middle;
  }
`;

const Facebook = styled(Button)`
  font-size: 18px;
  padding: 11px 0.8em 12px 0.8em;
  background: -webkit-linear-gradient(
    right,
    #3b5999 0%,
    #3b5999 50%,
    #4e69a3 100%
  );
  background: -moz-linear-gradient(
    right,
    #3b5999 0%,
    #3b5999 50%,
    #4e69a3 100%
  );
  background: -o-linear-gradient(right, #3b5999 0%, #3b5999 50%, #4e69a3 100%);
  background: -ms-linear-gradient(right, #3b5999 0%, #3b5999 50%, #4e69a3 100%);
  background: linear-gradient(to left, #3b5999 0%, #3b5999 50%, #4e69a3 100%);
  -webkit-box-shadow: 0 1px 1px 0 #355089;
  box-shadow: 0 1px 1px 0 #355089;
  &:hover {
    -webkit-box-shadow: 0 2px 13px 0 rgba(53, 80, 137, 0.5);
    box-shadow: 0 2px 13px 0 rgba(53, 80, 137, 0.5);
  }
`;

const Twitter = styled(Button)`
  font-size: 18px;
  padding: 11px 0.8em 12px 0.8em;
  background: -webkit-linear-gradient(
    right,
    #60a9de 0%,
    #60a9de 50%,
    #6fb1e1 100%
  );
  background: -moz-linear-gradient(
    right,
    #60a9de 0%,
    #60a9de 50%,
    #6fb1e1 100%
  );
  background: -o-linear-gradient(right, #60a9de 0%, #60a9de 50%, #6fb1e1 100%);
  background: -ms-linear-gradient(right, #60a9de 0%, #60a9de 50%, #6fb1e1 100%);
  background: linear-gradient(to left, #60a9de 0%, #60a9de 50%, #6fb1e1 100%);
  -webkit-box-shadow: 0 1px 1px 0 #5698c7;
  box-shadow: 0 1px 1px 0 #5698c7;
  &:hover {
    -webkit-box-shadow: 0 2px 13px 0 rgba(86, 152, 199, 0.5);
    box-shadow: 0 2px 13px 0 rgba(86, 152, 199, 0.5);
  }
`;

const LoginDivider = styled.div`
  text-align: center;
  overflow: hidden;
  margin: 1rem auto;
`;

const LoginDividerText = styled.span`
  position: relative;
  padding: 12px;
  font-weight: 600;
  color: #273b47;
  font-size: 20px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    width: 5000px;
    border-bottom: 1px solid #e4e4e4;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: 5000px;
    border-bottom: 1px solid #e4e4e4;
  }
`;

const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 14px 0;
  font-weight: bold;
  font-size: 1rem;
  background: -webkit-linear-gradient(
    right,
    #95ca3e 0%,
    #95ca3e 50%,
    #85c638 100%
  );
  background: -moz-linear-gradient(
    right,
    #95ca3e 0%,
    #95ca3e 50%,
    #85c638 100%
  );
  background: -o-linear-gradient(right, #95ca3e 0%, #95ca3e 50%, #85c638 100%);
  background: -ms-linear-gradient(right, #95ca3e 0%, #95ca3e 50%, #85c638 100%);
  background: linear-gradient(to left, #95ca3e 0%, #95ca3e 50%, #85c638 100%);
  -webkit-box-shadow: 0 1px 1px 0 #58902d;
  box-shadow: 0 1px 1px 0 #58902d;
  &:hover {
    -webkit-box-shadow: 0 2px 13px 0 rgba(88, 144, 45, 0.49);
    box-shadow: 0 2px 13px 0 rgba(88, 144, 45, 0.49);
    color: #fff;
  }
`;

const LostPassword = styled(BCButton)`
  margin-top: 16px;
  font-size: 14px;
  color: #0791e6;
  text-decoration: none;
  display: block;
`;

const AccountFooter = styled.div`
  padding: 24px 10px;
  background-color: #f6f6f6;
  @media only screen and (min-width: 48em) {
    padding: 24px 42px;
  }
  @media only screen and (min-width: 64em) {
    padding: 24px 32px;
  }
  span {
    display: block;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.37;
    color: #3a3c3f;
  }
`;

const RegisterButton = styled.button`
  display: block;
  font-size: 16px;
  padding: 12px 0.8em 12px 0.8em;
  font-size: 1rem;
  border: 1px solid #0791e6;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  color: #0791e6;
  cursor: pointer;
  outline: none;
  background: #fff;
  text-decoration: none;
  font-weight: bold;
  width: 100%;
`;

export default Signup;