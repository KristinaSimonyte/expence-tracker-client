const baseURL = process.env.REACT_APP_BASE_URL;

const transactionsEndPoint = `${baseURL}/transactions`;
const groupEndPoint = `${baseURL}/groups`;
const balanceEndPoint = `${baseURL}/balance`;

export { transactionsEndPoint, groupEndPoint, balanceEndPoint };
