
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-wellspring-600 to-wellspring-800 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health and wellbeing with Wellspring's personalized wellness platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-wellspring-700 hover:bg-white/90" asChild>
              <Link to="/signup">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white  text-wellspring-700 hover:bg-white/90" asChild>
              <Link to="/demo">Schedule Demo</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">No credit card required for free plan. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
