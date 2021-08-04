import React from 'react';
import SearchSvg from '../svg/Search';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const Search=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={SearchSvg} />;

export default Search;