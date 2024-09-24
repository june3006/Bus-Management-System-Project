# Project: Bus Management System

## Introduction

This project aims to develop a web-app bus management system using programming technologies. The system aims to enhance bus service operations by integrating functionalities such as scheduling, route planning, ticketing. Therefore, an effective bus management system is needed to make the process of scheduling and ticketing faster and more convenient. As a result, the "Becamex Tokyu Bus Management System" project was created to meet that demand.

## Objective

This final report for the Programming Exercise Project, "Becamex Tokyu Bus Management System", is submitted to partially satisfy the requirements of the Programming Exercise course at Vietnamese-German University. Moreover, our goal is to realize "Becamex Tokyu Bus Management Systemh" as a usable application for transportation companies to manage their system.

The platform is designed to be used by the 2 main roles (Transport Operator, Passenger):

- Transport Operator is in charge of the organization and is able to manage all bus schedule as well as its information.
- Passenger can view bus schedule and buy ticket through this system.

## Acknowledgements

- 17422 – Phạm Trương Nhật Nguyên
- 17074 – Đặng Trung Hiếu
- 13089 – Phan Nhật Nguyên
- 15713 - Trần Đăng Khoa
- 16299 - Võ Như Đức Nghĩa

| Task                  | Nguyên Phạm | Hiếu Đặng | Nguyên Phan | Khoa Trần |    Nghĩa Võ    |
| :-------------------- | :---------: | :-------: | :---------: | :-------: | :------------: |
| Application structure |      x      |     x     |      x      |     x     |                |
| Prepare report        |      x      |     x     |      x      |     x     |                |
| Prepare document      |             |           |      x      |     x     |                |
| Frontend              |             |     x     |             |     x     | x (not finish) |
| Wirefram design       |             |     x     |             |     x     |                |
| Backend (Server)      |      x      |     x     |             |           |                |
| Backend (Routes)      |      x      |     x     |             |           |                |
| Backend (Database)    |      x      |     x     |             |           |                |
| DevOps                |      x      |     x     |             |           |                |

## Designing the system

### System analysis

#### 1. Usecase diagrams

<p align="center">
  <img src="https://imgur.com/4eXrkV0.png" />
</p>
<p style="text-align: center;"> <i>Figure 1.1: Use Case Diagram for Passenger</i></p><br>

<p align="center">
  <img src="https://imgur.com/PJo5wvR.png" />
</p>
<p style="text-align: center;"> <i>Figure 1.2: Use Case Diagram for Transport Operator</i></p><br>

#### 2. Activity diagrams

##### 2.1. Login

<p align="center">
  <img src="https://imgur.com/CBlMO31.png" />
</p>
<p style="text-align: center;"> <i>Figure 2.1: Login Activity Diagram</i></p>

##### 2.2. For Passeger

<p align="center">
  <img src="https://imgur.com/eAMTgmT.png" />
</p>
<p style="text-align: center;"> <i>Figure 2.2.1: Booking Ticket Activity Diagram</i></p><br>

<p align="center">
  <img src="https://imgur.com/GP5GLto.png" />
</p>
<p style="text-align: center;"> <i>Figure 2.2.2: User-Setting Activity Diagram</i></p><br>

##### 2.3. For Transport Operator

<p align="center">
  <img src="https://imgur.com/KNJP8RS.png" />
</p>
<p style="text-align: center;"> <i>Figure 2.3.1: Manage Schedule Activity Diagram</i></p><br>

#### 3. Database design

Two different databases are used for the project: SQL and MySQL workbench. Storing business information required a relational structure since the data is tightly coupled, therefore, MySQL workench is preferred for the task. There are seven tables, naming:

- Businfo: general information of bus.
- Schedules: information of the Schedules
- Bookings: information of bookings
- user: general information of accounts.
- Passengers: information of users who booked ticket.
- Payments: information of payments
- Seats: information of the seat
- RouteInfo: general information of routes.

![alt text](<Reference/ER Diagram.png>)

<p style="text-align: center;"> <i>Figure 3.1: Entity Relationship Diagram</i></p>

