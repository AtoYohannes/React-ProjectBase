import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import bn from "../../utils/bemnames";
import routes from "../../Config/routes";
import { RenderButton } from "../MainRender";
import {
  MdReorder,
  MdHelp,
  MdExitToApp,
  MdGroupAdd,
  MdPerson,
  MdPanoramaFishEye,
  MdQuestionAnswer,
  MdPageview,
} from "react-icons/md";
import { Link } from "react-router-dom";

const bem = bn.create("header");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isMobilePopoverOpen: false,
      isAboutPopoverOpen: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  toggleMobilePopover = () => {
    this.setState({
      isMobilePopoverOpen: !this.state.isMobilePopoverOpen,
    });
  };
  toggleAboutPopover = () => {
    this.setState({
      isAboutPopoverOpen: !this.state.isAboutPopoverOpen,
    });
  };

  render() {
    const isMobile = this.state.isMobile;
    let drawerClasses = "";
    if (this.props.scrolled) {
      drawerClasses = "bg-gradient-theme-right scrolledAppBar";
    }

    return (
      <>
        <Navbar light fixed="top" expand className={drawerClasses}>
          <Link
            to={{ pathname: routes.homePage }}
            style={{ textDecoration: "none" }}
          >
            <Nav navbar>LOGO </Nav>
          </Link>

          {isMobile && (
            <Nav navbar className="ml-2">
              Project Title
            </Nav>
          )}
          {isMobile ? (
            <Nav navbar className={bem.e("nav-right")}>
              <NavItem>
                <Popover
                  trigger="legacy"
                  placement="bottom"
                  isOpen={this.state.isAboutPopoverOpen}
                  toggle={this.toggleAboutPopover}
                  target="AboutPopover"
                  className="p-5 border"
                >
                  <PopoverBody className="p-2 border-light">
                    <ListGroup flush>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPerson className="mr-3" /> {"  "} About Us
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdHelp className="mr-3" /> How Magazine Works
                      </ListGroupItem>

                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPanoramaFishEye className="mr-3" /> Browse Magazine
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdQuestionAnswer className="mr-3" /> FAQ
                      </ListGroupItem>
                      <ListGroupItem
                        tag="button"
                        action
                        className="border-light"
                      >
                        <MdPageview className="mr-3" /> Terms Of Service
                      </ListGroupItem>
                    </ListGroup>
                  </PopoverBody>
                </Popover>
                <NavLink onMouseEnter={this.toggleAboutPopover}>
                  <RenderButton
                    title="About"
                    outline
                    color="dark"
                    id="AboutPopover"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <RenderButton
                    title="SignUp"
                    onClick={() => this.props.toggle("signUp")}
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <RenderButton
                    onClick={() => this.props.toggle("signIn")}
                    title="SignIn"
                  />
                </NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar className={bem.e("nav-right")}>
              <Popover
                trigger="legacy"
                placement="bottom"
                isOpen={this.state.isMobilePopoverOpen}
                toggle={this.toggleMobilePopover}
                target="MobilePopover"
                className="p-5 border"
              >
                <PopoverBody className="p-1">
                  <ListGroup flush>
                    <ListGroupItem
                      tag="button"
                      action
                      className="border-light"
                      onClick={() => this.props.toggle("signIn")}
                    >
                      <MdExitToApp className="mr-2" /> {"  "} SignIn
                    </ListGroupItem>
                    <ListGroupItem
                      tag="button"
                      action
                      className="border-light"
                      onClick={() => this.props.toggle("signUp")}
                    >
                      <MdGroupAdd className="mr-2" /> SignUp
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp className="mr-2" /> About Us
                    </ListGroupItem>
                  </ListGroup>
                </PopoverBody>
              </Popover>
              <NavItem id="MobilePopover">
                <NavLink>
                  <MdReorder size={20} />
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Navbar>
      </>
    );
  }
}

export default Header;
