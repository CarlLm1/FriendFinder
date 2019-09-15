var friends 

$.get("/api/friends").then(function(data){
    friends = data
    console.log(data)
})
$("#submit").on("click", function(event){
    var newFriendScores = []
    newFriendScores.push(parseInt($("#q1").val()))
    newFriendScores.push(parseInt($("#q2").val()))
    newFriendScores.push(parseInt($("#q3").val()))
    newFriendScores.push(parseInt($("#q4").val()))
    newFriendScores.push(parseInt($("#q5").val()))
    newFriendScores.push(parseInt($("#q6").val()))
    newFriendScores.push(parseInt($("#q7").val()))
    newFriendScores.push(parseInt($("#q8").val()))
    newFriendScores.push(parseInt($("#q9").val()))
    newFriendScores.push(parseInt($("#q10").val()))

    var newFriend = {
        name: $("#name").val(),
        photo:$("#photo").val(),
        scores: newFriendScores
        }

    console.log(newFriend)

    $.post("/api/friends", newFriend, function(response){
        console.log(response)
    })


    var friendsScoresArray = []

    for(var i = 0; i < friends.length; i++ ){
       friendsScoresArray.push(friends[i].scores)
    }
    console.log(friendsScoresArray)

    var difference = []
    
    for (var j = 0; j < friendsScoresArray.length; j++) {
     for (var i = 0; i < friendsScoresArray[j].length; i++) {

       if (friendsScoresArray[j][i] > newFriendScores[i]){
          difference.push(friendsScoresArray[j][i] - newFriendScores[i])

       } else if (friendsScoresArray[j][i] > newFriendScores[i]){
          difference.push(newFriendScores[i] - friendsScoresArray[j][i])

       } else {
         difference.push(0)
       }
     }
   }
   console.log(difference)


   var differenceArray = []
   var size = 10;
   for (var i=0; i < difference.length; i += size) {
      var smallerArray = difference.slice(i,i + size);
      differenceArray.push(smallerArray)
   }

    var sumDifference = []

    for (var i = 0; i < differenceArray.length; i++) {
      function getSum(total, num) {
          return total + num;
      }
      sumDifference.push(differenceArray[i].reduce(getSum))
    }
    console.log(sumDifference);

    var index = 0;
    var value = sumDifference[0];
    for (var i = 1; i < sumDifference.length; i++) {
      if (sumDifference[i] < value) {
        value = sumDifference[i];
        index = i;
      }
    }

    var chosenFriend = []
    chosenFriend.push(friends[index])
    console.log(`smallest is ${value} and the index is ${index}`)
    console.log(chosenFriend[0])


   $('.modal-body').html(
     `
    <div class="container text-center">
        <h1>${chosenFriend[0].name}</h1>
        <img src="${chosenFriend[0].photo}" width="200" height="300">
    </div>
     `
   )
   newFriendScores = []

 })

