function getData() {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
        document.getElementById('dataContainer').innerText = JSON.stringify(data);
      })
    .catch(error => {
        console.error(error);
    });
}