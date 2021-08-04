'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classnames = require('@parrotjs/classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

const Add$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M810.666667 554.666667h-256v256h-85.333334v-256H213.333333v-85.333334h256V213.333333h85.333334v256h256v85.333334z"
                },
                "name": "Add"
            }
        ]
    }
};

const svgBaseProps = {
    width: "1em",
    height: "1em",
    fill: "currentColor"
};
function generate(node, key, rootProps) {
    if (!rootProps) {
        return React__default['default'].createElement(node.tag, Object.assign({ key }, node.attrs), (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)));
    }
    return React__default['default'].createElement(node.tag, Object.assign(Object.assign({ key }, node.attrs), rootProps), (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)));
}

const ParrotIcon = React__default['default'].forwardRef((props, ref) => {
    const { onClick, className, icon: target, rotate, prefixCls: customizePrefixCls = 'parrot', componentName = 'icon', size = "inherit", spin, style } = props;
    const prefixCls = customizePrefixCls + '-' + componentName;
    const svgStyle = rotate ? { msTransform: `rotate(${rotate}deg)`, transform: `rotate(${rotate}deg)` } : undefined;
    const renderIcon = () => {
        return generate(target.icon, `svg-${target.name}m`, {
            onClick,
            style: svgStyle,
            width: '1em',
            height: '1em',
            className: classnames__default['default']({
                [`${prefixCls}-Spin`]: !!spin
            }),
            fill: "currentColor",
        });
    };
    return (React__default['default'].createElement("span", { ref: ref, onClick: onClick, style: style, className: classnames__default['default'](prefixCls, className, {
            [`${prefixCls}-${size}`]: size
        }) }, renderIcon()));
});

const Add = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Add$1 }));

const CloseSquare$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M888.490667 63.488H135.509333c-39.808 0-72.021333 32.213333-72.021333 72.021333v753.066667c0 39.808 32.213333 72.021333 72.021333 72.021333h753.066667c39.808 0 72.021333-32.213333 72.021333-71.978666V135.509333a72.149333 72.149333 0 0 0-72.106666-72.021333zM717.226667 717.909333a35.84 35.84 0 0 1-50.901334-0.128L512 562.986667l-154.282667 154.709333a35.84 35.84 0 0 1-50.901333 0.085333 36.010667 36.010667 0 0 1-0.128-50.901333L461.226667 512 306.773333 357.12a36.010667 36.010667 0 0 1 50.986667-50.816L512 461.013333l154.282667-154.709333a36.010667 36.010667 0 1 1 50.901333 50.773333L562.816 512l154.453333 155.008a36.010667 36.010667 0 0 1-0.085333 50.901333z"
                },
                "name": "CloseSquare"
            }
        ]
    }
};

const CloseSquare = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: CloseSquare$1 }));

const KeyboardArrowDown$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M316.16 334.506667L512 529.92l195.84-195.413333L768 394.666667l-256 256-256-256z"
                },
                "name": "KeyboardArrowDown"
            }
        ]
    }
};

const KeyboardArrowDown = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: KeyboardArrowDown$1 }));

const KeyboardArrowUp$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M316.16 657.493333L512 462.08l195.84 195.413333L768 597.333333l-256-256-256 256z"
                },
                "name": "KeyboardArrowDown"
            }
        ]
    }
};

const KeyboardArrowUp = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: KeyboardArrowUp$1 }));

const EyeOff$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 298.666667c117.76 0 213.333333 95.573333 213.333333 213.333333 0 27.733333-5.546667 53.76-15.36 78.08l124.586667 124.586667c64.426667-53.76 115.2-123.306667 146.346667-202.666667-73.813333-187.306667-256-320-469.333334-320-59.733333 0-116.906667 10.666667-169.813333 29.866667l92.16 92.16C458.24 304.213333 484.266667 298.666667 512 298.666667zM85.333333 182.186667l97.28 97.28 19.626667 19.626666A503.637333 503.637333 0 0 0 42.666667 512c73.813333 187.306667 256 320 469.333333 320 66.133333 0 129.28-12.8 186.88-35.84l17.92 17.92L841.813333 938.666667 896 884.48 139.52 128 85.333333 182.186667zM321.28 418.133333l66.133333 66.133334c-2.133333 8.96-3.413333 18.346667-3.413333 27.733333 0 70.826667 57.173333 128 128 128 9.386667 0 18.773333-1.28 27.733333-3.413333l66.133334 66.133333c-28.586667 14.08-60.16 22.613333-93.866667 22.613333-117.76 0-213.333333-95.573333-213.333333-213.333333 0-33.706667 8.533333-65.28 22.613333-93.866667z m183.893333-33.28l134.4 134.4 0.853334-6.826666c0-70.826667-57.173333-128-128-128l-7.253334 0.426666z"
                },
                "name": "EyeOn"
            }
        ]
    }
};

