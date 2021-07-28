
import React from 'react';
import SuccessSvg from '../svg/Success';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Success=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={SuccessSvg} />;

export default Success;