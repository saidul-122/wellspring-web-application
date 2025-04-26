
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '0',
    description: 'Essential wellness tracking for individuals',
    features: [
      'Basic health analytics',
      'Wellness tracking for 3 metrics',
      'Limited AI recommendations',
      'Community support'
    ],
    cta: 'Start for Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '12',
    description: 'Complete wellness solution for health enthusiasts',
    features: [
      'Advanced health analytics',
      'Unlimited wellness tracking',
      'Personalized AI recommendations',
      'One monthly expert consultation',
      'Custom wellness plans'
    ],
    cta: 'Start with Pro',
    popular: true
  },
  {
    name: 'Family',
    price: '29',
    description: 'Wellness management for up to 5 family members',
    features: [
      'Everything in Pro plan',
      'Family health dashboard',
      'Up to 5 family members',
      'Three monthly expert consultations',
      'Custom family wellness plans',
      'Priority support'
    ],
    cta: 'Start with Family',
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that's right for your wellness journey. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={index} className={`
              rounded-2xl border p-6 shadow-sm 
              ${tier.popular ? 'border-wellspring-500 ring-2 ring-wellspring-500 ring-opacity-50' : ''}
            `}>
              {tier.popular && (
                <div className="bg-wellspring-500 text-white text-xs font-semibold rounded-full py-1 px-3 mb-4 w-fit mx-auto">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 shrink-0 text-wellspring-500 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${tier.popular ? '' : 'bg-background text-foreground hover:bg-muted border border-input'}`}
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-sm text-muted-foreground">
          All plans include a 14-day free trial. No credit card required to start.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
