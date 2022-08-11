// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { of } from "rxjs";

const mock = {
  "http://localhost:8080/api/bank/transaction": {
    get: [
      {date: '2022-08-10', value: 20.30, description: 'teste'}
    ]
  }
}


const httpClientStub = {
  get: (url) => of(mock[url]?.get)
};

export const environment = {
  production: false,
  http: httpClientStub
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
