const navbar = ["Travel updates", "Reviews", "About", "Contact"];

let body = document.getElementById("body");
let container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

//------navbar
let nav = document.createElement("nav");
nav.setAttribute("class", "nav");
container.appendChild(nav);
let ul = document.createElement("ul");
ul.setAttribute("class", "nav__container");
nav.appendChild(ul);
//----dinamic navbar
function createNavbar(navbar) {
  for (let i = 0; i < navbar.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "nav__item");
    ul.appendChild(li);
    let a = document.createElement("a");
    a.setAttribute("class", "nav__link");
    a.setAttribute("href", "/");
    a.textContent = navbar[i];
    li.appendChild(a);
  }
}
//createNavbar(navbar);

//----add article button
let addContainer = document.createElement("div");
addContainer.setAttribute("class", "add__container");
container.appendChild(addContainer);

function createAddArticleButton() {
  let modalButton = document.createElement("button");
  modalButton.setAttribute("class", "button show__modal");
  modalButton.setAttribute("type", "button");
  modalButton.setAttribute("onclick", "showModal()");
  modalButton.textContent = "+ Add Article";
  addContainer.appendChild(modalButton);
}
//createAddArticleButton();

let main = document.createElement("main");
main.setAttribute("class", "main");
main.setAttribute("id", "main");
container.appendChild(main);

//----create article function
function createArticle(article) {
  for (let i = 0; i < article.length; i++) {
    let domArticle = document.createElement("article");
    domArticle.setAttribute("id", `article${article[i].id}`);
    domArticle.setAttribute("href", `#article${i}`);
    main.appendChild(domArticle);
    let domTitle = document.createElement("h2");
    domTitle.setAttribute("class", "title");
    domTitle.textContent = article[i].title;
    domArticle.appendChild(domTitle);
    let articleUl = document.createElement("ul");
    articleUl.setAttribute("class", "info__container");
    domArticle.appendChild(articleUl);
    let liSubtitle = document.createElement("li");
    liSubtitle.setAttribute("class", "info__item");
    liSubtitle.textContent = article[i].subtitle;
    articleUl.appendChild(liSubtitle);

    let liSubtitle2 = document.createElement("li");
    liSubtitle2.setAttribute("class", "info__item");
    liSubtitle2.textContent = "Added by";
    articleUl.appendChild(liSubtitle2);

    let spanLi = document.createElement("span");
    spanLi.setAttribute("class", "info__mark");
    spanLi.textContent = article[i].author;
    liSubtitle2.appendChild(spanLi);

    let liSubtitle3 = document.createElement("li");
    liSubtitle3.setAttribute("class", "info__item");
    liSubtitle3.textContent = article[i].date;
    articleUl.appendChild(liSubtitle3);

    let divArticleButton = document.createElement("div");
    divArticleButton.setAttribute("class", "actions__container");
    domArticle.appendChild(divArticleButton);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "actions__btn edit");
    editButton.setAttribute("type", "button");
    editButton.textContent = "Edit";
    divArticleButton.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "actions__btn");
    deleteButton.setAttribute("type", "button");
    deleteButton.addEventListener("click", () => {
      // document.getElementById(`article n${article[i].id}`).style.display =
      "none";
      deleteArticle(article[i].id);
    });
    deleteButton.textContent = "Delete";
    divArticleButton.appendChild(deleteButton);

    let imgArticle = document.createElement("img");
    imgArticle.setAttribute("src", article[i].img);
    imgArticle.setAttribute("alt", article[i].imgAlt);
    domArticle.appendChild(imgArticle);

    let divArticleContent = document.createElement("div");
    divArticleContent.setAttribute("class", "content__container");
    domArticle.appendChild(divArticleContent);

    let content1 = document.createElement("p");
    content1.setAttribute("class", "change__color");
    content1.textContent = article[i].content1;
    divArticleContent.appendChild(content1);

    let content2 = document.createElement("p");
    content2.setAttribute("class", "change__color");
    content2.textContent = article[i].content1;
    divArticleContent.appendChild(content2);

    let divArticleReadmore = document.createElement("div");
    divArticleReadmore.setAttribute("class", "readmore__container");
    domArticle.appendChild(divArticleReadmore);

    let buttonReadMore = document.createElement("button");
    buttonReadMore.setAttribute("class", "button ");
    buttonReadMore.setAttribute("id", `${i}`);
    buttonReadMore.setAttribute("type", "button");
    buttonReadMore.textContent = "Read More";
    divArticleReadmore.appendChild(buttonReadMore);

    //----modal Read more

    function createModalReadmore() {
      let modalReadMore = document.createElement("p");
      modalReadMore.setAttribute("class", `read__more`);

      modalReadMore.setAttribute("id", `id${i}`);
      modalReadMore.textContent = article[i].readMore1;
      divArticleReadmore.appendChild(modalReadMore);
      modalReadMore.style.setProperty("display", "none");

      let modalReadMore2 = document.createElement("p");
      modalReadMore2.setAttribute("class", `readmore__text`);

      modalReadMore2.setAttribute("id", `id2${i}`);

      modalReadMore2.textContent = article[i].readMore2;
      divArticleReadmore.appendChild(modalReadMore2);
      modalReadMore2.style.setProperty("display", "none");
    }
    createModalReadmore();
  }
}
//

