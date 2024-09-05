# Step-by-Step Guide: Writing and Running Tests for Your API

## Getting Started

### 1. **Set Up Your Tools**:
   Before you can write and run tests, you need to install some tools. These tools will help you check if your API is working correctly. To install them, follow these steps:

   1. Open your terminal (this is the place where you type commands).
   2. Type the following command and press Enter:

   ```bash
   npm install mocha chai chai-http sinon --save-dev
   ```

   - **What This Does**: This command installs four important tools:
     - **Mocha**: Helps you run your tests.
     - **Chai**: Helps you check if the results of your tests are what you expected.
     - **Chai-HTTP**: Helps you make HTTP requests (like GET, POST) during your tests.
     - **Sinon**: Helps you spy on functions and control how they behave during your tests.

### 2. **Prepare Your Database**:
   - **Why This is Important**: Your database is where all your data is stored. When you run tests, you don't want to accidentally mess up your real data. So, it's a good idea to set up a separate database just for testing.
   - **Connect to Your Database**: Make sure that your test environment can connect to this test database.

## Setting Up `npm test`

### Step 1: **Define the Test Command in `package.json`**
   - **What is `package.json`?**: This is a special file in your project that keeps track of your project's settings, including scripts you can run.
   - **What is a Script?**: A script is a command that you can run to do a specific task. In this case, we're going to set up a script that will run all your tests.

   1. Open the `package.json` file in your project.
   2. Find the `"scripts"` section. It might look something like this:

   ```json
   {
     "scripts": {
       "start": "node app.js"
     }
   }
   ```

   3. Add a new line under `"start"` that looks like this:

   ```json
   {
     "scripts": {
       "start": "node app.js",
       "test": "mocha --timeout 10000" // This tells npm to run Mocha to execute your tests
     }
   }
   ```

   - **Explanation**:
     - **`"test": "mocha --timeout 10000"`**: This line tells npm that whenever you run the `npm test` command, it should use Mocha to run your tests. The `--timeout 10000` part gives each test up to 10 seconds to finish, which can be useful if your tests take a little longer to run.

### Step 2: **Run the Tests**
   - **How to Run Your Tests**: Now that you've set up the test script, you can run all your tests by typing the following command in your terminal:

   ```bash
   npm run test
   ```

   - **What Happens When You Run This**: When you type `npm run test` npm looks at your `package.json` file, finds the `"test"` script you added, and runs it. This script runs all the test files in your project.
   - **What to Name Your Test Files**: It's important to follow a consistent naming convention so that your test runner can easily find and execute your tests. A common and recommended format is `00.agent.test.js`.

- **Why This Naming Convention**?

    - **Prefix (`00.`)**: Using a prefix like `00.` helps organize your test files, making them easier to locate and ensuring they run in a specific order if needed.
    - **Descriptive Name (`agent`)**: The name should clearly indicate what the test is for. For instance, `agent` suggests that the tests in this file are related to the Agent functionality.
    - **Suffix (`.test.js`)**: The `.test.js` suffix is crucial because it tells the test runner (like Mocha) that this file contains tests. As long as your file ends with `.test.js`, the test runner will recognize it as a test file and include it in the test suite.
    - **Directory Structure**: Ensure that your test files are located in the designated test directory (e.g., `tests/` or `src/tests/`). The test runner will search through this directory to find and execute all files matching the `.test.js` naming convention.

## Writing and Running Tests

### Example 1: POST Request Test

#### Scenario:
You want to check if you can create a new Agent and save it in your database.

#### Breaking Down the Code:

```javascript
import chai from 'chai'; // Import Chai, a tool that helps you check if things work as expected

import chaiHttp from 'chai-http'; // Import Chai-HTTP, a tool that helps you make HTTP requests in your tests

import { describe, it, before } from 'mocha'; // Import Mocha functions that help structure your tests

import app from '../app.js'; // Import your application, which is what you are testing

import { PrismaClient } from '@prisma/client'; // Import Prisma Client, a tool to interact with your database
```

