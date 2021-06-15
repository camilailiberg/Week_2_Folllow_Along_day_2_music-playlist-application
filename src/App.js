//* import { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";

const data = {
	name: "Classic Disney Movie Songs - Top 10",
	songs: [
		{
			songName: "A Whole New World",
			movieTitle: "Aladdin",
			duration: "2:40",
		},
		{
			songName: "Let It Go",
			movieTitle: "Frozen",
			duration: "3:45",
		},
		{
			songName: "Circle Of Life",
			movieTitle: "Lion King",
			duration: "4:51",
		},
		{
			songName: "How Far I'll Go",
			movieTitle: "Moana",
			duration: "2:44",
		},
		{
			songName: "I'll Make A Man Out Of You",
			movieTitle: "Mulan",
			duration: "3:41",
		},
		{
			songName: "Bear Necessities",
			movieTitle: "Jungle Book",
			duration: "4:15",
		},
	],
};

function App() {
	// useState return an array. The first item, item 0, is the state value; and the second value is a funcition to update the stateful value
	//* const [user, setUser] = useState("Mickey"); -> Bad example for useSatte because I am not using the setUser function so I am not changing this value therefore the right thig is to use props.
	/*
	*Can also be done like:
	cont stateStuff = useState("Mickey");
	const user = statestuff[0];
	conost setUser = stateStuff[1];
	*/

	return (
		<div className="App">
			{/* <h1>{user}'s Playlist</h1> */}
			<Playlist playlist={data} />
		</div>
	);
}

export default App; //! Export default is like modules.export in node.js => this is the ES6 way to write it.