const EyeOff = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: EyeOff$1 }));

const EyeOn$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 192C298.666667 192 116.48 324.693333 42.666667 512c73.813333 187.306667 256 320 469.333333 320s395.52-132.693333 469.333333-320c-73.813333-187.306667-256-320-469.333333-320zM512 725.333333c-117.76 0-213.333333-95.573333-213.333333-213.333333s95.573333-213.333333 213.333333-213.333333 213.333333 95.573333 213.333333 213.333333-95.573333 213.333333-213.333333 213.333333z m0-341.333333c-70.826667 0-128 57.173333-128 128s57.173333 128 128 128 128-57.173333 128-128-57.173333-128-128-128z"
                },
                "name": "EyeOn"
            }
        ]
    }
};

const EyeOn = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: EyeOn$1 }));

const CheckboxUnSelected = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334m0-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z"
                },
                "name": "Add"
            }
        ]
    }
};

const CheckboxUnSelect = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: CheckboxUnSelected }));

const CheckboxSelected$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M810.666667 128H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333z m-384 597.333333l-213.333334-213.333333 60.16-60.16L426.666667 604.586667l323.84-323.84L810.666667 341.333333l-384 384z"
                },
                "name": "Add"
            }
        ]
    }
};

const CheckboxSelected = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: CheckboxSelected$1 }));

const FavoriteOutline$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M704 128c-74.24 0-145.493333 34.56-192 89.173333C465.493333 162.56 394.24 128 320 128 188.586667 128 85.333333 231.253333 85.333333 362.666667c0 161.28 145.066667 292.693333 364.8 492.373333L512 910.933333l61.866667-56.32C793.6 655.36 938.666667 523.946667 938.666667 362.666667 938.666667 231.253333 835.413333 128 704 128z m-187.733333 663.466667l-4.266667 4.266666-4.266667-4.266666C304.64 607.573333 170.666667 485.973333 170.666667 362.666667 170.666667 277.333333 234.666667 213.333333 320 213.333333c65.706667 0 129.706667 42.24 152.32 100.693334h79.786667C574.293333 255.573333 638.293333 213.333333 704 213.333333c85.333333 0 149.333333 64 149.333333 149.333334 0 123.306667-133.973333 244.906667-337.066666 428.8z"
                },
                "name": "FavoriteOutline"
            }
        ]
    }
};

const FavoriteOutline = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: FavoriteOutline$1 }));

const Favorite$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 910.933333l-61.866667-56.32C230.4 655.36 85.333333 523.946667 85.333333 362.666667 85.333333 231.253333 188.586667 128 320 128c74.24 0 145.493333 34.56 192 89.173333C558.506667 162.56 629.76 128 704 128 835.413333 128 938.666667 231.253333 938.666667 362.666667c0 161.28-145.066667 292.693333-364.8 492.373333L512 910.933333z"
                },
                "name": "Favorite"
            }
        ]
    }
};

const Favorite = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Favorite$1 }));

const Copy$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M682.666667 42.666667H170.666667C123.52 42.666667 85.333333 80.853333 85.333333 128v597.333333h85.333334V128h512V42.666667z m128 170.666666H341.333333c-47.146667 0-85.333333 38.186667-85.333333 85.333334v597.333333c0 47.146667 38.186667 85.333333 85.333333 85.333333h469.333334c47.146667 0 85.333333-38.186667 85.333333-85.333333V298.666667c0-47.146667-38.186667-85.333333-85.333333-85.333334z m0 682.666667H341.333333V298.666667h469.333334v597.333333z"
                },
                "name": "Add"
            }
        ]
    }
};

const Copy = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Copy$1 }));

const Edit$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M128 736V896h160L759.893333 424.106667l-160-160L128 736zM883.626667 300.373333a42.496 42.496 0 0 0 0-60.16l-99.84-99.84a42.496 42.496 0 0 0-60.16 0l-78.08 78.08 160 160 78.08-78.08z"
                },
                "name": "Edit"
            }
        ]
    }
};

