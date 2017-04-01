# I18n Demo App

This is a demo app to show how to serve a simple i18n application with Angular and express.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you want to use the app with aot, you have to provide the translation files, for example to use aot with french for development, use `npm run start:fr`.

## Build

Run `npm run build` to build the project in all languages. The build artifacts will be stored in the `dist/` directory.

## Production server

Run `npm run serve` to boot an express server on port 3000 that will use the files from the `dist/` directory. Make sure to build the project first.

:warning: This is just a demo server, you will have to improve it for a real production application (add compression, serve assets, ...).
