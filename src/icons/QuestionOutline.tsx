import React from 'react';
import QuestionOutlineSvg from '../svg/QuestionOutline';

import ParrotIcon from '../components/ParrotIcon';

const QuestionOutline=(props:any,ref:any)=><ParrotIcon {...props} ref={ref} icon={QuestionOutlineSvg} />;

export default QuestionOutline;