- **What’s Happening Here**:
  - You are bringing in the tools you need to write and run your test.
  - **Chai** helps you check if the results are what you expect.
  - **Chai-HTTP** helps you simulate making requests to your API (like POST, GET).
  - **Mocha** provides functions to help you organize and run your tests.
  - **Prisma Client** lets you interact with your database.

```javascript
const prisma = new PrismaClient(); // Set up a connection to your database

chai.use(chaiHttp); // Tell Chai to use Chai-HTTP for making HTTP requests

const { expect } = chai; // Set up Chai to use the 'expect' style for checking results
```

- **What’s Happening Here**:
  - **`const prisma = new PrismaClient();`**: This line sets up a connection to your database so that you can read from and write to it.
  - **`chai.use(chaiHttp);`**: This tells Chai to use Chai-HTTP so you can make HTTP requests in your tests.
  - **`const { expect } = chai;`**: This allows you to use the `expect` function to make assertions (checks) in your tests.

```javascript
describe('POST /api/agents', () => {
```

- **What’s Happening Here**:
  - **`describe`**: This function groups together related tests. Here, you’re saying, "I’m going to write tests for the POST request to `/api/agents`."

```javascript
  before(async () => {
    await prisma.$connect(); // Connect to the database

    await prisma.agent.deleteMany({}); // Delete all agents from the database to start fresh
  });
```

- **What’s Happening Here**:
  - **`before`**: This function runs before any of the tests inside this `describe` block. It’s where you **seed** your database.
  - **Seeding**:
    - **`await prisma.$connect();`**: This connects to your test database to make sure it's ready.
    - **`await prisma.agent.deleteMany({});`**: This deletes all the existing Agents in the database. You do this to start with a clean slate, so your test isn't affected by leftover data.

```javascript
  it('should create a new Agent', (done) => {
    chai.request(app)
      .post('/api/agents')
      .send({
        symbol: 'AGENT_001',
        credits: 1000,
        headquarters: 'HQ_001',
        shipCount: 1,
        startingFaction: 'FACTION_001',
        factionId: 'faction-uuid',
      })
      .end(async (err, res) => {
        expect(res).to.have.status(201); // Check if the server responded with status 201 (Created)

        expect(res.body).to.be.an('object'); // Check if the response is an object

        expect(res.body.symbol).to.equal('AGENT_001'); // Check if the agent's symbol is correct

        // Now check the database to confirm the Agent was created
        const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_001' } });
        expect(agent).to.not.be.null; // Make sure the Agent is not null, meaning it exists in the database

        done();
      });
  });
});
```

