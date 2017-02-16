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
        validationCondition: "fun1 || fun2 && (fun3 || fun4)", //these functions should be either in some namespace
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
        chkValidEvents: ["change", "keyup"],
        showInvalidMsg: "single message" || {
          untouchedFilled: "",
          touchedFilled: ""
          untouchUnfilled: "",
          touchUnfilled: "",
          filledValid: "",
          unfilledValid: "",
          fun1: "invalid1",
          fun2: "invalid2",
          fun3: "invalid3",
          fun4: "invalid4"
        },
        showInvalidMsgFor: {
          condition: false,
          invalidState: false
        }
        showInvalidMsgEvent: false, //default value or it can be an array like chkValidEvents
        onInvalid: callbackFunction, // to be fired when chkValidEvents detect invalidation
        onValid: callbackFunction // to be fired when chkValidEvents detect validation
      }
    ],
    resolve: function //a promise which will execute and will submit function only if it resolves
  }
  */
}
