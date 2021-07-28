
import React from 'react';
import ImageSvg from '../svg/Image';

import ParrotIcon from '../components/ParrotIcon';

const Image=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={ImageSvg} />;

export default Image;