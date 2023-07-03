//Dot notation- has limitations; only allows static keys
//ie. key is typed directly

const obj = {
    name: "deeecode",
    age: 80,
    language: "javascript",
  }

  const target = obj.name;
  // deeecode
  console.log(target);

  //Modifying using dot
  obj.age =100;
  console.log (obj); //{name: 'deeecode', age: 100, language: 'javascript'}
  
  //Adding property using dot
  obj.location = "Mercury";
  console.log (obj); //added new property

  //Bracket notation- accepts dynamic keys; ie key is evaluated from an expression
  //object[expression]

  function bracketNotation() {
    const obj = {
        name: "deeecode",
        age: 80,
        language: "javascript",
      }

      const target = obj["name"]
      // deeecode
      obj["location"]= "Mercury";
      console.log(obj);
  }

  function differenceBracket () {
    const obj = {
        name: "deeecode",
        age: 80,
        language: "javascript",
        myKey: "language"
      }

    //const myKey = "language";

    // const target = obj.myKey; //undefined
    //myKey is NOT an actual property on the object
    
    //const target = obj[myKey] // can use the variable as the key 
    // javascript

    //const target = obj["myKey"]; //now looks for an actual value in the object
    // language

    const myKey = "age";
    obj[myKey] =100;
    // this modifies the value of the age property using a dynamic key
    obj["loca"+ "tion"] = "Mercury"; //location
    // adding a new property to the object

    // can also use conditional expressions
    obj[10>11 ? "twenty" : "eleven"] = "Mercury";
    // adds a property of eleven to the object

    
    console.log(obj);


    

  }


