
import React from 'react';
import ImageSvg from '../svg/Image';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Image=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={ImageSvg} />;

export default Image;