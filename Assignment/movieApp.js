let googlenews = document.querySelector(".googlenews");
let businessNews = document.querySelector(".businessNews");
let entertainment = document.querySelector(".entertainment");
let science = document.querySelector(".science");
let sports = document.querySelector(".sports");
let popUpbody = document.querySelector(".popUpbody");
let crossbtn = document.querySelector(".crossbtn");

let fetchMovie = async (url, container) =>{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    data.articles
    .filter((ele)=> ele.urlToImage != null)
    .forEach((ele, i, arr) => {
      displayNews(ele, container);
     /* displaycard(e) */
    });

};
fetchMovie("https://newsapi.org/v2/everything?q=apple&from=2024-08-07&to=2024-08-08&sortBy=popularity&apiKey=d76a0541a9c04e61b819fbc0c962ead7",
googlenews
);

fetchMovie("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d76a0541a9c04e61b819fbc0c962ead7",
  businessNews
);

fetchMovie("https://newsapi.org/v2/everything?q=tesla&from=2024-07-09&sortBy=publishedAt&apiKey=d76a0541a9c04e61b819fbc0c962ead7",
  entertainment
)
fetchMovie("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d76a0541a9c04e61b819fbc0c962ead7",
  science
);
fetchMovie("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d76a0541a9c04e61b819fbc0c962ead7",
  sports
)

let displaycard =(e)=>{
     let cards=document.createElement("div")
      cards.setAttribute("class","box")
      cards.innerHTML= `<h2>${e.title}</h2>
                    <p>${e.actors}</p>
                    <P>Rating: ${e.rating}</P>`
                    section.append(cards);
};


let displayNews = (data, container) =>{
  let cards = document.createElement("div");
  cards.setAttribute("class","box")
  cards.innerHTML = `<img src="${data.urlToImage}" alt="" class="cardImg">
                       <p>${data.title}</p>
                       <p>${data.author}</p>
                       <p>${data.publishedAt}</p>` 
  cards.addEventListener("click",(e)=>{
    popUpbody.style.visibility = "visible";
  });
  container.append(cards);
};

let displayPopUpData=()=>{

};

crossbtn.addEventListener("click",()=>{
  popUpbody.style.visibility = "hidden";
});

























