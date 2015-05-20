# contacts-ember-hapi
This is a contacts application written for practice, based on a tutorial, using ember, node, hapi, and bookshelf.

This application was written from scratch, following a tutorial provided by Kirt Henrie. (http://blog.optimalcadence.com/building-an-application-with-ember-cli-hapi-bookshelf-knex-js-sqlite3-part-1/)

## Notes
* I am most interested in Hapi, Bookshelf, Knex (and not Ember at this time). I will most likely follow those portions of the tutorial. The client side / server side are well separated in this tutorial, and fairly easy to focus on one or the other.
    - I like how the tutorial starts out with a simple/flat implementation with Hapi, then refactors (based on hapi-ninja boilerplate) for scalability and maintainability
* __Since deciding to focus on server side, split the server out to its own repo__

## Tutorial Feedback
* I don't beleive the steps 'run bower install && npm install' in the client directory were listed (but needed) in the tutorial.
    - when following subsequent tutorial steps, needed components were not installed (and explicit error message was posted, to run bower install)
* During the step to create ember contact route (ember g resource contact), the process asks whether to overwrite client/app/models/contact.js (the tutorial didn't state what to do, I chose to not overwrite)
* 
