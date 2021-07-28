import React from 'react';
import QuestionOutlineSvg from '../svg/QuestionOutline';

import { IParrotIconProps} from '../index'
import ParrotIcon from '../components/ParrotIcon';

const QuestionOutline=(props:IParrotIconProps)=><ParrotIcon {...props}  icon={QuestionOutlineSvg} />;

export default QuestionOutline;