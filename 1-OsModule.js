const os = require('os');
const path=require('path');

const user = os.userInfo()
console.log(user);

console.log('the system uptime', os.uptime())


const filepath  = path.join('content','subfolder');
console.log(filepath);