// var express = require('express')
//
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import {StaticRouter} from 'react-router-dom';
// import {StaticRouter} from 'react-router';
//
// import {routes} from './routes';
//
// var app = express()
// // Let's assume this is an Express app
// app.use((req, res) => {
//   const context = {
//     splitPoints: [], // Create an empty array
//   };
//   const markup = ReactDOMServer.renderToString(
//       <StaticRouter
//           location={req.url}
//           context={context}
//       >
//         {renderRoutes(routes)}
//       </StaticRouter>
//   )
//   // now context.splitPoints contains the names of the chunks we used during rendering
//
//   const html = `
//     <!doctype html>
//     <html>
//       <head>
//         <title>My App</title>
//       </head>
//       <body>
//         <div id="app">${markup}</div>
//         <script>
//           window.splitPoints=${JSON.stringify(context.splitPoints)}; // Send it down to the client
//         </script>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });