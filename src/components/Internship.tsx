import ProjectCard from "./ProjectCard";
import "../styles/internship.css";
import gypsyguy from "../assets/gypsyguy.png";
import skates from "../assets/skates.png";
interface Props {
  subHeading: string;
}
const Internship = ({ subHeading }: Props) => {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 g-2">
            <h4>{subHeading}</h4>
          </div>
          <div className="col-lg-6 g-2 ">
            <ProjectCard
              role={"https://gypsy-guy.com/"}
              heading={"GypsyGuy - Webmanager"}
              location={"Kota 2020-21"}
              descriptions={[
                "Website UI updation through Shopify and other plugins such as currency converter, product and review import, automatic email and bill generator",
                " Managing social media platforms content and queries",
                "Skills: HTML CSS and JavaScript",
              ]}
              img={gypsyguy}
            />
          </div>
          <div className="col-lg-6 g-2">
            <ProjectCard
              img={skates}
              heading={"DYPIT - Software Engineer"}
              location={"Pune 2021-22"}
              descriptions={[
                "Built a remote-controlled skateboard for patients whose knees have been recently operated. This product can be used in physiotherapy of the knee.",
                "Skills: Arduino and Electronic circuit design",
              ]}
              role={"https://github.com/pillaiyedhu/rehab-skates"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
