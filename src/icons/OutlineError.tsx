
import React from 'react';
import OutlineErrorSvg from '../svg/OutlineError';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const OutlineError=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={OutlineErrorSvg} />;

export default OutlineError;