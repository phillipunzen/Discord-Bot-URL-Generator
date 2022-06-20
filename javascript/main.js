var form = $("#main-formular");
var btn = $("#submit-btn")

btn.on('click', function(){
    var rootUrl = "https://discord.com/api/oauth2/authorize";

    var applicationTB = $("#applicationidTB");
    var clientID = applicationTB.val();

    var permissionRadio = $("#radioPermissions");
    var permission = permissionRadio.val();

    var scopeRadio = $("#radioScope");
    var scope = scopeRadio.val();

    if(! clientID == "" && ! permission == "" && ! scope == "")
    {
        var url = rootUrl + "?client_id=" + clientID + "&permissions=" + permission + "&scope=" + scope;
        alert(url);
    } else {
        alert("Bitte alle Felder ausfüllen!");
    }




})