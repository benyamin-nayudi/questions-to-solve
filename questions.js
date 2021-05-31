/** 
// why in the fisrst code the for...of loop works but in the second one doesnt?\
((1))
function highlightWords(paragraph, colours) {
  const content = document.getElementById("content");
  const p = document.createElement("p");
  const menu = document.createElement("select");

  //iterate over colour array and make a drop down menu
  for (let color of colours) {
    menu.innerHTML += `<option value =${color} >${color}</option>`;
  }
  //appending the menu
  content.appendChild(menu);
  content.appendChild(p);

  //creating an array of words
  let words = paragraph.split(" ");

  //iterating over the array and wrap each word into a span tag
  for (word of words) {
    const span = document.createElement("span");
    span.innerText = `${word} `;
    p.appendChild(span);

    //adding an click evenListener for each span
    span.addEventListener("click", () => {
      span.style.backgroundColor = `${menu.value}`;
      //including the none option which remove the highlight
      if (menu.value === "none") {
        span.style.backgroundColor = "";
      }
    });
  }
}
const colours = ["yellow", "green", "blue", "none"];

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem ";

highlightWords(paragraph, colours);

((2))

// const content = document.getElementById('content')
// const p = document.createElement("p");


// const select = document.createElement('select')
// select.id = 'select'
// content.appendChild(select)
// const colours = ["yellow", "green", "blue"];


// function listOfColours(colours) {

//  
//   const value = document.querySelector("select").value;

//   p.innerHTML = `You have selected: ${value}`;
//   p.style.color = `${value}`;
//   content.appendChild(p);

//   //why this doesnt work!!
//   // for(let color of colours){
//   //     if(color===value){
//   //         document.body.style.backgroundColor = `${value}`;
//   //     }
// }


// select.addEventListener("change", listOfColours);
// // select.addEventListener("click", listOfColours);


// listOfColours(colours);




+++++++++++++++++++++++++++++++++
i dont understant how does this code work
it supposed to return any element of array1 which is a substring of array2

array1 = ["live", "arp", "strong"];
array2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1, array2) {
  return array1.filter((a1) => {
    array2.find((a2) =>  (a2.match(a1)) );
  });
}
console.log(inArray(array1, array2));


++++++++++++++++++++++++++++
i dont know how to solve this one ... :|
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object





+++++++++++++++++++++++++++++++++++++++++++++
چرا داخل تمرین ساخت وبسایت توی تیوی مز اونجا وقتی که یه فانکشن ساختم برای ساخت دیو کانتنت 
شروع به کار کرد ولی وقتی همینطوری تعریفش میکردم هیچ اتفاقی نمی افتاد؟؟

.then((searched) => {
      console.log(searched);

this one didnt work==============>>> 
      //making the content div
      // const content = document.createElement("div");
      // content.id = "content";
      // document.body.appendChild(content);
<<<====================

     but this one worked=>>>>> makeContent();

     
      for (let film of searched) {
        let title = film.name;
        let url = film.image.medium;
        let summary = film.summary;
        makeSearchedCard(url, title, summary);
      }
    });
*/