
import React from 'react';
import CheckboxUnSelectedSvg from '../svg/CheckboxUnSelected';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const CheckboxUnSelect=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={CheckboxUnSelectedSvg} />;

export default CheckboxUnSelect;