
import React from 'react';
import AddSvg from '../svg/Add';
import { IParrotIconProps} from '../index' 

import ParrotIcon from '../components/ParrotIcon';

const Add=(props:IParrotIconProps)=><ParrotIcon {...props} icon={AddSvg} />;

export default Add;