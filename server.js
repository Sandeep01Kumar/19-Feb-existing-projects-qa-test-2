/**
 * @file Minimal "Hello World" HTTP server using Node.js built-in http module.
 * This module creates a simple HTTP server that responds to all incoming requests
 * with a plain text "Hello, World!" message regardless of the HTTP method, URL path,
 * or request headers.
 *
 * @module hello_world
 * @author hxu
 * @version 1.0.0
 * @license MIT
 *
 * @example
 * // Start the server from the command line:
 * // node server.js
 * // Server running at http://127.0.0.1:3000/
 *
 * @example
 * // Test with curl:
 * // curl http://127.0.0.1:3000/
 * // Hello, World!
 */

// Import the built-in Node.js HTTP module — provides functionality to create an HTTP server
// without any external dependencies, using the CommonJS require() module system
const http = require('http');

/**
 * Server hostname — the network interface address the server binds to.
 * @constant {string}
 * @default '127.0.0.1'
 */
// Bind to localhost (127.0.0.1) for security — restricts access to the local machine only,
// preventing connections from external network interfaces
const hostname = '127.0.0.1';

/**
 * Server port number — the TCP port the server listens on for incoming connections.
 * @constant {number}
 * @default 3000
 */
// Use port 3000 as the default development port — a common convention for Node.js applications
// that avoids conflicts with well-known ports (80, 443) which require elevated privileges
const port = 3000;

/**
 * Creates an HTTP server instance with a request handler callback.
 * The handler responds to every incoming request identically — regardless of HTTP method,
 * URL path, query parameters, or request headers — with a 200 OK status and plain text greeting.
 *
 * @param {http.IncomingMessage} req - The incoming HTTP request object (unused — server ignores all request details)
 * @param {http.ServerResponse} res - The server response object used to send the HTTP response back to the client
 */
// Create the HTTP server using the factory pattern — http.createServer() returns a new http.Server instance
// with the provided callback invoked for every incoming HTTP request
const server = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK) — indicates the request was successful
  res.statusCode = 200;
  // Set the Content-Type response header to 'text/plain' — tells the client the response body
  // is plain text rather than HTML, JSON, or other content types
  res.setHeader('Content-Type', 'text/plain');
  // Write the response body 'Hello, World!\n' and signal that the response is complete —
  // res.end() both writes the final data and closes the writable stream, sending the response to the client
  res.end('Hello, World!\n');
});

/**
 * Starts the HTTP server, binding it to the specified hostname and port.
 * Once bound, the server begins accepting incoming TCP connections and the
 * callback logs the server's URL to the console as a startup confirmation.
 *
 * @param {number} port - The TCP port to listen on (3000)
 * @param {string} hostname - The network interface to bind to ('127.0.0.1')
 * @param {Function} callback - Called once the server is successfully bound and listening
 */
// Bind the server to the specified hostname and port, then start listening for connections —
// the callback fires once the server is ready to accept requests
server.listen(port, hostname, () => {
  // Log the server URL to the console as a startup confirmation message —
  // uses a template literal to dynamically insert the hostname and port values
  console.log(`Server running at http://${hostname}:${port}/`);
});
