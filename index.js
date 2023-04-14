

// select all buttons with class "plus"
var buttonsPlus = document.querySelectorAll('.plus')
// select all buttons with class "plus"
var buttonsMinus = document.querySelectorAll('.minus')
// select all p with class "qty"
var qtys = document.querySelectorAll('.qty')

// buttonsPlus = [button1,button2]
// qtys = [qty1,qty2]

for (let index = 0; index < buttonsPlus.length; index++) {
    
    buttonsPlus[index].addEventListener('click', function()  {
        qtys[index].innerHTML++
        totale()
     })
     
     buttonsMinus[index].addEventListener('click', function()  {
        if(qtys[index].innerHTML > 0){
             qtys[index].innerHTML--
            totale()
         }
         
      })  
}
var trash = document.querySelectorAll(".fa-trash-can");

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.parentElement.remove();
      totale()
  });
}






// document.getElementById('ahla').innerHTML = "Ahla"

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//       return qte[i].innerHTML++;
//     });
//   }


var heart = document.querySelectorAll(".fa-heart");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color != "red") {
      return (heart[i].style.color = "red");
    } else {
      return (heart[i].style.color = "black");
    }
  });
}


function totale() {
  var qte = document.querySelectorAll(".qty");
  var price = document.querySelectorAll(".price");
  let totalprice = 0;

  for (let i = 0; i < price.length; i++) {
    totalprice = totalprice +Number(qte[i].innerHTML) * Number( price[i].innerHTML);
    console.log (totalprice) 
  }


  document.getElementById("total").innerHTML = totalprice;
}
