const url = `https://jsonplaceholder.typicode.com/todos`;

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((dataObject) => {
    console.log(dataObject);
  });
