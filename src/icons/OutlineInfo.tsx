import React from 'react';
import OutlineInfoSvg from '../svg/OutlineInfo';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const OutlineInfo=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={OutlineInfoSvg} />;

export default OutlineInfo;
