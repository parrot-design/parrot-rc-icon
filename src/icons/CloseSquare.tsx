import React from 'react';
import CloseSquareSvg from '../svg/CloseSquare';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const CloseSquare=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={CloseSquareSvg} />;

export default CloseSquare;