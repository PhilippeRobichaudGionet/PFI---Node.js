const Url = "http://localhost:5000/token";






function TryConnect(Email,MDP){
    $.ajax({
        type: "POST",
        url: Url,
        data: JSON.stringify({ "Email": Email, "Password": MDP }),
        contentType: "application/json",
        success: function (response) {
            console.log("Response received:", response);
            OnConnect();
        },
        error: function (xhr, status, error) {
            console.error("Error occurred:", status, error);
            OnError();
        }
    });
}
function OnConnect(){
    
}

function OnError(){
    
}

