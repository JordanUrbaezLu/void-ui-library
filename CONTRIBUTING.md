# Getting Started with Void UI

![image](https://wallpaperaccess.com/full/2106068.png)

## Start Contributing to Void UI

### 1. Clone the repository to your local machine.

`git clone https://github.com/JordanUrbaezLu/void-ui`

### 2. Install node-modules and dependencies.

`cd void-ui`

`npm install`

### 3. Create a new branch off main.

`git checkout -b <new-branch-name>`

### 4. Make some improvements to the code base!

### 5. After making improvements, add your files to the staging area.

`git add .`

### 6. Now commit your files and leave a message using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

`git commit -m "<type>[scope/component]: <description>"`

### 7. Raise a pull request for the project owner to review!

`git push origin <your-branch-name>`

### 8. Merge your PR after it gets approved!

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in development mode.\
Open [http://localhost:#####](http://localhost:#####) to view it in the browser.

### `npm run test`

Runs all the unit tests for the components.\
Unit tests use React Testing Library and Jest.

Run `npm run test -- -u` to update component snapshots with Jest.

### `npm run clean`

Removes the `dist/` and `storybook-static/` directories.

### `npm run build`

Builds the optimized project and outputs it into the `dist/` folder.

### `npm run commit`

Run commitizen to help format your commit messages to pass commitlint CI test.

### `npm run storybook`

Launches Storybook for the React UI Components.\
Open [http://localhost:#####](http://localhost:#####) to view Storybook in the browser.

### `npm run build-storybook`

Builds a production ready, static version of your Storybook app to the `storybook-static` folder.

### `npm run typecheck`

Runs a typecheck through the entire project.