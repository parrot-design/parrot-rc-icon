import React from 'react';
import EyeOnSvg from '../svg/EyeOn';

import ParrotIcon from '../components/ParrotIcon';

const EyeOn=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={EyeOnSvg} />;

export default EyeOn;