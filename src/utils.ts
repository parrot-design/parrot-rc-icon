import React from 'react';

export const svgBaseProps={
    width:"1em",
    height:"1em",
    fill:"currentColor"
}  

export function generate(node:any,key:string,rootProps?:any){
    if(!rootProps){  
        return React.createElement(
            node.tag,
            {
                key,
                ...node.attrs,
            },
            (node.children||[]).map((child:any,index:any)=>generate(child,`${key}-${node.tag}-${index}`))
        );
    }

    return React.createElement(
        node.tag,
        {
            key,
            ...node.attrs,
            ...rootProps
        },
        (node.children || []).map((child:any, index:any) => generate(child, `${key}-${node.tag}-${index}`)),
    )
}