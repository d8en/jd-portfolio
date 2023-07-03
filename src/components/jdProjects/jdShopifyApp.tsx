import { Link } from 'react-router-dom';
import jdStringUtils from '../../utils/jdStringUtils';
import { JdProjectSubHeader } from '../jdProjectSubHeader/jdProjectSubHeader';
import jdProjectStore from '../../stores/jdProjectStore';

export function JdShoifyApp(): React.JSX.Element {
    return (
        <>
            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Use the lessons we learned from our <Link to={jdProjectStore.getLinkToProject('1')}>Chicago app</Link> and create a multi-tenant scaleable offering for any Shopify store.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.funStuff} />
            <ul>
                <li>Multi-tenant Shopify API</li>
                <li>Address input w/Google Maps API and USPS API</li>
                <li>Currency input (USD)</li>
                <li>CSS Grid for tabular data</li>
                <li>Icon design</li>
                <li>Dot loader using CSS animations</li>
                <li>Theming (client-specified primary and secondary colors)</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />

        </>
    )
}