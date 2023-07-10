import { IJdProjectSubHeaderProps } from "../components/jdProjectSubHeader/jdProjectSubHeader";

class JdStringUtils {

    public pageTitlePrefix: string = 'Jeff Dayton - ';
    public pageTitleSuffix: string = 'Software Engineer';
    public pageTitleReset: string = this.pageTitlePrefix + this.pageTitleSuffix;

    public favoriteStuff: IJdProjectSubHeaderProps = {
        icon: '🥳',
        name: 'Highlights',
    }

    public ideation: IJdProjectSubHeaderProps = {
        icon: '🧠',
        name: 'Brainstorm',
    }

    public design: IJdProjectSubHeaderProps = {
        icon: '🎨',
        name: 'Design',
    }

    public build: IJdProjectSubHeaderProps = {
        icon: '🚧',
        name: 'Build',
    }

    public results: IJdProjectSubHeaderProps = {
        icon: '📊',
        name: 'Results',
    }

    public goal: IJdProjectSubHeaderProps = {
        icon: '🎯',
        name: 'The Goal',
    }

    public skillsUsed: IJdProjectSubHeaderProps = {
        icon: '🛠️',
        name: 'Skills Used',
    }

    public company: IJdProjectSubHeaderProps = {
        icon: '🏢',
        name: 'Company',
    }
}

const jdStringUtils = new JdStringUtils();
export default jdStringUtils;