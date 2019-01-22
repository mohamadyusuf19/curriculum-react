import React from 'react';
import './DetailCard.styles.scss';

export default function index(props) {
    return (
        <div className="container-detail">
            {props.children}
        </div>
    )
}