import './Card.css';

// This is our reusable card component based on your design.
const Card = ({
  logo,
  companyName,
  programTitle,
  programDescription,
  programImage
}) => {
    return (
    <div className="opportunity-card">
      {/* Card Header Section */}
      <header className="card-header">
        <div className="company-info">
          <img src={logo} alt={`${companyName} Logo`} className="company-logo" />
          <span>{companyName}</span>
        </div>
        <div className="cta-button">
          {/* We wrap the text in a span to "un-skew" it */}
          <span>Button</span> 
        </div>
      </header>

      {/* Card Body Section */}
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

export default Card;
