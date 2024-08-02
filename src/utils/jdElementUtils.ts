class JdElementUtils {
    public resetScrollTop(element: Element): void {
        element.scrollTop = 0;
    }
}
const jdElementUtils: JdElementUtils = new JdElementUtils();
export default jdElementUtils;
