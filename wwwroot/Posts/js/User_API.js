class User_API{
    static API_URL(){return "http://localhost:5000/accounts/register";}
    static API_URLModify(){return "http://localhost:5000/accounts/modify";}
    static GetUser_Url(){return "http://localhost:5000/accounts/";}
    
    static async API_GetUsers() {
        return new Promise(resolve => {
            $.ajax({
                method:"get",
                url: "http://localhost:5000/api/accounts",
                success: users => { currentHttpError = ""; resolve(users); },
                error: (xhr) => { console.log(xhr); resolve(null); }
            });
        });
    }

    static async API_SaveUser(User, create) {
        console.log(User);
        return new Promise(resolve => {
            $.ajax({
                url: create ? (this.API_URL()) :  this.API_URLModify(),
                type: create ? "POST" : "PUT",
                contentType: 'application/json',
                headers: {
                    "Authorization": `Bearer ${ConnectedToken}`
                },
                data: JSON.stringify(User),
                success: (/*data*/) => { create ? $("#VerifyConnectInfo").text("Votre compte a été créé. Veuillez prendre votre courriels pour récupérer votre code de vérification qui vous sera demandé lors de votre prochaine connexion"): ""; resolve(true); },
                error: (xhr) => {console.log(xhr.responseJSON.error_description); resolve(false /*xhr.status*/); }
            });
    });
    }

    static async API_DeleteUser(id) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + "/" + id,
                type: "DELETE",
                success: () => { currentHttpError = ""; resolve(true); },
                error: (xhr) => { currentHttpError = xhr.responseJSON.error_description; resolve(false /*xhr.status*/); }
            });
        });
    }

    static async BlockUser(id){
        $.ajax({
            type: "POST",
            url: this.GetUser_Url() + "block" + id,
            success: function (response) {
                
            }
        });
    }
    static async PromoteUser(id){
        $.ajax({
            type: "POST",
            url: this.GetUser_Url() + "promote" + id,
            success: function (response) {
                
            }
        });
    }
}
