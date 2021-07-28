  
import React from 'react';
import EyeOffSvg from '../svg/EyeOff';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const EyeOff=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={EyeOffSvg} />;

export default EyeOff;