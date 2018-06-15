import React, { Component } from 'react'
import Link from 'gatsby-link'

import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Button,
  Icon,
  Container,
  Section,
} from 'bloomer'

import logo from '../img/brand.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { navOpen: false }
    this.onClickNav = this.onClickNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  onClickNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }

  closeNav = () => {
    if (this.state.navOpen) {
      return this.setState(prevState => ({
        navOpen: !prevState.navOpen,
      }))
    }
    return this.setState(prevState => ({
      navOpen: prevState.navOpen,
    }))
  }
  render() {
    return (
      <Navbar className={'my-navbar is-transparent'}>
        <NavbarBrand>
          <Link to="/">
            <NavbarItem onClick={this.closeNav}>
              <img src={logo} />
            </NavbarItem>
          </Link>
          <Link to="/">
            <NavbarItem isHidden="desktop" className="menu-item">
              Ok! Studio
            </NavbarItem>
          </Link>
          <NavbarBurger
            isActive={this.state.navOpen}
            onClick={this.onClickNav}
          />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.navOpen}>
          <NavbarStart>
            <Link onClick={this.closeNav} to="/projectes">
              <NavbarItem>
                <p className="menu-item">projectes</p>
              </NavbarItem>
            </Link>
            <Link onClick={this.closeNav} to="/serveis">
              <NavbarItem>
                <p className="menu-item">serveis</p>
              </NavbarItem>
            </Link>
            <Link onClick={this.closeNav} to="/metode">
              <NavbarItem>
                <p className="menu-item">mètode</p>
              </NavbarItem>
            </Link>
            <Link onClick={this.closeNav} to="/bloc">
              <NavbarItem>
                <p className="menu-item">bloc</p>
              </NavbarItem>
            </Link>
            <Link onClick={this.closeNav} to="/contacte">
              <NavbarItem isHidden="desktop">
                <p className="menu-item">contacta'ns</p>
              </NavbarItem>
            </Link>
          </NavbarStart>
          <NavbarEnd isHidden="mobile">
            <NavbarItem>
              <Link to="/contacte">
                <Button className="btn-header">
                  <span>contacta'ns</span>
                </Button>
              </Link>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header
