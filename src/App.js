import BasketballPlayerCard from "./Components/BasketballPlayerCard";
import IMG from './Images/michael-jordan.jpg'

const data = {
  name: "Michael Jordan",
  Images: IMG,
  position:"Guard",
  stats:
    { pointsPerGame: 30.1,
      assistsPerGame: 5.3, 
      reboundsPerGame: 6.2 
    }
}

function App() {
  return (
    <div className="App flex justify-center">
      <BasketballPlayerCard
      name={data.name}
      Images={data.Images}
      position={data.position}
      stats={data.stats}
      />
    </div>
  );
}

export default App;
