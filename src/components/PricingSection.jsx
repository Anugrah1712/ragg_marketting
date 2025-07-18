import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 199,
    description: 'For businesses looking to start with AI and automations.',
    features: [
      'Demo Plan for 7 days',
      '1 developer',
      'Basic chatbots & LLMs',
      '5 workflow automations',
      '5 content creation requests',
      'Cancel & pause anytime',
    ],
  },
  {
    name: 'Pro',
    price: 999,
    popular: true, // Add flag for badge
    description: 'For businesses looking to outperform their competition with AI and automations.',
    features: [
      '2 developers',
      'Custom chatbots & LLMs',
      '15 monthly workflow automations',
      '100 monthly content creation requests',
      'Cancel & pause anytime',
    ],
  },
  {
    name: 'Enterprise',
    price: 3000,
    description: 'For businesses looking to fully leverage AI and automations to become an industry leader.',
    features: [
      '3 developers',
      'Custom chatbots & LLMs',
      'Unlimited workflow automations',
      'Unlimited content creation requests',
      'Cancel & pause anytime',
    ],
  },
];

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('Professional'); // Default selected

  return (
    <section id= 'pricing'
    className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h2 className="text-7xl font-bold heading-gradient">Subscriptions</h2>
        <p className="text-gray-400 mt-3">
          Three different subscriptions to match your companies' needs.
        </p>

        <div className="inline-flex mt-6 bg-[#101010] border border-gray-700 rounded-full p-1">
          <button
            onClick={() => setIsMonthly(true)}
            className={`glow-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isMonthly ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`glow-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !isMonthly ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Annually (-20%)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.name;
          const isEnterprise = plan.name === 'Enterprise';
          const displayPrice = isEnterprise
            ? 'Custom Pricing'
            : `$${isMonthly ? plan.price : (plan.price * 12 * 0.8 / 12).toFixed(0)}`;

          return (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 border transition-all duration-300 ${
                isSelected
                  ? 'bg-[#0f0f0f] border-blue-500 shadow-blue-500/30 shadow-xl scale-105'
                  : 'bg-[#0a0a0a] border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-4 bg-blue-600 text-xs text-white px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl text-blue-400 font-medium">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2 text-white">
                {displayPrice}
                {!isEnterprise && (
                  <span className="text-sm font-normal text-gray-400"> /month</span>
                )}
              </p>
              <p className="text-sm text-gray-400 mt-4 mb-6">{plan.description}</p>

              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`glow-button w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 
                  appearance-none focus:outline-none focus:ring-0 active:bg-transparent ${
                    isSelected
                      ? ' text-white border border-blue-400 shadow-lg'
                      : 'bg-[#0d0d0d] border border-gray-700 text-white'
                  }`}
              >
                {isSelected ? 'Selected ✓' : 'Choose this plan'}
              </button>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="text-center text-gray-400 text-sm mt-12">
        📩 Contact us at{' '}
        <a href="mailto:genaitechsol@gmail.com" className="text-blue-400 underline">
          genaitechsol@gmail.com
        </a>{' '}
        for custom quotes, demos, or government/educational discounts.
      </p>
    </section>
  );
};

export default PricingSection;
