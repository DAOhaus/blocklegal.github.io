import ReactJson from 'react-json-view'
import './App.css';

const info = {
  name: 'Block Legal LLC',
  description: 'Combining new areas of technology with legal services. We give each new client attention, information, and out of the box solutions. Our clients are our partners and are involved in the decision-making process while we find solutions.',
  address: "270 Avenida Luis Muñoz Rivera, San Juan, 00918 Puerto Rico",
}

function App() {
  return (
    <div style={{padding: 20, fontSize: 16}}>
      <ReactJson src={info} />
    </div>
  );
}

export default App;
