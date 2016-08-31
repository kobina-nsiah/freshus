function staffulty(){

  //alert("here");
        // var u = "niftypac-aix.cavenetworks.pw/controller/homepage.php";
        // var obj=$.ajax({url:u,async:false});
        //
        // var response = obj.responseText;
        // document.getElementById("result").innerHTML = response;

        var u = "http://freshus.cavenetworks.pw/controller/staffulty.php";
        var obj=$.ajax({url:u,async:false});

        var response = obj.responseText;
        document.getElementById("result").innerHTML = response;

}

function freshman(){

  //alert("here");
        // var u = "niftypac-aix.cavenetworks.pw/controller/homepage.php";
        // var obj=$.ajax({url:u,async:false});
        //
        // var response = obj.responseText;
        // document.getElementById("result").innerHTML = response;

        var u = "http://freshus.cavenetworks.pw/controller/freshman.php";
        var obj=$.ajax({url:u,async:false});

        var response = obj.responseText;
        document.getElementById("result").innerHTML = response;

}

// function participants(){
//       var u = "niftypac-aix.cavenetworks.pw/controller/participants.php";
//       var obj=$.ajax({url:u,async:false});
//
//       var response = obj.responseText;
//       document.getElementById("result").innerHTML = response;
//
// }
//
// function posts(){
//     var u = "niftypac-aix.cavenetworks.pw/controller/posts.php";
//     var obj=$.ajax({url:u,async:false});
//
//     var response = obj.responseText;
//     document.getElementById("result").innerHTML = response;
// }
//
// function mentors(){
//   var u = "niftypac-aix.cavenetworks.pw/controller/mentors.php";
//   var obj=$.ajax({url:u,async:false});
//
//   var response = obj.responseText;
//   document.getElementById("result").innerHTML = response;
// }
//
// function single_post(id){
//     var u = "niftypac-aix.cavenetworks.pw/controller/single_post.php?id="+id;
//     var obj=$.ajax({url:u,async:false});
//
//     var response = obj.responseText;
//     document.getElementById("result").innerHTML = response;
// }

$(function() {
    $("img.lazy").lazyload();
});
