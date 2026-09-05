# Build a Timestamp Microservice
Build a full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks/

Install your project dependencies by entering npm i from the build-a-timestamp-microservice/ folder in the terminal.

Work within the server.js file.

After that, start your server by running npm start. Do not forget to restart your server in order for your code changes to take place.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories:

1. A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds.

2. A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT.

3. A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }.

4. Your project should handle dates that can be successfully parsed by new Date(date_string).

5. If the input date string is invalid, the API should return an object having the structure { error: "Invalid Date" }.

6. An empty date parameter should return the current time in a JSON object with a unix key.

7. An empty date parameter should return the current time in a JSON object with a utc key.

