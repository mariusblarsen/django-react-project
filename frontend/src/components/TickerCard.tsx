import React from 'react';
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
    //private frontEl = useRef<HTMLDivElement>(null)
    private frontEl = React.createRef<HTMLDivElement>()
    private backEl = React.createRef<HTMLDivElement>()
    //private backEl = useRef<HTMLDivElement>(null)

    setMaxHeight = () => {
        if (this.frontEl.current != null && this.backEl.current != null){
            const frontHeight = this.frontEl.current.getBoundingClientRect().height
            const backHeight = this.backEl.current.getBoundingClientRect().height
            this.setState({ height: Math.max(frontHeight, backHeight, 100) })
        }
    }

    componentDidMount = () => {
        this.setMaxHeight()
    }
    componentDidUpdate = () => {
        window.addEventListener('resize', this.setMaxHeight)
        return () => window.removeEventListener('resize', this.setMaxHeight)
    }

    render() {
        return (
            <div
                className={`card ${this.state.flip ? 'flip' : ''}`}
                style={{ height: this.state.height }}
                onClick={() => this.setState({ flip: !this.state.flip })}
            >
                <div className="front" ref={this.frontEl}>
                    {this.props.ticker.symbol}
                </div>
                <div className="back" ref={this.backEl}>
                    {this.props.ticker.name}
                </div>
            </div>
        );
    }
}