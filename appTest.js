
const nameConst='Sadhana Mulpuri'
console.log('my name is ' + nameConst) 


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   readline.question('Enter your name', name => { 
//     console.log('hi', name);
//     readline.close();
//   }) 


  const readlineA = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  readlineA.question('enter A value ', a =>{ 
        readlineA.question('enter B value ',b => {
            var result = (+a) + (+b);
            console.log('A + B value is', (+a) + (+b));
            readlineA.close();

        })     
  });

  
  