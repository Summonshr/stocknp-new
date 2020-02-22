import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }


  render() {
    return (
      <nav class="bg-nav py-8 mx-auto flex w-full justify-between container" role="navigation" aria-label="main-navigation">
        <div>
          <Link className="ml-4 mr-4" to="/" title="Logo">StockNp.com</Link>
        </div>
        <div>
          <Link className="mr-4" to="/about">About</Link>
          <Link className="mr-4" to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
