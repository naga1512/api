const API_URL = "https://jsonplaceholder.typicode.com/comments";

fetch(API_URL)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let tableData = "";
    console.log(objectData);
    objectData.map((data) => {
      tableData += `          <tr>
            <td>${data.postId}</td>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.body}</td>
          </tr>`;
    });
    document.getElementById("tbody").innerHTML = tableData;
  });