export default function Track(props) {
	return (
		<li className="song">
			<span className="position">{props.positions}.</span>
			<span className="title">
				<span>{props.song.songName}</span>
				<span className="movie">{props.song.movieTitle}</span>
			</span>
			<soan className="duration">{props.song.duration}</soan>
		</li>
	);
}
