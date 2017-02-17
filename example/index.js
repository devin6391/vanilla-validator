function fnLogicalOperator(logicalStr, namespaces) {
  var methodsArrRaw = logicalStr.split(/ \&\&|\|\||\?|\:|\(|\)/);

  var methodsArrImpure = methodsArrRaw.filter(function(val) {
    if(val.trim()){
      return val.trim()
    }
  });

  var methodsArr = methodsArrRaw.filter(function(val) {
    return val.trim();
  });

  var regexpArr = methodsArr.map(function(val) {
    return new RegExp("^" + val + "$", "gim");
  })
}
