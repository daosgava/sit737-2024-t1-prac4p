import express from "express";
import Operations from "./operations.mjs";
import { port, paths } from "./constants.mjs";

const app = express();
// Instantiate OperationHandler
const operations = new Operations();

// Register routes
for (const path of Object.values(paths)) {
	app.get(path, operations.requestHandler);
}

app.listen(port, () => {
	console.log(`🐲: This server runs at http://localhost:${port}`);
});
