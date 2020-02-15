export default class Utils {
    /**
     * 日期替换函数，将1970-01-01格式日期替换成1970/01/01格式
     * @param date
     */
    public static dateReplace(date: string): string {
        if (!date) return '';
        return date.replace(/-/g, '/');
    }
}
