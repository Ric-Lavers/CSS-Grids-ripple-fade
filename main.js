// $(document).ready(function() {
//   $('.box').click(function(e){
//     console.log("working");
//     $("#flip").flip();
//     $(this).style.transform: rotateY("180deg");
//   });
// });
//
//
// $("#flip").flip({
//   axis: 'x',
//   trigger: 'hover',
//   reverse: true
// });
// document.getElementById(tabName).style.backgroundImage = 'url(images/' + choice + '.png)';


$(document).ready(function() {
  $('.test').click(function(e){
    var thing = e.currentTarget.id;
    // console.log($(this).getAttribute('id'));
    // console.log(thing);
    $(this).fadeTo(600,0.01);
    revealAll(thing);
  });
});
var fade = 60;

function revealAll(id){

  row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
  col = []
  var r = row.indexOf(id[0])
  var col = parseInt(id[1])
  console.log(r,col);
  // console.log("r="+r+" col="+col);
  {
      setTimeout(function(){

        for (i = -1; i <=1; i++){
          for(j = -1; j <=1; j++){
            if (row[r+i]+(j+col) != id)
            // console.log(r, row[r+i], col+j);
            {$("#"+row[r+i]+(j+col)).fadeTo(600,0.01);
            // console.log("#"+row[i]+j);
            };
          };
        };
        // console.log();
        revealAll(row[r-1]+(col-1));
        revealAll(row[r+1]+(col+1));
        revealAll(row[r-1]+(col+1));
        revealAll(row[r+1]+(col-1));
    },400);
  }
}
