import React from "react";
import GameList from "../game/GameList";
import Heading from "../layout/Heading";

export function Home() {
	return (
		<>
			<Heading title=" Video Games" />
			<GameList />
		</>
	);
}

export default Home;