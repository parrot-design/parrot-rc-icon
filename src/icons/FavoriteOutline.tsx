import React from 'react';
import FavoriteOutlineSvg from '../svg/FavoriteOutline';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const FavoriteOutline=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={FavoriteOutlineSvg} />;

export default FavoriteOutline;