import { useState, useEffect } from 'react';

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg("Error: " + err));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Test</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
