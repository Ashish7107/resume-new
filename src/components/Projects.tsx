import "../styles/projects.css";
import ProjectCard from "./ProjectCard";
interface Props {
  subHeading: string;
}
const Projects = ({ subHeading }: Props) => {
  return (
    <>
      <div className="container projects">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <h4>{subHeading}</h4>
          </div>
          <div className="col-lg-6 g-3 ">
            <ProjectCard
              role={
                "https://ashish7107.github.io/Ashish7107.io.digitalcommunicationlab/"
              }
              heading={"Virtual Lab — Digital Communication"}
              location={"2022-23"}
              descriptions={[
                "Made a virtual lab for Digital Communication lab experiment",
                "Features integrated in the virtual lab included subjective descriptions, quizzes, circuit design and components with dynamic graphs",
                "Skills: HTML CSS and JavaScript",
              ]}
              img={"../src/assets/virtual_lab.png"}
            />
          </div>
          <div className="col-lg-6 g-3 ">
            <ProjectCard
              role={
                "https://docs.google.com/document/d/e/2PACX-1vQGpulIH-Vin9zvVYfQdwzipb1W8gprNqfIHWOUPbFRxqvv7Do8A41McOcKuJW3Bw5Yqo2-UA4fiaGX/pub"
              }
              heading={"Sign language to Speech "}
              location={"Pune 2023"}
              descriptions={[
                "Built gloves for deaf and dumb people for easy communication using sign language. The signs were interpreted by flex sensors and displayed on an Android app in the form of text and speech.",
                "Skills: Arduino, Electronic circuit design and Bluetooth",
              ]}
              img={"../src/assets/gloves.png"}
            />
          </div>
          <div className="col-lg-6 g-3  ">
            <ProjectCard
              role={"https://game-hub-gray-seven.vercel.app/"}
              heading={"FrontEnd Development"}
              location={"Pune 2023"}
              descriptions={[
                "Game-hub a clone of rawg.io.",
                "Using Axios for backend handling and making a reponsive game searching website.",
                "Impelmenting the concept of state handling and hooks.",
                "Skills:ReactJs,Typescript.",
              ]}
              img={"../src/assets/frontend.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
