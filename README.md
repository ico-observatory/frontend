# Internet Centralization Observatory - Frontend

![ICO](src/assets/images/logo.png "Internet Centralization Observatory")


Frontend project for Internet Centralization Observatory , using [Node](https://nodejs.org) and [Vue.js v3](https://vuejs.org/).

The Backend project can be found [here](https://github.com/ComputerNetworks-UFRGS/ICO-backend).

## Development environment setup
To setup your development environment, please follow the steps below.

1. Install [Atom](https://atom.io/) or [VS Code](https://code.visualstudio.com/)
2. Install [Git](https://git-scm.com/).
3. Install [Node](https://nodejs.org).
    * Recommended to use [NVM](https://github.com/creationix/nvm) to install Node.
    * Recommended to use the latest stable LTS version: `nvm install --lts`
4. Clone this repo.
    * `git clone https://github.com/ComputerNetworks-UFRGS/ICO-frontend.git`
5. Inside the repository directory, run the following commands.
    * `npm install`
6. (optional) Install the Angular CLI globally, so you can generate new components and services using your terminal.
  * `npm install -g @vue/cli`
  * Documentation for the `@vue/cli` can be found [here](https://cli.vuejs.org/).

## Running the application
 * `npm run serve`

After compiling, the application should start running and can be open in your browser with address`http://localhost:8080/`. Changes in code will automatically trigger recompilation and refresh your browser.


## Deployment to production

Automatic deployments for `master` branches are executed and they are accessible in [https://ico.inf.ufrgs.br](http://ico.inf.ufrgs.br/)

## Contributing

Before starting a new implementation, check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this repository.
