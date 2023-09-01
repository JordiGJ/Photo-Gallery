// get elements
const btn = document.querySelector("button");
const userChoice = document.querySelector("input");
const container = document.querySelector(".pic-container");
const id = "use your unsplash key here";

// functions
async function getPics(amount) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=${amount}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=${id}`
    );
    const data = await response.json();
    return await data;
  } catch (err) {
    console.error(err);
  }
}

async function handleClick() {
  container.innerHTML = "";
  const userAmount = userChoice.value;
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=${userAmount}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=${id}`
    );
    const data = await response.json();
    data.forEach((pic) => {
      const picUrl = pic.urls.regular;
      const picAlt = pic.alt_description;
      const newPic = document.createElement("img");
      newPic.src = picUrl;
      newPic.alt = picAlt;
      container.append(newPic);
    });
  } catch (err) {
    console.error(err);
  }
}

// event listener
btn.addEventListener("click", handleClick);
