
import './Card.css'; // <-- Updated import

// Renamed the component from OpportunityCard to Card
const Card = ({
  logo,
  companyName,
  programTitle,
  programDescription,
  programImage,
  websiteUrl,
}) => {
  return (
    // Updated the main className for clarity
    <div className="custom-card"> 
      <header className="card-header">
        <div className="company-info">
          <img src={logo} alt={`${companyName} Logo`} className="company-logo" />
          <span>{companyName}</span>
        </div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
        GO
        </a>
      </header>

      <main className="card-body">
        <div className="program-image-container">
          <img src={programImage} alt={programTitle} className="program-image" />
          <div className="program-image-text">Photo Program (AI)</div>
        </div>
        <div className="program-details">
          <h3>{programTitle}</h3>
          <p>{programDescription}</p>
        </div>
      </main>
    </div>
  );
};

export default Card; // <-- Updated export