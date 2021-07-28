import React from 'react';
import CopySvg from '../svg/Copy';

import ParrotIcon from '../components/ParrotIcon';

const Copy=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={CopySvg} />;

export default Copy;