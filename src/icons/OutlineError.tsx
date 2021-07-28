
import React from 'react';
import OutlineErrorSvg from '../svg/OutlineError';

import ParrotIcon from '../components/ParrotIcon';

const OutlineError=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={OutlineErrorSvg} />;

export default OutlineError;