![alt text](<Reference/Database Schema.png>)

<p style="text-align: center;"> <i>Figure 3.2: Database Relationship Design</i></p>

A set of constraints is provided in order to keep the database's integrity and consistency:

- _fk_Passenger_ID_: foreign key constraint, referencing _Passengers_ to _Payments_;
- _fk_Schedule_ID_: foreign key constraint, referencing _Schedules_ to _Payments_;
- _fk_Route_ID_: foreign key constraint, referencing _RouteInfos_ to _Schedules_;
- _fk_Route_ID_: foreign key constraint, referencing _RouteInfos_ to _Seats_;
- _fk_Bus_ID_: foreign key constraint, referencing _BusInfo_ to _Schedules_;

#### 4. System architecture

For the system architechture, our system using the three-tier architechture, which consist of 5 running server , including databases:

- Five (5) webservers exposed to client from which the client will get static contents like HTML, CSS for six (6) different websites: Sign in, Sign up, Booking, Profile, Homepage, About us (For simplicity we will consider this as only one webserver).
- Mysql API server whom the webserver will call upon to actually perform core actions in our business model, like booking ticket and displaying bus schedule. This server also provides barely minimum authentication via JWT and authorization with RBAC, as we do not have enough time to create our own authentication server.
- A remote Mysql server for storing all business related information.