const Edit = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Edit$1 }));

const Check$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M384 689.92L206.08 512l-60.586667 60.16L384 810.666667 896 298.666667l-60.16-60.16z"
                },
                "name": "Check"
            }
        ]
    }
};

const Check = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Check$1 }));

const Warning$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M42.666667 896h938.666666L512 85.333333 42.666667 896z m512-128h-85.333334v-85.333333h85.333334v85.333333z m0-170.666667h-85.333334v-170.666666h85.333334v170.666666z"
                },
                "name": "KeyboardArrowDown"
            }
        ]
    }
};

const Warning = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Warning$1 }));

const Person$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 512c94.293333 0 170.666667-76.373333 170.666667-170.666667s-76.373333-170.666667-170.666667-170.666666-170.666667 76.373333-170.666667 170.666666 76.373333 170.666667 170.666667 170.666667z m0 85.333333c-113.92 0-341.333333 57.173333-341.333333 170.666667v85.333333h682.666666v-85.333333c0-113.493333-227.413333-170.666667-341.333333-170.666667z"
                },
                "name": "Person"
            }
        ]
    }
};

const Person = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Person$1 }));

const Image$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M896 810.666667V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333zM362.666667 576l106.666666 128.426667L618.666667 512l192 256H213.333333l149.333334-192z"
                },
                "name": "Image"
            }
        ]
    }
};

const Image = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Image$1 }));

const KeyboardArrowLeft$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M657.493333 686.506667l-195.413333-195.84 195.413333-195.84L597.333333 234.666667l-256 256 256 256z"
                },
                "name": "KeyboardArrowLeft"
            }
        ]
    }
};

const KeyboardArrowLeft = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: KeyboardArrowLeft$1 }));

const KeyboardArrowRight$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M366.506667 697.173333l195.413333-195.84-195.413333-195.84L426.666667 245.333333l256 256-256 256z"
                },
                "name": "KeyboardArrowRight"
            }
        ]
    }
};

const KeyboardArrowRight = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: KeyboardArrowRight$1 }));

const RadioChecked$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 298.666667c-117.76 0-213.333333 95.573333-213.333333 213.333333s95.573333 213.333333 213.333333 213.333333 213.333333-95.573333 213.333333-213.333333-95.573333-213.333333-213.333333-213.333333z m0-213.333334C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z m0 768c-188.586667 0-341.333333-152.746667-341.333333-341.333333s152.746667-341.333333 341.333333-341.333333 341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333z"
                },
                "name": "RadioChecked"
            }
        ]
    }
};

const RadioChecked = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: RadioChecked$1 }));

const RadioUncheck$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z m0 768c-188.586667 0-341.333333-152.746667-341.333333-341.333333s152.746667-341.333333 341.333333-341.333333 341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333z"
                },
                "name": "RadioUncheck"
            }
        ]
    }
};

const RadioUncheck = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: RadioUncheck$1 }));

const ArrowUp$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M298.666667 597.333333l213.333333-213.333333 213.333333 213.333333z"
                },
                "name": "ArrowUp"
            }
        ]
    }
};

const ArrowUp = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: ArrowUp$1 }));

const ArrowDown$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M298.666667 426.666667l213.333333 213.333333 213.333333-213.333333z"
                },
                "name": "Add"
            }
        ]
    }
};

const ArrowDown = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: ArrowDown$1 }));

const MoreHorizontal$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M256 426.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333-38.4-85.333333-85.333333-85.333333z m512 0c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333-38.4-85.333333-85.333333-85.333333z m-256 0c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333-38.4-85.333333-85.333333-85.333333z"
                },
                "name": "MoreHorizontal"
            }
        ]
    }
};

const MoreHorizontal = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: MoreHorizontal$1 }));

const ArrowDoubleLeft$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M256.96 512l283.093-361.707c4.374-5.546 0.427-13.76-6.72-13.76H450.88c-5.227 0-10.24 2.454-13.44 6.507L165.12 490.987c-9.707 12.373-9.707 29.76 0 42.133l272.32 347.84c3.2 4.16 8.213 6.507 13.44 6.507h82.453c7.147 0 11.094-8.214 6.72-13.76L256.96 512z",
                },
                "name": "ArrowDoubleLeft"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M581.227 512L864.32 150.293c4.373-5.546 0.427-13.76-6.72-13.76h-82.453c-5.227 0-10.24 2.454-13.44 6.507l-272.32 347.947c-9.707 12.373-9.707 29.76 0 42.133l272.32 347.84c3.2 4.16 8.213 6.507 13.44 6.507H857.6c7.147 0 11.093-8.214 6.72-13.76L581.227 512z",
                },
                "name": "ArrowDoubleLeft"
            },
        ]
    }
};

