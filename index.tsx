import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// ==========================================
// INTERNAL INTEGRITY & DOMAIN PROTECTION
// ==========================================
// This check ensures the application runs only on authorized domains
// and verifies that the author's credits remain intact.
const VerifyIntegrity = () => {
  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    const check = () => {
      const h = window.location.hostname;
      // Allow localhost and authorized domain
      const isDomainOk = h.includes('bookmycar.live') || h.includes('localhost') || h.includes('127.0.0.1');

      // Verify signature in footer
      const f = document.querySelector('footer p');
      const isSignatureOk = f ? f.textContent?.includes('Rajesh Navsagar') : true;

      if (!isDomainOk || !isSignatureOk) {
        setIsValid(false);
      }
    };

    // Initial check and periodic polling
    check();
    const interval = setInterval(check, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!isValid) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#07090F',
        color: '#ff4444',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>PROTECTION TRIGGERED</h1>
          <p>Unauthorized domain detected or system integrity corrupted.</p>
          <p style={{ fontSize: '12px', opacity: 0.6 }}>Please visit the official source: bookmycar.live</p>
        </div>
      </div>
    );
  }

  return <App />;
};

root.render(
  <React.StrictMode>
    <VerifyIntegrity />
  </React.StrictMode>
);