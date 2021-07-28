import React from 'react';
import KeyboardArrowLeftSvg from '../svg/KeyboardArrowLeft';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const KeyboardArrowLeft=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={KeyboardArrowLeftSvg} />;

export default KeyboardArrowLeft;