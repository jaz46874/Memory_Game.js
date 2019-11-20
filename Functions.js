lock = false;    
function getArray() {
    return (arrayOfCards = [
    card1 = {
    front: 'ajax_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 1,
    },

    card2 = {
    front: 'ajax_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 2,
    },

    card3 = {
    front: 'angularJS_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 3,
    },

    card4 = {
    front: 'angularJS_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 4,
    },

    card5 = {
    front: 'bootstrap_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 5,
    },


    card6 = {
    front: 'bootstrap_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 6,
    },

    card7 = {
    front: 'css_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 7,
    },

    card8 = {
    front: 'css_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 8,
    },

    card9 = {
    front: 'html_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 9,
    },

    card10 = {
    front: 'html_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 10,
    },

    card11 = {
    front: 'itil_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 11,
    },

    card12 = {
    front: 'itil_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 12,
    },

    card13 = {
    front: 'JavaScript_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 13,
    },

    card14 = {
    front: 'JavaScript_logo.png',   
    back: 'ilovecode_logo.jpg', 
    id: 14,
    },

    card15 = {
    front: 'json_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 15,
    },


    card16 = {
    front: 'json_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 16,
    },

    card17 = {
    front: 'revature_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 17,
    },

    card18 = {
    front: 'revature_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 18,
    },

    card19 = {
    front: 'servicenow_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 19,
    },

    card20 = {
    front: 'servicenow_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 20,
    }
] )
}

function setDimensions(x, y) {
    
    
    // sets the table dimensions
    // x & y are the dimensions of the table

    var mytable = document.getElementsByTagName("table")[0];
    mytable.innerHTML = ""
    console.log(mytable);
    iterator = 1;
    for (var i=0; i < x; i++) {
        
        
        var temp = mytable.insertRow(i);
        for(var j=0; j < y; j++) {
            c = temp.insertCell(j);
            c.innerHTML = iterator; 
            c.setAttribute("id", "cell" + iterator);
            iterator++;     
    }
    
    }
    //console.log(i*j);
    console.log("your cards have been set");
    console.log(iterator);
    runme(iterator,getArray());
    showFace();
}

function assignCards(card, cellid) {
    var elem = document.createElement("img");
    console.log(card + " " + cellid)
    elem.setAttribute("src", "photos/"+card.back);
    elem.setAttribute("fsrc", "photos/"+card.front);
    elem.setAttribute("id", "card"+card.id);
    elem.setAttribute("isup", "false");
    //elem.setAttribute("isMatch", "false");
    var temp = document.getElementById(cellid);
    temp.innerHTML = "";
    temp.appendChild(elem);
    //document.getElementById(cellid).appendChild(elem);
   // mytable.appendChild(myTextNode);

}

function runme(iterator,arrayOfCards){
    //console.log(arrayOfCards);
    loc = iterator - 1;
    tot = 20-loc
    arrayOfCards.splice(loc, tot);
    shuff = shuffleArray(arrayOfCards); 
    console.log(shuff);
    for (b = 0; b < loc; b++) { 
        assignCards(shuff[b], "cell"+(b+1));
    }
} 

//function turnOver() {
// 1 event listener for click, 
//document.getElementById("cell").addEventListener('click', flipOver());
//} 
//function flipOver() {
//    document.getElementById("cell").setAttribute("src", "photos/"+cell.front);
 ///   document.getElementById("cell").setAttribute("isup", "true");
//}
// 2 when clicked, change src id,
// 3 set new attribute for the img

//var arrayOfCards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20"];


function shuffleArray(a2s) {
    
    var m = a2s.length, t, i;
    console.log(m);
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = a2s[m];
      a2s[m] = a2s[i];
      a2s[i] = t;
    }
  
    return a2s;
  }



    
function turnMe() {
    //console.log(this);
    //this.setAttribute("src", this.getAttribute("fsrc"));
    isClicked(this);
 
}
function showFace(){
    len = document.getElementsByTagName("td").length;
    for (num = 1; num< len+1;num++){
        document.getElementById("card"+num).onclick = turnMe;
    }
}

clicked = "";
id = "";
currentScore = 0;

function isClicked(aCard) {
    winScore = ((iterator-1)/2);
    el = document.getElementById(aCard.getAttribute("id"));
    if (clicked == "" & aCard.getAttribute("isup") == "false") {
        clicked = aCard.getAttribute("fsrc");
        el.setAttribute("src", aCard.getAttribute("fsrc"));
        el.setAttribute("isup", "true");
        id = aCard.getAttribute("id");
        console.log(id + "first card");
        //console.log(clicked);
        return; 
    }     
    console.log(aCard);
    if (clicked != "" & aCard.getAttribute("isup") == "false") {
        aCard.setAttribute("isup", "true");
        if (aCard.getAttribute("fsrc")==clicked){
            el.setAttribute("src", aCard.getAttribute("fsrc"));
            el.setAttribute("isup", "true");
            clicked = ""; // is set to nothing, because if card file path matches, can move onto check next crds
            console.log("Its a match!");
            //aCard.setAttribute("isMatch", "true");
            currentScore++;
            //el.setAttribute("isMatch", "true");
            console.log(winScore);
            console.log(currentScore);
            if (currentScore == winScore) {
                setTimeout(() => {
                alert("You won")}, 150)
           
            return;
            //count = count + 1;
        }}
        else{
            //el.setAttribute("src", el.getAttribute("fsrc"));
            //el.setAttribute("isup", "true");
            console.log(id + "second");
            el2 = document.getElementById(id);
            el.setAttribute("src", el.getAttribute("fsrc"));
            el.setAttribute("isup", "true");
            unflip(el, el2);
            //time(7000);
            //el.setAttribute("src", "photos/ilovecode_logo.jpg");
            //el.setAttribute("isup", "false");
            //el2.setAttribute("src", "photos/ilovecode_logo.jpg");
            //el2.setAttribute("isup", "false");
            clicked = "";
            id = "";
            //reset(); // flip cards back to original state (resetting to backsrcimg), set isup=false, continue 
        }
        //return; 
    } 
}

function unflip(el, el2){
    lock = true;
    setTimeout(() => {
        el.setAttribute("src", "photos/ilovecode_logo.jpg");
        el.setAttribute("isup", "false");
        el2.setAttribute("src", "photos/ilovecode_logo.jpg");
        el2.setAttribute("isup", "false");
      }, 500);
    }
  
function changeColor() {
    document.body.style.backgroundColor = "purple";
  }

  function changeColor1() {
    document.body.style.backgroundColor = "hotpink";
  }
  



 //   wincheck = document.getElementsByTagName("img");
 //   console.log(wincheck[0].getAttribute("isMatch"));
 //   for(var i = 0; i < wincheck.length-1; i++){
//        if (wincheck[i].getAttribute("isMatch") == "true") {
 //           console.log(i);
 //           continue;
  //      }
 //       else{
  //          //console.log(wincheck.length);
   //         return;
 //       }
 //   }
 //   alert("You win");

//}
    
    //el.setAttribute("src", "photos/ilovecode_logo.jpg");
    //el.setAttribute("isup", "false");
    //el2.setAttribute("src", "photos/ilovecode_logo.jpg");
    //el2.setAttribute("isup", "false");


// first issue, it wasn't in a function, so it was being called in order but the table wasn
//created yet, so there was nothing there, it was null value,
// put it into a function and run it after the table was created to fix the issue


//take out anything that prints apart from match and game 1, cards have been set. 