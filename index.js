function FormValidatorClass(config) {
  //sample config file
  //normally states added to an elemnt initially is:
  //state= {touched: false, filled: false, valid: false}
  //this state is added to data attribute of all elements in the given form
  /*
  config = {
    name: "my-form",
    namespaces: [n1, n2], //namespaces reference for validation functions
    fields: [
      {
        name: "first-input",
        validationCondition: "fun1 || fun2 && fun3 || fun4", //these functions should be either in some namespace
        validState: {
          //anyone of below 4 should be present
          untouchedFilled: false, //autofill form case
          touchedFilled: false, //write something and its filled
          
          untouchUnfilled: false, //no write and nothing filled - non required field
          touchUnfilled: false, //wrote and emptied a field

          //anyone of below 2 should be present
          filledValid: false, //something is written and its valid
          unfilledValid: false //nothing is written and its valid - same as 'touchUnfilled'
        },
        warnState: {}, //same properties as validState but will not cause form invalidation
        chkValidEvents: ["change", "keyup"],
        onInvalid: callbackFunction, // to be fired when chkValidEvents detect invalidation
                  //on invalid also sends a arguement as Object. This object contains 3 properties,
                  //state, condition and event on which validation was checked, which are array of string.
                  //1) state contains validState options which failed
                  //2) condition contains the name of functions passed in validationConditions properties
                  //due to which invalidation happened.
                  //3) event contains the event on which invalidation occured. This is one the options passed
                  //in chkValidEvents property
        onWarn: callbackFunction, //same as onInvalid function. no form invalidation though
        onValid: callbackFunction // to be fired when chkValidEvents detect validation
      }
    ],
    resolve: function //a promise which will execute and will submit function only if it resolves
  }
  */
}
