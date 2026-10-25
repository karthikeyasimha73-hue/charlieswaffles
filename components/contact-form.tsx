'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Name" required />
      </div>
      <div className="form-row">
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="form-row">
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" placeholder="How can we help?" rows={4} required />
      </div>
      <button className="button button-dark form-submit" type="submit">Send a note <span aria-hidden="true">↗</span></button>
      <p className="form-note" aria-live="polite">
        {submitted
          ? 'This form is a preview and is not connected to message delivery yet. Please call the shop instead.'
          : 'This form is not connected yet. For a reply, please call the shop directly.'}
      </p>
    </form>
  )
}
