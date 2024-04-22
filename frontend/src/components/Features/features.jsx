import React from 'react';
import './features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <Feature 
            icon="fas fa-chart-line"
            title="Analytics"
            description="Track performance metrics and gain insights into your social media activity."
          />
          <Feature 
            icon="fas fa-users"
            title="Reporting"
            description="Generate customizable reports to measure your social media success."
          />
          <Feature 
            icon="fas fa-calendar-alt"
            title="Content Planning"
            description="Plan and schedule your social media content in advance."
          />
          <Feature 
            icon="fas fa-comments"
            title="Community Management"
            description="Manage all your social media interactions in one centralized inbox."
          />
          <Feature 
            icon="fas fa-ear"
            title="Social Listening"
            description="Monitor conversations and trends across social media platforms."
          />
        </div>
      </div>
    </section>
  );
}

const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <i className={icon + " feature-icon"}></i>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default Features;