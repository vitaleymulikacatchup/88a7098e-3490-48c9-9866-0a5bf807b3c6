"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Settings, Cloud, BarChart3, Shield, Workflow, Rocket, Users, Target, Award, Star, Building2, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name": "Services", "id": "feature"},
            {"name": "About", "id": "about"},
            {"name": "Testimonials", "id": "testimonial"},
            {"name": "FAQ", "id": "faq"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName="TechFlow Solutions"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Innovative IT Solutions for Modern Businesses"
          description="Transform your business with cutting-edge technology solutions, expert consulting, and seamless digital transformation services that drive growth and efficiency."
          tag="Enterprise Technology"
          tagIcon={Zap}
          buttons={[
            {"text": "Get Started", "href": "contact"},
            {"text": "Learn More", "href": "about"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474968068-5w3vwrtd.jpg"
          imageAlt="Modern software dashboard showcasing IT solutions"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Comprehensive IT Services"
          description="Discover our full range of technology solutions designed to accelerate your business growth and digital transformation journey."
          tag="Our Services"
          tagIcon={Settings}
          buttons={[
            {"text": "View All Services", "href": "https://techflow-solutions.com/services"}
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {"title": "Cloud Computing", "icon": Cloud},
            {"title": "Data Analytics", "icon": BarChart3},
            {"title": "Cybersecurity", "icon": Shield},
            {"title": "Process Automation", "icon": Workflow}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We are dedicated to delivering exceptional technology solutions that empower businesses to thrive in the digital age. Our expert team combines innovation with proven methodologies to transform your operations."
          features={[
            {"icon": Rocket, "title": "Innovation First", "description": "We leverage cutting-edge technologies and emerging trends to deliver solutions that keep you ahead of the competition."},
            {"icon": Users, "title": "Expert Team", "description": "Our certified professionals bring decades of combined experience in enterprise technology and digital transformation."},
            {"icon": Target, "title": "Results Driven", "description": "We focus on measurable outcomes and ROI, ensuring every solution delivers tangible business value and growth."},
            {"icon": Award, "title": "Proven Excellence", "description": "With 500+ successful projects and industry recognition, we maintain the highest standards in service delivery."}
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from businesses that have transformed their operations with our IT solutions and expert consulting services."
          tag="Client Success"
          tagIcon={Star}
          buttons={[
            {"text": "View Case Studies", "href": "https://techflow-solutions.com/case-studies"}
          ]}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {"id": "1", "name": "Sarah Johnson", "role": "Chief Executive Officer", "testimonial": "TechFlow Solutions transformed our entire IT infrastructure. Their cloud migration strategy increased our efficiency by 40% while reducing costs significantly.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474976317-n8kzcm1x.jpg", "imageAlt": "Sarah Johnson, CEO portrait"},
            {"id": "2", "name": "Michael Chen", "role": "Chief Technology Officer", "testimonial": "The cybersecurity implementation was flawless. We've had zero security incidents since deploying their comprehensive protection suite last year.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474977411-qihs1di4.jpg", "imageAlt": "Michael Chen, CTO portrait"},
            {"id": "3", "name": "Emily Rodriguez", "role": "Operations Manager", "testimonial": "Their process automation solutions have revolutionized our workflow. We're now processing 3x more orders with the same team size.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474978600-8hu830la.jpg", "imageAlt": "Emily Rodriguez, Operations Manager portrait"},
            {"id": "4", "name": "David Kim", "role": "IT Director", "testimonial": "Outstanding support and expertise. The data analytics platform they built gives us insights we never had before, driving better business decisions.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474979761-o6hzgu0v.jpg", "imageAlt": "David Kim, IT Director portrait"}
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies worldwide that rely on our technology solutions to drive their digital transformation and business growth."
          tag="Our Partners"
          tagIcon={Building2}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474981515-bg5q7x9j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474982778-o2py69t2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474984372-my6gbi4m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474986081-0jaieo94.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474987157-phrqr9ly.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474988452-4g3ocvxo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474990049-tjibnlxf.jpg"
          ]}
          speed={45}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our IT services, implementation processes, and support offerings."
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {"id": "1", "title": "How long does a typical IT implementation take?", "content": "Implementation timelines vary based on project scope, but most cloud migrations take 4-8 weeks, while comprehensive digital transformations can take 3-6 months. We provide detailed project timelines during our initial consultation."},
            {"id": "2", "title": "Do you provide 24/7 technical support?", "content": "Yes, we offer round-the-clock technical support for all our enterprise clients. Our support team is available via phone, email, and our online portal to address any urgent issues or concerns."},
            {"id": "3", "title": "Can you work with our existing IT infrastructure?", "content": "Absolutely. We specialize in integrating new solutions with existing systems. Our team conducts thorough assessments to ensure seamless compatibility and minimal disruption to your operations."},
            {"id": "4", "title": "What industries do you serve?", "content": "We serve clients across various industries including healthcare, finance, manufacturing, retail, and professional services. Our solutions are customized to meet specific industry regulations and requirements."},
            {"id": "5", "title": "How do you ensure data security during migrations?", "content": "Data security is our top priority. We use encrypted channels, implement strict access controls, conduct regular security audits, and follow industry best practices including GDPR and SOC 2 compliance standards."},
            {"id": "6", "title": "What is your pricing model?", "content": "We offer flexible pricing models including project-based, monthly retainer, and hybrid arrangements. Pricing is customized based on your specific needs, project scope, and ongoing support requirements."}
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Transform Your Business?"
          description="Contact our IT experts today for a free consultation and discover how our technology solutions can accelerate your digital transformation journey."
          tagIcon={Rocket}
          inputPlaceholder="Enter your business email"
          buttonText="Request Consultation"
          termsText="By requesting a consultation, you agree to our Terms of Service and Privacy Policy. We'll contact you within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechFlow Solutions"
          columns={[
            {
              "items": [
                {"label": "Cloud Computing", "href": "https://techflow-solutions.com/cloud"},
                {"label": "Data Analytics", "href": "https://techflow-solutions.com/analytics"},
                {"label": "Cybersecurity", "href": "https://techflow-solutions.com/security"},
                {"label": "Process Automation", "href": "https://techflow-solutions.com/automation"}
              ]
            },
            {
              "items": [
                {"label": "About Us", "href": "about"},
                {"label": "Our Team", "href": "https://techflow-solutions.com/team"},
                {"label": "Careers", "href": "https://techflow-solutions.com/careers"},
                {"label": "Case Studies", "href": "https://techflow-solutions.com/case-studies"}
              ]
            },
            {
              "items": [
                {"label": "Contact", "href": "contact"},
                {"label": "Support", "href": "https://techflow-solutions.com/support"},
                {"label": "Documentation", "href": "https://techflow-solutions.com/docs"},
                {"label": "Blog", "href": "https://techflow-solutions.com/blog"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}