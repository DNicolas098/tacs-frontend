import React from "react";
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const CLIENT_ID =
  "475854452552-js6cnac0fjktpav4dcp570860l7etar8.apps.googleusercontent.com";

type propsTypes = {};

type stateTypes = {
  isLogined: boolean;
  accessToken: string;
};

export default class LoginButton extends React.Component<
  propsTypes,
  stateTypes
> {
  constructor(props: LoginButton) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
    if ((response as GoogleLoginResponse).accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: (response as GoogleLoginResponse).accessToken,
      }));
    }
  }

  logout() {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }

  handleLoginFailure(response: GoogleLoginResponse) {
    alert("Failed to log in");
  }

  handleLogoutFailure() {
    alert("Failed to log out");
  }

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
        {this.state.accessToken ? (
          <h5>
            Access Token: <br />
            <br /> {this.state.accessToken}
          </h5>
        ) : null}
      </div>
    );
  }
}
