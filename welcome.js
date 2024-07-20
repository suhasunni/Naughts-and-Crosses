

document.addEventListener("DOMContentLoaded", function(){
    main()
})



function main()
{
    //enter names when submit button is clicked
    document.getElementById("b-start-game").addEventListener("click",function(event){
        
        event.preventDefault();
        
        const p1 = document.getElementById("player-1-name-input").value;
        const p2 = document.getElementById("player-2-name-input").value;

        //store player names locally
        localStorage.setItem("player1", p1);
        localStorage.setItem("player2", p2);

        window.location.href = `Game.html`;
    });
}



