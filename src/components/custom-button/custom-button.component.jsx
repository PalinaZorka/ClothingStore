import React from "react";

import './custom-botton.styles.scss';

const CustomBotton = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomBotton;