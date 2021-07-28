import React from 'react';
import ArrowUpSvg from '../svg/ArrowUp';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const ArrowUp=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={ArrowUpSvg} />;

export default ArrowUp;
