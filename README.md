# mini-mocha

A minimal synchronous mocha like DSL.


This project is based on the synchronous implemention of minimal mocha testing framework at https://github.com/ciju/mini-mocha.
This project provide asynchronous APi for testing asynchronous unit test and outputting the results in 'output.txt' file in tha base folder in inorder fashion.It means the sequences of running the test cases and output will be same irrespective of how many asynchronous tests are there in between.


```

test(<title>,<asynCallFunction>,<done>);
<title> : title of the test.
<asyncCallFunction> : Where user will do asunchronous tasks;
<done> : callbcak for asyncCallFunction

testSuite('Async Set 1 partial', () => {

  test('async test 1', (done) => {
    setTimeout(() => {  //do asynchronous tasks
      done(null, ![]);
    }, 7000);
  }, (...params) => {
    var [successLogger, failureLogger, desc, descArray, index, loggerObject, printToFile, err, value] = params;
    
    if (err) {
      descArray[index] = loggerObject(failureLogger, desc, err.message);
      return;
    }
    try {
      assert.equal(value, false);

      descArray[index] = loggerObject(successLogger, desc);
    } catch (e) {
      descArray[index] = loggerObject(failureLogger, desc, e.message);
    }
    printToFile(descArray);
  });

});
```
