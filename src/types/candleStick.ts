
export type candleStick = {
    info: candleInfo;
    meta: candleStickMetadata
};

export type candleStickMetadata = {
    volume: number;
    trades: number;
    openTime: number;
    closeTime: number;
}

export type candleInfo = {
    open: number;
    close: number
    high: number;
    low: number;
}

export type candleStickArray = candleStick[];