![](https://imgur.com/cxRYEYY.png)

<p style="text-align: center;"> <i>Figure 4: Architecture of our system</i></p>

## Implementing the system

### Backend

The backend in our application acts as an API server. It is responsible for handling all requests from the frontend and returning the appropriate data. The backend is written in [nodeJS](https://nodejs.org/en), [sequelize](https://sequelize.org/), [ExpressJS](https://expressjs.com/), [MySQL Workbench](https://www.mysql.com/products/workbench/), [Postman](https://www.postman.com/).

#### 1. Routes

The backend is responsible for handling all requests from the frontend. The following table shows all routes that the API server handle:
| Route | Method | Description |
| :------------------ |:------:|:----|
| /signup | POST |Route to handle user sign-up requests|
| /signin | POST |Route to handle user sign-in requests|
| /profile | GET |Route to fetch a user's profile, protected by token authentication|
| /schedule | GET | Route to retrieve all schedule information|
/schedule | POST | createSchedule|
| /schedule/:id | PUT | ModifySchedule|
| /schedule/:id | DELETE | DeleteSchedule|
| /payment| GET |Route to retrieve all payment information|
/payment| POST | Route to create a new payment record|
/payment/:paymentId| PUT | Route to update a payment |  
 /payment/:paymentId| DELETE | Route to delete a payment |
| /passenger | GET | Route to retrieve all passenger information |
/passenger | POST | Route to create a new passenger record |
/passenger/:passengerId | PUT | Route to update passenger information |
/passenger/:passengerId | DELETE | Route to delete passenger information |
| /busInfos | GET | Retrieve all bus information |
/busInfors | POST | Create a new bus record |
/busInfos/:busID | PUT | Route to update bus information |
/busInfos/:busID | DELETE | Route to delete bus information |
/book | POST | Route to handle creating a new booking |

#### 2. Server

The server consists of 3 layers: Middleware, Controller, and Database.

![](https://i.imgur.com/Mp8GLfr.png)

<p style="text-align: center;"> <i>Figure 5: Architecture of Server</i></p>

These layers provide different functionalities:

- Middleware: In our project, we're using the jsonwebtoken library to implement authentication middleware for our ExpressJS-based application. This middleware is crucial for securing endpoints by ensuring that only requests with valid JSON Web Tokens (JWT) can proceed. Here’s how our middleware functions:

- Token Extraction: The middleware begins by extracting the JWT from the Authorization header of the incoming request. The expected format is "Bearer TOKEN," where "TOKEN" is the JWT. If no token is present, the middleware sends a 401 Unauthorized status, stopping further processing of the request.

- Token Verification: If a token is found, it is then verified using a secret key stored in the environment variable ACCESS_TOKEN_SECRET. This verification checks if the token is valid and not tampered with.

- Error Handling: If the verification fails, possibly due to token expiration or modification, a 403 Forbidden status is returned. This indicates that the token is invalid.

- User Setup: For a valid token, the decoded token data (usually containing user information) is attached to the req.user property. This allows subsequent middleware or route handlers to access the user data, enabling user-specific processing.

- Continuation: Upon successful verification and user setup, the middleware passes control to the next middleware or route handler using the next() function.

T- his middleware is an essential part of our application’s security architecture, ensuring that only authenticated users can access certain protected routes.

- Controller: logical processing is handled in this layer, which is also the core of the provided API server.

- Database: this layer includes the remote mySQL database and functions for retrieving data, written in NodeJS.

#### 3. Middlewares

In the backend, the following middlewares are used:

- [body-parser](https://www.npmjs.com/package/body-parser): parse the body of the request
- [express.json](https://expressjs.com/en/api.html#express.json): parse incoming requests with JSON payloads and is based on body-parser
- [express.text](https://expressjs.com/en/api.html#express.text): parse incoming request payloads into a string and is based on body-parser
- [express.static](https://expressjs.com/en/api.html#express.static): serve static files and is based on [serve-static](https://expressjs.com/en/resources/middleware/serve-static.html)

Besides the above middlewares, there are some other self-defined middlewares:

- Authentication: check if the user is logged and authenticate the user session by using the user information in the token generated by [JWT](https://www.npmjs.com/package/jsonwebtoken)
- Error handling: handle the error and return the appropriate response

#### **Other tools**

- [nodemailer](https://www.npmjs.com/package/nodemailer): is used to send email to the user to inform user about the username and password of the account
- [JWT](https://www.npmjs.com/package/jsonwebtoken): is used to generate and verify the token. The token is sent to the user when the user logs in. Each request from the user will be verified by this token.

#### 4. Controller

In this layer, the core logic behind the application is handled. With the provided query functions from Database layer and preprocessed inputs from Middleware layer, a list of functions has been written, serving the purpose of sending the required information to the client and adding more features to the website.
The functions take a JSON file as an input and return the status as well as the query results in an array of JSONs:

##### authController

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

/\*\*

- Handles errors and sends appropriate responses.
  \*/
  const handleError = (error, res) => {
  console.error(error);
  res
  .status(500)
  .json({ message: "Internal server error", error: error.message });
  };

/\*\*

- Function to handle user registration.
  \*/
  export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const name = `${firstName} ${lastName}`;

try {
const existingUser = await User.findOne({ where: { email } });
if (existingUser) {
return res.status(400).json({ message: "User already exists" });
}

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });

} catch (error) {
handleError(error, res);
}
};

/\*\*

- Function to handle user sign-in.
  \*/
  export const signIn = async (req, res) => {
  const { email, password } = req.body;

try {
const user = await User.findOne({ where: { email } });
if (!user) {
return res.status(404).json({ message: "User not found" });
}

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Sign in successful", token, user });

} catch (error) {
handleError(error, res);
}
};

/\*\*

- Function to retrieve user profile by ID.
  \*/
  export const getUserProfile = async (req, res) => {
  try {
  const user = await User.findByPk(req.user.id);
  if (!user) {
  return res.status(404).json({ message: "User not found" });
  }
  res
  .status(200)
  .json({ message: "User profile retrieved successfully", user });
  } catch (error) {
  handleError(error, res);
  }
  };

##### bookingController

import { Booking } from "../models/Booking.js";
import { User } from "../models/User.js";
import { sendBookingConfirmationEmail } from "../services/NotifierService";

/\*\*

- Handles the booking of routes by users.
  \*/
  export const bookRoute = async (req, res) => {
  const { userId, routeId, details } = req.body;

try {
// Verify user existence
const user = await User.findByPk(userId);
if (!user) {
return res.status(404).json({ message: "User not found" }); // Use 404 for "not found" errors
}

    // Transactional creation to ensure data integrity
    const newBooking = await Booking.create({ userId, routeId, details });

    // Send booking confirmation email
    await sendBookingConfirmationEmail(user.name, user.email, newBooking);

    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });

} catch (error) {
handleError(error, res); // Centralized error handler
}
};

export default { bookRoute };

##### busInfoController

import BusInfo from "../models/BusInfo.js";

/\*\*

- Retrieves all bus information from the database.
  \*/
  export async function getAllBusInfo(req, res) {
  try {
  const buses = await BusInfo.findAll();
  res.json(buses); // Directly respond with array of buses
  } catch (error) {
  handleError(error, res); // Use centralized error handling
  }
  }

/\*\*

- Creates a new bus information record in the database.
  \*/
  export async function createBusInfo(req, res) {
  const { model, capacity, licenseNumber } = req.body;
  if (!model || !capacity || !licenseNumber) {
  return res.status(400).json({ message: "Missing required fields" });
  }

try {
const bus = await BusInfo.create({ model, capacity, licenseNumber });
res.status(201).json(bus);
} catch (error) {
handleError(error, res);
}
}

/\*\*

- Updates an existing bus record in the database.
- Requires bus ID as a parameter and accepts new bus data from the request body.
  \*/
  export async function updateBusInfo(req, res) {
  const { id } = req.params;
  const busData = req.body;

try {
// Fetch the existing bus record by ID
const bus = await BusInfo.findByPk(id);
if (!bus) {
return res.status(404).json({ message: "Bus not found" });
}

    // Update the bus record with new data
    const updatedBus = await bus.update(busData);
    // Respond with the updated bus information
    res.status(200).json(updatedBus);

} catch (error) {
// Handle errors and send an appropriate response
res.status(500).json({ error: error.message });
}
}

/\*\*

- Deletes a bus record from the database.
- Requires the bus ID as a parameter to locate the record.
  \*/
  export async function deleteBusInfo(req, res) {
  const { id } = req.params;

try {
const bus = await BusInfo.findByPk(id);
if (!bus) {
return res.status(404).json({ message: "Bus not found" });
}

    // Delete the bus record
    await bus.destroy();
    // Respond with success message
    res.status(200).json({ message: "Bus deleted successfully" });

} catch (error) {
// Respond with a server error status and error message if deletion fails
res.status(500).json({ error: error.message });
}
}

##### PassengerController

import Passenger from "../models/Passenger.js";
import Booking from "../models/Booking.js";
import Bus from "../models/BusInfo.js";

/\*\*

- Retrieves all passengers from the database.
- Sends the list of passengers or an error message if the operation fails.
  \*/
  export async function getAllPassengers(req, res) {
  try {
  // Fetch all passenger records from the database
  const passengers = await Passenger.findAll();
  // Send the retrieved passenger records in the response
  res.json(passengers);
  } catch (error) {
  // Respond with a server error status and error message if fetching fails
  res.status(500).json({ error: error.message });
  }
  }
  export async function createPassenger(req, res) {
  const { bookingId } = req.body;

try {
// Find the booking related to this passenger creation request
const booking = await Booking.findByPk(bookingId);
if (!booking || booking.status !== "Confirmed") {
return res
.status(404)
.json({ message: "Valid booking not found or not confirmed" });
}

    // Check if the route's bus has free seats
    const bus = await Bus.findByPk(booking.busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    if (bus.passengers.length >= bus.capacity) {
      return res.status(400).json({ message: "Bus is full" });
    }

    // Check if the bus is already full
    const passenger = await Passenger.count({ where: { busId: bus.id } });
    if (passengers >= bus.capacity) {
      // Update booking status to 'Full'
      booking.status = "Full";
      await booking.save();
      return res.status(409).json({ message: "Bus is full" });
    }

    // Create a new passenger record
    const newPassenger = await Passenger.create({
      name: booking.passengerName,
      busId: bus.id,
    });

    // Respond with the created passenger information
    res
      .status(201)
      .json({ message: "Passenger created successfully", passenger });

} catch (error) {
res.status(500).json({ error: error.message });
}
}

/\*\*

- Updates an existing passenger record in the database.
- Requires passenger ID as a parameter and accepts new passenger data from the request body.
  \*/
  export async function updatePassenger(req, res) {
  const { id } = req.params;
  const passengerData = req.body;

try {
// Fetch the existing passenger record by ID
const passenger = await Passenger.findByPk(id);
if (!passenger) {
return res.status(404).json({ message: "Passenger not found" });
}

    // Update the passenger record with new data
    const updatedPassenger = await passenger.update(passengerData);
    // Respond with the updated passenger information
    res.status(200).json(updatedPassenger);

} catch (error) {
// Handle errors and send an appropriate response
res.status(500).json({ error: error.message });
}
}

/\*\*

- Deletes a passenger record from the database.
- Requires the passenger ID as a parameter to locate the record.
  \*/
  export async function deletePassenger(req, res) {
  const { id } = req.params;

try {
const passenger = await Passenger.findByPk(id);
if (!passenger) {
return res.status(404).json({ message: "Passenger not found" });
}

    // Delete the passenger record
    await passenger.destroy();
    // Respond with success message
    res.status(200).json({ message: "Passenger deleted successfully" });

} catch (error) {
// Respond with a server error status and error message if deletion fails
res.status(500).json({ error: error.message });
}
}

##### PaymentController

// Import the Payment model from the local models directory
import Payment from "../models/Payment.js";

/\*\*

- Retrieves all payment records from the database.
- Sends a list of payments or an error message if the operation fails.
  \*/
  export async function getAllPayments(req, res) {
  try {
  // Fetch all payment records from the database
  const payments = await Payment.findAll();
  // Send the retrieved payment records in the response
  res.json(payments);
  } catch (error) {
  // Respond with a server error status and error message if fetching fails
  res.status(500).json({ error: error.message });
  }
  }

/\*\*

- Creates a new payment record in the database.
- Accepts payment data from the request body and returns the created payment information.
  \*/
  export async function createPayment(req, res) {
  try {
  // Create a new payment record using the provided request body
  const payment = await Payment.create(req.body);
  // Respond with a status of 201 (Created) and the new payment information
  res.status(201).json(payment);
  } catch (error) {
  // Respond with a server error status and error message if creation fails
  res.status(500).json({ error: error.message });
  }
  }

/\*\*

- Updates an existing payment record in the database.
- Accepts payment data from the request body and the payment ID as a parameter.
  \*/
  export async function updatePayment(req, res) {
  const { paymentId } = req.params;
  const paymentData = req.body;

try {
// Fetch the payment record by ID
const payment = await Payment.findByPk(paymentId);
if (!payment) {
return res.status(404).json({ message: "Payment not found" });
}

    // Update the payment record with new data
    const updatedPayment = await payment.update(paymentData);
    // Respond with the updated payment information
    res.status(200).json(updatedPayment);

} catch (error) {
// Respond with a server error status and error message if update fails
res.status(500).json({ error: error.message });
}
}

/\*\*

- Deletes a payment record from the database.
- Requires the payment ID as a parameter to locate the record.
  \*/
  export async function deletePayment(req, res) {
  const { paymentId } = req.params;

try {
const payment = await Payment.findByPk(paymentId);
if (!payment) {
return res.status(404).json({ message: "Payment not found" });
}

    // Delete the payment record
    await payment.destroy();
    // Respond with success message
    res.status(200).json({ message: "Payment deleted successfully" });

} catch (error) {
// Respond with a server error status and error message if deletion fails
res.status(500).json({ error: error.message });
}
}

##### schedulesController

import Schedules from "../models/Schedules.js";

export const getAllSchedules = async (req, res) => {
try {
const schedules = await Schedules.findAll();
res.json(schedules);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

export const createSchedule = async (req, res) => {
try {
const schedule = await Schedules.create(req.body);
res.status(201).json(schedule);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

export const updateSchedule = async (req, res) => {
const { id } = req.params;
try {
const schedule = await Schedules.findByPk(id);
if (!schedule) {
return res.status(404).json({ message: "Schedule not found" });
}
await schedule.update(req.body);
res.json(schedule);
} catch (error) {
res.status(500).json({ error: error.message });
}
};

export const deleteSchedule = async (req, res) => {
const { id } = req.params;
try {
const schedule = await Schedules.findByPk(id);
if (!schedule) {
return res.status(404).json({ message: "Schedule not found" });
}
await schedule.destroy();
res.json({ message: "Schedule deleted" });
} catch (error) {
res.status(500).json({ error: error.message });
}
};

#### 5. Database

This layer is the interface for connecting mySQL server to the web application. At the beginning, the general schema for the database was created using SQL and then got populated using Squelize

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { sequelize } from "./models/index.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { busInfoRoutes } from "./routes/busInfoRoutes.js";
import { passengerRoutes } from "./routes/passengerRoutes.js";
import { paymentRoutes } from "./routes/paymentRoutes.js";
import routeInfoRoutes from "./routes/routeInfoRoutes.js";
import schedulesRoutes from "./routes/schedulesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const **filename = fileURLToPath(import.meta.url);
const **dirname = dirname(\_\_filename);
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config(); // Ensure this is called before accessing any env variables

// Apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(\_\_dirname, "frontend/build")));

// Setup routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/businfo", busInfoRoutes);
app.use("/api/passengers", passengerRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/routeinfo", routeInfoRoutes);
app.use("/api/schedules", schedulesRoutes);
app.use("/api/users", userRoutes);

// Serve frontend
app.get("\*", (req, res) => {
res.sendFile(path.join(\_\_dirname, "frontend/build/index.html"));
});

// Sync database and start server
sequelize
.authenticate()
.then(() => {
console.log("Database synchronized");
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
})
.catch((err) => {
console.error("Database synchronization error:", err);
});

// Error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send("Something broke!");
});

export default app;

### Frontend

In this project, we use front-end technologies such as HTML5, CSS3, Javascripts, React19, JWT, Axios which can be used to build a user-friendly interface for the apllication.
We also use design tools such as: [Figma](https://www.figma.com/).

As the front-end was not completed, so we have an UI design to show the wirefram as well as the flow of the system:

Wireframe: https://www.figma.com/design/jzJqv6mqXwEfSdUJlJ3IsA/Bus-Management-System-UI?node-id=1-25&t=37mts404ZKzCOK6a-1

Wirefram with prototype demo: https://www.figma.com/proto/jzJqv6mqXwEfSdUJlJ3IsA/Bus-Management-System-UI?node-id=1-25&t=fMudZFuEmLSV5aPW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A25&show-proto-sidebar=1

## Result and discussion

### Lesson learned

During the process of building this project, we have made several mistakes and we would like to share a few thing here:

- When writing interface code for database, we should have **specified clearly each inputs** instead of wrapping them in an object and then extract them again in the interface code,which make it increasingly frustrating when we use the database code in our service as we often forget to insert the required key and value into the input object for the database code.
- The development process of our API backend server should be done independently, meaning that a person who is responsible for building an HTTP endpoint on the server should also be responsible for creating business code associated with that endpoint and writing unit tests and integration test associated with it.
- Building an integration test suite at the end of the project is **almost too late**. During the time where we had to deploy without integration test, before every push we have to send HTTP requests manually to our local server and check the response for error,which is prone to error caused by members skipping some execution path in their test routine, and by the time the integration test was introduced, a lot of bugs had already occured on deployment and had been fixed. An integration test should be made as soon as possible, ideally right before the whole functional code for one specific usecase is done.

### Conclusion

In conclusion, the project provided us with an excellent opportunity to practise our teamwork and coding skills. Moreover, our team has also gain knowledge on the process from when our first idea begins until a complete application is deployed to the web. During the process, some issues with the requirements arose; however, we managed to overcome those issues and fully developed the desired platform.

Finally, we would appreciate feedback in order to improve the performance and reliability of our application.

## SCRUM REVIEW

![alt text](<Reference/Scrum 1.png>)
![alt text](<Reference/Scrum 2.png>)
![alt text](<Reference/Scrum 3.png>)
![alt text](<Reference/Scrum 4.png>)
![alt text](<Reference/Scrum 5.png>)
