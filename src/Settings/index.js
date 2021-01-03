import './style.css';
import Dropdown from '../Dropdown/';

function Settings(props) {
	return (
		<div className="settings-elements">
			<div className="settings-dropdown">
				<Dropdown { ...props } />
			</div>
			<div 
				className="format-button"
				onClick={ props.formatText }
			>
				Format
			</div>
		</div>
	);
}

export default Settings;
