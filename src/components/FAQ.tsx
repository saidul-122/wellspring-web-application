
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Wellspring personalize health recommendations?",
    answer: "Wellspring uses a combination of AI algorithms and expert-developed models to analyze your health data, preferences, and goals. We consider factors like your activity level, sleep patterns, nutritional habits, and personal health objectives to create truly personalized recommendations that evolve as you progress."
  },
  {
    question: "Is my health data secure on Wellspring?",
    answer: "Absolutely. We take data privacy and security extremely seriously. All your health information is encrypted using industry-leading standards, and we never sell your personal data. We comply with major health data regulations including HIPAA, and you maintain complete control over your information at all times."
  },
  {
    question: "Can I use Wellspring with my existing health apps and devices?",
    answer: "Yes! Wellspring integrates with most popular health and fitness apps and wearable devices including Apple Health, Google Fit, Fitbit, Garmin, and many more. This allows for seamless data synchronization and gives you a comprehensive view of your health metrics all in one place."
  },
  {
    question: "Do I need to be tech-savvy to use Wellspring?",
    answer: "Not at all. Wellspring is designed to be intuitive and user-friendly for people of all technical abilities. Our simple interface and guided setup process make it easy to get started, and our support team is always available if you need assistance."
  },
  {
    question: "What kind of results can I expect from using Wellspring?",
    answer: "Users report improvements across various health metrics within the first month, including better sleep quality, increased energy levels, and progress toward specific health goals. The personalized approach means results vary based on individual starting points and objectives, but consistent use of the platform typically leads to measurable improvements in overall wellness."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no penalties. For paid plans, you'll continue to have access until the end of your current billing period. Your data will remain in your account should you decide to return later."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Wellspring and how it can help your wellness journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions? <a href="/contact" className="text-wellspring-600 hover:text-wellspring-700 font-medium">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
