import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './global.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div class="text-black bg-gray-100 w-full min-h-screen">
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
      <div className="bg-gray-800">
        <div className="container mx-auto lg:max-w-4xl text-blue-100">
          <Navbar />
        </div>
      </div>
      <div class="container mx-auto px-4 lg:px-0 lg:max-w-4xl pt-8 flex">{children}</div>
    </div>
  )
}

export default TemplateWrapper
