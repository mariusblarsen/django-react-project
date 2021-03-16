import React, { useEffect, useRef } from 'react';
import './cards.css'

interface ITicker {
    symbol: string;
    name: string;
    price?: number;
}

interface cardState {
    flip: boolean;
    height: number;
}

export default class TickerCard extends React.Component<{ ticker: ITicker }, cardState> {
    state: cardState = {
        flip: true,
        height: 100,
    }
    private frontEl = React.createRef<number | null>();
    private backEl = React.createRef<number | null>();

    setMaxHeight() {
        const frontHeight = this.frontEl.current.getBoundingClientRect().height
        const backHeight = this.backEl.current.getBoundingClientRect().height
        this.setState({ height: Math.max(frontHeight, backHeight, 100) })
        /**
        this.setState((prevState) => {
            ...prevState,
            this.state.height: Math.max(frontHeight, backHeight, 100))
    } */
    }

    render() {
        return (
            <div
                className={`card ${this.state.flip ? 'flip' : ''}`}
                onClick={() => this.setState({ flip: !this.state.flip })}
            >
                <div className="front" ref={this.frontEl} type="number">
                    {this.props.ticker.symbol}
                </div>
                <div className="back" ref={this.backEl} type="number">
                    {this.props.ticker.name}
                </div>
            </div>
        );
    }
}