import { Link } from "react-router-dom";

function RegisterPageTwo() {
  return (
    <div>
      <h1>Address and Phone Number</h1>
      <div>
        <span>Address</span>
        <br />
        <input type="text" placeholder="Address" className="Username" />
        <br />
        <span>Phone number</span>
        <br />
        <input type="number" placeholder="Phone nos" className="Username" />
        <br />
        <button>
          <Link to="register/one">Previous</Link>
        </button>
        <span>..........</span>
        <button>
          <Link to="/Users">Submit</Link>
        </button>
      </div>
    </div>
  );
}

export default RegisterPageTwo;
