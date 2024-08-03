export class JdDateUtils {
    public static getYearDiff(year: string): string {
        const now: number = new Date().getFullYear();
        const then: number = new Date(year).getFullYear() + 1;
        const diff: number = now - then;
        return `${diff} year${diff === 1 ? '' : 's'}`;
    }
}
