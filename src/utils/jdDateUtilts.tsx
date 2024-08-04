export class JdDateUtils {
    public static getYearDiff(start: string, end?: string): string {
        // Not valid year
        if (isNaN(parseInt(start)) || isNaN(parseInt(start))) throw new Error(`start / end not a valid year.`);

        // Calc diff
        const starting: number = new Date(start).getFullYear() + 1;
        const ending: number = end ? new Date(end).getFullYear() + 1 : new Date().getFullYear();
        const diff: number = ending - starting;
        return `${diff} year${diff === 1 ? '' : 's'}`;
    }
}
