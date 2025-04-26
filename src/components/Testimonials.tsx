
import React from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "Wellspring has completely transformed how I approach my health. The personalized recommendations and AI coach have helped me establish habits that actually last.",
    name: "Alex Johnson",
    title: "Wellness Enthusiast",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "As someone with a busy schedule, I needed something comprehensive but not time-consuming. Wellspring strikes that perfect balance with actionable insights.",
    name: "Samantha Williams",
    title: "Marketing Director",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=20"
  },
  {
    quote: "The holistic approach to wellness that Wellspring offers has helped me see connections between different aspects of my health I never realized before.",
    name: "David Chen",
    title: "Software Engineer",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=15"
  },
];

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, rating, image }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-muted">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-wellspring-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it - hear from people who have transformed their wellness journey with Wellspring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
