import React from 'react';
import ArrowDownSvg from '../svg/ArrowDown';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const ArrowDown=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={ArrowDownSvg} />;

export default ArrowDown;