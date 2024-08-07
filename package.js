Package.describe({
  name: 'dblk:steel-router',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Iron router enforced for MeteorJS 3!',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'body-parser': '1.12.4'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0');
  api.use('ecmascript');
  // api.mainModule('steelrouter.js');

  // meteor dependencies
  api.use('underscore');
  api.use('webapp', 'server');
  api.use('deps', 'client');
  api.use('ui');
  api.use('templating');

  // for cloning
  api.use('ejson');

  // for dynamic scoping with environment variables
  api.use('meteor');

  // main namespace and utils
  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  // ui layout
  // api.use('iron:layout@1.0.12');

  // connect like middleware stack for client/server
  // api.use('iron:middleware-stack@1.1.0');

  // client and server side url utilities and compiling
  // api.use('iron:url@1.1.0');

  // for reactive urls and pushState in the browser
  // api.use('iron:location@1.0.11');

  // for RouteController which inherits from this
  // api.use('iron:controller@1.0.12');

  api.add_files('lib/base/current_options.js');
  api.add_files('lib/base/http_methods.js');
  api.add_files('lib/base/route_controller.js');
  api.add_files('lib/base/route_controller_server.js', 'server');
  api.add_files('lib/base/route_controller_client.js', 'client');
  api.add_files('lib/base/route.js');
  api.add_files('lib/base/router.js');
  api.add_files('lib/base/hooks.js');
  api.add_files('lib/base/helpers.js');
  api.add_files('lib/base/router_client.js', 'client');
  api.add_files('lib/base/body_parser_server.js', 'server');
  api.add_files('lib/base/router_server.js', 'server');
  api.add_files('lib/base/plugins.js');
  api.add_files('lib/base/global_router.js');
  api.add_files('lib/base/templates.html');

  // symbol exports
  api.export('Router');
  api.export('RouteController');

  // ==================================================
  // Layout
  // api.use('templating');
  api.use('blaze');

  // some utils
  // api.use('underscore');
  api.use('tracker'); // for Deps

  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  // dynamic templates
  // api.use('iron:dynamic-template@1.0.12');

  // if you use iron-layout you should get iron-dynamic-template for free!
  // api.imply('iron:dynamic-template');

  // error messages to remove old packages
  api.use('cmather:blaze-layout@0.2.5', {weak: true});
  api.use('cmather:iron-layout@0.2.0', {weak: true});

  api.add_files('lib/layout/version_conflict_errors.js');
  api.add_files('lib/layout/default_layout.html');
  api.add_files('lib/layout/layout.js');

  // ==================================================
  // Core

  // dependencies
  // api.use('underscore');
  // api.use('ejson'); // for cloning

  // remove migrated version
  api.use('cmather:iron-core@0.2.0', {weak: true});

  api.add_files('lib/core/version_conflict_error.js');
  api.add_files('lib/core/iron_core.js');

  // symbol exports
  api.export('Iron');

  // ==================================================
  // Dynamic Template
  // api.use('blaze');
  // api.use('underscore');
  // api.use('ui');
  api.use('jquery');
  // api.use('tracker');
  api.use('reactive-var');
  // api.use('templating');
  api.use('random');

  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  api.add_files('lib/dynamic-template/version_conflict_error.js');
  api.add_files('lib/dynamic-template/dynamic_template.html');
  api.add_files('lib/dynamic-template/dynamic_template.js');
  api.add_files('lib/dynamic-template/blaze_overrides.js');

  // ==================================================
  // Middleware Stack
  // api.use('underscore');
  // api.use('ejson');

  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  // api.use('iron:url@1.0.11');

  api.add_files('lib/middleware-stack/handler.js');
  api.add_files('lib/middleware-stack/middleware_stack.js');
  api.export('Handler', {testOnly: true});

  // ==================================================
  // Url
  // api.use('underscore');

  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  api.add_files('lib/url/compiler.js');
  api.add_files('lib/url/url.js');

  // ==================================================
  // Location
  // api.use('underscore');
  // api.use('tracker');
  // api.use('jquery');

  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  // api.use('iron:url@1.0.11');

  api.use('appcache', {weak: true});

  api.add_files('lib/location/utils.js', 'client');
  api.add_files('lib/location/state.js', 'client');
  api.add_files('lib/location/location.js', 'client');

  api.export(['urlToHashStyle', 'urlFromHashStyle'], 'client', {testOnly: true});

  // ==================================================
  // Controller
  // api.use('underscore');
  // api.use('tracker'); // reactivity
  api.use('reactive-dict'); // reactive state variables
  // api.use('templating');

  // api.use('iron:core@1.0.11');
  // api.imply('iron:core');

  // api.use('iron:layout@1.0.12');
  // api.use('iron:dynamic-template@1.0.12');

  api.add_files('lib/controller/wait_list.js', 'client');
  api.add_files('lib/controller/controller.js');
  api.add_files('lib/controller/controller_server.js', 'server');
  api.add_files('lib/controller/controller_client.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('dblk:steelrouter');
  api.mainModule('steelrouter-tests.js');
});
