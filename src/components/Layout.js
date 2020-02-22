import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './global.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div class="text-black bg-blue-100">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="StockNp is awesome." />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <div className="bg-blue-800">
        <div className="container mx-auto px-2 lg:max-w-4xl text-blue-100">
          <Navbar />
        </div>
      </div>
      <div class="container mx-auto px-6 lg:max-w-4xl mt-8">{children}</div>
    </div>
  )
}

export default TemplateWrapper
