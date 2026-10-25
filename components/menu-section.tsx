'use client'

import { useState } from 'react'
import { menuCategories, menuGroups, type MenuCategory } from '@/lib/business-data'

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All')
  const visibleGroups = activeCategory === 'All'
    ? menuGroups
    : menuGroups.filter((group) => group.category === activeCategory)

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="page-shell">
        <div className="section-heading menu-heading">
          <div>
            <p className="eyebrow">Made fresh for your cravings</p>
            <h2>Find your <em>favourite.</em></h2>
          </div>
          <p className="section-intro">From Belgian waffles to brownies and ice cream, there&apos;s a sweet moment for everyone.</p>
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
          <span className="menu-note">Menu &amp; prices may differ</span>
        </div>
        <div className="menu-groups" aria-live="polite">
          {visibleGroups.map((group) => (
            <section className="menu-group" key={group.title} aria-label={group.title}>
              <div className="menu-group-heading">
                <h3>{group.title}</h3>
                <span>{group.items.length} {group.items.length === 1 ? 'item' : 'items'}</span>
              </div>
              <ul className="menu-item-list">
                {group.items.map((item) => (
                  <li className="menu-item" key={item.name}>
                    <div className="menu-item-main">
                      <div className="menu-item-heading">
                        <h4>{item.name}</h4>
                        <span className="menu-item-price">₹{item.price}</span>
                      </div>
                      {item.description && <p className="menu-item-description">{item.description}</p>}
                      {item.customizable && <span className="customizable-label">Customizable</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="menu-disclaimer">The Dry Fruits Brownie Hamper is listed once under Hampers. Please contact the shop to confirm current availability and customization options.</p>
      </div>
    </section>
  )
}
