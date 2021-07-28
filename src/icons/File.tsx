import React from 'react';
import FileSvg from '../svg/File';

import ParrotIcon from '../components/ParrotIcon';

const File=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={FileSvg} />;

export default File;