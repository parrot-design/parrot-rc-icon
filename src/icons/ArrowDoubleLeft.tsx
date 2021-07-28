import React from 'react';
import ArrowDoubleLeftSvg from '../svg/ArrowDoubleLeft';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const ArrowDoubleLeft=(props:IParrotIconProps)=><ParrotIcon {...props} icon={ArrowDoubleLeftSvg} />;

export default ArrowDoubleLeft;