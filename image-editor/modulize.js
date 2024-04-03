import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const fileName = join(process.cwd(), "pkg", "package.json");
const content = readFileSync(fileName);
const packageJSON = JSON.parse(String(content));
packageJSON["type"] = "module";

writeFileSync(fileName, JSON.stringify(packageJSON, null, 2));
