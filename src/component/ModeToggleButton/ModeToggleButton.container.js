import { connect } from 'react-redux';

import { enableDarkMode } from '../../store/Dark Mode/DarkMode.action';
import ModeToggleButton from './ModeToggleButton.component';

// given a state object (representing the current state in the Redux store),
// returns an object of props that should be passed to ModeToggleButton
/** @namespace Morhane/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

// given a dispatch function (provided by Redux),
// returns an object of functions that should be passed to ModeToggleButton as props.
// in this case, it returns a function named enableDarkMode that takes one argument
// and uses `dispatch` to dispatch the corresponding action to Redux
/** @namespace Morhane/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

// connect is a Redux HOC that uses the two functions we defined above
// to pass their return values as props to ModeToggleButton
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModeToggleButton);
