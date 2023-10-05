/**
 * Exclude Type
 */

                        // union 타입으로      // , 뒤에 제외하고싶은 타입
type NoString = Exclude<string | boolean | number, string>;

type NoFunction = Exclude<string | (() => void), Function>;