import React from 'react';


interface ITicker {
    symbol: string;
    name: string;
    price?: number;
}

export default class TickerCard extends React.Component<{ ticker: ITicker }> {
    render() {
        return (
            <li>{this.props.ticker.symbol}</li>
        );
    }
}