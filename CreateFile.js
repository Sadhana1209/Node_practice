var fs = require('fs');
var x;
const readline = require("readline").createInterface({
input:process.stdin,
output: process.stdout
 });

 readline.question('enter P value: ', p =>{
    x=p;
    });

function SwitchCase(){
switch (x) {
    
    case 1:
        {
            var data = 'Learn Node FS module';
            fs.writeFile('../newfile.txt', data, function (err) {
                if (err) throw err;
                return readline.question( console.log('File is created successfully.'));
                 
            });
            break;
        }
    case 2:
        {                
            fs.readFile('../newfile.txt', (err, data) => {

                    if (err)
                        throw err;
                    return console.log(data.toString('utf-8'));
                })
                break;
        }
        case 3:
            {
                fs.unlink('../newfile.txt', function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                   return console.log('File deleted!');
                });
                break;
            }
    default: { return; }

}
}


// module.exports=p;

