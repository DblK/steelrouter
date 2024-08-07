// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by steelrouter.js.
import { name as packageName } from "meteor/dblk:steel-router";

// Write your tests here!
// Here is an example.
Tinytest.add('steelrouter - example', function (test) {
  test.equal(packageName, "steel-router");
});
