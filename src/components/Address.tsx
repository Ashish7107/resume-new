import "../styles/address.css";

const Address = () => {
  return (
    <div className="container ">
      <div className="address">
        <i className="fa-solid fa-phone" style={{ paddingRight: "20px" }}></i>
        <h6 className="">+91-7387056875</h6>
      </div>
      <div className="address">
        <i
          className="fa-solid fa-envelope"
          style={{ paddingRight: "20px" }}
        ></i>
        <h6>yadavashish7107@gmail.com</h6>
      </div>
    </div>
  );
};

export default Address;
