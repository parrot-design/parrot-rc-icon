import React from 'react';
import KeyboardArrowDownSvg from '../svg/KeyboardArrowDown';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const KeyboardArrowDown=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={KeyboardArrowDownSvg} />;

export default KeyboardArrowDown;