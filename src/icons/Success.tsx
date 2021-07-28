
import React from 'react';
import SuccessSvg from '../svg/Success';

import ParrotIcon from '../components/ParrotIcon';

const Success=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={SuccessSvg} />;

export default Success;