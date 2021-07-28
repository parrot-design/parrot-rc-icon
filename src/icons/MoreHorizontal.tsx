import React from 'react';
import MoreHorizontalSvg from '../svg/MoreHorizontal';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const MoreHorizontal=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={MoreHorizontalSvg} />;

export default MoreHorizontal;