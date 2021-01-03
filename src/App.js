import JsonInput from './JsonInput/';
import Settings from './Settings/';
import { useState } from 'react';
import './App.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function App() {

    let spaces = {
        '1 spaced tab': 1,
        '2 spaced tab': 2,
        '3 spaced tab': 3,
        '4 spaced tab': 4,
        '1 tab spaced tab': '\t',
    }

    let options = Object.keys(spaces);
    let defaultOption = "1 spaced tab";

    let [ inputText, setInputText ] = useState("");
    let [ option, setOption ] = useState(defaultOption);
    let [ displayError, setDisplayError ] = useState(false);

    function setExampleText() {
        setDisplayError(false);
        setInputText('{"example":{"fruits":["apple","banana","cherry"]}}')
    }

    function clearText() {
        setDisplayError(false);
        setInputText("");
    }

    function formatText() {
        setDisplayError(false);
        try {
            let unformattedJSON = JSON.parse(inputText);
            let formattedJSON = JSON.stringify(unformattedJSON, null, spaces[option]);
            setInputText(formattedJSON);
        }
        catch (error) {
            setDisplayError(true)
        }
    }

    return (
        <div className="app-container">
            <div className="title">
                JSON Formatter
            </div>
            <div className="settings-container">
                <Settings 
                    option={ option }
                    setOption={ setOption }
                    options={ options }
                    formatText={ formatText }
                />
            </div>
            <div className="json-input-container">
                <div className="instructions">
                    Paste a JSON below, or use an 
                    <div 
                        className="example"
                        onClick={ setExampleText }
                    >
                        example
                    </div>
                </div>
                <JsonInput 
                    inputText={ inputText }
                    setInputText={ setInputText }
                />
                {
                    displayError &&
                    <div
                        className="error"
                    >
                        Invalid JSON. Please enter a valid input.
                    </div>
                }
                <div 
                    className="clear"
                    onClick={ clearText }
                >
                    <DeleteForeverIcon className="clear-icon" /> Clear
                </div>
            </div>
        </div>
    );

}

export default App;
