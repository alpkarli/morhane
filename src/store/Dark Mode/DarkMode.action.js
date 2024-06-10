export const DARKMODE_ENABLE = 'DARKMODE_ENABLE';

/**
 * a simple function that returns a simple object.
 * there is nothing magic about it, but Redux uses such objects to represent updates to the state
 * @namespace Morhane/Store/Dark Mode/DarkMode/Action/enableDarkMode */
export const enableDarkMode = (enabled) => ({
    type: DARKMODE_ENABLE,
    enabled,
});
