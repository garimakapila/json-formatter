import './style.css';

function JsonInput(props) {
	let { inputText, setInputText } = props;
	return (
		<textarea
			autoFocus
			className="text-input"
			value={ inputText }
			onChange={ e => setInputText(e.target.value) }
			placeholder='{}'
		/>
	);
}

export default JsonInput;
