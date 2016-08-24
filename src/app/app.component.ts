// One or more import statements to reference the things we need. Whatever that may be...
import { Component  } from '@angular/core';
/* Angular apps are modular. When we need something from a module or a library, we import it. Here we import the Angular
2 core, so that our component code can have access to the @Component decorator. Component is a decorator function
that takes a metadata object as argument. The function is applied to
the component class by prefixing the function with the @ suymbol and invoking it with a metadata oibject, just
above the class (AppComponent).
*/

// @Component decorator that tells Angular what template to use and how to create the component.
@Component({
    selector: 'my-app',
    template: '<h1>My Second Angular 2 App</h1>'
})
/* @Component allows us to associate metadata with the component class. The metadata tells Angular how to create and use
this component. This particular metadata object has two fields: a selector and a template.

The selector specifies a simple CSS selector for an HTML element that represents the component. Angular creates and
 displays an instance
of our AppComponent wherever it encounters a my-app element in the host HTML.

The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular
 how to render this component's view. Our template is a single line of HTML announcing "My First Angular 2 App". A
  more advanced template could contain data bindings to component properties and might identify other application
   components which have their own templates, and so on. In this way an Angular application becomes a tree of
    components.
*/


// A component class that controls the appearance and behaviour of a view through its template
export class AppComponent { }
/* This is an empty do nothing class named AppComponent. When we're ready to build a substantive application, we can
 expand this class with properties and application logic. Our AppComponent class is empty because we don't need it
  to do anything in this QuickStart. We export it so that we can import it elsewhere in our application, as in
   app.module.ts.
 */