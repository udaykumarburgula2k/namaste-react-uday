# namaste-react-uday
namaste-react-uday practice

# Parcel
	- Dev build
	- Local Server
	- HMR Hot Module Replacement
	- File watching algorithm to rebuild only what is necessary. written in c++
	- Caching for faster rebuilds
	- Tree shaking - remove unused code
	- Image optimization
	- Compression
	- Minification
	- Bundling
	- Transitive dependencies
	- Zero config
	- Consistent hashing
	- Code Splitting
	- Differential bundling - support for older browsers
	- Support for JS, CSS, HTML, file assets, WASM and more
	- Plugin system
	- Support for monorepos
	- Support for typescript, jsx, scss, less and more
	- Diagnostics
	- Error handling
	- Source maps
	- HTTPS (only run using ssl)
	- Different dev and production builds


commands:
	- npm install -g parcel-bundler
	- parcel index.html
	- parcel build index.html --dist-dir build

	- npx parce build index.html --dist-dir build


 
	AppLayout
    - Header
        - Logo
        - Nav Items
    - Body
        - Search Bar
        - Restaurant List
        - Restaurant Card
    - Footer


	Two type of Export/Import
	1) Default 
	2) Named 

	#React Hooks
	1) Normal JS utility functions written by facebook developers inside the react
	2) Two important Hooks
		a) useState() : super powerful state variable, named import from react.
		b) useEffect() : 


	Reactjs is efficient DOM manipulation using Virtual DOM by using reconciliation algorithm.

	Virtual DOM
		- Lightweight copy of the real DOM
		- JS object
		- Faster to read and write
		- Updates done in Virtual DOM first
		- Diff b/w virtual DOM and real DOM is calculated
		- Only the diff is updated in the real DOM
		- Minimizes real DOM manipulations
		- Improves performance and user experience
		- React maintains Virtual DOM
		- When state of a component changes, a new Virtual DOM is created
		- Diff b/w previous Virtual DOM and new Virtual DOM is calculated using Reconciliation algorithm
		- Only the diff is updated in the real DOM
		- This process is called Reconciliation
		- Improves performance and user experience
		- Key prop is used to uniquely identify elements in a list
		- Helps React to identify which items have changed, added or removed
		- Improves performance during re-renders

	