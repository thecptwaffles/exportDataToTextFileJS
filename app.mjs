// Requiring fs module in which 
// writeFile function is defined. 
    import * as fs from 'fs'; 
  
// Data which will write in a file. 
let data = "Learning how to write in a file."
  


function newFunction() {

    let email = document.getElementById('input').value;

    fs.writeFile('Output.txt', email, (err) => {

        // In case of a error throw err. 
        if (err)
            throw err;
    });
}

