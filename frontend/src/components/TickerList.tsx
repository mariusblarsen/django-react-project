import React from 'react';
import TickerCard from './TickerCard';

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
        <ul>
            {tickers.map((ticker) =>
                <div key={ticker.symbol}>
                    <TickerCard ticker={ticker} />
                </div>
            )}
        </ul>
    );
}