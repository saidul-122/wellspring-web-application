
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'AI Health Assistant',
    description: 'Get personalized health recommendations and 24/7 support from our advanced AI.',
    features: ['Personalized recommendations', 'Health tracking', 'Real-time insights', 'Goal setting'],
  },
  {
    name: 'Wellness Tracker',
    description: 'Track your daily activities, nutrition, and wellness metrics in one place.',
    features: ['Activity monitoring', 'Nutrition logging', 'Sleep analysis', 'Progress reports'],
  },
  {
    name: 'Mind & Body',
    description: 'Comprehensive tools for mental and physical wellness optimization.',
    features: ['Meditation guides', 'Workout plans', 'Stress management', 'Wellness scoring'],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-wellspring-50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Our Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our suite of wellness tools designed to help you achieve your health goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-border transition-all hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-wellspring-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/signup">Try it now</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
