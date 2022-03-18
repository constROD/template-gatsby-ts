# Template Gatsby TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.
- Edit your VSCode `settings.json`.

```json
{
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.lintTask.enable": true
}
```

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using `nvm`.

```bash
$ nvm use
```

- Install Dependencies.

```bash
$ yarn
```

- Create `.env` file for environment variables. `.env-sample` are the required environment variables.
- Run in **development** mode.

```bash
$ yarn dev
```

## Run in production mode

- **without Docker:**

- Build the application.

```bash
$ yarn build
```

- Run.

```bash
$ yarn start
```

- **with Docker:** Download `Docker` in your machine or server.

- Build the application.

```bash
$ docker build -t {image_name} .
```

- Run.

```bash
$ docker run -d -p {machine_port}:80 --name {container_name} {image_name}
```