//-----delete article

function deleteArticle(id) {
  fetch("http://localhost:3001/article/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      //  const b = "for second review";
      console.log("delete succes", data);
      // cleanup();
      fetchData();
    })
    .catch((err) => {
      console.log(err);
    });
}

//---- save article

//---------footer
let footer = document.createElement("footer");
footer.setAttribute("class", "footer");
container.appendChild(footer);
let previousButton = document.createElement("button");
previousButton.setAttribute("class", "footer__link");
previousButton.setAttribute("type", "button");
previousButton.textContent = "previous";
footer.appendChild(previousButton);

let nextButton = document.createElement("button");
nextButton.setAttribute("class", "footer__link footer__link--next");
nextButton.setAttribute("type", "button");
nextButton.textContent = "next";
footer.appendChild(nextButton);

//----- create modal

function createModal() {
  let inputs = ["title", "tag", "author", "date", "image-url", "saying"];

  let modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal__overlay");
  body.appendChild(modalContainer);

  let modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modalContainer.appendChild(modal);

  let modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal__content");
  modal.appendChild(modalContent);

  let h2 = document.createElement("h2");
  h2.setAttribute("class", "titleB");
  h2.textContent = "Add/Edit article";
  modalContent.appendChild(h2);

  let inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "inputs__container");
  modalContent.appendChild(inputContainer);

  for (let i = 0; i < inputs.length; i++) {
    let input = document.createElement("input");
    input.setAttribute("class", "input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", `Please enter ${inputs[i]}`);
    input.setAttribute("id", `modal-inputs${i}`);
    inputContainer.appendChild(input);
  }

  let textarea = document.createElement("textarea");
  textarea.setAttribute("class", "textarea");
  textarea.setAttribute("name", "content");
  textarea.setAttribute("cols", "28");
  textarea.setAttribute("rows", "c7");
  textarea.setAttribute("placeholder", "Please enter content");
  modalContent.appendChild(textarea);

  let modalButtons = document.createElement("div");
  modalButtons.setAttribute("class", "modal__buttons");
  modalContent.appendChild(modalButtons);

  let modalButtonHide = document.createElement("button");
  modalButtonHide.setAttribute("class", "button close__modal");
  modalButtonHide.setAttribute("type", "button");
  modalButtonHide.setAttribute("onclick", "hideModal()");
  modalButtonHide.textContent = "Cancel";
  modalButtons.appendChild(modalButtonHide);

  let modalButtonSave = document.createElement("button");
  modalButtonSave.setAttribute("class", "button button--pink");
  modalButtonSave.setAttribute("type", "button");
  modalButtonSave.textContent = "Save";
  modalButtons.appendChild(modalButtonSave);
}
//createModal();

//--------show modal
function showModal() {
  document.querySelector(".modal__overlay").style.display = "block";
  document.querySelector(".show__modal").style.display = "none";
  let saveBtn = document.getElementsByClassName("button--pink")[0];
  console.log(saveBtn);
  saveBtn.addEventListener("click", () => {
    saveArticle();
  });
  //--save article
  function saveArticle() {
    let title = document.getElementById("modal-inputs0").value;
    let tag = document.getElementById("modal-inputs1").value;
    let author = document.getElementById("modal-inputs2").value;
    let date = document.getElementById("modal-inputs3").value;
    let imgUrl = document.getElementById("modal-inputs4").value;
    let saying = document.getElementById("modal-inputs5").value;
    let contentInput = document.getElementsByClassName("textarea")[0].value;

    fetch(`http://localhost:3001/article`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        subtitle: tag,
        author: author,
        date: date,
        img: imgUrl,
        imgAlt: imgUrl,
        content1: contentInput,
        content2: "",
        readMore1: saying,
        readMore2: "",
      }),
    })
      .then(function (data) {
        console.log("Request succes", data);

        hideModal();
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }
}

function hideModal() {
  document.querySelector(".modal__overlay").style.display = "none";
  document.querySelector(".show__modal").style.display = "block";
}

//-----create
function createTheme() {
  let div = document.createElement("div");
  div.setAttribute("class", "theme");
  body.appendChild(div);
  let darkIcon = document.createElement("i");
  darkIcon.setAttribute("class", "fas fa-toggle-on fa-2x");
  darkIcon.setAttribute("id", "toggle__on");
  darkIcon.setAttribute("onclick", "switchTheme()");
  div.appendChild(darkIcon);
  let whiteIcon = document.createElement("i");
  whiteIcon.setAttribute("class", "fas fa-toggle-off fa-2x");
  whiteIcon.setAttribute("id", "toggle__off");
  whiteIcon.setAttribute("onclick", "switchTheme()");
  whiteIcon.setAttribute("style", "display: none");
  div.appendChild(whiteIcon);
}

function cleanup(parent) {
  parent.querySelectorAll("*").forEach((n) => n.remove());
}

