import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [Open, handleOpen] = useState(false);
  return (
    <div className="container flex items-center justify-center">
      {!Open && <button onClick={() => handleOpen(true)}>CLICK</button>}
      <Card Open={Open}>
        <Card.Header>Hello Bro</Card.Header>
        <Card.Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="nature"
        />
        <Card.Body>abul khay babul</Card.Body>
        <Card.Footer>
          <button onClick={() => handleOpen(false)}>CLOSE</button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
