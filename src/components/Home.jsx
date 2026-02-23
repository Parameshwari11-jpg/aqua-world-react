import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>🌊 Welcome to Our Aqua World</h1>
      <p>Click below to explore beautiful water vehicles 🚢</p>

      <button onClick={() => navigate("/aqua")} className="home-btn">
        Explore Aqua Info
      </button>
    </div>
  );
}

export default Home;