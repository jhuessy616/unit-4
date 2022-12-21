// ? URL

/* 
    ? Uniform Resource Locator (Identifier)

    * Address that allows us to access web resources
    * DNS (domain name) server resolves string address representation into IP address
    * http:// & https:// -> protocol types
    * www.apple.com -> domain
        * can have subdomains (ex: lms.uprighted.com)
        * .com; .pl; .co.uk <- top-level domains
        * domain == IP address (once resolved by DNS server)
    * Port :80 HTTP or :443 for HTTPS
    * Socket == IP address || domain + the port
    * Path
        * Location and structure of content within a resource
    * Query Parameters
        * map to key-value pairs within an object
        * begin with ?
        * separated by &
        * property assigned to value (ex: ?name=Paul&age=22)
        * usually does not contain " "
    * Anchor
        * id's that allow us to go to a specific point in the document
        * ex: #footer will take you to an element with an id="footer"

*/

// API

/* 
    ? Application Programming Interface

    * A way for a client (browser) to communicate with a server
    * Allows for the HTTP request and response lifecycle
    
    ? Part of RESTful architecture
    
    * Representational State Transfer
    * Stateless, cacheable, layered system allowing for req/res using:
        * CRUD thru POST, GET, PUT, & DELETE methods
        * HTTP requests are sent from the client:
            * headers
            * body (optional)
            * queries or query parameters
            * status codes
        * HTTP response received from the server
*/

// ? Fetch API

/* 
    ? Fetch is an asynchronous function
    
    * We don't know how long request-response lifecycle will take
1. Fetch your resource and return a promise
    2. Use .then resolver to catch fetch's return and assign to a parameter
    3. The parameter is part of Response interface object
    4. Body of our response is inaccessible. Part of ReadableStream
    5. Utilize Response interface .json() method to read the stream
    6. json() method returns a promise
    7. Resolve the promise with one more .then() resolver
    8. Catch the return as a data parameter    
*/
    


let url = "https://pokeapi.co/api/v2/pokemon/"

// with .then 
fetch(url)
.then(response => response.json()) 
    .then(data => console.log(data))



    // If just want names 
//     fetch(url)
// .then(response => response.json()) 
// .then(data => {
//     data.results.forEach(pokemon => console.log(pokemon.name))
// })

// Asynchronous Function Fetch

/* 
    ! Promise object can only be resolved (needs .then or await)
    ! Response object can actually be accessed via a member access operator . (.notation )
*/

async function getData() {
    let res = await fetch(url)
    
    let data = await res.json()
    console.log(data)
}

getData()
    // ? Data return is a JSON

/* 
    * JavaScript Object Notation
    * a string representation of an object ' { } '
    * Enclosed by ' '
    * Properties AND values are enclosed by " "
    * Property to value is : separated
    * key:value pairs are comma separated
    * NO TRAILING COMMA!
    * No methods or expressions allowed
*/

let sampleObject = {
    name: "Paul",
    age: 22,
    address: "123 Main St"
}

// makes string 
// string to send over web easier. turn into primitive value
let sampleObjectToString = JSON.stringify(sampleObject)
console.log(sampleObjectToString)


// make back to object 
let sampleString = '{ "name": "Danika", "age": 22, "address": "124 Main St"}'

let sampleStringToObject = JSON.parse(sampleString)
console.log(sampleStringToObject)