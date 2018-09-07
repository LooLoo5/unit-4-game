$("document").ready(function() {

    // object of each character
    var characters = [
        {
            name: "The Ninth Doctor",
            health: "120",
            attack: "30",
            counterAttack: "15",
            imageUrl: "",
        },
        {
            name: "The Tenth Doctor",
            health: "150",
            attack: "55",
            counterAttack: "30",
            imageUrl: "",
        },
        {
            name: "Daleks",
            health: "140",
            attack: "40",
            counterAttack: "20",
            imageUrl: "",
        },
        {
            name: "Cyberman",
            health: "120",
            attack: "30",
            counterAttack: "15",
            imageUrl: "",
        }
    ]

    //when i restart i want the charcters to come back to OG 
    $("btnid").on("click", function(){
        plzwork();
    })
    

    plzwork = function(){
        console.log("this works");
        for (let i =0; i < characters.length; i++) {
        //passing through our array of chars
        newDiv = $("<div>"); //building a div element
        nametag = $("<h1>").html("name: " + characters[i].name);
        stats = $("<h1>").html(`Health: ${characters[i].health}`);

        //you want your new div to have a name, and stats
        //then you want to anchor your newdiv to the frontend using the enemy id div
        enemyDiv = $("#enemy") //grabbing the frontend
        newDiv.append(nametag);
        newDiv.append(stats);
        enemyDiv.append(newDiv); //works

        console.log(characters[i].name);




        }

    }
    plzwork();

    //when i choose characters, remove for whatever div and place in player div
    //remove all other characters and move those to enemy field so user can choose oppenent
    


   

// main variables
var chosenCharacter
var chosenEnemy
var doctors
var enemies
var winningPlayer
var battle = false;

});
