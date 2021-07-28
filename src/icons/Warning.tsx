import React from 'react';
import WarningSvg from '../svg/Warning';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Warning=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={WarningSvg} />;

export default Warning;