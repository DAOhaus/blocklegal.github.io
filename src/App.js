import ReactJson from 'react-json-view'
import './App.css';

const info = {
  name: 'Block Legal LLC',
  description: 'combining new areas of technology with consistent and patient professionalism. We give each new client attention, information, and out of the box solutions. Our clients are our partners and are involved in the decision-making process while we find solutions.',
  address: "270 Avenida Luis Muñoz Rivera San Juan, 00918 Puerto Rico",
  email:'mmelendez@blolex.com',
  phone: '787-632-9478'
}

function App() {
  return (
    <div style={{padding: 20}}>
      <ReactJson src={info} />
    </div>
  );
}

export default App;
