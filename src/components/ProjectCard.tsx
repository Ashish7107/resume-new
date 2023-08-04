import "../styles/projectcard.css";
interface Props {
  img: string;
  heading: string;
  location: string;
  role: string;
  descriptions: string[];
}
const ProjectCard = ({ img, heading, location, role, descriptions }: Props) => {
  return (
    <>
      <a href={role} className="card-link" target={"blank"}>
        <div className="card bg-dark  overlay-card ">
          <img src={img} className="card-img" alt="..." />

          <div className="card-img-overlay">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{location}</p>
            <ul className="list">
              {descriptions.map((skill, index) => (
                <li key={index}>
                  <b>{skill}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
