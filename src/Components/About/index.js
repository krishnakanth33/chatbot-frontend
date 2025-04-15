// import { FaArrowCircleDown } from "react-icons/fa";
import './index.css';

function ResumeDownload(){
    return (
      <a
        id="resume-download"
        className="resume-download"
        href="/docs/resume_dl.pdf"  // Path relative to `public/`
        download="Krishnakanth_Resume.pdf" // Optional: Rename the downloaded file
        target="_blank"              // Open in new tab (optional)
        rel="noopener noreferrer"    // Security best practice
      > 
        <button className="resume-button">
            Resume
        </button>
      </a>
    );
  };

const About = () =>{
    return(
        <div className="about-container">
            <div className="about-text">
                <h1 className="about-heading">About Me</h1>
                <p>I'm Krishna Kanth Kelothu, 3rd year student from Indian Institute Of 
                   Techonology Bhubaneswar. I am pursuing my B.Tech in Metallurgical and Materials Engineering.
                   I am a passinate learner and I love to learn new things. I am a full stack developer and 
                   I have expreinece in building web applications using MERN stack.
                   I am also a competitive programmer and I love to solve problems.
                   My hobbies include playing cricket, listening to music and watching movies.
                </p>
                <ResumeDownload />
            </div>
            <div className="about-image">
                <img className="profile-img" src="/images/pic.jpg" alt="Krishna Kanth" />
            </div>
        </div>
    )
}

export default About;