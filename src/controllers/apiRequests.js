import {
  balanceEndPoint,
  groupEndPoint,
  transactionsEndPoint,
} from './apiEndPoints';

const getToken = () => {
  const token = localStorage.getItem('token');
  return token ? token : undefined;
};
async function makeRequest(endPointUrl, postData = null, reqMethod = 'GET') {
  const body = reqMethod === 'GET' ? null : JSON.stringify(postData);
  try {
    const data = await fetch(endPointUrl, {
      method: reqMethod,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body,
    });
    return await data.json();
  } catch (error) {
    return error;
  }
}

async function makePost(endPointUrl, postData) {
  return await makeRequest(endPointUrl, postData, 'POST');
}

async function makeGet(endPointUrl, id) {
  return await makeRequest(`${endPointUrl}/${id}`, null, 'GET');
}

async function makeGetAll(endPointUrl) {
  return await makeRequest(endPointUrl, null, 'GET');
}
async function makePut(endPointUrl, postData) {
  return await makeRequest(endPointUrl, postData, 'PUT');
}
async function makeDelete(endPointUrl, postData) {
  return await makeRequest(endPointUrl, postData, 'DELETE');
}

const getTransactions = async (setState) => {
  const transactionsData = await makeGetAll(transactionsEndPoint);
  if (transactionsData.success === true) {
    setState(transactionsData.data);
  }
};
const getTransaction = async (transactionId, setState) => {
  const transactionsData = await makeGet(transactionsEndPoint, transactionId);
  if (transactionsData.success === true) {
    setState(transactionsData.data[0]);
  }
};
const modifyTransaction = async (transaction) => {
  return await makePut(transactionsEndPoint, transaction);
};
const deleteTransaction = async (transactionId) => {
  return await makeDelete(transactionsEndPoint, { transactionId });
};
const addTransaction = async (transaction) => {
  return await makePost(transactionsEndPoint, transaction);
};
const getGroups = async (setState) => {
  const groupData = await makeGetAll(groupEndPoint);
  if (groupData.success === true) {
    setState(groupData.data);
  }
};
const getGroup = async (groupId, setState) => {
  const groupData = await makeGet(groupEndPoint, groupId);
  if (groupData.success === true) {
    setState(groupData.data[0]);
  }
};
const deleteGroup = async (groupId) => {
  return await makeDelete(groupEndPoint, { groupId });
};
const addGroup = async (group) => {
  return await makePost(groupEndPoint, group);
};
const modifyGroup = async (group) => {
  return await makePut(groupEndPoint, group);
};
const getBalance = async (setState) => {
  const balanceData = await makeGetAll(balanceEndPoint);
  if (balanceData.success === true) {
    setState(balanceData.data[0]);
  }
};

export {
  getTransactions,
  getTransaction,
  modifyTransaction,
  deleteTransaction,
  addTransaction,
  getGroups,
  getGroup,
  deleteGroup,
  addGroup,
  modifyGroup,
  getBalance,
};
