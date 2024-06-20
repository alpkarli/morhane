import { connect } from 'react-redux';

import { enableDarkMode } from '../../store/DarkMode/DarkMode.action';
import ModeToggleButton from './ModeToggleButton.component';

/** @namespace ScandiDarkTheme/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace ScandiDarkTheme/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModeToggleButton);
