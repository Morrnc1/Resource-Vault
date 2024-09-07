# $${\color{#FF69B4}💾 \space Scripts \space Vault}$$

Welcome to the Scripts Vault! Here, you’ll find everything you need to know about using, creating, and understanding scripts in your project. This guide is designed to be clear and straightforward, breaking down each concept step-by-step.

---

## $${\color{#FFB6C1}📂 \space Where \space Do \space Scripts \space Go?}$$

Scripts are small programs that automate tasks in your project. You usually place them in a folder named `scripts` within your project directory. Here's why:

### $${\color{#FFB6C1}Pros \space of \space a \space Scripts \space Folder}$$
- **Organization**: Keeps all scripts in one place, making it easy to find them.
- **Clarity**: Clearly shows that these files are meant for automating tasks.
- **Reusability**: You can easily reuse scripts in different projects.

### $${\color{#FFB6C1}Cons \space of \space a \space Scripts \space Folder}$$
- **Extra Folder**: It adds another folder to your project, which might feel like clutter if your project is small.
- **Maintenance**: You’ll need to update the scripts if your project structure changes.

**TL;DR:** Keeping scripts in a `scripts` folder is usually a good idea because it helps keep your project neat and easy to navigate.

---

## $${\color{#FFB6C1}📝 \space Running \space Scripts \space with \space npm}$$

To run a script with `npm`, you need to set it up in your `package.json` file, which is located in your project’s root directory.

### $${\color{#FFB6C1}Steps}$$:
1. **Locate `package.json`**: Find this file in your project’s root directory.
2. **Add Scripts Section**: Inside `package.json`, look for the `"scripts"` section. If it’s not there, add it like this:

```json
{
  "scripts": {
    "your-script-name": "bash ./scripts/your-script.sh"
  }
}
```

3. **Run the Script**: Open your terminal and type:
```bash
npm run your-script-name
```

**Example**:
Let’s say you have a script to clean up temporary files, named `cleanup_script.sh`, inside your `scripts` folder. Here’s how you’d add it:

```json
{
  "scripts": {
    "cleanup": "bash ./scripts/cleanup_script.sh"
  }
}
```

Then, in your terminal, you’d run:
```bash
npm run cleanup
```

### $${\color{#FFB6C1}Important \space Note \space on \space Directories}$$
If your scripts are inside a `scripts` folder, you must always be in the **root directory** of your project (where the `package.json` file is) to run the scripts using `npm run`. If you're inside another directory, `npm` won’t be able to find the script unless you change directories back to the root:

```bash
cd /path/to/your/project/root
npm run cleanup
```

---

## $${\color{#FFB6C1}🔍 \space Understanding \space Scripts}$$

### $${\color{#FFB6C1}What \space Are \space Scripts?}$$
Scripts are small programs written to automate tasks like setting up your environment, running tests, or cleaning up files. In web projects, scripts are often written in **Bash** or **Shell** script language.

### $${\color{#FFB6C1}How \space Do \space Scripts \space Work?}$$
Scripts execute commands that you could type manually in the terminal, but they do it automatically. Here’s a simple example:

### $${\color{#FFB6C1}Example \space Script:}$$ `hello_world.sh`

```bash
#!/bin/bash
echo "Hello, World!"
```

### $${\color{#FFB6C1}Breaking \space It \space Down:}$$
1. **`#!/bin/bash`**: This tells your computer to use the Bash shell to run the script.
2. **`echo "Hello, World!"`**: This command prints "Hello, World!" to the terminal.

### $${\color{#FFB6C1}How \space to \space Make \space a \space Script}$$
1. **Create a new file**: Name it with a `.sh` extension, like `my_script.sh`.
2. **Write commands**: Start with `#!/bin/bash`, then add your commands.
3. **Make it executable**: Before running, make sure the script has permission to execute:
   ```bash
   chmod +x my_script.sh
   ```
4. **Run it**: Use `bash my_script.sh` or integrate it into your `package.json` to run with npm.

---

## $${\color{#FFB6C1}✨ \space Creating \space More \space Complex \space Scripts}$$

### $${\color{#FFB6C1}Example \space 1: \space Prettier \space Script}$$

Prettier is a code formatter that ensures all your code looks consistent. You can create a script to run Prettier across your project.

1. **Install Prettier**:
   ```bash
   npm install --save-dev prettier
   ```

2. **Create a Script to Run Prettier**:
   Create a new file in your `scripts` folder called `format_code.sh`:

   ```bash
   #!/bin/bash
   echo "Formatting code with Prettier..."

   # Run Prettier on all files
   npx prettier --write .

   echo "Code formatted successfully."
   ```

3. **Add to `package.json`**:
   Add the script to your `package.json` so you can run it with npm:

   ```json
   {
     "scripts": {
       "format": "bash ./scripts/format_code.sh"
     }
   }
   ```

4. **Run Prettier**:
   In your terminal, run:
   ```bash
   npm run format
   ```

### $${\color{#FFB6C1}Modifying \space the \space Prettier \space Script}$$

You can modify the Prettier script to target specific files or folders:

- **Format Only JavaScript Files**:
  ```bash
  npx prettier --write "**/*.js"
  ```

- **Check Formatting Without Changing Files**:
  ```bash
  npx prettier --check .
  ```

### $${\color{#FFB6C1}Example \space 2: \space Install \space Dependencies \space and \space Run \space the \space Local \space Repository}$$

You can create a script that installs all necessary dependencies and then starts your local development server.

1. **Create a Script to Install Dependencies and Start the Server**:
   Create a new file in your `scripts` folder called `setup_and_run.sh`:

   ```bash
   #!/bin/bash
   echo "Installing dependencies..."
   npm install

   echo "Starting the local server..."
   npm run dev
   ```

2. **Add to `package.json`**:
   Add the script to your `package.json`:

   ```json
   {
     "scripts": {
       "setup-and-run": "bash ./scripts/setup_and_run.sh"
     }
   }
   ```

3. **Run the Script**:
   In your terminal, run:
   ```bash
   npm run setup-and-run
   ```

This script will:
- Install all dependencies specified in your `package.json`.
- Start your local development server.

### $${\color{#FFB6C1}Modifying \space the \space Setup \space and \space Run \space Script}$$

You can modify this script to include additional steps, such as running tests before starting the server:

```bash
#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Running tests..."
npm run test

echo "Starting the local server..."
npm run dev
```

This modified script will install dependencies, run your tests, and then start the local development server.

---

## $${\color{#FFB6C1}💡 \space Summary}$$

Scripts are a powerful tool for automating tasks in your project. Placing them in a `scripts` folder keeps your project organized. You can run scripts using `npm` by adding them to your `package.json`. Always make sure you're in the root directory when running these scripts. Learning to write and use scripts, whether simple or complex, will help streamline your workflow and ensure consistency across your team.

Feel free to explore the scripts in this vault, and don’t hesitate to modify them to suit your needs!

---
