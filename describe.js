//test, testSuite, setup, teardown
var fs = require('fs');
const success = desc => {
  console.log(`${desc} : Pass`);
   return `${desc} : Pass`;
};
const failure = (desc, msg) =>{ 
  console.log(`:( ${desc} : Fail => ${msg}`);
  return `:( ${desc} : Fail => ${msg}`;
}
const log = desc =>{ 
console.log(desc);
return desc;
}
const loggerObject = function(logger,...params){
 return function(){
  return logger.apply(null,params);
 };
}
const printToFile=(array)=>{
  //console.log('writing the file');
  var textToBecopied='';
  array.forEach((element,index,array) => {
          var resultText=element();
          resultText+=' \n';//newline
          resultText+='......................................................\n';
          textToBecopied+=resultText;
  });
  //console.log(textToBecopied);
  fs.writeFileSync('output.txt',textToBecopied,'utf-8');
}
const activity = {};
const stack = [];
const isEmptyStack = () => stack.length === 0;
const stackTop = () => stack[stack.length - 1];
const ctx = {};
var descArray = [];
var currentindex=0;
var count = 0;

const spush = (key, val) => stackTop()[key].push(val);

const indentedTitle = ctxt =>
  `${stack.map(() => '   ').join('')}${ctxt}`;

const newTop = title =>
  ({ title, tests: [], setup: [], teardown: [], testSuites: [] });

const execTop = () => {

 return 'setup tests testSuites teardown'.split(' ')
  .forEach((key) => { 
    stackTop()[key].forEach(activity[key])
  });
};

var index = -1;
const execTestSuite = (title, testSuiteFn) => {
  log(indentedTitle(title));
  stack.push(newTop(title));
  testSuiteFn.call(ctx);   // collect testSuites, setup, teardown and it.
   execTop();            // execute them
  stack.pop();

  
};

const reportTests = (fn, title) => {
const desc = indentedTitle(title);
const done=(index,err,value)=>{
   if(err){
       descArray[index] = loggerObject(failure,desc,err);
  }else{
        descArray[index] = loggerObject(success,desc);
      }
  printToFile(descArray);
      
}
try {
    var t=fn.call(ctx,done.bind(null,++index));
    descArray[index]=loggerObject(success,desc);
    } catch (e) {
      descArray[index] = loggerObject(failure,desc,e.message);  
    }
  
};

activity.setup = fn => fn.call(ctx);
activity.teardown = fn => fn.call(ctx);
activity.testSuites = ([title, testFn]) =>
execTestSuite(title, testFn);
activity.tests = ([title, testFn]) =>
reportTests(testFn, title);

export const test = (desc, fn) => spush('tests', [desc, fn]);
export const testSuite = (title, testfn) => {
  if (isEmptyStack()) {
    execTestSuite(title, testfn);
    return;
  }
  spush('testSuites', [title, testfn]);
};

export const setup = spush.bind(null, 'setup');
export const teardown = spush.bind(null, 'teardown');
