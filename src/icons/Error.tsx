import React from 'react';
import ErrorSvg from '../svg/Error';

import ParrotIcon from '../components/ParrotIcon';

const Error=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={ErrorSvg} />;

export default Error;