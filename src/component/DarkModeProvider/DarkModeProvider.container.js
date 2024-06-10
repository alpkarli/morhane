import { connect } from 'react-redux';

import DarkModeProvider from './DarkModeProvider.component';

// given a state object (representing the current state in the Redux store),
// returns an object of props that should be passed to DarkModeProvider
/** @namespace Morhane/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

// this component does not need to dispatch any actions, so we return an empty object {}
/** @namespace Morhane/Component/DarkModeProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

// connect is a Redux HOC that uses the two functions we defined above
// to pass their return values as props to DarkModeProvider
export default connect(mapStateToProps, mapDispatchToProps)(DarkModeProvider);
