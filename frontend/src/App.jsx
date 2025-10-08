import { useState } from 'react';
import SignInForm from './pages/SignIn';
import SignUpForm from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import CardNav from './components/CardNav';
import logo from './assets/logo.svg';
import './styles/styles.css';
import './styles/CardNav.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' or 'auth'
  const [type, setType] = useState("signIn");

  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  const navItems = [
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
    },
    {
      label: "Sign In",
      bgColor: "#1c1c1c",
      textColor: "#fff",
      links: [
        { 
          label: "Login", 
          href: "#auth", 
          ariaLabel: "Sign In",
          onClick: (e) => {
            e.preventDefault();
            setCurrentPage('auth');
          }
        }
      ]
    }
  ];

  if (currentPage === 'auth') {
    return (
      <div className="App">
        <button 
          onClick={() => setCurrentPage('landing')}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            padding: '10px 20px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000
          }}
        >
          ← Back to Home
        </button>
        <h2>Sign in/up Form</h2>
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={navItems}
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