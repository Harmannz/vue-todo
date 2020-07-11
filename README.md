# Vue Todo App
![Deploy to GH Pages](https://github.com/Harmannz/vue-todo/workflows/Deploy%20to%20GH%20Pages/badge.svg?branch=master)
![Node.js CI](https://github.com/Harmannz/vue-todo/workflows/Node.js%20CI/badge.svg?branch=master)

A Simple todo app built in Vue following the guide from [Hugo on Medium](https://medium.com/@hugo.bjarred/learn-vuejs-by-building-a-simple-todo-app-44e2e7dfccae) and extended by adding e2e testing and github actions workflows.
Go to https://harmannz.github.io/vue-todo/ and create your todos!!!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Tests
Using cypress for E2E testing.
To run tests using cypress GUI
```
test:e2e
```
to run in headless mode
```
npm run test:e2e:headless
```
