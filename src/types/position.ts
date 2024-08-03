export type position = {
    command: 'buy' | 'sell';
    price: number;
    quantity: number;
    takeProfit: number;
    stopLoss: number;
}
