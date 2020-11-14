import { foo } from './foo';


console.log('hello main');

foo();

setInterval(function() {
  foo();
}, 2000)
