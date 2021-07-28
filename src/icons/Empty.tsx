import React from 'react';
import EmptySvg from '../svg/Empty';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Empty=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={EmptySvg} />;

export default Empty;