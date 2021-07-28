import React from 'react';
import FavoriteSvg from '../svg/Favorite';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Favorite=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={FavoriteSvg} />;

export default Favorite;