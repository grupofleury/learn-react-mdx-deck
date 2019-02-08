fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
})
.then((response) => response.json())
.then((responseJson) => {
  return responseJson.data;
})
.catch((error) => {
  console.error(error);
});