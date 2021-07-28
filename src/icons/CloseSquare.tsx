import React from 'react';
import CloseSquareSvg from '../svg/CloseSquare';

import ParrotIcon from '../components/ParrotIcon';

const CloseSquare=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={CloseSquareSvg} />;

export default CloseSquare;