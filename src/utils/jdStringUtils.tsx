import { IJdProjectSubHeaderProps } from "../components/jdProjectSubHeader/jdProjectSubHeader";

class JdStringUtils {
    public funStuff: IJdProjectSubHeaderProps = {
        icon: '🥳',
        name: 'Fun Stuff',
    }

    public ideation: IJdProjectSubHeaderProps = {
        icon: '🧠',
        name: 'Ideation',
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