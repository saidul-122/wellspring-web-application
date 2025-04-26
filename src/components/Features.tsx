
import React from 'react';
import { Activity, Brain, Calendar, Heart, MessageSquare, Shield } from 'lucide-react';

const features = [
  {
    title: 'Personalized Health Plans',
    description: 'Get customized wellness plans based on your specific health needs, goals, and preferences.',
    icon: Activity,
  },
  {
    title: 'AI Health Assistant',
    description: 'Our AI assistant provides 24/7 support, answers health questions, and offers actionable guidance.',
    icon: Brain,
  },
  {
    title: 'Health Tracking',
    description: 'Track vital health metrics, activities, and habits with intuitive tools and visualizations.',
    icon: Heart,
  },
  {
    title: 'Expert Consultations',
    description: 'Connect with certified healthcare professionals for personalized advice and guidance.',
    icon: MessageSquare,
  },
  {
    title: 'Wellness Calendar',
    description: 'Schedule health activities, reminders for medications, and maintain consistency in your routine.',
    icon: Calendar,
  },
  {
    title: 'Privacy Focused',
    description: 'Your health data is secure with enterprise-grade encryption and strict privacy controls.',
    icon: Shield,
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Comprehensive <span className="gradient-text">Wellness</span> Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to track, improve, and maintain your health with AI-powered insights and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-12 w-12 rounded-lg bg-wellspring-100 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-wellspring-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
