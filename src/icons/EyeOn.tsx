import React from 'react';
import EyeOnSvg from '../svg/EyeOn';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const EyeOn=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={EyeOnSvg} />;

export default EyeOn;