const fs = require('fs');

//  flag a for appending text to the file
fs.writeFileSync('./Filereader.txt', ' write text tp1 file', { flag: 'a' }, (err, result1) => {
    if (err) throw err;
    console.log(result1);
    return;
})

fs.writeFile('./Filereader.txt', ' write text tp1 file', function (err, result1) {
    if (err)
        throw err;
    console.log(result1);
    return;
})

fs.readFile('./Filereader.txt', 'utf-8', (err, result) => {

    if (err) throw err;

    console.log(result);
    return;
})