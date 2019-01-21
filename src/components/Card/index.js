import React from 'react';
import './Card.styles.scss';

export default function index(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}