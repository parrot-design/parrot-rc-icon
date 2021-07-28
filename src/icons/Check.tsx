import React from 'react';
import CheckSvg from '../svg/Check';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Check=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={CheckSvg} />;

export default Check;