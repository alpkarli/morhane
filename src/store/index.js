// import the original getStaticReducers function
// and rename it to baseGetStaticReducers
// import our own reducer
import { getStaticReducers as baseGetStaticReducers } from 'SourceStore/index';
import DarkModeReducer from 'Store/Dark Mode/DarkMode.reducer';

// define getStaticReducers.
// this is a function that returns an object of all the reducers in the app.
// just like in the base theme...
/** @namespace Morhane/Store/Index/getStaticReducers */
export const getStaticReducers = () => ({
    ...baseGetStaticReducers(),

    // ...except we also add our own reducer to the mix
    DarkModeReducer,
});

// nothing new here, just copying the function from the base theme
// (this is necessary so that it uses our own `getStaticReducers` function
export default function injectStaticReducers(store) {
    Object.entries(getStaticReducers()).forEach(
        ([name, reducer]) => store.injectReducer(name, reducer)
    );

    return store;
}
