const express = require("express");
const cors = require("cors");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const { PORT } = require("./config/constants");
const apartmentsRouter = require("./routers/apartments");

const app = express();

app.use(cors());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/auth", authRouter);
app.use("/apartments", apartmentsRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
