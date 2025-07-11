import React from 'react';
import '../styles.css';

import mihalisImg from '../assets/people/Mihalis_K.jpeg';
import rahulImg from '../assets/people/Rahul_S.jpeg';
import smyanImg from '../assets/people/Smyan_S.jpeg';
import arjunImg from '../assets/people/Arjun_R.jpeg';
import naliniImg from '../assets/people/Nalini_S.jpeg';
import gauravImg from '../assets/people/Gaurav_B.jpeg';


import drMohitSinghal from '../assets/people/Mohit_S.jpeg';
import drJohnAdams from '../assets/people/John_A.jpeg';
import drArielHamlin from '../assets/people/Ariel_H.jpeg';


const advisors = [
  { name: 'Dr.  Mohit Singhal', role: 'CS/DS Advisor', image: drMohitSinghal },
  { name: 'Dr. John Adams', role: 'Life Science Advisor', image: drJohnAdams },
  { name: 'Dr. Ariel Hamlin', role: 'Onboarding Director', image: drArielHamlin },

];


const eboard = [
  {
    name: 'Mihalis Koutouvos',
    role: 'Director of Operations',
    image: mihalisImg,
  },
  {
    name: 'Smyan Sengupta',
    role: 'Operations Assistant',
    image: smyanImg,
  },
  {
    name: 'Arjun Roy',
    role: 'Director of Outreach Programs',
    image: arjunImg,
  },
  {
    name: 'Nalini Singh',
    role: 'Director of Marketing',
    image: naliniImg,
  },
  {
    name: 'Gaurav Bhatnagar',
    role: 'Director of Grants and Finances',
    image: gauravImg,
  },
  {
    name: 'Rahul Setia',
    role: 'Website Director',
    image: rahulImg,
  },

  
  // Add more as needed
];

function People() {
  return (
    <section className="people" id="people">
      <h2>Our Team</h2>


    <div className="group-section">
        <h3>Advisors</h3>
        <div className="people-grid">
          {advisors.map((person, index) => (
            <div key={index} className="person-card">
              <img src={person.image} alt={person.name} />
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="group-section">
        <h3>E-Board</h3>
        <div className="people-grid">
          {eboard.map((person, index) => (
            <div key={index} className="person-card">
              <img src={person.image} alt={person.name} />
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default People;
