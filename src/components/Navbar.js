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
    console.log(this)
    return (
      <nav class="bg-nav mx-auto flex w-full justify-between container" role="navigation" aria-label="main-navigation">
        <div class="py-2">
          <Link className="ml-4 mr-4 inline-block" to="/" title="Logo">
            <svg className="w-16 h-16 align-middle" id="Layer_3" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m10.707 42.707 13.293-13.293 12.293 12.293c.391.391 1.023.391 1.414 0l18.707-18.707h2.172l-2.293 2.293 1.414 1.414 4-4c.391-.391.391-1.023 0-1.414l-4-4-1.414 1.414 2.293 2.293h-2.586c-.266 0-.52.105-.707.293l-18.293 18.293-12.293-12.293c-.391-.391-1.023-.391-1.414 0l-13.707 13.707h-3.586v2h4c.266 0 .52-.105.707-.293z" fill="#4d5d7a"/><path d="m16 61v-21l-4 4v17" fill="#e47c6e"/><path d="m32 61v-21l-4-4v25" fill="#e47c6e"/><path d="m48 61v-27l-4 4v23" fill="#e47c6e"/><g fill="#78b75b"><path d="m8 61v-12h-4v12"/><path d="m24 61v-29l-4 4v25"/><path d="m40 61v-17h-4v17"/><path d="m56 61v-35l-4 4v31"/></g><path d="m26 16v-14h-22v36.555c-1.191.693-2 1.968-2 3.445 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.477-.809-2.752-2-3.445v-22.555z" fill="#4472b2"/><path d="m7 5h2v8h-2z" fill="#fff"/><path d="m12 10h3c.553 0 1-.448 1-1v-3c0-.552-.447-1-1-1h-4c-.553 0-1 .448-1 1v7h2zm0-3h2v1h-2z" fill="#fff"/><path d="m18 13h4c.553 0 1-.448 1-1v-6c0-.552-.447-1-1-1h-4c-.553 0-1 .448-1 1v6c0 .552.447 1 1 1zm1-6h2v4h-2z" fill="#fff"/><path d="m2 60h60v2h-60z" fill="#4d5d7a"/>
            </svg>
            <span>StockNP.com</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="mr-4" to="/about">About</Link>
          <Link className="mr-4" to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
