import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Card from './Card.jsx';
import './Card.css'; 

// Import some placeholder assets
import WellsFargoLogo from './assets/wells-fargo-logo.webp';
import WellsFargoImage from './assets/Wells-Fargo-Picture.webp';

const opportunitiesData = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    companyName: 'Google',
    programTitle: 'STEP (Student Training in Engineering Program)',
    programDescription: 'A 12-week internship for first and second-year undergraduate students with a passion for computer science. The program focuses on providing development opportunities to students from groups historically underrepresented in tech.',
    programImage: 'https://images.pexels.com/photos/5428265/pexels-photo-5428265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://buildyourfuture.withgoogle.com/internships/step'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    companyName: 'Microsoft',
    programTitle: 'Explore Internship',
    programDescription: 'A 12-week summer internship program for first and second-year college students. Explorers get to experience the main phases of the product development cycle: Design, Build, and Quality.',
    programImage: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://careers.microsoft.com/v2/global/en/exploremicrosoft'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png',
    companyName: 'Meta',
    programTitle: 'Meta University for Engineering',
    programDescription: 'A 10-week, paid training program designed to provide hands-on experience for students from underrepresented communities. It includes mobile development training and project work with Meta engineers.',
    programImage: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.metacareers.com/careerprograms/pathways/metauniversity'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    companyName: 'Amazon',
    programTitle: 'Amazon Internship Programs',
    programDescription: 'A 12-week software development internship for first and second-year students. It offers mentorship, technical projects, and professional development workshops to prepare students for a career in tech.',
    programImage: 'https://images.pexels.com/photos/5775854/pexels-photo-5775854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.amazon.jobs/content/en/career-programs/university/internships-for-students'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    companyName: 'Apple',
    programTitle: 'Inclusion and Diversity Fellowships',
    programDescription: 'While not a single program, Apple offers various early-career internships. They partner with organizations like Rewriting the Code and Thurgood Marshall College Fund to offer fellowships and mentorship to underclassmen.',
    programImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.apple.com/careers/us/students.html'
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Emblem.png',
    companyName: 'NVIDIA',
    programTitle: 'University Recruiting Internships',
    programDescription: 'NVIDIA offers a wide range of internships for all levels. Underclassmen can apply for roles in software, hardware, and research to work on cutting-edge projects in AI, gaming, and autonomous vehicles.',
    programImage: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png',
    companyName: 'Salesforce',
    programTitle: 'Futureforce Internships',
    programDescription: 'Salesforce\'s Futureforce program hires interns for various roles, including software engineering. They focus on real-world projects, mentorship, and building a strong community among interns.',
    programImage: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://careers.salesforce.com/en/university/internships/'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
    companyName: 'Uber',
    programTitle: 'UberSTAR Internship Program',
    programDescription: 'A paid internship for first and second-year students designed to promote equal opportunity and inclusion in tech. Participants work on impactful projects and receive mentorship from Uber engineers.',
    programImage: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.uber.com/us/en/careers/uberstar/'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg',
    companyName: 'Lyft',
    programTitle: 'Early Talent Internships',
    programDescription: 'Lyft offers internships for students to gain real-world experience. Their programs emphasize mentorship and allow interns to contribute to projects that directly impact the Lyft community and platform.',
    programImage: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.lyft.com/careers/early-talent'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cqsiwRbpfpOeIBoatC6xdGdPSTyGFe_jPA&s',
    companyName: 'Palantir',
    programTitle: 'Palantir Path Internship',
    programDescription: 'This program is for students early in their journey who are considering a career in software. It provides a supportive environment to build skills through high-impact work and dedicated mentorship.',
    programImage: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    websiteUrl: 'https://www.palantir.com/careers/students-and-early-talent'
  }
];

const App = () => {

  return (
    <div className="App">
      <div className="texture-overlay"></div>
      <Header />
      <h2 className="section-title">Tech Opprotunities</h2>
      <h3 className="section-subtitle">University Students</h3>
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
            websiteUrl={card.websiteUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;