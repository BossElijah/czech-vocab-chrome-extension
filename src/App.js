import "./App.css"
import { Vocab } from "./vocabList"

const App = () => {
	const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length))
	return (
		<>
			<h1>{Vocab[randomNum].definition}</h1>
			<h3>{Vocab[randomNum].word}</h3>
		</>
	)
}

export default App
