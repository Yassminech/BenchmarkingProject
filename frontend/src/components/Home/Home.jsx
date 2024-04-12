import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <div className="header-content">
                    <h1 className="header-title">Welcome to 360° MarkBanch</h1>
                    <p className="header-description">Manage your online presence easily</p>
                    <div className="cta-buttons">
                        <Link to="/login" className="btn btn-secondary">Login</Link>
                    </div>
                </div>
            </header>
            <section className="features">
                <div className="feature">
                    <i className="fas fa-chart-line feature-icon"></i>
                    <h2 className="feature-title">Analysis in real time</h2>
                    <p className="feature-description">Get accurate, up-to-date data on your online performance</p>
                </div>
                <div className="feature">
                    <i className="fas fa-cogs feature-icon"></i>
                    <h2 className="feature-title">Easy management</h2>
                    <p className="feature-description">Manage all your social accounts and channels from a single platform.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-bullhorn feature-icon"></i>
                    <h2 className="feature-title">Marketing integration</h2>
                    <p className="feature-description">Create, plan and publish marketing campaigns in just a few clicks.</p>
                </div>
            </section>
            <section className="testimonial">
                <div className="testimonial-content">
                    <p className="testimonial-text">The ultimate benchmarking tool for optimizing your marketing strategy.</p>
                </div>
            </section>
            <section className="footer">
                <p className="footer-text">"Benchmarking is not an end in itself, but a means of achieving excellence by drawing inspiration from best practices and identifying opportunities for improvement."</p>
            </section>
        </div>
    );
};

export default Home;