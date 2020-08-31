import React from "react";
// import "./Backdrop.css";
class BackDrop extends React.Component {
  render() {
    return <div className="backdrop" onClick={this.props.close} />;
  }
}

export default BackDrop;
