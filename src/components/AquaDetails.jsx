import { useParams } from "react-router-dom";
import Aquas from "./AquaData";

function AquaDetails() {
  const { id } = useParams();
  const selected = Aquas.find(
    (item) => item.id === parseInt(id)
  );

  return (
    <div>
      <h2>{selected.name}</h2>
      <img
        src={selected.url}
        alt={selected.name}
        height="300"
        width="350"
      />
      <p><strong>Color:</strong> {selected.color}</p>
      <p><strong>Description:</strong> {selected.description}</p>
    </div>
  );
}

export default AquaDetails;