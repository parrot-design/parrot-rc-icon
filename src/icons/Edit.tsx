import React from 'react';
import EditSvg from '../svg/Edit';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Edit=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={EditSvg} />;

export default Edit;