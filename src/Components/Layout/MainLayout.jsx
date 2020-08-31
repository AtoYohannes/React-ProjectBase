import { Content, Footer, Header } from "./index";
import React from "react";
import { BackDrop, SlidingDrawer } from "../Drawer";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: 0,
      scrolled: false,
      drawerOpen: false,
      type: "",
    };
  }

  drawerToggleClickHandler = (type) => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
      type: type,
    });
  };
  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop;
    if (scrollTop > 160) {
      this.setState({
        scrolled: true,
      });
    }
    if (scrollTop < 160) {
      this.setState({
        scrolled: false,
      });
    }
    this.setState({
      scrollTop: scrollTop,
    });
  };

  render() {
    const { children } = this.props;
    let backdrop;
    if (this.state.drawerOpen) {
      backdrop = <BackDrop close={this.backdropClickHandler} />;
    }

    return (
      <div
        style={{
          height: "100vh",
          overflow: "scroll",
        }}
        onScroll={this.onScroll}
        ref={this.myRef}
      >
        <main className="cr-app bg-background">
          <SlidingDrawer show={this.state.drawerOpen} type={this.state.type} />
          {backdrop}
          <Content fluid>
            <Header toggle={this.drawerToggleClickHandler} scrolled={this.state.scrolled} />
            <div className="cr-app-body">{children}</div>
            <div className="mt-5">
              <Footer />
            </div>
          </Content>
        </main>
      </div>
    );
  }
}

export default MainLayout;
