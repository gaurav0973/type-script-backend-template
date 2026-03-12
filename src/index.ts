import http from "http";
import { env } from "./env.js";
import { createServerApplication } from "./app/index.js";

async function main() {
  try {
    const app = createServerApplication();
    const server = http.createServer(app);
    const PORT: number = env.PORT ? +env.PORT : 8000;

    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT} : 🛞`);
    });
  } catch (error) {
    throw new Error("Server is not able to run");
  }
}

main();
