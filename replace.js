import fs from "fs";
import path from "path";
import util from "util";

const renameAsync = util.promisify(fs.rename);
const rmAsync = util.promisify(fs.rm);
const statAsync = util.promisify(fs.stat);
const mkdirAsync = util.promisify(fs.mkdir);

//---
const reactBuildPath = path.join("./", "cloud-front", "build");
const targetBuildPath = path.join("./", "cloud-front-build");
//---

async function deleteEntity() {
	const statObj = await statAsync(targetBuildPath).catch((err) => void 0);

	if (statObj) {
		await rmAsync(targetBuildPath, {
			recursive: true,
		});
	}
}

async function copyEntity() {
	const statObjBuild = await statAsync(reactBuildPath).catch((err) => void 0);
	const statObjTarget = await statAsync(targetBuildPath).catch((err) => void 0);

	if (!statObjBuild) throw new Error("no build");
	if (!statObjTarget) await createFolder();

	await renameAsync(reactBuildPath, targetBuildPath);
}

async function createFolder() {
	await mkdirAsync(targetBuildPath);
}

deleteEntity();
copyEntity();
