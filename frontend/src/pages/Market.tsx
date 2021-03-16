import React from 'react';
import axios from 'axios';
import './pages.css';
import { TickerList } from '../components/TickerList';

interface ITicker {
    symbol: string;
    name: string;
    price?: number;
}

type State = {
    tickers: Array<ITicker>;
};

export default class Market extends React.Component<State> {
    state: State = {
        tickers: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:8000/api/tickers/`)
            .then((resp) => {
                const tickers = resp.data;
                this.setState({ tickers: tickers });
            });
    }
    render() {
        console.log(this.state.tickers);
        return (
            <div className="market">
                <div className="container">
                    <TickerList tickers={this.state.tickers} />
                </div>
            </div>
        );
    }
}
