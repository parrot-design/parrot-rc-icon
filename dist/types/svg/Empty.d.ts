declare const Empty: {
    icon: {
        tag: string;
        attrs: {
            viewBox: string;
            focusable: string;
        };
        children: ({
            tag: string;
            attrs: {
                d: string;
                fill: string;
                fillOpacity?: undefined;
            };
        } | {
            tag: string;
            attrs: {
                d: string;
                fill: string;
                fillOpacity: string;
            };
        })[];
    };
};
export default Empty;
