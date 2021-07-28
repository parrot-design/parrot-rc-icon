import React from 'react';
import CheckboxSelectedSvg from '../svg/CheckboxSelected';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const CheckboxSelected=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={CheckboxSelectedSvg} />;

export default CheckboxSelected;