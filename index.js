const fs = require("fs");
const path = require("path");

const sourceDir = "./old"; // Replace with your actual source directory
const destinationDir = "./new"; // Replace with your desired destination directory

fs.readdirSync(sourceDir).forEach((fileName) => {
	const filePath = `${sourceDir}/${fileName}`;

	const sourceFilePath = path.join(sourceDir, fileName);
	// const destinationFolder = path.join(destinationDir, fileName);
	const fileNameWithoutExt = path.basename(filePath, path.extname(filePath));
	const destinationFolder = path.join(destinationDir, fileNameWithoutExt);

	try {
		// Create the destination folder if it doesn't exist
		fs.mkdirSync(destinationFolder);

		// Move the file to its own folder
		// fs.renameSync(sourceFilePath, path.join(destinationFolder, getNewFileName(filePath)));

		// Copy the file to its own folder
		fs.copyFileSync(sourceFilePath, path.join(destinationFolder, getNewFileName(filePath)));

		console.log(`File moved: ${fileName} -> ${destinationFolder}`);
	} catch (err) {
		console.error(`Error moving file: ${fileName}`, err);
	}
});

function getNewFileName(filePath) {
	const name = "index";
	const extension = path.extname(filePath);
	// Implement your renaming logic here, e.g., adding a prefix, suffix, or custom naming pattern
	// Here's an example that adds a "renamed-" prefix:
	return `${name}${extension}`;
}
