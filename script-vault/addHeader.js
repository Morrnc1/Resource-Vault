/**
 * @fileoverview This script adds a special comment (JSDoc) to the top of JavaScript, TypeScript, and TSX files if they don't already have one.
 * @module addHeader
 * @requires fs - A tool from Node.js to help read and write files.
 * @requires path - A tool from Node.js to help find files and folders.
 * @exports processDirectory - The main function that goes through the files and adds the special comment.
 */

import { promises as fs } from 'fs'; // This is the tool we use to read and write files.
import path from 'path'; // This is the tool we use to find files and folders.

// This is the special comment (JSDoc) that we want to add to the top of the files.
const headerComment = `/**
 * @fileoverview This file does something important.
 * @module [Module name]
 * @requires [List of needed tools]
 * @exports [What the file gives back to other files]
 */
`;

// These are the files and folders we want to skip and not add the comment to.
const exclusions = [
  'tailwind.config.js',
  'postcss.config.js',
  'eslint.config.js',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'vite.config.ts',
  'vite-env.d.ts',
  'node_modules',
  '.git',
  'dist',
  'build',
  'public',
  '.gitignore',
  'package.json',
  'package-lock.json',
  'README.md',
  'index.html',
];

// This function adds the special comment to a file if it doesn't have one.
async function addHeaderToFile(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  
  // Check if the file already has the special comment.
  if (fileContent.startsWith('/**')) {
    console.log(`File ${filePath} already has a JSDoc header. Skipping...`);
    return;
  }

  // If the file doesn't have the comment, we add it to the top.
  const updatedContent = headerComment + '\n' + fileContent;
  await fs.writeFile(filePath, updatedContent, 'utf-8');
  console.log(`Added header to ${filePath}`);
}

// This function goes through each folder and checks the files inside.
async function processDirectory(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    // Skip files and folders that we don't want to change.
    if (exclusions.some(exclusion => filePath.includes(exclusion))) {
      continue;
    }

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      await addHeaderToFile(filePath);
    }
  }
}

processDirectory(path.resolve('.'));