const ArrowDoubleLeft = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: ArrowDoubleLeft$1 }));

const ArrowDoubleRight$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M534.613 490.987L262.293 143.04c-3.2-4.16-8.213-6.507-13.44-6.507H166.4c-7.147 0-11.093 8.214-6.72 13.76L442.773 512 159.68 873.707c-4.373 5.546-0.427 13.76 6.72 13.76h82.453c5.227 0 10.24-2.454 13.44-6.507l272.32-347.84c9.707-12.48 9.707-29.76 0-42.133z"
                },
                "name": "ArrowDoubleRight"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M858.88 490.987L586.56 143.04c-3.2-4.16-8.213-6.507-13.44-6.507h-82.453c-7.147 0-11.094 8.214-6.72 13.76L767.04 512 483.947 873.707c-4.374 5.546-0.427 13.76 6.72 13.76h82.453c5.227 0 10.24-2.454 13.44-6.507l272.32-347.84c9.707-12.48 9.707-29.76 0-42.133z",
                },
                "name": "ArrowDoubleRight"
            }
        ]
    }
};

const ArrowDoubleRight = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: ArrowDoubleRight$1 }));

const Expand$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M70.4 153.6c0-45.9264 37.2736-83.2 83.2-83.2h716.8c45.9264 0 83.2 37.2736 83.2 83.2v716.8c0 45.9264-37.2736 83.2-83.2 83.2H153.6A83.2 83.2 0 0 1 70.4 870.4V153.6z m64 0v716.8c0 10.5984 8.6016 19.2 19.2 19.2h716.8a19.2 19.2 0 0 0 19.2-19.2V153.6A19.2 19.2 0 0 0 870.4 134.4H153.6A19.2 19.2 0 0 0 134.4 153.6z"
                },
                "name": "Expand"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M307.2 544a32 32 0 1 1 0-64h409.6a32 32 0 1 1 0 64H307.2z"
                },
                "name": "Expand"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M480 307.2a32 32 0 1 1 64 0v409.6a32 32 0 1 1-64 0V307.2z"
                },
                "name": "Expand"
            }
        ]
    }
};

const Expand = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Expand$1 }));

const Shrink$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M70.4 153.6c0-45.9264 37.2736-83.2 83.2-83.2h716.8c45.9264 0 83.2 37.2736 83.2 83.2v716.8c0 45.9264-37.2736 83.2-83.2 83.2H153.6A83.2 83.2 0 0 1 70.4 870.4V153.6z m64 0v716.8c0 10.5984 8.6016 19.2 19.2 19.2h716.8a19.2 19.2 0 0 0 19.2-19.2V153.6A19.2 19.2 0 0 0 870.4 134.4H153.6A19.2 19.2 0 0 0 134.4 153.6z"
                },
                "name": "Shrink"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M307.2 544a32 32 0 1 1 0-64h409.6a32 32 0 1 1 0 64H307.2z"
                },
                "name": "Shrink"
            },
        ]
    }
};

const Shrink = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Shrink$1 }));

const File$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M834.6624 409.6a40.8576 40.8576 0 0 0-13.7728-30.63808l-254.32064-254.32064a40.87296 40.87296 0 0 0-31.1552-11.84768c-0.97792-0.07168-1.9456-0.1536-2.93376-0.1536H230.4a40.96 40.96 0 0 0-40.96 40.96v716.8a40.96 40.96 0 0 0 40.96 40.96h563.2a40.96 40.96 0 0 0 40.96-40.96V419.84c0-1.62304-0.11776-3.21536-0.3072-4.79232a40.6528 40.6528 0 0 0 0.4096-5.44768zM578.56 252.48256L694.71744 368.64H578.56V252.48256zM271.36 829.44V194.56h225.28v215.04a40.96 40.96 0 0 0 40.96 40.96h215.04v378.88H271.36z"
                },
                "name": "File"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M371.2 660.48h133.12a40.96 40.96 0 0 0 0-81.92h-133.12a40.96 40.96 0 0 0 0 81.92zM650.24 696.32H363.52a40.96 40.96 0 0 0 0 81.92h286.72a40.96 40.96 0 0 0 0-81.92z"
                },
                "name": "File"
            }
        ]
    }
};

