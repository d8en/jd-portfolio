class JdStringUtils {
    private emojiSpacing: string = '  '
    public emojiFunFeatures: string = '🥳' + this.emojiSpacing;
    public emojiIdeation: string = '🧠' + this.emojiSpacing;
    public emojiDesign: string = '🎨' + this.emojiSpacing;
    public emojiBuild: string = '🚧' + this.emojiSpacing;
    public emojiResults: string = '📊' + this.emojiSpacing;
    public emojiGoal: string = '🎯' + this.emojiSpacing;
    public emojiSKillsUsed: string = '🛠️' + this.emojiSpacing;
}

const jdStringUtils = new JdStringUtils();
export default jdStringUtils;