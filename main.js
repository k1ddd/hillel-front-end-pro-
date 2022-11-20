const apiKey = "6d29bbab";

document.getElementById("form-submit").addEventListener("submit", getIp);
let page = 1;
let searchWord = document.getElementById("searchWord");
function getIp(e) {
  e.preventDefault();
  let iVal = searchWord.value;
  search(iVal, page);
}

function search(ip, page) {
  let url = `https://www.omdbapi.com/?s=${ip}&page=${page}&apikey=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let Res = "";
      let output = "";
      data.Search.forEach((result) => {
        let poster = result.Poster ? result.Poster : "";
        output += `<div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="${poster}" alt="Poster">
          <div class="card-body">
            <h6 class="card-title">${result.Title} ${result.Year}</h6>
            <a class="btn btn-primary" onclick="showMore()">Show more</a>
          </div>
        </div>
         </div>`;
        Res += `<h6 class="card-title">${result.Title} ${result.Type}</h6>`;
        document.getElementById("results").innerHTML = Res;
      });

      output += `
  <div class="container mt-5">
    <div class="row">
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" id="previous"><a class="page-link" onclick="previous()">Previous</a></li>
    <li class="page-item" id="next"><a class="page-link" onclick="next()">Next</a></li>
  </ul>
  </nav>
  </div>
  </div>
      `;
      document.getElementById("results").innerHTML = output;
    });
}

function next() {
  document.getElementById("results").innerHTML = "";
  let iVal = searchWord.value;
  page++;
  search(iVal, page);
}

function previous() {
  let iVal = searchWord.value;
  if (page != 1) {
    document.getElementById("results").innerHTML = "";
    page--;
    search(iVal, page);
  } else {
    page = 1;
  }
}
