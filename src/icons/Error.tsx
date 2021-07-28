import React from 'react';
import ErrorSvg from '../svg/Error';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Error=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={ErrorSvg} />;

export default Error;