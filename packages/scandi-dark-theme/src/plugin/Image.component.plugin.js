import ColorInverter from '../component/ColorInverter';

// wraps the output of the Image.render function in our ColorInverter component
export const render = (args, callback) => <ColorInverter>{ callback(...args) }</ColorInverter>;

// export a configuration specifying the namespace we want to plug in to
// as well as the type of plugin
export default {
    'Component/Image/Component': {
        'member-function': {
            render,
        },
    },
};
