import { useState } from "react";
import Track from "./Track";

export default function Playlist(props) {
	const [status, setStatus] = useState("Paused...");

	//* Function that will determine how to set the satus
	const handleOnPuaseClick = () => {
		if (status === "Paused...") {
			setStatus("Playing...");
		} else if (status === "Playing...") {
			setStatus("Paused...");
		}
	};

	return (
		<div className="playlist">
			<div className="info">
				<span className="status">{status}</span>
				<p className="title">{props.playlist.name}</p>
			</div>

			<div className="controls">
				<div className="audio">
					<audio preload="false" controls></audio>
				</div>

				<div className="buttons">
					<button className="btn">&larr;</button>
					<div className="button-playing-pause">
						<span
							className={status === "Paused..." ? "paused" : "playing"}
							onClick={handleOnPuaseClick}
						></span>
					</div>
					<button className="btn">&rarr;</button>
				</div>
			</div>

			<ul className="tracks">
				{props.playlist.songs.map((song, idx) => (
					<Track song={song} key={idx} positions={idx + 1} />
				))}
			</ul>
		</div>
	);
}

// export default Playlist; I can also do it like this instead of wrriting directly into the function header.