- **What’s Happening Here**:
  - **`it`**: This function contains the actual test. You’re saying, "I’m going to test if I can create a new Agent."
  - **Running the Test**:
    - **Making the Request**:
      - **`chai.request(app)`**: This starts a request to your application.
      - **`.post('/api/agents')`**: This says that the request will be a POST request to the `/api/agents` endpoint.
      - **`.send({...})`**: This sends the data for the new Agent to the server.
    - **Checking the Response**:
      - **`expect(res).to.have.status(201);`**: This checks if the server responded with status 201, which means the Agent was successfully created.
      - **`expect(res.body).to.be.an('object');`**: This checks if the response is an object.
      - **`expect(res.body.symbol).to.equal('AGENT_001');`**: This checks if the Agent's symbol in the response matches what you sent.
    - **Checking the Database**:
      - **`const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_001' } });`**: This fetches the Agent from the database to make sure it was saved.
      - **`expect(agent).to.not.be.null;`**: This checks if the Agent exists in the database (it's not null).

### Example 2: GET Request Test

#### Scenario:
You want to check if you can retrieve an Agent's details using their symbol.

#### Breaking Down the Code:

```javascript
describe('GET /api/agents/:symbol', () => {
```

- **What’s Happening Here**:
  - You are setting up a group of tests for the GET request to

 `/api/agents/:symbol`.

```javascript
  before(async () => {
    await prisma.$connect(); // Connect to the database

    await prisma.agent.create({ // Seed the database by creating an Agent to retrieve later

      data: {
        symbol: 'AGENT_002',
        credits: 2000,
        headquarters: 'HQ_002',
        shipCount: 2,
        startingFaction: 'FACTION_002',
        factionId: 'faction-uuid',
      },
    });
  });
```

- **What’s Happening Here**:
  - **Seeding**:
    - **`await prisma.$connect();`**: This connects to your test database.
    - **`await prisma.agent.create({...});`**: This creates a new Agent in the database that you will later retrieve in the test. This is called seeding the database with the data you need for your test.

```javascript
  it('should retrieve an Agent by symbol', (done) => {
    chai.request(app)
      .get('/api/agents/AGENT_002')
      .end((err, res) => {
        expect(res).to.have.status(200); // Check if the server responded with status 200 (OK)

        expect(res.body).to.be.an('object'); // Check if the response is an object

        expect(res.body.symbol).to.equal('AGENT_002'); // Check if the agent's symbol is correct

        done();
      });
  });
});
```

- **What’s Happening Here**:
  - **Running the Test**:
    - **Making the Request**:
      - **`.get('/api/agents/AGENT_002')`**: This sends a GET request to retrieve the Agent with symbol `AGENT_002`.
    - **Checking the Response**:
      - **`expect(res).to.have.status(200);`**: This checks if the server responded with status 200, which means the request was successful.
      - **`expect(res.body).to.be.an('object');`**: This checks if the response is an object.
      - **`expect(res.body.symbol).to.equal('AGENT_002');`**: This checks if the Agent's symbol in the response matches the one you requested.

### Example 3: PUT Request Test

#### Scenario:
You want to check if you can update an existing Agent's credits.

#### Breaking Down the Code:

```javascript
describe('PUT /api/agents/:symbol', () => {
```

- **What’s Happening Here**:
  - You are setting up a group of tests for the PUT request to `/api/agents/:symbol`.

```javascript
  before(async () => {
    await prisma.$connect(); // Connect to the database

    await prisma.agent.create({ // Seed the database by creating an Agent to update later

      data: {
        symbol: 'AGENT_003',
        credits: 3000,
        headquarters: 'HQ_003',
        shipCount: 3,
        startingFaction: 'FACTION_003',
        factionId: 'faction-uuid',
      },
    });
  });
```

- **What’s Happening Here**:
  - **Seeding**:
    - **`await prisma.$connect();`**: This connects to your test database.
    - **`await prisma.agent.create({...});`**: This creates a new Agent in the database with the initial credits set to 3000. You will later update this value in the test.

```javascript
  it('should update an Agent\'s credits', (done) => {
    chai.request(app)
      .put('/api/agents/AGENT_003')
      .send({
        credits: 3500, // The new value for credits
      })
      .end(async (err, res) => {
        expect(res).to.have.status(200); // Check if the server responded with status 200 (OK)

        expect(res.body).to.be.an('object'); // Check if the response is an object

        expect(res.body.credits).to.equal(3500); // Check if the agent's credits were updated correctly

        // Now check the database to confirm the Agent's credits were updated
        const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_003' } });
        expect(agent.credits).to.equal(3500); // Make sure the Agent's credits in the database are now 3500

        done();
      });
  });
});
```

- **What’s Happening Here**:
  - **Running the Test**:
    - **Making the Request**:
      - **`.put('/api/agents/AGENT_003')`**: This sends a PUT request to update the Agent with symbol `AGENT_003`.
      - **`.send({ credits: 3500 })`**: This sends the new value for the Agent's credits.
    - **Checking the Response**:
      - **`expect(res).to.have.status(200);`**: This checks if the server responded with status 200, which means the update was successful.
      - **`expect(res.body).to.be.an('object');`**: This checks if the response is an object.
      - **`expect(res.body.credits).to.equal(3500);`**: This checks if the credits in the response match the new value.
    - **Checking the Database**:
      - **`const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_003' } });`**: This fetches the Agent from the database to make sure the credits were updated.
      - **`expect(agent.credits).to.equal(3500);`**: This checks if the credits in the database were actually updated to 3500.

### Example 4: DELETE Request Test

#### Scenario:
You want to check if you can delete an Agent from the database.

#### Breaking Down the Code:

```javascript
describe('DELETE /api/agents/:symbol', () => {
```

- **What’s Happening Here**:
  - You are setting up a group of tests for the DELETE request to `/api/agents/:symbol`.

```javascript
  before(async () => {
    await prisma.$connect(); // Connect to the database

    await prisma.agent.create({ // Seed the database by creating an Agent to delete later

      data: {
        symbol: 'AGENT_004',
        credits: 4000,
        headquarters: 'HQ_004',
        shipCount: 4,
        startingFaction: 'FACTION_004',
        factionId: 'faction-uuid',
      },
    });
  });
```

- **What’s Happening Here**:
  - **Seeding**:
    - **`await prisma.$connect();`**: This connects to your test database.
    - **`await prisma.agent.create({...});`**: This creates a new Agent in the database that you will later delete in the test.

```javascript
  it('should delete an Agent', (done) => {
    chai.request(app)
      .delete('/api/agents/AGENT_004')
      .end(async (err, res) => {
        expect(res).to.have.status(200); // Check if the server responded with status 200 (OK)

        // Now check the database to confirm the Agent was deleted
        const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_004' } });
        expect(agent).to.be.null; // Make sure the Agent no longer exists in the database

        done();
      });
  });
});
```

- **What’s Happening Here**:
  - **Running the Test**:
    - **Making the Request**:
      - **`.delete('/api/agents/AGENT_004')`**: This sends a DELETE request to remove the Agent with symbol `AGENT_004`.
    - **Checking the Response**:
      - **`expect(res).to.have.status(200);`**: This checks if the server responded with status 200, which means the delete operation was successful.
    - **Checking the Database**:
      - **`const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_004' } });`**: This tries to fetch the Agent from the database to see if it still exists.
      - **`expect(agent).to.be.null;`**: This checks if the Agent was actually deleted (it should be `null` in the database).

## Detailed Debugging Section: Understanding `console.log`, Errors, and Fixes

### 1. **Using `console.log` for Debugging**

`console.log` is the main tool for printing out information while your code is running. This helps you understand what your code is doing at different stages.

#### Example: Creating a New Agent

Say you’re testing the creation of a new "Agent" in your database. You would use `console.log` to track the process step by step.

```javascript
it('should create a new Agent', (done) => {

  // Step 1: Log a message to indicate the test is starting
  console.log('Starting the test for creating a new Agent');

  // Step 2: Make a request to the API to create a new Agent
  chai.request(app)
    .post('/api/agents') // This is the endpoint we're testing (the URL where the API is listening for requests)

    .send({ // Send the following data as part of the request to create a new Agent

      symbol: 'AGENT_001',
      credits: 1000,
      headquarters: 'HQ_001', 
      shipCount: 1, 
      startingFaction: 'FACTION_001', 
      factionId: 'faction-uuid', 
    })
    .end(async (err, res) => {

      // Step 3: Log the response from the server
      console.log('Response received from the server:', res.body);

      // Step 4: Check if the server responded with a "201 Created" status
      expect(res).to.have.status(201); // This means the Agent was successfully created

      // Step 5: Check if the response is an object (i.e., the data returned is structured)
      expect(res.body).to.be.an('object');

      // Step 6: Check if the "symbol" field in the response matches what we sent
      expect(res.body.symbol).to.equal('AGENT_001');

      // Step 7: Check the database to make sure the Agent was actually saved
      const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_001' } });
      console.log('Agent found in the database:', agent); // Log the Agent retrieved from the database

      // Step 8: Make sure the Agent is not null, meaning it was saved correctly
      expect(agent).to.not.be.null;

      // Step 9: End the test and move on to the next one
      done();
    });
});
```

- **Breaking Down the Steps**:
  - **Step 1**: Start by logging a message to know the test is running.
  - **Step 2**: Make a request to the API to create a new Agent.
  - **Step 3**: After the server responds, log the response to understand what was returned.
  - **Step 4-6**: Use `expect` statements to check if the operation was successful.
  - **Step 7**: Check the database to ensure the data was saved.
  - **Step 8**: Confirm that the data exists in the database.
  - **Step 9**: Finish the test.

### 2. **Understanding Common Errors**

#### **Error: `AssertionError: expected ... to equal ...`**
- **What It Means**: The value you expected is different from what you received.
- **How to Fix It**:
  - **Step 1**: Log the actual value using `console.log` to see what was returned.
  - **Step 2**: Check the logic in your test or API code to correct the mismatch.

#### **Error: `TypeError: Cannot read property '...' of undefined`**
- **What It Means**: You’re trying to access a property on an object that doesn’t exist or is `undefined`.
- **How to Fix It**:
  - **Step 1**: Log the object before accessing its properties to understand why it’s `undefined`.
  - **Step 2**: Investigate why the object wasn’t set correctly.

#### **Error: `UnhandledPromiseRejectionWarning`**
- **What It Means**: A promise was rejected, but there was no code to handle the error.
- **How to Fix It**:
  - **Step 1**: Ensure all promises have error handling with `.catch()` or `try/catch`.
  - **Step 2**: Log the error to understand what went wrong.

#### **Error: `ECONNREFUSED`**
- **What It Means**: The test couldn’t connect to your API, likely because the server isn’t running.
- **How to Fix It**:
  - **Step 1**: Ensure your server is running before running tests.
  - **Step 2**: Add a check in your test setup to confirm the server is ready.

### 3. **Using `try/catch` for Better Error Handling**

In `async/await` code, wrapping parts of your code in `try/catch` blocks can help catch errors and provide more meaningful messages.

#### Example: Wrapping a Test in `try/catch`

```javascript
it('should create a new Agent', async () => {
  try {

    // Step 1: Make a request to the API to create a new Agent
    const res = await chai.request(app)
      .post('/api/agents')
      .send({
        symbol: 'AGENT_001',
        credits: 1000,
        headquarters: 'HQ_001',
        shipCount: 1,
        startingFaction: 'FACTION_001',
        factionId: 'faction-uuid',
      });

    // Step 2: Log the response from the server
    console.log('Response received:', res.body);

    // Step 3: Check if the server responded with a "201 Created" status
    expect(res).to.have.status(201);

    // Step 4: Check if the response is an object
    expect(res.body).to be an('object');

    // Step 5: Check if the "symbol" field in the response matches what we sent
    expect(res.body.symbol).to.equal('AGENT_001');

    // Step 6: Check the database to ensure the Agent was saved
    const agent = await prisma.agent.findUnique({ where: { symbol: 'AGENT_001' } });
    console.log('Agent found in database:', agent);
    expect(agent).to.not.be.null;

  } catch (error) {
    // Step 7: If there’s an error, log it
    console.error('Test failed with error:', error);
  }
});
```

- **Why Use This**: If an error occurs, the `catch` block will capture it, and you can log an informative message to help diagnose the problem.

### 4. **Best Practices for Debugging**

- **Start Simple**: Begin by logging basic messages to ensure the test is running.
- **Log Important Variables**: Focus on logging critical points, like API responses and database queries.
- **Isolate Issues**: If a test fails, comment out parts of the test to find the issue.
- **Review Error Messages**: Always read error messages carefully—they often provide valuable clues.

---
### Summary of Sections:

- **Seeding**:
  - **Purpose**: Seeding prepares your database for the test by setting up the data you need to test against.
  - **Common Actions**:
    - Connecting to the database.
    - Deleting old data to start fresh.
    - Adding (inserting) specific data that your test will use.

- **Running the Test**:
  - **Purpose**: This is where you actually perform the operation (like creating, retrieving, updating, or deleting an Agent) and check if it worked as expected.
  - **Common Actions**:
    - Making a request (e.g., POST, GET, PUT, DELETE) to your API.
    - Checking the response from the server to make sure it matches what you expected.
    - Checking the database to confirm that the operation was carried out correctly.
      
![Visitor Count](https://hits.sh/github.com/Morrnc1/Resource-Vault/edit/main/guide-vault/Api-Testing-Guide.md.svg?style=flat-square&label=Visitor%20Count&labelColor=C7A0FF&color=000000)
