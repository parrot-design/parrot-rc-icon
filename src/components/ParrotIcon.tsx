import React from 'react';  
import classnames from '@parrotjs/classnames';
import { generate } from '../utils';
import { IParrotIconProps } from '../index';

const ParrotIcon=React.forwardRef((props:IParrotIconProps,ref)=>{

    const {
        onClick,
        className,
        icon:target,
        rotate,
        prefixCls:customizePrefixCls='parrot',
        componentName='icon',
        size="inherit",
        spin,
        style
    }=props;
 
    const prefixCls=customizePrefixCls+'-'+componentName; 

    const svgStyle=rotate?{msTransform:`rotate(${rotate}deg)`,transform:`rotate(${rotate}deg)`}:undefined; 

    const renderIcon=()=>{
        return generate(target.icon,`svg-${target.name}m`,{ 
            onClick,
            style:svgStyle,
            width:'1em',
            height:'1em',
            className:classnames(
                {
                    [`${prefixCls}-Spin`]:!!spin
                }
            ),
            fill:"currentColor",
        })
    }
 
    return (
        <span
            ref={(ref as any)}
            onClick={onClick}
            style={style}
            className={classnames(
                prefixCls,
                className,
                {
                    [`${prefixCls}-${size}`]:size
                }
            )}
        >
            {
                renderIcon() 
            }
        </span>
    )
});


export default ParrotIcon;