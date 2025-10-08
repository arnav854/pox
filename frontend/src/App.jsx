// frontend/src/App.jsx
import React from 'react';
import LandingPage from './pages/LandingPage';
import CardNav from './components/CardNav';
import logo from './assets/logo.svg';
import './styles/CardNav.css'

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#1c1c1c",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#company", ariaLabel: "About Company" },
        { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#1c1c1c",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#1c1c1c", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:info@company.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com/company", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com/company/company", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div>
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      <LandingPage />
    </div>
  );
}

export default App;
