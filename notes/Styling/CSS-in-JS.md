Benefits 
- No classname collision
	- generates unique class names when styles are converted to CSS.
- Business logic and styles for your components can live together.
	- Styles for a component can be located together with a component itself, either in the same file or in a separate file that's located in the same folder.
- Styles can depend on JavaScript variables.

Drawbacks
- Increment in bundle size.
	- styles become part of your JavaScript code.
- can't cache your javascript and css separately.
- reduction in performance. (more time for website to be interactive.)

