import React from 'react';
import CheckboxSelectedSvg from '../svg/CheckboxSelected';

import ParrotIcon from '../components/ParrotIcon';

const CheckboxSelected=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={CheckboxSelectedSvg} />;

export default CheckboxSelected;