function Home() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <h2 className="logo">🛡 Malware Detector</h2>

        <ul className="menu">
          <li className="active">📁 File Scanner</li>
          <li>📝 Text Scanner</li>
          <li>📧 Email Scanner</li>
          <li>🕘 History</li>
          <li>⚙ Settings</li>
        </ul>

      </div>

      {/* Main Panel */}
      <div className="main">

        <h1>File Scanner</h1>
        <p>Select a folder to scan for malware and suspicious files.</p>

        {/* Scan Box */}
        <div className="scan-box">

          <div className="folder-select">
            📂 Select Folder
          </div>

          <button className="scan-btn">
            Start Scan
          </button>

        </div>

        {/* Scan Results */}
        <div className="results">

          <h2>Scan Results</h2>

          <ul>

            <li className="safe">✔ safe.exe</li>

            <li className="warning">⚠ suspicious.dll</li>

            <li className="danger">✖ malware.exe</li>

          </ul>

          <p className="summary">
            Files Scanned: 125 | Threats Found: 2
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;