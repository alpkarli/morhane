import DarkThemeProvider from '../component/DarkModeProvider';

// a plugin that wraps the entire contents rendered by the renderRouter function
// into a DarkThemeProvider
// eslint-disable-next-line max-len
export const renderRouter = (args, callback) => <DarkThemeProvider key="router">{ callback(...args) }</DarkThemeProvider>;

// export a configuration specifying the namespace we want to plug in to
// as well as the type of plugin
export default {
    'Component/App/Component': {
        'member-function': {
            renderRouter,
        },
    },
};
