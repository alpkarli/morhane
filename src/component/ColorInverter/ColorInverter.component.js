import { ChildrenType } from '@scandipwa/scandipwa/src/type/Common.type';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ColorInverter.style';
/**
 * ColorInverterComponent
 * Responsible for inverting the colors of its contents when dark mode is enabled.
 * This is used for images, which we don't want to be affected by the dark mode, so we invert them again.
 *
 * @namespace Morhane/Component/ColorInverter/Component */
export class ColorInverterComponent extends PureComponent {
    // declare the props that this component expects
    static propTypes = {
    // a required boolean - provided by the ColorInverterContainer
        isDarkModeEnabled: PropTypes.bool.isRequired,
        // a special React prop that receives the children elements
        children: ChildrenType.isRequired,
    };

    render() {
        const { isDarkModeEnabled, children } = this.props;

        // we render a simple element - the magic happens in CSS
        // we specify a modifier called `isInverted` in the `mods` prop
        // if isDarkModeEnabled is true, the modifier will be added, otherwise not
        return (
      <div block="ColorInverter" mods={ { isInverted: isDarkModeEnabled } }>
        { children }
      </div>
        );
    }
}

export default ColorInverterComponent;
