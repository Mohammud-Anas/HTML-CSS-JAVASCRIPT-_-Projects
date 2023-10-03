let container = document.getElementById("container");

let apiKey = "6ea4900c220847a8bbfb29411dbaa863";
let general = "general";

async function fetchApi(value) {
  let resp = await fetch(
    `https://newsapi.org/v2/everything?q=${value}&apiKey=${apiKey}`
  );

  let data = await resp.json();
  let articles = data.articles;
  articles.forEach((articles) => {
    if (!articles.urlToImage) return;
    let date = new Date(articles.publishedAt).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    });
    let template = `<a href=${articles.url} target="_blank" ><div class="card" id ="card">
        <div class="img">
          <img src="${articles.urlToImage}" alt="" />
        </div>
        <div class="card-content">
          <h3>${articles.title}</h3>
          <h6> ${articles.author}  ${date}</h6>
          <p class="news-desc">${articles.description} 
          </p>
        </div>
      </div></a>`;
    container.insertAdjacentHTML("beforeend", template);
  });
   
    container.addEventListener("click", (e) => { 
        console.log(e.target.parentNode.articles);
    
  });
}
window.addEventListener("load", fetchApi(general));

function searchNews() {
 let input = document.getElementById("input");
 if(input.value=="") fetchApi(general);
  container.innerHTML = "";
  fetchApi(input.value);
}
let lastVisited= null;
function searchKey(id){
    container.innerHTML = "";
    fetchApi(id);
    let navItem =document.getElementById(id);
    lastVisited?.classList.remove("active");
    lastVisited = navItem;
    lastVisited.classList.add("active");
}