import "./App.css";
import Name from "./components/Name";
import Internship from "./components/Internship";
import ProjectCard from "./components/ProjectCard";
import suuii from "./assets/ashish_phpto.jpg";
import Address from "./components/Address";
import Skills from "./components/Skills";
import Achievments from "./components/Achievments";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const skills = [
    "Java ",
    "Reactjs",
    "HTML CSS",
    "Leadership",
    "Team Building",
    "SQL",
  ];
  const achievments = [
    "Google DSC DIT -Head of Operations",
    "President Award - Scout and Guides",
    "Kalakruti Cultural Club Vice President",
    "T&P Coordinator (Dr. D.Y. Patil Institute of Technology)",
    "Campaigning Head ofRotaract Club of DYP",
    "Bronze Medal (District Level)- Handball",
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="col-12">
              <Name />
              <div className="d-lg-none d-xs-block">
                <Address />
              </div>
              <Internship subHeading={"Internship"} />
              <Projects subHeading={"Projects"} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-none d-lg-block">
              <Address />
            </div>

            <Skills skills={skills} />
            <Achievments achievments={achievments} />
            <h5 className="education_heading">Education</h5>
            <Education
              heading={
                "Dr D.Y Patil Institute of Technology,Pimpri,Pune,Maharastra(411018)"
              }
              degree={"B.E (Electronics and Telecommunication)"}
              year={"2019-23"}
              percentage={"76.6%"}
            />
            <Education
              heading={"Kendriya Vidyalya No.1, Kota Rajathan (324002)"}
              degree={"HSC"}
              year={"2017-18"}
              percentage={"80.40%"}
            />
            <Education
              heading={"Kendriya Vidyalya No.1 ,Kota Rajathan (324002)"}
              degree={"SSC"}
              year={"2015-16"}
              percentage={"91.2%"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
