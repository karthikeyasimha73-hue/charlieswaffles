'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { business } from '@/lib/business-data'

const links = [
  { href: '#menu', label: 'Our menu' },
  { href: '#about', label: 'Our story' },
  { href: '#visit', label: 'Find us' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <a className="brand" href="#home" aria-label="Charlie’s Waffles home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">cw</span>
          <span className="brand-name">Charlie&apos;s <em>Waffles</em></span>
        </a>
        <nav aria-label="Main navigation" className={`main-nav${isOpen ? ' is-open' : ''}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
          <a className="mobile-order-link" href={business.orderUrl} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={15} /></a>
        </nav>
        <a className="header-order button button-dark" href={business.orderUrl} target="_blank" rel="noreferrer">
          Order online <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
