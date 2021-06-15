import React from "react"; //* imports React from React
import ReactDOM from "react-dom"; //* React DOM allows us to Render the react application to the screen
import "./index.css";
import App from "./App"; //! importing App Component. App component
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root") //! this element is in the index.html file inside the public direcotry.
);
