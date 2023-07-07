import { IJdProjectSubHeaderProps } from "../components/jdProjectSubHeader/jdProjectSubHeader";

class JdStringUtils {

    public pageTitlePrefix: string = 'Jeff Dayton - ';
    public pageTitleSuffix: string = 'Software Engineer';
    public pageTitleReset: string = this.pageTitlePrefix + this.pageTitleSuffix;

    public favoriteStuff: IJdProjectSubHeaderProps = {
        icon: '🥳',
        name: 'My Favorites',
    }

    public ideation: IJdProjectSubHeaderProps = {
        icon: '🧠',
        name: 'Brainstorming',
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