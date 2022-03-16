import './App.css';

function App() {
  const nayoks = ['Rubels', 'BappaRaz','Kuber']
  const singers = [
    {name: 'Mahfuz', job: 'Singer'},
    {name: 'Hero', job: 'Singer2'},
    {name: 'Momotaz', job: 'Singer4'},
    {name: 'Mahfuz1', job: 'Singer7'},
  ]
  return (
    <div className="App">
      {
        nayoks.map(nayok =><li>{nayok}</li>)
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name="Shahadat" job="Full Time"/>
      <Person name="Hossain"/>
      <Person name="Jahid"/>
      <Person name="Dipok"/>

      <Person name={nayoks[0]}/>
      <Person name={nayoks[1]}/>
      <Person name={nayoks[2]}/> */}
    </div>
  );
}

function Person(props){
  return (
    <h1>{props.name}</h1>
  )
}

export default App;
