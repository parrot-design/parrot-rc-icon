import React from 'react';
import KeyboardArrowRightSvg from '../svg/KeyboardArrowRight';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const KeyboardArrowRight=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={KeyboardArrowRightSvg} />;

export default KeyboardArrowRight;