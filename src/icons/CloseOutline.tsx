import React from 'react';
import CloseOutlineSvg from '../svg/CloseOutline';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const CloseOutline=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={CloseOutlineSvg} />;

export default CloseOutline;