import React from 'react';
import CheckSvg from '../svg/Check';

import ParrotIcon from '../components/ParrotIcon';

const Check=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={CheckSvg} />;

export default Check;