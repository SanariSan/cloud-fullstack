import fs from "fs";
import path from "path";
import util from "util";

const renameAsync = util.promisify(fs.rename);

//---
const reactBuildPath = path.join("./", "./", "cloud-front-build");
const targetBuildPath = path.join("./", "cloud-front-build");
//---

async function deleteEntity() {
	await rmAsync(targetBuildPath, {
		recursive: true,
	});
}

async function copyEntity() {
	await renameAsync(reactBuildPath, targetBuildPath);
}

deleteEntity();
copyEntity();
