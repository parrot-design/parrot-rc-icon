import React from 'react';
import FavoriteSvg from '../svg/Favorite';

import ParrotIcon from '../components/ParrotIcon';

const Favorite=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={FavoriteSvg} />;

export default Favorite;