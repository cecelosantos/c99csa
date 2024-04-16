
function addUser()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";

}function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer = actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = 

            document.getElementById("player1_score").innerHTML         
        }
        else
        {
             player2_score = player2_score +1;
             document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno de Pergunta  - " + player2_name ;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de Pergunta  - " + player1_name ;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1_name
    }

}
