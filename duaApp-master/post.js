var database =firebase.database().ref();
var posts = document.getElementById("posts");
var currentUser = JSON.parse(localStorage.getItem("currentUser"));


database.child("posts").on("child_added",function(snapshot){

var obj = sanpshot.val(); // data 
obj.id=snapshot.key; // key 
render(obj);

});
function render(dua){

    var div = document.createElement("DIV");
    div.setAttribute("id",dua.id);
    var span = document.createComment("SPAN");
    var sender = document.createTextNode("Name : " + dua.sender + " ");
    var duaa = document.createTextNode("Dua : "+ dua.dua + " ");
    span.appendChild(sender);
    span.appendChild(duaa);

    div.appendChild(span);
    var commentBox = document.createElement("INPUT");
    commentBox.setAttribute(" id "," comment " + dua.id);
    var btn = document.createElement("BUTTON");
    var btnText = document.createTextNode("Submit");
    btn.appendChild(btnText);
    btn.onclick = function(){
        submitComment(dua.id);
    }
    div.appendChild(commentBox);
    div.appendChild(btn);
    
    posts.appendChild(div);


}
function submitComment(duaId){
    var commentInput = document.getElementById("comment")
    var comment ={

        sender: currentUser.name,
        comment: commentInput.value,
        duaId: duaId
    }
    database.child("comments").push(comment);
    commentInput.value = "";


}