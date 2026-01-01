import app from "./app";
import { connectDB } from "./config/db";
import { PORT } from "./config/env";

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
