document.addEventListener("click", clickHandlers);

// store the link plus the API key in a variable
const key = "l9GbhK4Pk2Nm6NiLsThxLdiXYfhpCZkA";
const API = `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${key}`;

console.log(API);

function clickHandlers(event) {
  if (!event.target.matches("button")) return;
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
  var looped = "";
  for (let story of stories) {
    looped += `
        <div class="item">
          <h3>${story.title}</h3>
          <p>${story.abstract}</p>
        </div>
        `;
  }

  document.querySelector(".stories").innerHTML = looped;
}
