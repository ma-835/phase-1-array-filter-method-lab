// const collectionofdrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collectionofdrivers, string ){
    return collectionofdrivers.filter(function(name){
        return name.toUpperCase() === string.toUpperCase(); // to make things case insenstive
    })
}
    function fuzzyMatch(drivers, query) {
        var matchingDrivers = [];
      
        for (var i = 0; i < drivers.length; i++) {
          var driver = drivers[i];
          if (driver.startsWith(query)) {
            matchingDrivers.push(driver);
          }
        }
      
        return matchingDrivers;
      }
      var drivers = ["John Smith", "Jane Doe", "Adam Johnson", "Alex White"];
      var query = "Jo";
      
      var matchingDrivers = fuzzyMatch(drivers, query);
      console.log(matchingDrivers);

        function matchName(drivers, name) {
            var matchingDrivers = [];
          
            for (var i = 0; i < drivers.length; i++) {
              var driver = drivers[i];
              if (driver.name === name) {
                matchingDrivers.push(driver);
              }
            }
          
            return matchingDrivers;
          }
          