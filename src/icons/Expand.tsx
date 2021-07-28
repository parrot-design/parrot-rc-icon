import React from 'react';
import ExpandSvg from '../svg/Expand';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Expand=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={ExpandSvg} />;

export default Expand;