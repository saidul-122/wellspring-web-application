
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wellspring-50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-wellspring-600">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
              </svg>
              <span className="text-xl font-bold">Wellspring</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Wellspring is your all-in-one wellness platform that combines AI technology with expert guidance to help you achieve your health goals.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com`} 
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-muted transition-colors"
                  aria-label={`${social} profile`}
                >
                  <span className="sr-only">{social}</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-foreground">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {['AI Assistant', 'Health Tracker', 'Mind Wellness', 'Nutrition Guide', 'Sleep Analysis'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Help Center', 'Community', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Wellspring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
