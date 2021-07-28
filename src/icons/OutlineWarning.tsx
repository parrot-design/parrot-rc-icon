import React from 'react';
import OutlineWarningSvg from '../svg/OutlineWarning';

import ParrotIcon from '../components/ParrotIcon';

const OutlineWarning=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={OutlineWarningSvg} />;

export default OutlineWarning;