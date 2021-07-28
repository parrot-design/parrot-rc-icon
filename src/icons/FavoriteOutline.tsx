import React from 'react';
import FavoriteOutlineSvg from '../svg/FavoriteOutline';

import ParrotIcon from '../components/ParrotIcon';

const FavoriteOutline=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={FavoriteOutlineSvg} />;

export default FavoriteOutline;