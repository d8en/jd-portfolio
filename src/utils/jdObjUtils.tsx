class JdObjUtils {
    public getAllProperties<T>(object: Object): T[] {
        return Object.entries(object).map((obj: [string, any]) => obj[1]);
    }
}
const jdObjUtils = new JdObjUtils();
export default jdObjUtils;