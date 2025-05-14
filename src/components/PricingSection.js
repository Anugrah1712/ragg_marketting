import React, { useState } from 'react';
import './PricingSection.css';

const tiers = [
  {
    id: 'free',
    title: 'Free',
    subtitle: 'Perfect for getting started.',
    features: [
      '3 document uploads/month',
      'Basic website scraping',
      'Standard chatbot access',
    ],
    price: '$0/month',
  },
  {
    id: 'pro',
    title: 'Pro',
    subtitle: 'For power users and growing teams.',
    features: [
      'Unlimited uploads',
      'Advanced scraping & analysis',
      'Custom prompt templates',
      'Priority support',
    ],
    price: '$29/month',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    subtitle: 'Custom AI at scale.',
    features: [
      'High-volume ingestion',
      'Private vector DB hosting',
      'Team collaboration tools',
      'Dedicated onboarding & support',
    ],
    price: 'Custom Plan',
  },
];

const PricingSection = () => {
  const [selected, setSelected] = useState('pro');

  return (
    <section id="pricing" className="pricing-section">
      <h2 className="pricing-title"> Simple, Transparent Pricing</h2>
      <div className="pricing-grid horizontal">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`pricing-card ${selected === tier.id ? 'selected' : 'dimmed'}`}
            onClick={() => setSelected(tier.id)}
          >
            <h3>{tier.title}</h3>
            <p className="subtitle">{tier.subtitle}</p>
            <ul className="feature-list">
              {tier.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="price">{tier.price}</div>
          </div>
        ))}
      </div>

      {/* Button is outside the cards but placed visually below the Pro card */}
      <div className="contact-button-wrapper">
        <button className="enterprise-button">Contact Us</button>
      </div>
    </section>
  );
};

export default PricingSection;
