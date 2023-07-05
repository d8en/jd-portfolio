import jdStringUtils from "../../utils/jdStringUtils";
import { JdProjectSubHeader } from "../jdProjectSubHeader/jdProjectSubHeader";

export function JdSmartRouteWeb(): React.JSX.Element {
    return (
        <>

            {/* GOAL */}
            <JdProjectSubHeader {...jdStringUtils.goal} />
            <p>Build a website that concicely communicates how a our app can save a national retailer milliions by optimizing return processing.</p>

            {/* FUN FEATURES */}
            <JdProjectSubHeader {...jdStringUtils.favoriteStuff} />
            <ul>
                <li>SVG animations</li>
                <li>Building a blog engine</li>
                <li>Hubspot API</li>
                <li>Implementing .webp images</li>
                <li>Optimizing performance using PageSpeed Insights</li>
            </ul>

            {/* IDEATION */}
            <JdProjectSubHeader {...jdStringUtils.ideation} />
            <p>Most of my projects are apps so it was refreshing working on a website.</p>
        </>
    )
}