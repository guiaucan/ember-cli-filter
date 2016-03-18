// import Ember from 'ember';
// import filterByQuery from 'ember-cli-filter-by-query/util/filter';

// var computedFilterByQuery = function(dependentKey, propertyKeys, queryKey, options) {
//   propertyKeys = Ember.makeArray(propertyKeys);

//   return Ember.computed( queryKey, '' + dependentKey + '.@each.{' + propertyKeys.join(',') + '}', function() {

//     var array = this.get(dependentKey); //Queries
//     var query = this.get(queryKey) || ''; //Nome passado o input
//     return filterByQuery(array, propertyKeys, query, options);
//   });
// };

// export default computedFilterByQuery;

import Ember from 'ember';
import filterByQuery from 'ember-cli-filter-by-query/util/filter';

var computedFilterByQuery = function(dependentKey, propertyKeys, queryKey, options) {
	propertyKeys = Ember.makeArray(propertyKeys);

	return Ember.computed( queryKey + '.@each', dependentKey, function() {
		var array = this.get(dependentKey);
		var query = [];
		for (var i = 0; i < queryKey.length; i++) {
			var aux = this.get(queryKey[i]) || '';
			query.push(aux);
		};
		return filterByQuery(array, propertyKeys, query, options);
	});
};

export default computedFilterByQuery;