const File = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: File$1 }));

const OutlineError$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M896 512a384 384 0 1 0-768 0 384 384 0 0 0 768 0zM42.666667 512C42.666667 252.8 252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512z m469.333333 60.330667l-140.501333 140.501333-60.330667-60.330667L451.669333 512 311.168 371.498667l60.330667-60.330667L512 451.669333l140.501333-140.501333 60.330667 60.330667L572.330667 512l140.501333 140.501333-60.330667 60.330667L512 572.330667z"
                },
                "name": "OutlineError"
            },
        ]
    }
};

const OutlineError = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: OutlineError$1 }));

const OutlineSuccess$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M896 512a384 384 0 1 0-768 0 384 384 0 0 0 768 0zM42.666667 512C42.666667 252.8 252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512z m652.501333-158.165333l60.330667 60.330666L469.333333 700.330667l-200.832-200.832 60.330667-60.330667L469.333333 579.669333l225.834667-225.834666z"
                },
                "name": "OutlineSuccess"
            },
        ]
    }
};

const OutlineSuccess = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: OutlineSuccess$1 }));

const OutlineInfo$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z m0-844.8c-206.506667 0-375.466667 168.96-375.466667 375.466667 0 206.506667 168.96 375.466667 375.466667 375.466667 206.506667 0 375.466667-168.96 375.466667-375.466667 0-206.506667-168.96-375.466667-375.466667-375.466667z"
                },
                "name": "OutlineInfo"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 796.714667a46.08 46.08 0 0 1-46.933333-46.933334v-269.056c0-26.624 20.352-46.933333 46.933333-46.933333 26.581333 0 46.933333 20.309333 46.933333 46.933333v269.056c0 26.624-20.352 46.933333-46.933333 46.933334zM512 364.928a46.08 46.08 0 0 1-46.933333-46.933333V274.218667c0-26.624 20.352-46.933333 46.933333-46.933334 26.581333 0 46.933333 20.309333 46.933333 46.933334v43.776c0 26.624-21.888 46.933333-46.933333 46.933333z"
                },
                "name": "OutlineInfo"
            },
        ]
    }
};

const OutlineInfo = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: OutlineInfo$1 }));

const OutlineWarning$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 65.173333L1013.269333 917.333333H10.730667L512 65.173333zM159.936 832h704.128L512 233.472 159.936 832z"
                },
                "name": "OutlineWarning"
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M469.333333 426.666667v213.333333h85.333334V426.666667h-85.333334zM469.333333 768v-85.333333h85.333334v85.333333h-85.333334z"
                },
                "name": "OutlineWarning"
            }
        ]
    }
};

const OutlineWarning = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: OutlineWarning$1 }));

const CloseOutline$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
                },
                "name": "CloseOutline"
            }
        ]
    }
};

const CloseOutline = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: CloseOutline$1 }));

const QuestionOutline$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M500.736 743.0144a51.2 51.2 0 1 1-102.4-0.0512 51.2 51.2 0 0 1 102.4 0M295.936 256a51.2 51.2 0 0 1 51.2-51.2h292.352c42.752 0 77.4144 34.6624 77.4144 77.4144V409.6c0 56.32-46.08 102.4-102.4 102.4h-76.288a26.112 26.112 0 0 0-26.112 26.0608v51.3536a51.2 51.2 0 1 1-102.4 0V500.6336C409.7024 450.3552 450.4576 409.6 500.736 409.6h51.2a51.2 51.2 0 0 0 0-102.4h-204.8a51.2 51.2 0 0 1-51.2-51.2m574.5664 665.6h-716.8a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2h716.8a51.2 51.2 0 0 1 51.2 51.2v716.8a51.2 51.2 0 0 1-51.2 51.2m-870.4-819.2v819.2a102.4 102.4 0 0 0 102.4 102.4h819.2a102.4 102.4 0 0 0 102.4-102.4V102.4a102.4 102.4 0 0 0-102.4-102.4h-819.2a102.4 102.4 0 0 0-102.4 102.4"
                },
                "name": "QuestionOutline"
            }
        ]
    }
};

const QuestionOutline = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: QuestionOutline$1 }));

