let E1 = [
  "201013223304041130232114313033004024000",
  "032041220001422242122220110003201341113",
  "310221044000200104040144142033022034241",
  "231313130031132120142231331441341441211",
  "014003212114130041110100241241004031001",
  "040331432341122101010040120412442442402",
  "13331220330103113111211210322314",
  "1310424224130304110203123204313"
];
let W1 = [
  "311013223304041130232114313033004024004",
  "032041220001422242122220110003201341101",
  "020201044000104044040144142033022034131",
  "111213130001102020142231331441341441401",
  "212223303244000243231110221231031022043",
  "403431401222111340210301413341221330132",
  "02414221422203024200123212402323201403",
  "3101322112130203222200422310313224113"
];
let E2 = [
  "121013223304041130232114313033004024004",
  "132041220001422242122220110003201341132",
  "302013230044210143001214140311024104223",
  "102441113222231403330130231010322441422",
  "014113030144102020311114241034232132112",
  "141120120040103022122402040000103221040",
  "001132210042231043242013103010200300221",
  "020142240312031330231000103310441201422",
  "034201043101100200124",
  "131402022020141322311"
];
let W2 = [
  "301014304231111130103200114211142042144",
  "132041002441200222141013240022220120402",
  "110120210044012022014100202130013243312",
  "401130112010322313431422313213031100003",
  "143110223024224201021223142200103111223",
  "203401230041222213132220230242140211440",
  "122201000012143101233312010224203221",
  "011010101321231103032030241320322030"
];

let E3 = [
  "221014304000100302220231222232144144211",
  "332041002222431341003242000010220042431",
  "313223312120134004141302310001231043130",
  "020020140002021212311100003112220110032",
  "140214222023042001214241211223104010034",
  "003021031300212210310000312332003240422",
  "001240241020232043043031224131312301142",
  "232311130211021020222341412113240321230",
  "001030124221224033003211024213133231001",
  "410210103300432031412111422330403400041",
  "04124012304",
  "0423010104"
];

let W3 = [
  "111014304044023101033232120113240032023",
  "432041002342120301441212222401420211130",
  "033031134224144111303003142234042131112",
  "431413200210141202112431230203111430021",
  "103133214200230011143034143033110122120",
  "101132211120442310131321231020311022200",
  "120120123130011024014133021023002220044",
  "210312220001440122003232142141332131220",
  "120224022234203033120244040200",
  "002121100141102242103402411442"
];

let E4 = [
  "101014304000100000010213233120142133003",
  "232041002222431212430430300110203421130",
  "101004223210034300144214224022200300022",
  "303411022313202403302030222441142010141",
  "143234300120242230110301302001040030130",
  "012332401341341302441301412412222303322",
  "212222143130302013102113102230003103232",
  "432331411032403200122103112431440120231",
  "12202423010131123221303",
  "3421210220100323034034"
];

let W4 = [
  "301014304000100000010213233120140040002",
  "232041002222431212430430300110222113142",
  "211310214001032122241124300100131223313",
  "030221230132301430413420300032332421140",
  "040210240103202210243021012103012033232",
  "402211103132412102142440311122021431141",
  "204233241203302023301041204241012232101",
  "311140311421232122410240132440030221440",
  "224314114042121114140130",
  "020231000031000102140011"
];
let E5 = [
  "111014304000100000010213233120143044133",
  "332041002222431212430430300110211112430",
  "101214223302024014144212222230212213233",
  "303411022401202041302002242420240341202",
  "014110114103111010240110204010013100130",
  "211211130110441211112403410122040041213",
  "102041041221134130133013243011042010221",
  "020203002240010120442311042111142031102",
  "131224220222041",
  "232442101331431"
];

// Your JavaScript array containing numbers and PNG representations
const imageArray = [
  "assets/0.png",
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png"
];

const messages = {
  "East 1": E1,
  "West 1": W1,
  "East 2": E2,
  "West 2": W2,
  "East 3": E3,
  "West 3": W3,
  "East 4": E4,
  "West 4": W4,
  "East 5": E5
};

function comparison(data1, data2) {
  for (let i = 0; i < data1.length; i++) {
    const imageContainer = document.getElementById("imageContainer");
    const container = document.createElement("div");
    if (i % 2 === 0) {
      container.className = "image-container";
    } else {
      container.className = "image-container2";
    }

    imageContainer.appendChild(container);

    for (let j = 0; j < data1[i].length; j++) {
      const img = document.createElement("img");
      img.src = imageArray[data1[i][j]];
      container.appendChild(img);
      if (
        typeof data2[i] !== "undefined" &&
        typeof data2[i][j] !== "undefined"
      ) {
        if (data1[i][j] != data2[i][j]) {
          img.style = "background-color:red;";
        } else {
          img.style = "background-color:lightgreen;";
        }
      }
    }
  }
}
function compareEyes(message1, message2) {
  data1 = messages[message1];
  data2 = messages[message2];

  var messageLine1 = [];
  for (let i = 0; i < data1.length; i++) {
    messageLine1 = messageLine1.concat(data1[i].split(""));
  }
  var messageLine2 = [];
  for (let i = 0; i < data2.length; i++) {
    messageLine2 = messageLine2.concat(data2[i].split(""));
  }
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";

  const longerMessage = document.createElement("div");
  longerMessage.className = "subheading";
  if (messageLine1.length > messageLine2.length) {
    longerMessage.innerHTML = `${message1} is longer than ${message2}`;
  }
  if (messageLine1.length == messageLine2.length) {
    longerMessage.innerHTML = `${message1} is equal to ${message2}`;
  } else {
    longerMessage.innerHTML = `${message2} is longer than ${message1}`;
  }

  imageContainer.appendChild(longerMessage);

  const heading = document.createElement("div");
  heading.className = "heading";
  heading.innerHTML = `${message1} vs ${message2}`;
  imageContainer.appendChild(heading);

  comparison(data1, data2);

  const heading2 = document.createElement("div");
  heading2.className = "heading";
  heading2.innerHTML = `${message2} vs ${message1}`;
  imageContainer.appendChild(heading2);
  comparison(data2, data1);
}

let comp1 = "East 1";
let comp2 = "West 1";

function init() {
  const dropdown1 = document.getElementById("dropdown1");

  // Add event listeners to each dropdown
  dropdown1.addEventListener("change", () => {
    console.log("Dropdown 1 changed to: ", dropdown1.value);
    comp1 = dropdown1.value;
    compareEyes(comp1, comp2);
  });

  const buttons = document.querySelectorAll(".selector");

  // Add event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      buttons.forEach((button) => {
        button.classList.remove("selected");
      });
      event.target.classList.add("selected");
      comp2 = button.textContent;
      compareEyes(comp1, comp2);
    });
    button.addEventListener("mouseenter", () => {
      compareEyes(comp1, button.textContent);
    });
    button.addEventListener("mouseleave", () => {
      compareEyes(comp1, comp2);
    });
  });

  compareEyes(comp1, comp2);
}

// Call the function to display images when the page loads
window.onload = init;
