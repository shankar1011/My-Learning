# My-Learning

Rules of class components:--
	1. Must be a javascript class
	2. Must extend(subclass) React.Component
	3. Must define a 'render' method that returns some amount of JSX.
	
	
Rules of state:--
	1. Only usable with class components(technically can be used with functional components using the 'hooks' system)
	2. You will confuse props with state :(
	3. 'State' is a JS object that contains data relevant to a component
	4. Updating state on a component causes the component to (almost) instantly rerender
	5. State must be initialized when a component is created
	6. State can only be updated using the function 'setState'
	

App lifecycle walkthrough:--
	JS file loaded by the browser 
	Instance of App component is created 
	App components 'constructor' function gets called 
	State object is created and assigned to the 'this.state' property
	We call geolocation service 
	React calls the component render method
	App return JSX, gets render to page as HTML
	
	-------------------------------------------
	
	
	We get result of geolocation!
	We update our state object with a call to 'this.setState'
	React sees that we updated the state of a component 
	React calls our 'render' method a second time
	Render method returns some (updated) JSX
	React takes that JSX and updates content on the screen
	
	
