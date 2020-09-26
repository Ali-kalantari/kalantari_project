import React from 'react';

export const Br = (props) => {
    if (props.index === 3 || props.index === 6) {
        return <br />
    }
    else {
        return null
    }
}

export function HandleChange(e) {
    const { name, value } = e.target;
    if (value) {
        this.setState({
            [name]: value
        });
    }
}