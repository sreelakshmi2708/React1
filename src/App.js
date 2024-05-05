import Card from "./Card.jsx";
import "./styles.css";
import background from "./bday.jpg";
export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Card />
    </div>
  );
}