const Error$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 85.333333C276.053333 85.333333 85.333333 276.053333 85.333333 512s190.72 426.666667 426.666667 426.666667 426.666667-190.72 426.666667-426.666667S747.946667 85.333333 512 85.333333z m213.333333 579.84L665.173333 725.333333 512 572.16 358.826667 725.333333 298.666667 665.173333 451.84 512 298.666667 358.826667 358.826667 298.666667 512 451.84 665.173333 298.666667 725.333333 358.826667 572.16 512 725.333333 665.173333z"
                },
                "name": "Error"
            }
        ]
    }
};

const Error = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Error$1 }));

const Success$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M510.545 28.22c-267.043 0-483.521 216.477-483.521 483.52s216.479 483.521 483.521 483.521 483.52-216.479 483.52-483.521S777.588 28.22 510.545 28.22zM776.855 407.855l-315.37 315.37c-9.763 9.763-22.559 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-176.13-176.13c-19.526-19.525-19.526-51.184 0-70.71 19.526-19.526 51.184-19.527 70.711 0L426.13 617.159l280.015-280.015c19.527-19.526 51.184-19.526 70.711 0C796.382 356.671 796.382 388.329 776.855 407.855z"
                },
                "name": "Success"
            }
        ]
    }
};

const Success = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Success$1 }));

const Info$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z m42.666667 640h-85.333334v-85.333333h85.333334v85.333333z m0-170.666666h-85.333334V298.666667h85.333334v256z"
                },
                "name": "Info"
            }
        ]
    }
};

const Info = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Info$1 }));

