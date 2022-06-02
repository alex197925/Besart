//Defining HTML elements
const H1Tag = document.getElementsByTagName("h1");
const H2Tag = document.getElementsByTagName("h2");
const pTag = document.getElementsByTagName("p");
const image = document.getElementsByTagName("img");

//Changing HTML elements
H1Tag[1].innerHTML = "My favourite colour";
H2Tag[0].innerHTML = "As much as I love all colours, blue has to be my favourite one! Because, just like a wise man once said: I'm Blue Da ba dee da ba di";
H1Tag[2].innerHTML = "My spirit animal";
H2Tag[1].innerHTML = "The animal for me has got to be the bear. It's big, strong, savage, yet can sometimes look like a very big goofy dog. It's the best animal there is and I will fight anyone who disagrees.";
H1Tag[3].innerHTML = "My favourite sport";
H2Tag[2].innerHTML = "Boxing is the sport that I absolutely adore. Nothing gets my blood boiling like watching a fight of Mike Tyson. Some boxers like to get close and deal as much damage as possible, some are quick, rely on their footwork and wait for an opening to strike, while others put on pressure, wait for their enemies to make a mistake, and counter them into oblivion. Seeing who's style of boxing triumphs over the other one's is what this sport is all about!";
H1Tag[4].innerHTML = "My favourite fictional character";
H2Tag[3].innerHTML = "Speaking of boxing, my favourite character is Takamura Mamoru. He's a main character from the anime Hajime no Ippo. I love everything about his character, from his gross jokes to his iron determination, he's just the best character I've ever seen. Takamura Mamoru can do anything!";
H1Tag[5].innerHTML = "My favourite celebrity";
H2Tag[4].innerHTML = "Danny 'Big Daddy' Devito takes his well-earned spot as my favourite celebrity. He won over my heart with his amazing performance in It's Always Sunny in Philadelphia, and by being an amazing human being."
H1Tag[6].innerHTML = "Besart Elezi";
pTag[0].innerHTML = "Bolbi";
pTag[1].innerHTML = "Stroganovsky";
pTag[2].innerHTML = "Superfan";

//Changing my favourite colours
document.getElementById("red").style.backgroundColor = "blue";
document.getElementById("pink").style.backgroundColor = "lightblue";
document.getElementById("green").style.backgroundColor = "lightskyblue";
document.getElementById("yellow").style.backgroundColor = "cyan";

//Changing the images
image[0].src = "image/bear.jpg"
image[1].src = "image/boxing.gif"
image[2].src = "image/takamura.gif"
image[3].src = "image/dannydevito.jpg"

//changing CSS
//Changes all H1 tags, except for the first one, to the styling that I choose
//This is possible because of the for loop, this loop starts from index 1, so index 0 remains unchanged, and keeps rising by one until it reaches the max length of elements that use the H1 tag.
for (i = 1; i < H1Tag.length; i++) {
    const AllH1TagsCSS = H1Tag[i].style;
    AllH1TagsCSS.color = "white";
    AllH1TagsCSS.fontSize = "35px";
    AllH1TagsCSS.fontFamily = "sans-serif";
    AllH1TagsCSS.fontWeight = "bold";
    AllH1TagsCSS.textAlign = "center";
    AllH1TagsCSS.marginBottom = "20px";
    AllH1TagsCSS.padding = "15px";
}

for (i = 0; i < H2Tag.length; i++) {
    const AllH2TagsCSS = H2Tag[i].style;
    AllH2TagsCSS.color = "white";
    AllH2TagsCSS.fontSize = "22px";
    AllH2TagsCSS.fontFamily = "sans-serif";
    AllH2TagsCSS.textAlign = "center";
    AllH2TagsCSS.padding = "10px";
    AllH2TagsCSS.marginTop = "10px";
    AllH2TagsCSS.marginBottom = "25px";
}

for (i = 0; i < image.length; i++) {
    const AllImagesCSS = image[i].style;
    AllImagesCSS.width = "80%";
    AllImagesCSS.marginLeft = "auto";
    AllImagesCSS.marginRight = "auto";
    AllImagesCSS.display = "block"
}

for (i = 0; i < pTag.length; i++) {
    const AllPTagCSS = pTag[i].style;
    AllPTagCSS.textAlign = "center";
    AllPTagCSS.fontSize = "50px";
    AllPTagCSS.marginTop = "10px";
    AllPTagCSS.marginBottom = "10px";
    AllPTagCSS.color = "white";
}

//CSS changes to 3d p tag and body
pTag[2].style.marginBottom = "25px";
document.body.style.padding = "25px";
document.body.style.backgroundColor = "black";

//CSS changes The Challenge
const challengeTitle = document.getElementsByClassName("col-12 title")[0];
challengeTitle.style.color = "white";

//The Challenge
let chaser = document.getElementsByClassName("chaser")[0];
chaser.style.position = "absolute";
const Box = document.getElementsByClassName("col-12 box")[0];
Box.style.padding = "0";

const onMouseMove = (e) => {
    let mouseX = e.pageX - 22;
    let mouseY = e.pageY - 22;
    if (mouseX > 12 && mouseX < 1626) {
        chaser.style.left = mouseX + 'px';
    }
    if (mouseY > 6751 && mouseY < 7051) {
        chaser.style.top = mouseY + 'px';
    }
    console.log(e.pageX)
    console.log(e.pageY)
}
Box.addEventListener('mousemove', onMouseMove);

//Chaser changes color on click
chaser.addEventListener("click", random_bg_color)
    function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    chaser.style.background = "rgb(" + x + "," + y + "," + z + ")";
}


//Figure out way to undo all changes in JS, probably add a button, on click, changes between true and false
//if false, turn off function containing all my changes, if true, set all my changes

//Button needs to be outside of fucntion, appended to bottom of body for both websites
