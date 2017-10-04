function test(){
  test=[1,2,4,5,6];
  for(i=0;i<7;i++){
    console.log(i);
    // console.log("test.indexOf(i)"+test.indexOf(i));
    if(test.indexOf(i) ===-1){console.log("Not there");}
    else if (test.indexOf(i) !=-1){console.log("yes its there")};
  };
};
test()
function playin(){
  $(document).ready(function() {
    $('.box').click(function(){
      $(".grid").toggleClass('grid2');
    });
  });
};
var stagger = 60;
var fade = 40;
var rows = 16;
var cols = 16;

$(document).ready(function() {
  $('.box').click(function(e){
    //find the id of the click object
    //**note** the pattern of divs is important!! a-z = rows & nums = cols
    var id = e.currentTarget.id;
    // var id = $(this).attr('id');
    $(this).toggleClass('clear');
    revealAll(id);
  });
});


// strip string

function revealAll(id){
  //useful for setting the revealed divs
  row = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j',
         'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't',
         'u', 'v', 'w', 'x', 'y', 'z', 'A' ,'B' ,'C' ,'D',
         'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N',
         'O' ,'P' ,'Q' ,'R' ,'S' ,'T' ,'U' ,'V' ,'W' ,'X','Y' ,'Z'];
  var r = row.indexOf(id[0]);
  // var col = parseInt(id.slice[1,(id.length)]);
  var col = parseInt(id.slice(1,id.lengt));

  var x=1;
  var used=[]
  loop(x);

  function loop(x){
    if (x<(rows)){
        //console.log("x "+x);
        setTimeout(function(){
          for (i = -1*x; i <=1*x; i++){
            for(j = -1*x; j <=1*x; j++){
              if (row[r+i]+(j+col) != id && used.indexOf(row[r+i]+(j+col))===-1 )
              { $("#"+row[r+i]+(j+col)).toggleClass('clear');
                // used.push([i,j]);
                used.push(row[r+i]+(j+col))

              // console.log("#"+row[r+i]+(j+col));
            };
            };//j
          };//i
          // console.log("used.indexOf([i,j])"+used.indexOf([i,j]));
          // console.log(used);
          // if (x===2){return}
          x++;
          loop(x);
      },stagger);
    }else{return};
  };//loop
}



 // border= 33333  (-2,-2)(-1,-2)(0,-2)(1,-2)(2,-2)        i= -1*2;  i <=2; i++
 //         32223  (-2,-1)(     )(    )(    )(2,-1)
 //         32123  (-2, 0)(     )( ++ )(    )(2, 0)
 //         32223  (-2, 1)(     )(    )(    )(2, 1)
 //         33333  (-2, 2)( 1, 2)(0, 2)(1, 2)(2, 2)


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
