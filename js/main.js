$(document).ready(function(){
    battleInit();
    //Variables you have access to:
    //totalShipCount = number of ships that have been spawned on the board
    //board = 2D array/matrix of boolean values. True means that a ship is in that space, false means that there is no ship.
    var shipsRemaining = totalShipCount,
    shots = 25,
    rowInt,
    rowStr,
    colInt,
    colStr,
    GameInPlay = true;
    
    $(".ships_rem").html(shipsRemaining);
    $(".shots_rem").html(shots);

    $("#fire").click(function(){
      if(shots > 0 && validateShot()){
        shoot();
        shots--;
        $(".shots_rem").html(shots);
        if(shots <= 0 && shipsRemaining > 0){
          $("#winLoseText").html("You Lose! Click To Play Again!");
          document.getElementById("winLoseText").style.display = "block";
        }
      }

      if(shipsRemaining <= 0){
        GameInPlay = false;
        $("#winLoseText").html("You Win! Click To Play Again!");
        document.getElementById("winLoseText").style.display = "block";
      }
    });

    $("#winLoseText").click(function(){
      if(!GameInPlay){
        location.reload();
      }
    });

    function shoot(){
      if(board[rowInt-1][colInt-1]){
        $("." + rowStr + colStr).html("💣");
        shipsRemaining--;
        $(".ships_rem").html(shipsRemaining);
      } else{
        $("." + rowStr + colStr).html("🙅");
      }
    }

    function validateShot(){
      rowStr = $("#rowBox").val();
      colStr = $("#colBox").val();
      rowInt = parseInt(rowStr);
      switch(colStr) {
        case "A":
          colInt = 1;
          break;
        case "B":
          colInt = 2;
          break;
        case "C":
          colInt = 3;
          break;
        case "D":
          colInt = 4;
          break;
        case "E":
          colInt = 5;
          break;
        case "F":
          colInt = 6;
          break;
        case "G":
          colInt = 7;
          break;
        case "H":
          colInt = 8;
          break;
        default:
          colInt = null;
          break;
      }
      if((rowInt < 0 || rowInt > 7) || (colInt == null) || ($("." + rowStr + colStr).text() != "🌊")){
        $("#winLoseText").html("Please Enter A Valid Shot");
        document.getElementById("winLoseText").style.display = "block";
        return false;
      } else{
        document.getElementById("winLoseText").style.display = "none";
        return true;
      }
    }

});