const Empty$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M460.04224 11.93984h52.20352v152.28928h-52.20352V11.93984z m239.22688 20.29568l-76.84096 130.53952 43.49952 23.20384 76.84096-131.9936-43.49952-21.74976z m-494.3872 58.01984l88.43264 123.2896 40.59136-29.02016-88.43264-123.2896-40.59136 29.02016z m820.61312 388.7104l-127.5904-150.8352c-2.88768-5.79584-8.704-11.61216-15.95392-13.06624l-408.84224-84.11136c-4.36224-1.45408-8.704 0-13.06624 1.4336l-330.5472 130.56c-1.45408 1.4336-4.36224 1.4336-5.81632 2.88768-1.4336 1.45408-2.88768 4.36224-4.34176 5.81632L14.9504 550.03136c-4.36224 5.81632-4.36224 14.52032-1.45408 20.31616 2.88768 5.79584 8.704 11.61216 15.95392 13.06624l86.97856 23.20384v246.5792c0 10.1376 7.24992 18.8416 17.408 21.74976l459.59168 133.44768c5.81632 1.4336 13.06624 1.4336 18.8416-1.45408l289.9968-162.44736a23.1424 23.1424 0 0 0 11.59168-20.31616l-2.90816-245.12512 110.1824-65.26976c5.81632-2.90816 10.15808-10.15808 11.61216-15.95392 0-7.24992-1.4336-14.49984-7.24992-18.8416z m-555.29472-198.69696l342.15936 71.0656-36.2496 21.74976-171.06944 100.08576-318.976-76.86144-71.04512-17.408 255.1808-98.63168zM71.49568 548.59776l79.72864-136.33536 124.70272 30.45376 281.27232 68.15744-95.70304 140.6976-390.00064-102.97344zM162.816 837.2224V619.66336l301.568 79.7696c10.1376 2.90816 20.2752-1.4336 24.63744-10.1376l81.2032-120.40192 4.34176 385.8432L162.83648 837.2224z m459.59168 110.22336l-4.34176-387.2768 72.4992 121.856c7.24992 11.59168 20.2752 14.49984 31.88736 8.68352l142.09024-84.11136 2.88768 204.51328-245.02272 136.33536z m97.15712-310.39488l-76.86144-130.53952L800.768 412.2624l72.4992-43.52 100.02432 117.49376-253.70624 150.8352z",
                    "fill": "#d4237a"
                },
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M470.20032 22.07744v130.53952h30.45376V22.07744h-30.45376zM522.40384 0.32768v174.05952h-73.95328V0.32768h73.9328z m172.52352 17.408l62.34112 33.36192L670.3104 201.9328l-62.3616-34.816L694.92736 17.75616z m-56.5248 140.6976l23.18336 13.04576 65.2288-113.13152-23.18336-13.04576-65.24928 113.13152zM188.90752 87.36768l59.43296-40.63232 101.49888 140.6976-59.43296 40.61184-101.49888-140.6976z m31.88736 5.79584l75.40736 105.8816 23.18336-15.9744-75.3664-105.8816-23.22432 15.9744z m801.792 362.5984l13.04576 14.49984c7.24992 7.2704 10.1376 17.408 7.24992 27.56608-1.45408 10.15808-7.24992 18.8416-15.9744 24.65792l-104.36608 60.928 1.4336 239.3088c0 13.06624-7.24992 24.65792-17.408 30.47424L616.6528 1015.64416c-8.704 4.34176-18.8416 5.79584-27.5456 2.88768L129.47456 886.53824A34.38592 34.38592 0 0 1 104.8576 853.1968V615.3216l-78.29504-20.31616a35.88096 35.88096 0 0 1-23.20384-20.29568c-4.34176-10.15808-2.88768-21.77024 1.45408-30.47424l104.38656-178.3808 1.45408-1.47456c1.4336-1.4336 2.90816-4.34176 5.79584-5.79584l2.90816-2.88768h2.88768c1.45408-1.45408 2.90816-1.45408 4.36224-2.90816l330.5472-129.08544c5.81632-2.90816 13.06624-2.90816 18.86208-1.45408l408.86272 84.13184c10.15808 1.4336 17.408 8.68352 23.20384 17.408l114.52416 131.97312z m-131.95264-120.38144l-1.4336-1.4336a14.848 14.848 0 0 0-8.704-7.2704L471.6544 242.54464h-7.24992L133.8368 373.08416c-1.45408 0-1.45408 1.45408-2.90816 1.45408l-2.88768 2.90816-1.45408 1.4336-101.49888 176.96768c-1.4336 2.90816-2.88768 7.24992-1.4336 11.61216 1.4336 2.88768 4.34176 5.79584 8.68352 7.24992l94.24896 24.65792V854.6304c0 5.81632 4.34176 10.15808 8.704 11.61216l461.04576 131.9936c2.90816 1.4336 7.24992 0 10.15808-1.45408l289.95584-162.44736c4.36224-2.90816 5.81632-5.79584 5.81632-11.61216l-2.90816-250.92096 5.79584-2.90816 110.1824-65.26976c2.90816-1.4336 5.81632-5.79584 5.81632-8.704v-7.24992l-130.49856-152.28928zM123.6992 374.53824l1.45408 2.90816h2.90816l-4.36224-2.90816z m347.9552-84.11136l-220.3648 85.56544 37.6832 8.704 314.63424 75.42784 166.72768-98.63168 13.04576-7.24992-311.7056-63.81568z m371.17952 55.0912l-24.63744 14.52032-36.2496 21.74976-173.99808 102.99392-4.34176-1.45408-318.976-76.88192L180.224 381.78816l289.97632-113.13152 372.61312 76.88192zM87.42912 541.36832l368.27136 97.1776 82.6368-121.856-265.3184-63.7952-115.99872-27.56608-69.59104 116.03968z m57.99936-142.1312l7.24992 1.4336 124.68224 30.45376 295.77216 72.51968-108.7488 159.5392-410.29632-108.7488 91.3408-155.21792z m27.5456 429.32224l391.4752 111.67744-2.90816-335.0528-62.34112 91.38176a37.74464 37.74464 0 0 1-37.6832 14.49984L172.9536 634.1632v194.3552zM151.22432 606.6176l13.04576 2.88768 301.58848 79.79008c5.79584 1.4336 10.1376 0 13.04576-5.81632l101.4784-149.38112 4.36224 435.11808-434.97472-124.7232V606.6176h1.45408z m704.63488 197.26336l-1.4336-178.42176-124.70272 73.97376c-15.95392 10.15808-37.6832 4.36224-46.3872-11.59168l-52.20352-87.04 2.90816 329.25696 221.81888-126.17728zM606.49472 519.5776l20.2752 34.816 72.4992 121.856c2.90816 5.79584 11.61216 7.22944 17.408 4.34176l158.02368-92.83584 2.90816 229.1712-266.77248 149.4016-4.34176-446.75072z m349.3888-34.816l-86.97856-100.06528-65.2288 37.70368-149.34016 88.4736 66.68288 111.69792 234.88512-137.78944z m-329.1136 18.86208l8.704-5.79584 158.04416-94.26944 79.74912-47.86176 114.52416 133.4272-272.56832 163.90144-88.43264-149.4016z",
                    "fill": "#FFFFFF"
                },
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M876.15488 341.1968l1.45408-1.47456-408.86272-84.11136-329.1136 129.08544h-1.4336L35.2256 563.0976l434.95424 114.5856 123.22816-182.76352-311.7056-75.40736 327.68 78.31552 178.31936-104.448-178.33984 105.8816 101.49888 169.71776 297.22624-175.5136z",
                    "fill": "#FE6833",
                    "fillOpacity": ".2"
                },
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M172.97408 386.1504l430.61248 104.42752 27.5456-17.408c-192.83968-65.26976-234.88512-146.49344-224.72704-188.55936L172.97408 386.1504z",
                    "fill": "#FE6833",
                    "fillOpacity": ".3"
                },
            }
        ]
    }
};

