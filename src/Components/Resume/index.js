const ResumeDownload = () => {
  return (
    <a
      href="/docs/resume_dl.pdf"  // Path relative to `public/`
      download="YourName_Resume.pdf" // Optional: Rename the downloaded file
      target="_blank"              // Open in new tab (optional)
      rel="noopener noreferrer"    // Security best practice
    >
      <button style={{ padding: "10px 20px", background: "#0070f3", color: "white" }}>
        Download Resume
      </button>
    </a>
  );
};

export default ResumeDownload;