import React from 'react';
import KeyboardArrowUpSvg from '../svg/KeyboardArrowUp';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const KeyboardArrowUp=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={KeyboardArrowUpSvg} />;

export default KeyboardArrowUp;