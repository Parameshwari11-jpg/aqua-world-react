import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
    </nav>
  );
}

export default Navbar;