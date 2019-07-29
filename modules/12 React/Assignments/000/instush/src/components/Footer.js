import React from 'react';

export function Footer({ symbol, data: text, year }) {
    return (
        <div>{symbol} { text } {year}</div>
    )
}