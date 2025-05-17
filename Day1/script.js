function runPractice() {
    // Clear previous output
    const output = document.getElementById("output");
    output.innerText = '';
  
    // 🧠 Write your JavaScript practice code below 👇
  
    // Example: Find the sum of two numbers
    const a = 10;
    const b = 20;
    const sum = a + b;
  
    // Output to screen
    log(`The sum of ${a} and ${b} is ${sum}`);
  
    // You can write more practice problems below
  }
  
  // 👇 Utility to log output to the screen
  function log(message) {
    const output = document.getElementById("output");
    output.innerText += message + '\n';
  }

  //return the largest word in the string , if there are multiple longest word rerturn the firsrt
  function findLargestWord(){
    
    const string = "Let there be a shinning armor";
    let result;
    if(string.trim().length === 0 ){
        this.result= false;
    } else {
        words = string.split(" ");
        words.sort((a,b) => b.length - a.length);
        this.result= words[0];
    }
   console.log(this.result)
    log(this.result);
  }

  console.log(findLargestWord())
  