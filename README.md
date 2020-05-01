# Frontend skill test Solution

You can find the published solution [here](jkmaswell.github.io/frontend-skill-test/).

## Repo
### To run locally:

- Download the repo.
- run `npm install`.
- To run the app, open a terminal and run `npm run ui:watch`.
- To run the server locally, run `npm run server:watch`.
- This app gets all info from a hosted server, so to being able to fetch data locally, be sure to change paths and use proxy on `vue.config.js` following this configuration: 
```javascript
devServer: {
	port: 8081,
	proxy: {
		'/api': {
			target: 'http://localhost:8080',
			changeOrigin: false,
			secure: false,
			headers: {
				'x-forwarded-proto': 'https',
			},
		},
	},
},
```
- To run unit test, run `npm run test:ui`.
- To run server test, run `npm run test:server`.

**Developed by Juan Camilo Isaza.**