import React from 'react';
import WarningSvg from '../svg/Warning';

import ParrotIcon from '../components/ParrotIcon';

const Warning=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={WarningSvg} />;

export default Warning;