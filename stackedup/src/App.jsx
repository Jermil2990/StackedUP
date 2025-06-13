import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Card from './Card.jsx';
import './Card.css'; 

// Import some placeholder assets
import companyLogo from './assets/wells-fargo-logo.webp';
import programPhoto from './assets/Wells-Fargo-Picture.webp';

const opportunitiesData = [
  {
    logo: companyLogo,
    companyName: 'Wells Fargo',
    programTitle: 'Program Title 1',
    programDescription: 'A really great program description goes here.',
    programImage: programPhoto,
  },
  {
    logo: companyLogo,
    companyName: 'Comp B',
    programTitle: 'Program Title 2',
    programDescription: 'This is the description for the second opportunity.',
    programImage: programPhoto,
  },
  {
    logo: companyLogo,
    companyName: 'Comp C',
    programTitle: 'Program Title 3',
    programDescription: 'And a final, compelling description for the third card.',
    programImage: programPhoto,
  },
];

const App = () => {

  return (
    <div className="App">
      <Header />
      <h2 className="section-title">Tech Opprotunities</h2>
      <h3 className="section-subtitle">Growth, Vision, Excellence</h3>
      <div className="card-grid">
        {opportunitiesData.map((card, index) => (
          // Renamed the component here from OpportunityCard to Card
          <Card
            key={index}
            logo={card.logo}
            companyName={card.companyName}
            programTitle={card.programTitle}
            programDescription={card.programDescription}
            programImage={card.programImage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;