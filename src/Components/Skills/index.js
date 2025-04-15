import { FaHtml5,FaCss3Alt,FaJava,FaReact,FaNodeJs,FaGitAlt, FaPython } from "react-icons/fa";
import { SiSqlite,SiMongodb } from "react-icons/si";

import './index.css'

const Skills = () => {
    return(
        <div className="skills-container" id="skills">
            <h1 className="skills-heading">Skills</h1>
            <div className="skills-list">
                <ul className="skills-items">
                    <li className="skill-item"><FaPython/>Python</li>
                    <li className="skill-item"><FaHtml5/>HTML</li>
                    <li className="skill-item"><FaCss3Alt/>CSS</li>
                    <li className="skill-item"><FaJava/>JavaScript</li>
                    <li className="skill-item"><FaReact/>React</li>
                    <li className="skill-item"><FaNodeJs/>Node.js</li>
                    <li className="skill-item"><FaGitAlt/>Express.js</li>
                    <li className="skill-item"><SiSqlite/>SQLite</li>
                    <li className="skill-item"><FaGitAlt/>Git</li>
                    <li className="skill-item"><SiMongodb/>MongoDB</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;