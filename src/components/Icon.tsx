import React,{useContext} from 'react';
import classnames from '@parrotjs/classnames'; 
import {
    svgBaseProps
} from '../utils'; 
import { IIconProps } from '../index'

const Icon=React.forwardRef((props:IIconProps,ref)=>{
    const {
        className,
        viewBox,
        component:Component,
        componentName='icon',
        prefixCls:customizePrefixCls='parrot',
        children,
        rotate, 
        size="default"
    }=props;

    const prefixCls=customizePrefixCls+'-'+componentName;

    const svgStyle=rotate?{msTransform:`rotate(${rotate}deg)`,transform:`rotate(${rotate}deg)`}:undefined; 

    const innerSvgProps={
        ...svgBaseProps,
        style:svgStyle,
        viewBox
    }

    const renderInnerNode=()=>{
        if(Component){
            return <Component {...innerSvgProps}>{children}</Component>
        }

        if(children){
            return (
                <svg {...innerSvgProps} viewBox={viewBox}>
                    {children}
                </svg>
            )
        }

        return null;
    }

    return (
        <span
            ref={(ref as any)}
            className={
                classnames(
                    className,
                    prefixCls,
                    {
                        [`${prefixCls}-${size}`]:size
                    }
                )
            }
        >
            {renderInnerNode()}
        </span>
    )

});

export default Icon;