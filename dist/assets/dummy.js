/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/ember-cli-filter-by-query/tests/modules/ember-cli-filter-by-query/index.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-filter-by-query");
  test("modules/ember-cli-filter-by-query/index.js should pass jshint", function () {
    ok(true, "modules/ember-cli-filter-by-query/index.js should pass jshint.");
  });

});
define('dummy/ember-cli-filter-by-query/tests/modules/ember-cli-filter-by-query/util/filter.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-filter-by-query/util");
  test("modules/ember-cli-filter-by-query/util/filter.js should pass jshint", function () {
    ok(true, "modules/ember-cli-filter-by-query/util/filter.js should pass jshint.");
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember.js");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,2,contextualElement);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/computed-filter-by-query-test', ['ember', 'ember-cli-filter-by-query', 'ember-qunit', 'qunit'], function (Ember, computedFilterByQuery, ember_qunit, qunit) {

  'use strict';

  var Type, obj, germany, algeria, nigeria;
  var france, russia, mexico, somalia, brittain;
  qunit.module("computed property test", {
    beforeEach: function beforeEach() {
      Type = Ember['default'].Object.extend({
        foo: computedFilterByQuery['default']("list", "country", "query"),
        bar: computedFilterByQuery['default']("list", "continent", "query"),
        baz: computedFilterByQuery['default']("list", ["continent", "country"], "query") });

      germany = Ember['default'].Object.create({
        country: "Germany",
        capital: "Berlin",
        continent: "Europe"
      });

      algeria = Ember['default'].Object.create({
        country: "Algeria",
        capital: "Algiers",
        continent: "Africa"
      });

      nigeria = Ember['default'].Object.create({
        country: "Nigeria",
        capital: "Abuja",
        continent: "Africa"
      });

      france = Ember['default'].Object.create({
        country: "France",
        capital: "Paris",
        continent: "Europe"
      });

      russia = Ember['default'].Object.create({
        country: "Russia",
        capital: "Moscow",
        continent: "Europe/Asia"
      });

      mexico = Ember['default'].Object.create({
        country: "Mexico",
        capital: "Mexico City",
        continent: "North America"
      });

      somalia = Ember['default'].Object.create({
        country: "Somalia",
        capital: "Mogadishu",
        continent: "Africa"
      });

      brittain = Ember['default'].Object.create({
        country: "Great Brittain",
        capital: "London",
        continent: "Europe"
      });

      obj = Type.create({
        list: [brittain, germany, algeria, nigeria, somalia, mexico, russia, france]
      });
    }
  });

  ember_qunit.test("it filters a list", function (assert) {
    assert.expect(3);

    obj.set("query", "ger");
    assert.deepEqual(obj.get("foo"), [germany, algeria, nigeria], "it only includes matches");

    obj.set("query", "europe");
    assert.deepEqual(obj.get("bar.length"), 4, "filters case insensitive");

    obj.set("query", "ri");
    assert.deepEqual(obj.get("baz.length"), 5, "respects property key order");
  });

});
define('dummy/tests/unit/computed-filter-by-query-test.jshint', function () {

  'use strict';

  module('JSHint - unit');
  test('unit/computed-filter-by-query-test.js should pass jshint', function() { 
    ok(true, 'unit/computed-filter-by-query-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/filter-by-query-test', ['ember-cli-filter-by-query/util/filter', 'ember-qunit', 'qunit'], function (filterByQuery, ember_qunit, qunit) {

  'use strict';

  var array;

  qunit.module("utility function test");

  ember_qunit.test("filters with \"or\" conjunction", function (assert) {
    var input, output;
    assert.expect(1);

    input = [{ id: 1, foo: "psopao", bar: "opoko" }, { id: 2, foo: "aapoko", bar: "aaa" }, { id: 3, foo: "prsss", bar: "aa" }];

    output = filterByQuery['default'](input, ["foo", "bar"], "po aa", { conjunction: "or" });
    assert.deepEqual(output, [input[1], input[2], input[0]]);
  });

  ember_qunit.test("filters with \"and\" conjunction", function (assert) {
    var input, output;
    assert.expect(1);

    input = [{ id: 1, foo: "psopao", bar: "opoko" }, { id: 2, foo: "aapoko", bar: "aaa" }, { id: 3, foo: "prsss", bar: "aa" }];

    output = filterByQuery['default'](input, ["foo", "bar"], "po aa", { conjunction: "and" });
    assert.deepEqual(output, [input[1]]);
  });

});
define('dummy/tests/unit/filter-by-query-test.jshint', function () {

  'use strict';

  module('JSHint - unit');
  test('unit/filter-by-query-test.js should pass jshint', function() { 
    ok(true, 'unit/filter-by-query-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-cli-filter-by-query","version":"1.0.2.73d6412e"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map