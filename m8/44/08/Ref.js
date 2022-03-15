// Write a code to create refs on React.
import * as React from "react";

const App = () => {
const InputRef = React.createRef();

const InputFocusHandler = () => {
	
	InputRef.current.focus();
};

return (
	<div>

	<input ref={InputRef} type="text"
			placeholder="Write something" />

	<button onClick={InputFocusHandler}>
			Click me to focus input
	</button>
	</div>
    )
};

export default App;
