import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
// import SharreIt from "../../assets/Icons/Logo2.svg";
// import Logo from "../../assets/Icons/Logo.svg";
import bn from "../../utils/bemnames";
import { MdHelp } from "react-icons/md";
const bem = bn.create("header");

class EmptyLayoutHeader extends Component {
  state = {};
  render() {
    return (
      <Navbar light expand className="bg-gradient-theme-right">
        <Nav navbar>{/* <img className="App-logo" alt="" src={Logo} /> */}</Nav>
        <Nav navbar>
          <Link to={{ pathname: routes.homePage }}>
            {/* <img className="App-logo2" alt="" src={SharreIt} /> */}
          </Link>
        </Nav>
        <Nav navbar className={bem.e("nav-right")}>
          <NavItem>
            <NavLink>
              <Button size='sm' outline color="light" id="AboutPopover">
                {" "}
                <MdHelp /> Need Help?
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default EmptyLayoutHeader;
