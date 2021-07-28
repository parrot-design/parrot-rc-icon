import React from 'react';
import ShrinkSvg from '../svg/Shrink';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Shrink=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={ShrinkSvg} />;

export default Shrink;