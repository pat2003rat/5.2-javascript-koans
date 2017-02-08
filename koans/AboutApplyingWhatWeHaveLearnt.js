var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      productsICanEat.push(products.filter(function(product){ // here we are pushing the products I can eat into all products
      return product.containsNuts === true;  //this will return products that containsNuts to be true
    })
    .filter(function(noNuts){ // we want to filter out the function weve created as noNuts
      return _.all(noNuts.ingredients, function(ingredient){ // we will return all values w/o nuts as listed ingredients
        return ingredient !== "mushrooms"; // of those we will return ingredients that do not contain mushrooms
      });
    }));

    expect(productsICanEat.length).toBe(1);
});

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

      var sum = 0;
      for(var i=1; i<1000; i+=1) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
      }

      expect(sum).toBe(233168);
    });

    it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

      /* try chaining range() and reduce() */
      var sum = _.range(1, 1000).reduce(function(total, current){ //_.range is saying make a range of numbers from 1 to 1000 and to reduce that function into a single value and to return the total value plus the current
          if(current % 3 === 0 || current % 5 === 0){ //this states if the current value is divisible by 3 denoted by a remained for 0 OR is a multiple of 5, then return those
          return total + current; // if the number is a multiple of 3 and 5, return the total of total and current sum
        } else { //otherwise
          return total; //return total
        }
      }, 0);

      expect(233168).toBe(sum);
    });

  /*********************************************************************************/
  it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

 //
 // working on how to get. chain into a function similar to Higher Order Functions example
    // var result = _(['mushrooms']).chain()
    //                  .map(function(x) { return x+1 } )
    //                  .flatten()
    //                  .reduce(function (sum, x) { return sum + x })
    //                  .value();
    //
    // expect(ingredientCount['mushrooms']).toBe(undefined);
  });


  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
