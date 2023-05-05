const myQuery = { name: "jack", number: "1234", status: false };
const requestBaseUrl = "https://requestUrl.com/";

const query1 = queryBuilder(myQuery); // =>  '$name='jack'&number='1234'&status='false'
const query2 = queryBuilder(myQuery, true); // =>  '?name='jack'&number='1234'&status='false'

const myRequest1 = axios.get(`${baseUrl}?page=1${query1}`);
const myRequest2 = axios.get(`${baseUrl}${query2}`);
