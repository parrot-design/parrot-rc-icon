import React from 'react';
import FileSvg from '../svg/File';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const File=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={FileSvg} />;

export default File;