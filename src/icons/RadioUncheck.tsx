import React from 'react';
import RadioUncheckSvg from '../svg/RadioUncheck';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const RadioUncheck=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={RadioUncheckSvg} />;

export default RadioUncheck;