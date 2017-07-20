function quarter(quarters) {

var random=Math.random()*100;
random=(Math.trunc(random));

while (quarters > 0){

  num=Math.random()*100;

  num=(Math.trunc(num))

  console.log("Your Number =",num);
  console.log("My Number=",random);

    if(num===random) {

      quarters=(quarters + (Math.random()*50 +51));

    }

    else {console.log("You lose 1 quarter");

    quarters--;}

    if (quarters===1){
      console.log(quarters+ " quarter left");
    }

    else { console.log(quarters+ " quarters left");}

}

console.log("Loser!! I just took your quarters!!  HAHA!!")


}

quarter(10)

// put a random chance into the function
