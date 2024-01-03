import React from 'react';

const About = () => {
  return (
    <div className="container p-5 rounded shadow" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="display-4 mb-4" style={{ color: '#007bff' }}>Welcome to NimbusNote</h1>
      <p className="lead" style={{ color: '#343a40' }}>Empower your productivity with NimbusNote, the ultimate platform for seamless and secure cloud-based note storage. Your ideas, organized and accessible anywhere, anytime.</p>

      <div className="row mt-5">
        <div className="col-lg-6">
          <h2 style={{ color: '#28a745' }}>Why Choose NimbusNote?</h2>
          <p style={{ color: '#495057' }}>At NimbusNote, we prioritize simplicity, security, and collaboration. Experience a feature-rich platform designed to elevate your note-taking journey.</p>
        </div>
        <div className="col-lg-6">
          <h2 style={{ color: '#dc3545' }}>Key Features</h2>
          <ul className="list-group">
            <li className="list-group-item" style={{ backgroundColor: '#f8d7da' }}><strong>Cloud Storage:</strong> Securely access your notes from any device.</li>
            <li className="list-group-item" style={{ backgroundColor: '#d4edda' }}><strong>Organization:</strong> Effortlessly organize with tags, folders, and categories.</li>
            <li className="list-group-item" style={{ backgroundColor: '#f0e9e9' }}><strong>Collaboration:</strong> Share and collaborate with ease.</li>
            <li className="list-group-item" style={{ backgroundColor: '#ffe5d1' }}><strong>Customization:</strong> Personalize your workspace.</li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h2 style={{ color: '#17a2b8' }}>Our Mission</h2>
        <p style={{ color: '#495057' }}>Transform your digital life with NimbusNote. We aim to simplify and enhance your productivity, offering a reliable space for your thoughts, ideas, and creativity.</p>
      </div>

      <div className="mt-5">
        <h2 style={{ color: '#ffc107' }}>Get Started Today</h2>
        <p style={{ color: '#495057' }}>Ready to experience the power of NimbusNote? Sign up now and embark on a journey of efficient note-taking and organization. Your ideas deserve the best, and NimbusNote is here to deliver.</p>
      </div>

      <p className="mt-5" style={{ color: '#6c757d' }}>Happy note-taking!</p>
    </div>
  );
};

export default About;
