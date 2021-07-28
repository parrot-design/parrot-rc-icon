import React from 'react';
import ShrinkSvg from '../svg/Shrink';

import ParrotIcon from '../components/ParrotIcon';

const Shrink=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={ShrinkSvg} />;

export default Shrink;