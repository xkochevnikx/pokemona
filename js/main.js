let list = document.querySelector("#list");
let modal = document.querySelector(".modal");
let main_modal = document.querySelector(".main_modal");
pok();
function pok() {
  let API = "https://pokeapi.co/api/v2/pokemon/";
  let pokemon = fetch(API);
  pokemon
    .then(response => response.json())
    .then(elem => {
      elem.results.forEach(element => {
        let pokInfo = fetch(element.url);
        pokInfo
          .then(response => response.json())
          .then(elem => {
            let li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.marginTop = "8px";
            li.style.cursor = "pointer";
            li.innerText = elem.name;
            list.append(li);
            li.addEventListener("click", function () {
              main_modal.style.display = "block";
              let img = document.createElement("img");
              img.setAttribute("src", elem.sprites.back_default);
              img.style.height = "250px";
              img.style.weight = "250px";
              modal.append(img);
              let info = document.createElement("div");
              info.innerText = ` name:  ${elem.name}
            type:  ${elem.types[0].type.name}
            height:  ${elem.height}
            weight:  ${elem.weight}`;
              info.style.textAlign = "center";
              modal.append(info);
              btnClose();
            });
          });
      });
    });
}
function btnClose() {
  let btncloseB = document.createElement("button");
  btncloseB.innerText = "close";
  btncloseB.style.marginTop = "30px";
  btncloseB.style.fontSize = "20px";
  btncloseB.style.borderRadius = "5px";
  modal.append(btncloseB);
  btncloseB.addEventListener("click", function () {
    main_modal.style.display = "none";
    list.innerHTML = "";
    modal.innerHTML = "";
    pok();
  });
}
