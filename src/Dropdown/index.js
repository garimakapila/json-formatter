import './style.css';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ClickAwayListener } from '@material-ui/core';

function Dropdown(props) {
	let { option, setOption, options } = props;
	let [ displayOptions, setDisplayOptions ] = useState(false);

	return (
		<ClickAwayListener 
			onClickAway={ () => setDisplayOptions(false) }
		>
			<div className="dropdown-container">
				<div 
					className="dropdown-value"
					onClick={ () => setDisplayOptions(!displayOptions) }
				>
					<div className="dropdown-caret">
					{ displayOptions ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
					</div>
					{ option }
				</div>
				<div className="dropdown-options-container">
					<div
						style={{ display: displayOptions ? "" : "none" }}
					> 
						{
							options.map( (optn, index) =>
								<div
									className={ option === optn ? "dropdown-selected-option dropdown-option" : "dropdown-option" }
									key={ index }
									onClick={ () => { 
										setOption(optn);
										setDisplayOptions(false);
									}}
								>
									{ optn }
								</div>
							)
						}
					</div>
				</div>
			</div>
		</ ClickAwayListener>
	);
}

export default Dropdown;
