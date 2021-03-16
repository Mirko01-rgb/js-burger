var calcolaPrezzo = document.getElementById('calculate');



calcolaPrezzo.addEventListener('click', function(){
  // console.log('Ho cliccato qui');
  var finalPrice = 10;

  // Stampa allert se non inserisci il nome
  var burgerName = document.getElementById('burger-name').value;
  console.log(burgerName);

  if(burgerName == ''){
    alert('Inserisci prima il nome del tuo burger ')
  }


  //Checkbox  con i vari ingredienti
  var ingredients = document.getElementsByClassName('ingred');
  // console.log(ingredients);

  for (var i = 0; i < ingredients.length; i++) {
    // console.log(ingredients[i]);
    var ingredient = ingredients[i];
    // console.log(ingredient);

    var isCheckedIngredient = ingredient.checked;
    // console.log(isCheckedIngredient);
    var price = parseInt(ingredient.dataset.price); // come se fosse una cartella
    // console.log(price);

    if (isCheckedIngredient) {
      finalPrice += price; //prezzo + sovrapprezzo
    }

  }



  //coupons
  var coupon = document.getElementById('burger-coupon').value;
  console.log(coupon);
  var arr =['123ABC', '456DEF', '789GHI'];
  if (arr.includes(coupon)){   // includes determina se un array include un certo elemento
    finalPrice = parseFloat(finalPrice /100 * 80).toFixed(2);

  }

  //Utilizzando il for
  // for (var i = 0; i < arr.length; i++) {
  //   var singleCoupon = arr[i];
  //    // console.log(arr[i]);
  //   if(coupon == singleCoupon){
  //     finalPrice = parseFloat(finalPrice /100 * 80).toFixed(2);
  //   }
  // }



  console.log(finalPrice);
  var stampPrice = document.getElementById('price');
  stampPrice.innerHTML= finalPrice;
})
