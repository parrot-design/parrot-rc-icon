import React from 'react';
import CopySvg from '../svg/Copy';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Copy=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={CopySvg} />;

export default Copy;