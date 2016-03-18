import Ember from 'ember';
/*global Sifter*/

var filterByQuery = function(array, propertyKeys, query, options) {

  if (!query) {
    return array;
  }

  options = Ember.typeOf(options) === 'undefined' ? {} : options;
  propertyKeys = Ember.makeArray(propertyKeys);
  var input, sifter, result, sort, array, arrayAux = array;
  sort = 'sort' in options ? options.sort : true;
  delete options['sort'];
  
  // input = array.map(function(item) {
  //   var hash = {};
  //   propertyKeys.forEach(function(key) {
  //     hash[key] = Ember.get(item, key);
  //   });
  //   return hash;
  // });

  input = function(arr, haha, callback) {
    var aux = [];
    arr.map(function(item) {
      var hash = {};
      hash[haha] = Ember.get(item, haha);
      aux.push(hash);
    });

    if(callback && typeof callback === 'function') {
      callback.call(this, aux);
    }
  }

  for (var i = 0; i < query.length; i++) {

    options.fields = propertyKeys[i];
    options.limit = options.limit || array.length;

    // if (sort) {
    //   options.sort = propertyKeys[i].map(function(key) {
    //     return {field: key, direction: 'asc'};
    //   });
    // }

    //if(i == 0){
      input(arrayAux, propertyKeys[i], function(e) {
        console.log('arrayAux');
        console.log(options);
        sifter = new Sifter(e);
        result = sifter.search(query[i], options);
        console.log(result);
      });
    //}

    arrayAux = [];

    if(i < query.length - 1) {
      console.log('dsa');
      Ember.A(result.items.map( function(item) {
         arrayAux.push(Ember.A(array).objectAt(item.id));
      }));
    }

    
    
    // if (!sort) {
    //   sifter.getSortFunction = function() {
    //     return null;
    //   };
    // }

    

    //console.log(result);

    
  }

  return Ember.A(result.items.map( function(item) {
    return Ember.A(array).objectAt(item.id);
  }));

};

export default filterByQuery;



// import Ember from 'ember';
// /*global Sifter*/

// var filterByQuery = function(array, propertyKeys, query, options) {
//   if (!query) {
//     return array;
//   }

//   options = Ember.typeOf(options) === 'undefined' ? {} : options;
//   propertyKeys = Ember.makeArray(propertyKeys);
//   var input, sifter, result, sort;
//   sort = 'sort' in options ? options.sort : true;
//   delete options['sort'];
  
//   input = array.map(function(item) {
//     var hash = {};
//     propertyKeys.forEach(function(key) {
//       hash[key] = Ember.get(item, key);
//     });
//     return hash;
//   });

//   options.fields = options.fields || propertyKeys;
//   options.limit = options.limit || array.length;
//   if (sort) {
//     options.sort = propertyKeys.map(function(key) {
//       return {field: key, direction: 'asc'};
//     });
//   }
//   console.log(input);
//   sifter = new Sifter(input);
//   if (!sort) {
//     sifter.getSortFunction = function() {
//       return null;
//     };
//   }

//   result = sifter.search(query, options);

//   return Ember.A(result.items.map( function(item) {
//     return Ember.A(array).objectAt(item.id);
//   }));

// };

// export default filterByQuery;
