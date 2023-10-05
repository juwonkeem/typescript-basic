/**
 * Multiple Ways to Import and Export
 */
// import { IdolModel as IM, rose, number, ICat } from "./2_export_1";

// console.log(new IM('아이유', 32));
// console.log(new IdolModel('아이유', 32));

// import * as allTogether from './2_export_1';

// console.log(allTogether.number);
// console.log(allTogether.rose);

import cf, {rose, number} from './2_export_1';

console.log(cf);
// console.log(rose);

// tsConfig에서 baseUrl 설정해야 사용가능하다.
import { IdolModel } from "15_import_and_export/2_export_1";