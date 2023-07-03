import { Link } from 'react-router-dom';
import jdStringUtils from '../../utils/jdStringUtils';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import styles from './proejctsStyles.module.scss';
import jdProjectUtils from '../../utils/jdProjectUtils';
import jdProjectStore from '../../stores/jdProjectStore';

export function JdShoifyApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />

            <p>Use the lessons we learned from our <Link to={jdProjectUtils.getLinkToProject(jdProjectStore.airshopChicgao)}>Chicago</Link> app and create a scaleable offering for any Shopify store owner across the country.</p>

        </>
    )
}