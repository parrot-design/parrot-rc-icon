import React from 'react';
import PersonSvg from '../svg/Person';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Person=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={PersonSvg} />;

export default Person;