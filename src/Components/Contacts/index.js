import { FaLinkedin,FaGithub } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

import "./index.css"

const Contacts = () => {
    return (
        <div className="contacts-container" id="contacts">
            <h1 className="contacts-heading" >Contact Me</h1>
            <p>If you would like to get in touch, please feel free to reach out via email or connect with me on LinkedIn.</p>
            <ul className="contact-info">
                <li href="mailto:your.email@gmail.com" className="contact-item">
                    <IoMdMailOpen className="linkedin-icon"/>
                    <a href="mailto:your.krishnakanthkelothu@gmail.com" className="linkedin-link">Email</a>
                </li>
                <li href="https://www.linkedin.com/in/kelothu-krishnakanth-799110237" className="contact-item">
                    <FaLinkedin className="linkedin-icon" />
                    <a href="https://www.linkedin.com/in/kelothu-krishnakanth-799110237" className="linkedin-link">LinkedIn</a>
                </li>
                <li href="https://github.com/krishnakanth33/krishnakanth33" className="contact-item">
                    <FaGithub className="linkedin-icon" />
                    <a href="https://github.com/krishnakanth33/krishnakanth33" className="linkedin-link">LinkedIn</a>
                </li>
            </ul>
        </div>
    )
}
 
export default Contacts;