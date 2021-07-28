import React from 'react';
import OutlineWarningSvg from '../svg/OutlineWarning';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const OutlineWarning=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={OutlineWarningSvg} />;

export default OutlineWarning;