import React from 'react';
import Navbar from '../app/view/Navbar';
import Footer from '../app/view/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>About Us</h1>
      </main>
      <Footer />
    </div>
  );
};

export default About;