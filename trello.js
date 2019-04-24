var pool =[]; // unnecessary?
var display = document.getElementById("#pool");
var laneID = 0;
var cardID = 0;

function addLane(){
    
    var laneName = document.getElementById("laneTitle").value;

    // laneID ++;
    // var id = "swimlane" + laneID;

    // var div = document.createElement("DIV"); 
    // div.setAttribute("id", id);   
    // div.setAttribute("class", "lane");
    // div.innerHTML=`<h5>${laneName}</h5>`;

    // document.querySelector("#pool").appendChild(div);
    // document.getElementById("laneTitle").value=""; //reset input

    // //create a "add card" button
    // var btn = document.createElement("INPUT");
    // btn.setAttribute("type", "button");
    // btn.setAttribute("value", "Add Card");
    // btn.setAttribute("id", "lane-" + laneID);
    // // btn.setAttribute("data-swimlane-id", laneID);

    // var swimlane = document.querySelector("#" + id);
    // swimlane.appendChild(btn);

    // btn.addEventListener("click", addCard);
    

    var list_name = document.getElementById(laneName);
    
    var list = document.createElement('div');
    list.setAttribute('class', 'list');
    list.innerHTML = `<div>${list_name}</div><div id="card-container-${laneID}"></div><a type="button" id="lane-${laneID}" onclick="addCard(${laneID})" class="button-link">Add another card</a>`;
    
    list_name = '';
    var list_container = document.querySelector("#pool");
    list_container.prepend(list);
}

//add a card to swimlane
function addCard(laneID) {
    cardID++;

    //get the swimlane id from the button that was clicked
    // let slid = this.dataset.laneId; 

    var txtTitle = prompt("Name your card:");
    var txtDescription = prompt("Description of your task:");

    //	add a name to the card
    //	add a description to the card

    var div = document.createElement("div");
    div.setAttribute("id", "card" + cardID); 
    div.setAttribute("class", "card");

    var title = document.createElement("P");
    title.innerHTML = txtTitle;

    var desc = document.createElement("P");
    desc.innerHTML = txtDescription;

    div.appendChild(title);
    div.appendChild(desc);

    console.log(laneID)

    let swimlane = document.querySelector("#card-container-" + laneID );
    swimlane.appendChild(div);
}