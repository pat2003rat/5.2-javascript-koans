var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1, 3]); //passes into an array and only odd numbers are 1 and 3
    expect(odd.length).toBe(2); // length is not an array and length is number or parameters in array //
    expect(numbers.length).toBe(3); // length is not passed into an array and the length of all numbers is 3 as there are three parameters within the array //
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2,3,4]); // this is saying each number in the number variable need to have one added to their values //
    expect(numbers).toEqual([1,2,3]); // this is asking what numbers returns.... which is the array of numbers found in the variable numbers //
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(6); //http://underscorejs.org/ // Also known as inject and foldl, reduce boils down a list of values into a single value.
    expect(numbers).toEqual([1,2,3]); // it is asking us to return what we found for numbers which is an array. we didnt need to reduce or do anything to it //
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse"); //1 is not an even number so false...2 is even so true .... 3 is odd so false .... we put them in a string b/c msg is defined as a string //
    expect(numbers).toEqual([1,2,3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true); //all numbers in the onlyEven variable are true //
    expect(_(mixedBag).all(isEven)).toBe(false); // not all numbers in the mixedBad variable are even
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true); // any number in the array is divisible in the array yileding no remainder //
    expect(_(mixedBag).any(isEven)).toBe(true); // any number in the array, so all really but 5, yeilds no remainder when divisible by 2//
  });

  it("should use range to generate an array", function() {
      expect(_.range(3)).toEqual([0,1,2]); // range of 3 refers to 1st, 2nd, and 3rd numbers in an arry starting at 0//
      expect(_.range(1, 4)).toEqual([1,2,3]); // range 1-4 refers to 2nd, 3rd, 4th values in an array starting at 0//
      expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]); //http://underscorejs.org/#range // starting at 0 and have a negative numbers reduces integers from 0 to -3. first term is 0, second term is -1, third term is -2, fourth term is -3;
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1,2,3,4]); //http://underscorejs.org/#flatten // allows us to condense everything into one array
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(6); //we flatten the array down to be [0,1,2] then add one to each parameter making it [1,2,3] then add each value together within the array//
  });

});
