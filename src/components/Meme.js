import React, { useState } from "react";
import memeData from "../memeData";
export default function Main() {
	const [memeImage, setMemeImage] = useState("");

	function getMemeImage() {
		const memesArray = memeData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		setMemeImage(memesArray[randomNumber].url);
	}

	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form-input" />
				<input type="text" placeholder="Bottom text" className="form-input" />
				<button onClick={getMemeImage} className="form-button">
					Get a new meme image 🖼
				</button>
			</div>
			<img src={memeImage} className="meme-image" alt="" />
		</main>
	);
}
