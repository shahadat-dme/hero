import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
      <District name="Noakhali" special="pansupari"/>
    </div>
  );
}

const districtStyle ={
  backgroundColor: 'pink',
  margin: '20px',
  borderRadius: '8px'
}
function District(props){
  return (
    <div style={districtStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Specialty: {props.special}</h2>
    </div>
  )
}
export default App;
