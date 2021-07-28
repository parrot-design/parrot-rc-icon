import React from 'react';
import "./index.scss";
export * from './icons';
export { default } from './components/Icon';
export interface IParrotIconProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    size?: 'inherit' | 'small' | 'default' | 'large' | number;
    rotate?: number;
    onClick?: Function | any;
    icon?: any;
    spin?: boolean;
    style?: React.CSSProperties;
}
export interface IIconProps {
    component?: any;
    prefixCls?: string;
    componentName?: string;
    className?: string;
    size?: 'inherit' | 'small' | 'default' | 'large' | number;
    rotate?: number;
    onClick?: Function | any;
    icon: any;
    spin?: boolean;
    style?: React.CSSProperties;
    viewBox?: any;
    children?: any;
}
