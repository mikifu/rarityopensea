var rarities;
var rewards;

// As with JSON, use the Fetch API & ES6
//fetch('https://raw.githubusercontent.com/mikifu/rarity/main/rarity.txt')
//  .then(response => response.text(/\r|,/))
//  .then(data => {
//  	// Do something with your data
//  	rarities = data;
//  	console.log(rarities);
//  	console.log(typeof rarities);
//  	console.log(typeof rewards);
//  });
//function fetchData() {
//    return fetch('https://raw.githubusercontent.com/mikifu/rarity/main/rarity.txt')
//            .then(response =>
//                response.text().then(text => text.split(/\r|\n/)));
//}
//
//
//fetchData().then(arr => {rarities = (arr[0].split(/\r|,/))});
//console.log(rarities)
//console.log(rewards)


async function fetchText() {
    let response = await fetch('https://raw.githubusercontent.com/mikifu/rarity/main/rarity.txt');
    let data = await response.text();
    data = data.split("\n");
    let rar = data[0].split(",")
    console.log(rar);
    rarities = rar;

    let rew = data[1].split(",")
    console.log(rew);
    rewards = rew;
}
fetchText();
// Will execute myCallback every 0.5 seconds
var intervalID = window.setInterval(myCallback, 500);



function myCallback() {
    var elements = document.getElementsByClassName("AssetCardFooter--name");

    for(var i = elements.length - 1; i >= 0; --i)
    {
        // PERFORM STUFF ON THE ELEMENT
        var inner = elements[i].innerHTML;
        if(inner.indexOf("C") !== -1) {
            let index = inner.slice(9);
            let rarity = rarities.indexOf(index);
            elements[i].innerHTML = rarity;
            elements[i].style.color = "#808080"

            var reward = rewards[rarity];
            var content = document.createTextNode(reward);
            elements[i].parentNode.appendChild(content);
            elements[i].parentNode.style.fontSize = "12px"
            elements[i].parentNode.style.fontWeight = "600"

            if (reward < 3)
                elements[i].parentNode.style.color = "#808080"
            else if (reward < 6)
                elements[i].parentNode.style.color = "#f2a5a5"
            else if (reward < 9)
                elements[i].parentNode.style.color = "#e74f4e"
            else if (reward < 12)
                elements[i].parentNode.style.color = "#bb1919"
            else
                elements[i].parentNode.style.color = "#640d0d"


            if (rarity < 100)
                elements[i].style.color = "#FF8000";
            else if (rarity < 500)
                elements[i].style.color = "#FF6FFF";
            else if (rarity < 1000)
                elements[i].style.color = "#1EFF00";
        }
        // elements[i] no longer exists past this point, in most browsers
    } 
}