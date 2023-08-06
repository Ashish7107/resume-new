import "../styles/skills.css";
interface Props {
  skills: string[];
}

const Skills = ({ skills }: Props) => {
  return (
    <>
      <div className="skills">
        <h5>Skills</h5>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
