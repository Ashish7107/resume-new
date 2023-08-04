interface Props {
  heading: string;
  degree: string;
  year: string;

  percentage: string;
}

const Education = ({ heading, degree, year, percentage }: Props) => {
  return (
    <>
      <div
        className="card border-info mb-3 education"
        style={{ color: "#006699", backgroundColor: "#b8a9c9" }}
      >
        <div className="card-body">
          <p>{heading}</p>
          <p>{degree}</p>
          <p>{year}</p>
          <p>{percentage}</p>
        </div>
      </div>
    </>
  );
};

export default Education;
