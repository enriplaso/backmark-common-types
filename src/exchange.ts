
/**
 * Represents an account on the exchange.
 */
export type Account = {
    /**
     * Unique identifier for the account.
     */
    id: string;

    /**
     * The total balance available in the account in USD.
     */
    balance: number;

    /**
     * The amount of the balance that can be withdrawn or used for trades.
     */
    available: number;

    /**
     * The currency of the account balance (e.g., "USD").
     */
    currency: string;

    /**
     * The quantity of the traded product (e.g., Bitcoin) held in the account.
     */
    productQuantity: number;

    /**
     * The exchange fee as a percentage for each trade.
     */
    fee: number;
};

/**
 * Represents the trading data for a specific point in time.
 */
export type TradingData = {
    /**
     * The timestamp of the trading data in milliseconds since the UNIX epoch.
     */
    timestamp: number;

    /**
     * The price of the traded product at the specified timestamp.
     */
    price: number;

    /**
     * The volume of the traded product (e.g., the number of BTC traded).
     */
    volume: number;
};