document.getElementById("toggle__off").style.display = "none";
let b = localStorage.getItem("theme");

function switchTheme() {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    document.getElementById("toggle__off").style.display = "none";
    document.getElementById("toggle__on").style.display = "block";

    function transformTextBlack(text) {
      let a = Array.prototype.slice.call(document.querySelectorAll(text));

      a.forEach((element) => {
        // element.classList.remove()
        element.classList.remove("white__nav");
      });
    }
    transformTextBlack(".nav__link");
    transformTextBlack(".show__modal");
    transformTextBlack(".title");
    transformTextBlack(".info__mark");
    transformTextBlack(".actions__btn");
    transformTextBlack(".content__container");
    transformTextBlack(".change__color");
    transformTextBlack(".button");
    transformTextBlack(".read__more");
    transformTextBlack(".readmore__text");
    transformTextBlack(".footer__link");
    transformTextBlack(".footer__link--next");
    localStorage.setItem("theme", "light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    document.getElementById("toggle__off").style.display = "block";
    document.getElementById("toggle__on").style.display = "none";

    function transformTextWhite(text) {
      let a = Array.prototype.slice.call(document.querySelectorAll(text));

      a.forEach((element) => {
        // element.classList.remove()
        element.classList.add("white__nav");
      });
    }
    transformTextWhite(".nav__link");
    transformTextWhite(".show__modal");
    transformTextWhite(".title");
    transformTextWhite(".info__mark");
    transformTextWhite(".actions__btn");
    transformTextWhite(".content__container");
    transformTextWhite(".change__color");
    transformTextWhite(".button");
    transformTextWhite(".read__more");
    transformTextWhite(".readmore__text");
    transformTextWhite(".footer__link");
    transformTextWhite(".footer__link--next");
    localStorage.setItem("theme", "dark-theme");
  }
}
body.classList.add(localStorage.getItem("theme"));

//---- show read more text

function showReadMoreText() {
  let articlesLength = document.getElementsByTagName("article");

  for (let i = 0; i < articlesLength.length; i++) {
    let buttonRead = document.getElementById(`${i}`);
    if (buttonRead) {
      buttonRead.addEventListener("click", () => {
        buttonRead.style.display = "none";
        document.getElementById(`id${i}`).style.display = "block";
        document.getElementById(`id2${i}`).style.display = "block";
      });
    }
  }
}
showReadMoreText();

// ------ routes
let myId = null;
function fetchData() {
  fetch("http://localhost:3001/article")
    .then((res) => res.json())
    .then((article) => {
      let containerArticle = document.getElementById("main");
      cleanup(containerArticle);
      createNavbar(navbar);
      createAddArticleButton();
      createArticle(article);
      showReadMoreText();
      createModal();
    });
}
class IndexView {
  constructor() {
    window.addEventListener("hashchange", (e) => this.onRouteChange(e));
    this.slot = document.querySelector(`.container`);
  }

  onRouteChange(e) {
    const hashLocation = window.location.hash.substring(1);
    this.loadContent(hashLocation);
  }

  loadContent(uri) {
    const contentUri = `${uri}`;
    let containerArticle = document.getElementById("main");
    let nextBtn = document.getElementsByClassName("footer__link--next")[0];
    let previousBtn = document.getElementsByClassName("footer__link")[0];
    let articlesLength = null;

    if (containerArticle) {
      cleanup(containerArticle);
    }

    if (contentUri === "index.html") {
      fetch("http://localhost:3001/article")
        .then((res) => res.json())
        .then((articles) => {
          cleanup(containerArticle);
          //console.log(articles);
          localStorage.setItem("articlesLength", articles.length);
          createNavbar(navbar);
          createAddArticleButton();
          createArticle(articles);
          showReadMoreText();
          createModal();
        });
      nextBtn.addEventListener("click", () => {
        window.location.href = `/#article${0}`;
      });
      previousBtn.style.display = "none";
    } else if (contentUri.startsWith("article")) {
      myId = uri.slice(7);

      fetch(`http://localhost:3001/article/${myId}`)
        .then((res) => res.json())
        .then((article) => {
          console.log(myId);
          let articlesLength = localStorage.getItem("articlesLength");

          let articleToRender = [];
          articleToRender.push(article);
          cleanup(containerArticle);
          createArticle(articleToRender);
          showReadMoreText();
          document.getElementsByClassName(
            "actions__container"
          )[0].style.display = "none";

          previousBtn.style.display = "block";
          previousBtn.addEventListener("click", () => {
            if (myId < 1) {
              window.location.href = `#index.html`;
            } else {
              window.location.href = `/#article${myId - 1}`;
            }
          });

          if (myId < articlesLength - 1) {
            nextBtn.style.display = "block";
          } else {
            nextBtn.style.display = "none";
          }

          nextBtn.addEventListener("click", () => {
            if (myId > 3) {
              cleanup(containerArticle);
            } else {
              cleanup(containerArticle);
              nextBtn.style.display = "block";
              window.location.href = `/#article${parseInt(myId) + 1}`;
            }
          });
        });
    }
    // console.log(elementToRemove);
  }
}
new IndexView();
