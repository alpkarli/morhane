import BrowserDatabase from 'Util/BrowserDatabase';

import { DARKMODE_ENABLE } from './DarkMode.action';

// a string we use to identify the dark mode configurations stored in the BrowserDatabase
// this can be any string - it is just a key in the database
export const DARKMODE_STORAGE_KEY = 'DARK_MODE_ENABLED';

/**
 * returns the initial state of the redux store
 * @namespace Morhane/Store/Dark Mode/DarkMode/Reducer/getInitialState */
export const getInitialState = () => ({
    // try to get the configuration from BrowserDatabase
    // if none found (e.g. when loading the page from the first time), default to false
    enabled: BrowserDatabase.getItem(DARKMODE_STORAGE_KEY) || false,
});

/**
 * the reducer function gets called every time an action is dispatched to Redux
 * state: the current state of this store
 * action: the action that was dispatched
 * @namespace Morhane/Store/Dark Mode/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer = (state = getInitialState(), action) => {
    // we need to check what the type of the action is.
    // this function can get any type of action,
    // but we are only concerned about those of type DARKMODE_ENABLE
    switch (action.type) {
    case DARKMODE_ENABLE:
        // the action object has a field specifying if this is an "enable" or "disable" action
        const { enabled } = action;

        // we "back up" the value to BrowserDatabase so that it can be used on page reload
        if (enabled) {
            BrowserDatabase.setItem(true, DARKMODE_STORAGE_KEY);
        } else {
        // scandi currently has a bug causing "false" values to not be returned correctly.
        // we can work around this by unsetting the item instead.
            BrowserDatabase.deleteItem(DARKMODE_STORAGE_KEY);
        }

        // we return the new state that the store should have
        return {
            enabled,
        };

    // if the action type is anything other than DARKMODE_ENABLE, we return the current state
    // (with no changes, because unrelated actions should not have an effect on this state)
    default:
        return state;
    }
};

export default DarkModeReducer;
