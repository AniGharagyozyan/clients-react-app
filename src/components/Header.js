import React from "react";

// const Header = () => {}    function Header() {}
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {this.props.title}
      </header>
    );
  }
}

export default Header;