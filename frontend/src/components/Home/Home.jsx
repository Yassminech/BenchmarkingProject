import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <div className="header-content">
                    <h1 className="header-title">Bienvenue sur 360° MarkBanch</h1>
                    <p className="header-description">Gérez votre présence en ligne avec facilité</p>
                    <div className="cta-buttons">
                        <Link to="/login" className="btn btn-secondary">Login</Link>
                    </div>
                </div>
            </header>
            <section className="features">
                <div className="feature">
                    <i className="fas fa-chart-line feature-icon"></i>
                    <h2 className="feature-title">Analyse en temps réel</h2>
                    <p className="feature-description">Obtenez des données précises et à jour sur vos performances en ligne.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-cogs feature-icon"></i>
                    <h2 className="feature-title">Gestion simplifiée</h2>
                    <p className="feature-description">Gérez tous vos comptes et canaux sociaux depuis une seule plateforme.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-bullhorn feature-icon"></i>
                    <h2 className="feature-title">Marketing intégré</h2>
                    <p className="feature-description">Créez, planifiez et publiez vos campagnes marketing en quelques clics.</p>
                </div>
            </section>
            <section className="testimonial">
                <div className="testimonial-content">
                    <p className="testimonial-text">"Emplifi a transformé la façon dont nous gérons notre présence en ligne. Nous sommes plus efficaces que jamais."</p>
                </div>
            </section>
            <section className="footer">
                <p className="footer-text">Rejoignez Emplifi dès aujourd'hui et transformez votre présence en ligne.</p>
            </section>
        </div>
    );
};

export default Home;