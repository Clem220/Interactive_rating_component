//création de la page
homePage();

//thanksPage();

// création de la function homePage()
function homePage() {
  // création de la div principale
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.classList.add("div");

  // création de la div logo
  let divStar = document.createElement("div");
  div.appendChild(divStar);
  divStar.classList.add("div__star");

  // création de l'image dans la div logo
  let starLogo = document.createElement("img");
  divStar.appendChild(starLogo);
  starLogo.src = "./images/icon-star.svg";
  starLogo.alt = "logo étoile";

  // création de la div description
  let divDescription = document.createElement("div");
  div.appendChild(divDescription);
  divDescription.classList.add("div__description");

  //creation du titre h1
  let h1 = document.createElement("h1");
  divDescription.appendChild(h1);
  h1.textContent = "How did we do ?";

  // création du paragraphe de description
  let p = document.createElement("p");
  divDescription.appendChild(p);
  p.textContent =
    "lease let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";

  // création contenant pour formulaire
  let divRank = document.createElement("form");
  divRank.classList.add("div__rank");
  divRank.name = "rating";
  div.appendChild(divRank);

  // création du contenant numbers
  let contentNumber = document.createElement("div");
  divRank.appendChild(contentNumber);
  contentNumber.classList.add("div__rank__content");

  // boucle pour création numbers
  for (i = 0; i < 5; i++) {
    let numbers = document.createElement("input");
    let x = i + 1;
    numbers.type = "radio";
    numbers.name = "number";
    numbers.value = x;
    numbers.id = "number" + x;
    contentNumber.appendChild(numbers);
    numbers.classList.add("div__rank__content__numbers");

    let numberLabel = document.createElement("label");
    contentNumber.appendChild(numberLabel);
    numberLabel.htmlFor = "number" + x;
    numberLabel.textContent = x;
    numberLabel.classList.add("div__rank__content__numbers");
  }

  // création boutton
  let button = document.createElement("input");
  divRank.appendChild(button);
  button.type = "button";
  button.value = "submit";
  button.classList.add("div__rank__button");
  button.id = "button";
}

function thanksPage(x) {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.classList.add("div");

  let logoDiv = document.createElement("div");
  div.appendChild(logoDiv);
  logoDiv.classList.add("div__logo");

  let thanksLogo = document.createElement("img");
  logoDiv.appendChild(thanksLogo);
  thanksLogo.src = "./images/illustration-thank-you.svg";
  thanksLogo.alt = "logo de remerciement";

  let divRating = document.createElement("div");
  div.appendChild(divRating);
  divRating.classList.add("div__rating");
  divRating.textContent = "You selected " + x + " out of 5 !";

  let divDescription = document.createElement("div");
  div.appendChild(divDescription);
  divDescription.classList.add("div__description");
  divDescription.classList.add("div__description-thanks");

  let h1 = document.createElement("h1");
  divDescription.appendChild(h1);
  h1.textContent = "Thank you !";

  let p = document.createElement("p");
  divDescription.appendChild(p);
  p.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch !";
}

//récupération formulaire

const button = document.querySelector("#button");
button.addEventListener("click", (e) => {
  let rate = document.querySelector('input[name="number"]:checked');
  console.log(rate.value);
  let x = rate.value;
  thanksPage(x);
});
