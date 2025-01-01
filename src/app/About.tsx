import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Us</h1>
            <p>Welcome to the About page of our application.</p>
            <section>
                <h2>Our Mission</h2>
                <p>To provide the best service to our customers.</p>
            </section>
            <section>
                <h2>Our Team</h2>
                <p>We have a diverse and talented team dedicated to excellence.</p>
            </section>
        </div>
    );
};

export default About;