import assert from 'assert';
import { test, testSuite, setup, teardown } from './describe';
const obj = {};

testSuite('setup', () => {
    test('should setup num', () => {
      assert.equal(obj.num, 2);
    });
    setup(() => {
      obj.num = 2;
    });
    teardown(() => {
      obj.num = null;
    });
}); 

testSuite('teardown', () => {
  test('should teardown num', () => {
    assert.equal(obj.num, null);
  });
});

testSuite('truthy => ', () => {
  test('empty array', () => {
    assert.equal(!![0], false);
  });
  test('!NaN === true', () => {
      assert.equal(!NaN, true);
    });
});

testSuite('Async Set 1 partial',()=>{
  
  test('async test 1',(done)=>{
  setTimeout(()=>{
     done(null,![]);
  },7000);
  },(...params)=>{
      var [successLogger,failureLogger,desc,descArray,index,loggerObject,printToFile,err,value]=params;
      if(err){
      descArray[index] = loggerObject(failureLogger,desc,err.message);
      return;
      }
      try{
        assert.equal(value,false);
       
        descArray[index] = loggerObject(successLogger,desc);
      }catch (e){
       descArray[index] = loggerObject(failureLogger,desc,e.message);
      }
      printToFile(descArray);
  });


   test('name is anil', () => {
      assert.equal('anil', 'anil');
    });
   
   test('async test 3',(done)=> {
    setTimeout(() => {
      var a = 2;
      done(null,a);
  }, 2000);
   },(...params) => {
      var [successLogger,failureLogger,desc,descArray,index,loggerObject,printToFile,err,value]=params;
      if(err){
      descArray[index] = loggerObject(failureLogger,desc,err.message);
      return;
      }
      try{
        assert.equal(3,value);
       descArray[index] = loggerObject(successLogger,desc);
      }catch (e){
       descArray[index] = loggerObject(failureLogger,desc,e.message);
      }
      printToFile(descArray);
    });
   

   test('name is sunil', () => {
      assert.equal('sunil', 'sunil');
    });
})
testSuite('Async Set 2',() => {
  test('object assertion',(done)=>{
  setTimeout(()=>{
     done(null,{a:2,b:3});
  },3000);
  },(...params)=>{
      var [successLogger,failureLogger,desc,descArray,index,loggerObject,printToFile,err,value]=params;
      if(err){
      descArray[index] = loggerObject(failureLogger,desc,err.message);
      return;
      }
      try{
        assert.equal(value.a,2);
        assert.equal(value.b,3);
       
        descArray[index] = loggerObject(successLogger,desc);
      }catch (e){
       descArray[index] = loggerObject(failureLogger,desc,e.message);
      }
      printToFile(descArray);
  });

  test('array assertion',(done) => {
  setTimeout(() => {
     done(null,[1,2,3,45,5]);
  },5000);
  },(...params)=>{
      var [successLogger,failureLogger,desc,descArray,index,loggerObject,printToFile,err,value]=params;
      if(err){
      descArray[index] = loggerObject(failureLogger,desc,err.message);
      return;
      }
      try{
        assert.equal((value.length==5),false);
       
        descArray[index] = loggerObject(successLogger,desc);
      }catch (e){
       descArray[index] = loggerObject(failureLogger,desc,e.message);
      }
      printToFile(descArray);
  });

  test('string assertion',(done)=>{
  setTimeout(()=>{
     done(null,'mocha');
  },7000);
  },(...params)=>{
      var [successLogger,failureLogger,desc,descArray,index,loggerObject,printToFile,err,value]=params;
      if(err){
      descArray[index] = loggerObject(failureLogger,desc,err.message);
      return;
      }
      try{
        assert.equal(value.toUpperCase(value),'MOCHA');
       
        descArray[index] = loggerObject(successLogger,desc);
      }catch (e){
       descArray[index] = loggerObject(failureLogger,desc,e.message);
      }
      printToFile(descArray);
  });
  
  test('synchronous test in between asynchronous',()=>{
    assert.equal(!![0], false);
  });

  test('number assertion',(done)=>{
  setTimeout(()=>{
     done(null,45);
  },7000);
  },(...params)=>{
      var [successLogger,failureLogger,desc,descArray,index,loggerObject,printToFile,err,value]=params;
      if(err){
      descArray[index] = loggerObject(failureLogger,desc,err.message);
      return;
      }
      try{
        assert.equal((value<34),true);
       
        descArray[index] = loggerObject(successLogger,desc);
      }catch (e){
       descArray[index] = loggerObject(failureLogger,desc,e.message);
      }
      printToFile(descArray);
  });
})
