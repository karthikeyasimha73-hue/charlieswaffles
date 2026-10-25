'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { menuCategories, menuItems, type MenuCategory } from '@/lib/business-data'

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All')
  const visibleItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="page-shell">
        <div className="section-heading menu-heading">
          <div>
            <p className="eyebrow">A little something sweet</p>
            <h2>Made for your <em>happy place.</em></h2>
          </div>
          <p className="section-intro">Explore a few menu placeholders while we prepare the verified Charlie&apos;s Waffles menu.</p>
        </div>
        <div className="menu-toolbar">
          <div className="category-list" aria-label="Filter menu by category" role="group">
            {menuCategories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`category-button${activeCategory === category ? ' active' : ''}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <span className="menu-note">Sample menu · prices not yet provided</span>
        </div>
        <div className="menu-grid" aria-live="polite">
          {visibleItems.map((item, index) => (
            <article className="menu-card" key={item.name} style={{ animationDelay: `${index * 70}ms` }}>
              <div className="menu-image-wrap">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 25vw" className="menu-image" />
                <span className="sample-label">{item.label}</span>
              </div>
              <div className="menu-card-content">
                <div className="menu-card-topline">
                  <span className="menu-category-label">{item.category}</span>
                  <span className="menu-price">Price to be confirmed</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-card-link">Owner-editable sample <ArrowUpRight size={14} aria-hidden="true" /></span>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-disclaimer">Menu images and names shown are illustrative samples, not confirmed offerings. Please contact the shop for current items and prices.</p>
      </div>
    </section>
  )
}
