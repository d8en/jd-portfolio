import jdStringUtils from '../../utils/jdStringUtils';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
// import styles from './proejctsStyles.module.scss';

export function JdSmartRouteApp(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build a web service and self-service admin app for retailers to help them optimize their return logistics.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>Browser drag and drop APIs</li>
                <li>Typeahead drop down input (single select)</li>
                <li>Google maps API</li>
                <li>Latest React router hooks</li>
            </ul>

        </>
    )
}