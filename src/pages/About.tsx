
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-wellspring-50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                About Wellspring
              </h1>
              <p className="text-xl text-muted-foreground">
                Transforming wellness through technology and compassionate care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground">
                  At Wellspring, we're dedicated to making personalized wellness accessible to everyone. 
                  Our AI-powered platform combines cutting-edge technology with human expertise to 
                  deliver tailored health solutions that fit your unique needs.
                </p>
                
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="text-muted-foreground">
                  We envision a world where everyone has the tools and support they need to achieve 
                  their optimal health and wellbeing. Through innovation and dedication, we're 
                  making this vision a reality.
                </p>

                <Button asChild>
                  <Link to="/signup">Join Our Journey</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-wellspring-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-wellspring-600 mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="bg-wellspring-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-wellspring-600 mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Health Experts</div>
                </div>
                <div className="bg-wellspring-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-wellspring-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Support</div>
                </div>
                <div className="bg-wellspring-100 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-wellspring-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
