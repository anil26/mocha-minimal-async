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
       try{
        assert.equal(![],true);
        done(null,'success');
       }catch(e){
          console.log('in catch block',e.message);
          done(e.message);
       }
       
    },3000);
  });
});

testSuite('Async Set 2 partial',()=>{
  test('async test 2',(done) => {
      setTimeout(()=>{
         try{
          assert.equal(![],true);
          done(null,'success');
         }catch(e){
            console.log('in catch block',e.message);
            done(e.message);
         }
         
      },3000);
    });
});

testSuite('Async Set 3 partial',()=>{
  test('async test 3',(done) => {
      setTimeout(()=>{
         try{
          assert.equal(![],true);
          done(null,'success');
         }catch(e){
            console.log('in catch block',e.message);
            done(e.message);
         }
         
      },4000);
    });
});


testSuite('Async Set 4 partial',()=>{
  test('name is anil', () => {
    assert.equal('anil','anil');
  });
  test('async test 4',(done) => {
      setTimeout(()=>{
         try{
          assert.equal(![],true);
          done(null,'success');
         }catch(e){
            console.log('in catch block',e.message);
            done(e.message);
         }
         
      },2000);
    });
  test('5 is equal to 5', () => {
    assert.equal(5, 5);
  });

});
