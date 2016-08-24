"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
/*
We import two things we need to launch the application:
    1. Angular's browser platformBrowserDynamic function
    2. The application module, AppModule
We then call platformBrowserDynamic().bootstrapModule with AppComponent. Note that Bootstrapping isn't core because
 there isn't a single way to bootstrap the app.
We might load the module on a mobile device with Apache Cordova or NativeScript, or we might wish to render the
 first page of our application on the server to improve launch performance or facilitate SEO (Search Engine
  Optimization). These targets require a different kind of bootstrap function that we'd import from a different
   library. This is much of the reason we have this small main.ts file, as we might launch AppModule in multiple
    environments with different bootstraps.
*/
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map