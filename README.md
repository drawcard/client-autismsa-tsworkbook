# Workbook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

# IMPORTANT!

### Be sure to sync any file asset changes from the live server to this repository, and commit changes, before updating this repo.
### Markdown files are on the FTP server at: https://thespectrum.org.au/myautism/assets/
### If this is not done, you will risk losing changes to the application's assets, that other team members have made.

## Development
* Run `npm start &`

## Production
* Run `npm run prod`
* When complete, copy the files over to the WPEngine SFTP folder at /myautism/.
* If you get 404 errors in console, be sure to update the permissions of the files you copied over to 775.

## Technical Notes
* If you see warnings in your debug console like the following:  `"core.js:4744 WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"` you may ignore these as they are emitted by the ngx-markdown library - no visible content is being stripped. See: https://github.com/jfcere/ngx-markdown/issues/263

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

* TODO: Implement markdown files for individual paragraphs
* TODO: Hook up https://github.com/zeitdev/markdown-to-pdfmake or https://github.com/jwerre/remarkable_pdfmake to bring Markdown to the PDF generator
* TODO: Set up mindmap images to point to real files on the server, and delete the old base64 code
* TODO: Finish form state saving: https://www.npmjs.com/package/angular-forms-web-storage-persistence
