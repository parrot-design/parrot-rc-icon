import React from 'react';
import OutlineSuccessSvg from '../svg/OutlineSuccess';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const OutlineSuccess=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={OutlineSuccessSvg} />;

export default OutlineSuccess;