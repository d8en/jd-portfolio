class JdObjUtils {
    public getAllProperties(object: Object): any[] {
        return Object.entries(object).map((obj: [string, any]) => obj[1]);
    }
}
const jdObjUtils = new JdObjUtils();
export default jdObjUtils;