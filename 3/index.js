// template for 'magicTemplate' is from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function magicTemplate(strings, ...keys) {
    return (function(...values) { `'values' is an array of argument passed as object to 
    function to which is assigned result of magicTemplate: this time it's update.`
    //getting object from array 
    const dict = values[0];
      //getting keys of passed object
      const keysOfDict = Object.keys(dict);
      let result = [strings[0]];//this is first part of string part passed to magicTemplate fn.
      keys.forEach(function(key, i) {
        // check if current key's keyname exist in received arguments
        const indexOfKey = keysOfDict.indexOf(Object.keys(key)[0]);
        // set corretc value
        let value = indexOfKey < 0 ? keys[i][Object.keys(key)[0]] : dict[keysOfDict[indexOfKey]];
        result.push(value, strings[i + 1]);
      });
      console.log(result.join(''));
      return result.join('');
    });
  }
const firstName = 'James'
const lastName = 'Bond'

const update = magicTemplate`My name is ${{ lastName }}. ${{ firstName }} ${{ lastName }}.`

update({ firstName: 'George', lastName: 'lech' })
update({ lastName: 'Weasley' })
update({ firstName: 'Ron', firstName: "Bob" })