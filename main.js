// var firebase = require('firebase/app');

// require('firebase/auth');
// require('firebase/database');


$(document).ready(function(){
        $('.sidenav').sidenav();
        $('input#input_text, textarea#textarea2').characterCounter();
        $('.popup').hide();
        $('.message').hide();
        $("#note").hide();

        
        $("#admin").click(function(){
            $('.popup').show();

        });

         // Your web app's Firebase configuration
              // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC79a1WM0XTsFMlTjWpbyYt9Zi7IEd04xs",
    authDomain: "unsaidemotion-1.firebaseapp.com",
    databaseURL: "https://unsaidemotion-1-default-rtdb.firebaseio.com",
    projectId: "unsaidemotion-1",
    storageBucket: "unsaidemotion-1.appspot.com",
    messagingSenderId: "80006230473",
    appId: "1:80006230473:web:d86eaaabb5b42390e8b818"
    
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var ref = database.ref('users');
ref.on('value',gotDate, errData);
const notification=[];
function gotDate(data){
    // console.log(data.val());
    var submition = data.val();
    var keys = Object.keys(submition);
    console.log(keys);
    for (var i = keys.length-1 ; i>=0 ; i--) {
      var k = keys[i];
      var name=submition[k].Name;
      var insta=submition[k].Insta_id;
      var email=submition[k].Email;
      var msg=submition[k].Message;
      var sug=submition[k].Suggestion;
    //   console.log(name,insta,msg,sug);
    // document.getElementById("tottalsubmitions").innerHTML =;
    // console.log(notification.length);
    
    
    $('#adminarea').append('<div class="msgchild">'+"Name:"+'&nbsp&nbsp'+name + '<br>'+"InstagramID:"+'&nbsp&nbsp'+insta +'<br>'+"Email:"+'&nbsp&nbsp'+email +'<br>'+ "Quote:"+'&nbsp&nbsp'+msg +'<br>'+ "Suggestion:"+'&nbsp&nbsp'+sug+'</div');
    $('#submitions').append('');
    
    notification.push(name);
    // $('.msgchild').append("\n");
    // var li = createElement('li',name+':' + insta);
    // li.parent('submitions');
    
    
    
    
}
$('#tottalsubmitions').append("We have recieved total  "+keys.length+"  submittions");

}


function errData(err){
    console.log('Error');
    console.log(err);
}

            
        $("#submit").click(function(){
            Hash_key=$("#Secret_key").val();
            if(Hash_key=="*&^#$%@#"){
                $('.message').show();
                $('.popup').toggle();

            }
            else{
                alert("Sorry you don't have access ! ")
                $('.popup').toggle();
            }
        });
       

// function submitform(){
//     var data={
//         Name:document.getElementById("#your_name").val(),
//         Insta_id:$("#instagram_id").val(),
//         Message:$("#textarea1").val(),
//         Suggestion:$("#textarea3").val()
//     }
//     console.log(Name);
    // var database = firebase.database();
    // var ref = database.ref('users');

    // ref.push(data);
// }


});


function submitform(){ 
    Name=$("#Full_Name").val();
    Insta=$("#Instagram_ID").val();
    Email=$("#email").val();
    Msg=$("#Your_Quote").val();
    sug=$("#Sugesstion").val();
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["insta"].value;
    var e = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["quote"].value;

        if (x == ""){
          alert("Name must be filled out");
          return false;
        }
        else if(y == ""){
            alert("Insta ID must be filled out");
          return false;
        }
        else if(e == ""){
            alert("Your Email ID must be filled out");
          return false;
        }
        else if(z == ""){
            alert("Your Quote must be filled out");
          return false;
        }
        else{
            
            var user={
                Name:this.Name,
                Insta_id:this.Insta,
                Email:this.Email,
                Message:this.Msg,
                Suggestion:this.sug
            }
            var database = firebase.database();
            var ref = database.ref('users');
            ref.push(user);

            alert("Your response has been submitted.");
            $("#Full_Name").val('');
            $("#Instagram_ID").val('');
            $("#email").val('');
            $("#Your_Quote").val('');
            $("#Sugesstion").val('');
            $("#formbutton").hide();
            $("#tottalsubmitions").toggle();
            $("#note").show();


        }
      
}

