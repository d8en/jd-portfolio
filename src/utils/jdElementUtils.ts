class JdElementUtils {
    public resetScrollTop(element: Element): void {
        // Commenting out for now
        if (element) return;
        // element.scrollTop = 0;
    }
}
const jdElementUtils: JdElementUtils = new JdElementUtils();
export default jdElementUtils;