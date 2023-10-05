/**
 * Non Nullable type
 * 여러개 중 null이 될 수 없는 타이틀만 추출가능
 */
type NonNull = NonNullable<string | number | boolean | null | undefined | object>;
                                                    // null | undefined 는 null 이 될 수 있기 때문에 제외된다