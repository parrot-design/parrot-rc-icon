import React from 'react';
import RadioCheckedSvg from '../svg/RadioChecked';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const RadioChecked=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={RadioCheckedSvg} />;

export default RadioChecked;