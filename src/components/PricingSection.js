import React, { useState } from 'react';
import './FeaturesSection.css';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$199/month',
    description: 'Best for individuals, startups, and small teams testing AI workflows.',
    features: [
      'Upload up to 10 documents per month',
      'Access to basic vector search (FAISS or Chroma)',
      'Use GPT-3.5 or open-source LLMs',
      'Basic Developer Console access',
      'Community support',
      'No voice or multi-user support',
    ],
  },
  {
    name: 'Pro',
    price: '$999/month',
    description: 'Ideal for enterprises and growing teams that need full flexibility and performance.',
    features: [
      'Unlimited document uploads',
      'Full access to vector databases (FAISS, Pinecone, Weaviate, Qdrant, Chroma)',
      'Real-time switching between GPT-4, Llama 3, Gemini 1.5 Flash, and more',
      'Advanced Developer Console with prompt editing and model control',
      'Voice input and output support',
      'Secure self-hosted deployment',
      'Priority email and chat support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    description: 'Tailored for large-scale deployments with advanced security and compliance needs.',
    features: [
      'Everything in Pro',
      'Custom API limits and model integrations',
      'Dedicated onboarding & account manager',
      'Role-based access control and multi-user support',
      'Enterprise-grade security (TLS, AES, air-gapped support)',
      'SLA-backed support with 24/7 availability',
      'Optional Managed SaaS Hosting',
    ],
  },
];

const PricingSection = () => {
  const [selected, setSelected] = useState('Pro');

  return (
    <section id="pricing" className="features-section">
      <h2 className="features-title">Pricing Plans</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto 30px', fontSize: '1.1rem' }}>
        Choose a plan that fits your scale, team, and security needs.
      </p>
      <div className="features-grid pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`feature-card pricing-card ${selected === plan.name ? 'selected' : ''}`}
            onClick={() => setSelected(plan.name)}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            {plan.popular && (
              <div className="badge-popular">Most Popular</div>
            )}
            <h3>{plan.name}</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#00eaff', marginBottom: '10px' }}>{plan.price}</p>
            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>{plan.description}</p>
            <ul style={{ fontSize: '0.95rem', paddingLeft: '1.2rem', lineHeight: 1.5 }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1rem', color: '#e0f7fa' }}>
        📩 Contact us at <a href="mailto:sales@gts.ai" style={{ color: '#00eaff' }}>sales@gts.ai</a> for custom quotes, demos, or government/educational discounts.
      </p>
    </section>
  );
};

export default PricingSection;
