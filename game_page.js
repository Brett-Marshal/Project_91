player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name;
document.getElementById("player_2_name").innerHTML = player_2_name;

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;

function send()
{
    number_1 = document.getElementById("q_number_1").value;
    number_2 = document.getElementById("q_number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);

    q_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row = q_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("q_number_1").value = "";
    document.getElementById("q_number_2").value = "";
}