require("dotenv").config();
const app = require("express")();

const { prisma } = require("@prisma/client");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Proxy API Routes
app.post("/games", require("./routes/proxies/GetGames"));

// Internal Database Routes

app.use(require("./middleware/CatchValidationErrors"));

const PORT = process.env.PORT;
app.listen(PORT);
