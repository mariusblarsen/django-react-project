import React from 'react';
import TickerCard from './TickerCard';
import './cards.css'

interface ITicker {
    symbol: string;
    name: string;
    price?: number;
}

type Props = {
    tickers: Array<ITicker>;
}

export const TickerList: React.FunctionComponent<Props> = ({ tickers }: Props) => {
    return (
        <div className="card-grid">
            {tickers.map((ticker) =>
                <TickerCard ticker={ticker} key={ticker.symbol} />
            )}
        </div>
    );
}