import React, { useState, useEffect } from "react";
// import memeData from "../memeData";
export default function Main() {
	const [meme, setMeme] = useState({
		topText: "What God cannot do",
		bottomText: "Does not exist",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImages, setAllMemeImages] = useState([]);

	function getMemeImageHandler() {
		// const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[randomNumber].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: url,
			};
		}, []);
	}
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemeImages(data.data.memes));
	}, []);
	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					name="topText"
					value={meme.topText}
					placeholder="Top text"
					className="form-input"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="bottomText"
					value={meme.bottomText}
					placeholder="Bottom text"
					className="form-input"
					onChange={handleChange}
				/>
				<button onClick={getMemeImageHandler} className="form-button">
					Get a new meme image 🖼
				</button>
			</div>

			<div className="meme">
				<img src={meme.randomImage} className="meme-image" alt="" />
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
