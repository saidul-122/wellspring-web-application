
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background decorations */}
      <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-wellspring-100 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Your Complete <span className="gradient-text">Wellness</span> Solution
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Wellspring helps you take control of your health journey with personalized AI guidance,
                actionable insights, and expert-backed recommendations.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                <Link to="/demo">See How It Works</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                'Personalized Health Plans',
                'AI-Powered Insights',
                '24/7 Wellness Support',
                'Expert-Created Content'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-wellspring-500" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4">
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-2xl border bg-white/50 shadow-xl md:h-[450px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-wellspring-500/20 to-wellspring-100/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[85%] w-[85%] rounded-xl bg-white shadow-lg">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-wellspring-50 to-wellspring-100 p-6">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="rounded-full bg-wellspring-500 p-3">
                        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Your Wellness Assistant</h3>
                      <p className="text-sm text-muted-foreground">
                        Get personalized advice, track your progress, and achieve your wellness goals.
                      </p>
                      <div className="mt-6 grid w-full gap-4">
                        {['Sleep', 'Nutrition', 'Exercise', 'Mindfulness'].map((category, i) => (
                          <div key={i} className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                            <span className="font-medium">{category}</span>
                            <div className="h-2 w-24 rounded-full bg-muted">
                              <div 
                                className="h-full rounded-full bg-wellspring-500" 
                                style={{ width: `${Math.random() * 60 + 40}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
