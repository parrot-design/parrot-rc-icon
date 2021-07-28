
import React from 'react';
import InfoSvg from '../svg/Info';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Info=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={InfoSvg} />;

export default Info;