import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import "./ErrorPage.scss";

class ErrorPage extends React.Component {
  state = {};
  componentDidMount() {}
  renderErrorMessage = () => {
    return (
      <>
        <h1 className="error-page__heading">
          {this.props.errorHeading || "Error"}
        </h1>
        {this.props.errorCode ? (
          <h2 className="error-page__heading">
            Error code: {this.props.errorCode}
          </h2>
        ) : null}

        <p className="error-page__p">
          {this.props.errorText || "Sorry, something went wrong."}
        </p>
      </>
    );
  };
  render() {
    return (
      <main className="error-page main">
        <div className="error-page__message-container">
          {this.renderErrorMessage()}
          <br />
          <p className="error-page__p">
            Try going back to the previous page or click one of the links below:
          </p>
          <div className="error-page two-buttons-container">
            <Link to="/" className="error-page__link">
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default ErrorPage;
