import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="w-full">
          <div className="container">
            <div className="">
              <h1 className="pb-0 mb-2 text-3xl text-blue-900 border-b">Contact</h1>
              <form name="contact" className=""  method="post" action="/contact/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field mb-6 mt-4">
                  <label className="text-gray-700 mb-4" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control pt-2">
                    <input className="input px-2 py-1 bg-blue-100 border-b-2 border-blue-800" type={'text'} name={'name'} onChange={this.handleChange} id={'name'} required={true}/>
                  </div>
                </div>
                <div className="field mb-6">
                  <label className="text-gray-700 mb-4" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control pt-2">
                    <input className="input px-2 py-1 bg-blue-100 border-b-2 border-blue-800" type={'email'} name={'email'} onChange={this.handleChange} id={'email'} required={true} />
                  </div>
                </div>
                <div className="field mb-6">
                  <label className="text-gray-700 mb-4" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control pt-2">
                    <textarea className="w-full max-w-xl border-b-2 border-blue-800 h-64 p-3 bg-blue-100" name={'message'} onChange={this.handleChange} id={'message'} required={true}/>
                  </div>
                </div>
                <div className="field mb-6">
                  <button className="px-4 py-2 bg-green-800 text-green-100 rounded" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