const Empty = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Empty$1 }));

const Search$1 = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024", "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M661.333333 597.333333h-33.706666l-11.946667-11.52A276.096 276.096 0 0 0 682.666667 405.333333 277.333333 277.333333 0 1 0 405.333333 682.666667c68.693333 0 131.84-25.173333 180.48-66.986667l11.52 11.946667v33.706666l213.333334 212.906667L874.24 810.666667l-212.906667-213.333334z m-256 0C299.093333 597.333333 213.333333 511.573333 213.333333 405.333333S299.093333 213.333333 405.333333 213.333333 597.333333 299.093333 597.333333 405.333333 511.573333 597.333333 405.333333 597.333333z"
                },
                "name": "Search"
            }
        ]
    }
};

const Search = (props) => React__default['default'].createElement(ParrotIcon, Object.assign({}, props, { icon: Search$1 }));

const Icon = React__default['default'].forwardRef((props, ref) => {
    const { className, viewBox, component: Component, componentName = 'icon', prefixCls: customizePrefixCls = 'parrot', children, rotate, size = "default" } = props;
    const prefixCls = customizePrefixCls + '-' + componentName;
    const svgStyle = rotate ? { msTransform: `rotate(${rotate}deg)`, transform: `rotate(${rotate}deg)` } : undefined;
    const innerSvgProps = Object.assign(Object.assign({}, svgBaseProps), { style: svgStyle, viewBox });
    const renderInnerNode = () => {
        if (Component) {
            return React__default['default'].createElement(Component, Object.assign({}, innerSvgProps), children);
        }
        if (children) {
            return (React__default['default'].createElement("svg", Object.assign({}, innerSvgProps, { viewBox: viewBox }), children));
        }
        return null;
    };
    return (React__default['default'].createElement("span", { ref: ref, className: classnames__default['default'](className, prefixCls, {
            [`${prefixCls}-${size}`]: size
        }) }, renderInnerNode()));
});

exports.Add = Add;
exports.ArrowDoubleLeft = ArrowDoubleLeft;
exports.ArrowDoubleRight = ArrowDoubleRight;
exports.ArrowDown = ArrowDown;
exports.ArrowUp = ArrowUp;
exports.Check = Check;
exports.CheckboxSelected = CheckboxSelected;
exports.CheckboxUnSelect = CheckboxUnSelect;
exports.CloseOutline = CloseOutline;
exports.CloseSquare = CloseSquare;
exports.Copy = Copy;
exports.Edit = Edit;
exports.Empty = Empty;
exports.Error = Error;
exports.Expand = Expand;
exports.EyeOff = EyeOff;
exports.EyeOn = EyeOn;
exports.Favorite = Favorite;
exports.FavoriteOutline = FavoriteOutline;
exports.File = File;
exports.Image = Image;
exports.Info = Info;
exports.KeyboardArrowDown = KeyboardArrowDown;
exports.KeyboardArrowLeft = KeyboardArrowLeft;
exports.KeyboardArrowRight = KeyboardArrowRight;
exports.KeyboardArrowUp = KeyboardArrowUp;
exports.MoreHorizontal = MoreHorizontal;
exports.OutlineError = OutlineError;
exports.OutlineInfo = OutlineInfo;
exports.OutlineSuccess = OutlineSuccess;
exports.OutlineWarning = OutlineWarning;
exports.Person = Person;
exports.QuestionOutline = QuestionOutline;
exports.RadioChecked = RadioChecked;
exports.RadioUncheck = RadioUncheck;
exports.Search = Search;
exports.Shrink = Shrink;
exports.Success = Success;
exports.Warning = Warning;
exports.default = Icon;
