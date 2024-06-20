import DarkModeReducer from '../store/DarkMode/DarkMode.reducer';

// by default getStaticReducers is a function that returns an object of reducers
// our plugin adds an additional reducer to that return value
export const getStaticReducers = (args, callback) => ({
    ...callback(args), // get all the original reducers
    DarkModeReducer, // add our own reducer
});

// export a configuration specifying the namespace we want to plug in to
// as well as the type of plugin
export default {
    'Store/Index/getReducers': {
        function: getStaticReducers,
    },
};
