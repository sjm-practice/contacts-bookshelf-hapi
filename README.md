# contacts-ember-hapi
This is a contacts application written for practice, based on a tutorial, using ember, node, hapi, and bookshelf.

This application was written from scratch, following a tutorial provided by Kirt Henrie. (http://blog.optimalcadence.com/building-an-application-with-ember-cli-hapi-bookshelf-knex-js-sqlite3-part-1/)

## Notes
* I am most interested in Hapi, Bookshelf, Knex (and not Ember at this time). I will most likely follow those portions of the tutorial. The client side / server side are well separated in this tutorial, and fairly easy to focus on one or the other.
    - I like how the tutorial starts out with a simple/flat implementation with Hapi, then refactors (based on hapi-ninja boilerplate) for scalability and maintainability
* __Since deciding to focus on server side, split the server out to its own repo__
* Overall, I like how the code is organized (was refactored), but there were some ommitted details/steps, which if you weren't already familiar with node and hapi, would have been frustrating to troubleshoot

## Tutorial Feedback
* I don't beleive the steps 'run bower install && npm install' in the client directory were listed (but needed) in the tutorial.
    - when following subsequent tutorial steps, needed components were not installed (and explicit error message was posted, to run bower install)
* During the step to create ember contact route (ember g resource contact), the process asks whether to overwrite client/app/models/contact.js (the tutorial didn't state what to do, I chose to not overwrite)
* Tutorial typo, during hapi refactor (part 2)
    - tutorial step:
``` var knex = require(knexConfig[settings.environment]);```
    - should have been: 
``` var knex = require('knex')(knexConfig[settings.environment]);```
* Some steps could be more atomic (which helps understand better the step)
    - started to refactor controllers, moved handler functions to new module
    - then went off did some other refactoring
    - then came back and completed the controller refactor (assigned routes.config to the relocated controllers)
    - Actually did the same thing with routes (moved routes, did other stuff, then came back and appropriately assigned routes to server) 
