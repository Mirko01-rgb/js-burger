var calcolaPrezzo = document.getElementById('calculate');

calcolaPrezzo.addEventListener('click', function(){
  // console.log('Ho cliccato qui');

  var burgerName = document.getElementById('burger-name').value;
  console.log(burgerName);

  if(burgerName == ''){
    alert('Inserisci prima il nome del tuo burger ')
  }

  var ingredients = document.getElementsByClassName('ingred');
  // console.log(ingredients);

  for (var i = 0; i < ingredients.length; i++) {
    // console.log(ingredients[i]);
    var ingredient = ingredients[i];
    // console.log(ingredient);

    var isCheckedIngredien = ingredient.checked;
    // console.log(isCheckedIngredient);

    var price = parseInt(isCheckedIngredien.dataset.price);
    console.log(price);

  }




})
