
import React from 'react';
import InfoSvg from '../svg/Info';

import ParrotIcon from '../components/ParrotIcon';

const Info=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={InfoSvg} />;

export default Info;