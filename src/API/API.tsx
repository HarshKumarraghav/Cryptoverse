/**
 * The function returns the API endpoint for retrieving information about the top 100 cryptocurrencies
 * in a specific currency.
 * @param {string} currency - The `currency` parameter is a string that represents the currency in
 * which you want to view the cryptocurrency market. It is used to specify the vs_currency parameter in
 * the API request URL.
 */
export const CryprtoApi = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1&sparkline=false`;

/**
 * The `CryptoByIdApi` function returns the API endpoint for retrieving information about a
 * cryptocurrency by its ID.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * cryptocurrency. It is used to specify which cryptocurrency's information you want to retrieve from
 * the API.
 */
export const CryptoByIdApi = (id: string | undefined) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;
/**
 * The TrendingCryptoApi function returns the API endpoint for fetching trending cryptocurrencies based
 * on the specified currency.
 * @param {string} currency - The currency parameter is used to specify the currency in which the
 * cryptocurrency prices will be displayed. It can be any valid currency code, such as "usd", "eur",
 * "gbp", etc.
 */
export const TopCryptosApi = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
/**
 * The function `ChartDataApi` returns a URL string for fetching market chart data for a specific
 * cryptocurrency.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * cryptocurrency. It is used to specify which cryptocurrency's market chart data you want to retrieve.
 * @param [days=365] - The "days" parameter specifies the number of days of historical data you want to
 * retrieve for the given cryptocurrency. By default, it is set to 365 days, but you can change it to
 * any desired value.
 * @param {string} currency - The currency parameter is used to specify the currency in which the
 * market data should be returned. It can be any valid currency code, such as "usd" for US dollars,
 * "eur" for euros, "gbp" for British pounds, etc.
 */
export const ChartDataApi = (
  id: string | undefined,
  days = 365,
  currency: string
) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TopNewsApi = () =>
  `${
    import.meta.env.VITE_NEWS_API_URL
  }/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=9`;
export const NewsApi = () =>
  `${
    import.meta.env.VITE_NEWS_API_URL
  }/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=1000`;
