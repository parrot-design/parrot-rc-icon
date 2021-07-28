import React from 'react';
import ExpandSvg from '../svg/Expand';

import ParrotIcon from '../components/ParrotIcon';

const Expand=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={ExpandSvg} />;

export default Expand;