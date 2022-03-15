import { Route, useParams } from "react-router-dom";

<Route path="/:name" children={<Child />} />

let { name } = useParams();


const Child = ({ match }) => (
    <div>
      <h3>Name: {match.params.name}</h3>
    </div>
  )