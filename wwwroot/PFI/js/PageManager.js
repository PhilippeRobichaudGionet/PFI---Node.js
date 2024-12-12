let title = $("#title");

Init()

function Init(){
    $("#SubmitInput").click(function() { 
        TryConnect($("#EmailInput").val(),$("#MDPInput").val());       
    });
}

function ConnectionPage(){
    title.text("Connexion");
}

function AboutPage(){
    title.text("À propos");
}

function ModifAddPage(){
    title.text("");
}