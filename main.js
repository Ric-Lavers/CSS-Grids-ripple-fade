
var fade = 60;
var rows = 8;
var cols = 8;

$(document).ready(function() {
  $('.test').click(function(e){
    //find the id of the click object
    //**note** the pattern of divs is important!! a-z = rows & nums = cols
    var id = e.currentTarget.id;
    $(this).fadeTo(600,0.01);
    revealAll(id);
  });
});

function revealAll(id){
  //useful for setting the revealed divs
  row = ['a', 'b', 'c', 'd', 'e',
         'f', 'g', 'h', 'i', 'j',
         'k', 'l', 'm', 'n', 'o',
         'p', 'q', 'r', 's', 't',
         'u', 'v', 'w', 'x', 'y', 'z' ];
  var r = row.indexOf(id[0]);
  var col = parseInt(id[1]);

  var x=1;
  loop(x);

  function loop(x){
    if (x<6){
        console.log("x "+x);
        setTimeout(function(){
          for (i = -1*x; i <=1*x; i++){
            for(j = -1*x; j <=1*x; j++){
              if (row[r+i]+(j+col) != id)
              {$("#"+row[r+i]+(j+col)).fadeTo(600,0.01);
              };
            };
          };
          x++;
          loop(x);
      },400);

    }else{return};
  };//loop
}





//
//   row = ['a', 'b', 'c', 'd', 'e',
//          'f', 'g', 'h', 'i', 'j',
//          'k', 'l', 'm', 'n', 'o',
//          'p', 'q', 'r', 's', 't',
//          'u', 'v', 'w', 'x', 'y', 'z' ];
//   var col = parseInt(id[1]);
//   var r = row.indexOf(id[0]);
//
//   for (s=0; s<7; s++){
//     s += 1;
//     console.log("s "+s);
//     corners = [[-1,-1],[1,1],[-1,1],[1,-1]];
//      for (i = 0; i < corners.length; i++) {
//        revealAll(row[r+s]+(col+s));
//        console.log("WORKING");
//      };
//   };
// }
