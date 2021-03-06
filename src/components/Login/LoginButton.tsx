import Button from "@material-ui/core/Button";
import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout
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
      <React.Fragment>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
            render={(renderProps) => (
              <Button
                disabled={renderProps.disabled}
                onClick={renderProps.onClick}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Cerrar sesion
              </Button>
            )}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
            render={(renderProps) => (
              <Button
                disabled={renderProps.disabled}
                onClick={renderProps.onClick}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Ingresar con Google
              </Button>
            )}
          />
        )}
      </React.Fragment>
    );
  }
}
