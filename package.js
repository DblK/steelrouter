Package.describe({
  name: 'dblk:steel-router',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Iron router enforced for MeteorJS 3!',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');
  api.use('ecmascript');

  // meteor dependencies
  api.use('underscore');
  api.use('webapp', 'server');
  api.use('deps@1.0.0', 'client'); // Deprecated
  api.use('ui@2.0.0');
  api.use('templating@1.4.4');

  // for cloning
  api.use('ejson');

  // for dynamic scoping with environment variables
  api.use('meteor');

  // ==================================================
  // Core

  api.addFiles('lib/1_core/version_conflict_error.js');
  api.addFiles('lib/1_core/iron_core.js');

  // symbol exports
  api.export('Iron');

  // ==================================================
  // Router (aka base)

  // ==================================================
  // Layout
  api.use('blaze@3.0.0');

  // some utils
  api.use('tracker'); // for Deps

  // dynamic templates
    // ==================================================
  // Dynamic Template
  api.use('jquery@1.11.9 || 3.0.0');
  api.use('reactive-var');
  api.use('random');

  api.addFiles('lib/6_dynamic-template/version_conflict_error.js');
  api.addFiles('lib/6_dynamic-template/dynamic_template.html');
  api.addFiles('lib/6_dynamic-template/dynamic_template.js');
  api.addFiles('lib/6_dynamic-template/blaze_overrides.js');

  api.addFiles('lib/2_layout/version_conflict_errors.js');
  api.addFiles('lib/2_layout/default_layout.html');
  api.addFiles('lib/2_layout/layout.js');

  // connect like middleware stack for client/server
  // ==================================================
  // Middleware Stack


  // ==================================================
  // Url


  api.addFiles('lib/3_url/compiler.js');
  api.addFiles('lib/3_url/url.js');


  api.addFiles('lib/4_middleware-stack/handler.js');
  api.addFiles('lib/4_middleware-stack/middleware_stack.js');
  api.export('Handler', {testOnly: true});

  // client and server side url utilities and compiling

  // for reactive urls and pushState in the browser
  // ==================================================
  // Location

  api.use('appcache@1.2.9-beta300.7', {weak: true}); // Deprecated

  api.addFiles('lib/5_location/utils.js', 'client');
  api.addFiles('lib/5_location/state.js', 'client');
  api.addFiles('lib/5_location/location.js', 'client');

  api.export(['urlToHashStyle', 'urlFromHashStyle'], 'client', {testOnly: true});

  // for RouteController which inherits from this
  // ==================================================
  // Controller
  api.use('reactive-dict'); // reactive state variables




  api.addFiles('lib/7_controller/wait_list.js', 'client');
  api.addFiles('lib/7_controller/controller.js');
  api.addFiles('lib/7_controller/controller_server.js', 'server');
  api.addFiles('lib/7_controller/controller_client.js', 'client');

  api.addFiles('lib/8_base/current_options.js');
  api.addFiles('lib/8_base/http_methods.js');
  api.addFiles('lib/8_base/route_controller.js');
  api.addFiles('lib/8_base/route_controller_server.js', 'server');
  api.addFiles('lib/8_base/route_controller_client.js', 'client');
  api.addFiles('lib/8_base/route.js');
  api.addFiles('lib/8_base/router.js');
  api.addFiles('lib/8_base/hooks.js');
  api.addFiles('lib/8_base/helpers.js');
  api.addFiles('lib/8_base/router_client.js', 'client');
  api.addFiles('lib/8_base/body_parser_server.js', 'server');
  api.addFiles('lib/8_base/router_server.js', 'server');
  api.addFiles('lib/8_base/plugins.js');
  api.addFiles('lib/8_base/global_router.js');
  api.addFiles('lib/8_base/templates.html');

  // symbol exports
  api.export('Router');
  api.export('RouteController');








});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('dblk:steel-router');
  api.mainModule('steelrouter-tests.js');
});

Npm.depends({
  'body-parser': '1.20.2'
});