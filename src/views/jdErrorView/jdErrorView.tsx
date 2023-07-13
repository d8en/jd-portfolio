import { JdAniLogo } from "../../components/jdAniLogo/jdAniLogo";
import { JdNav } from "../../components/jdNav/jdNav";
import { JdViewWrapper } from "../../components/jdViewWrapper/jdViewWrapper";
import styles from './errorViewStyles.module.scss';

export function JdErrorView(): React.JSX.Element {
    return (
        <JdViewWrapper divProps={{ className: styles.errorContainer }}>
            <JdAniLogo />

            {/* NAV BAR */}
            <JdNav />
        </JdViewWrapper>
    )
}