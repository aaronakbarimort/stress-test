var reducer = (accumulator, currentValue) => accumulator + currentValue;

// helper function to check if a number in a certain range
Number.prototype.between = function(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this > min && this < max;
};


// function to decide the stressLevel, return copingMethod
// score : a positive int
// copingMethods: an array of string with stressLevel words
var stressIdentifier = function(score, copingMethods){
  var stressLevel = '';
  if (score.between(0,5)){
    stressLevel = copingMethods[0];
  }else if(score.between(5,10)){
    stressLevel = copingMethods[1];
  }else{
    stressLevel = copingMethods[2];
  }
  return stressLevel;
}


// user interface logic
$().ready(function(){
  $("#stressTest").submit(function(e){
    e.preventDefault();

    var score = 0;
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      score += parseInt($(this).val());
    });
    var copingMethods = ['Sleep more','relax more', 'go to see some plants'];
    var stressLevel = stressIdentifier(score, copingMethods);

    var score2 = 0;
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      score2 += parseInt($(this).val());
    });
    var copingMethods2 = ['Sleep','relax', 'see some plants'];
    var stressLevel2 = stressIdentifier(score, copingMethods2);

    $("#copingMethods").show();
    $("#copingMethods").append("<p class='lead'>Here goes your coping methods: <br>"+stressLevel+"</p>");
    $("#copingMethods").append("<p class='lead'>"+stressLevel2+"</p>");

  });

});
