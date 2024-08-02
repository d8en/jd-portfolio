export function JdATag(props: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>): React.JSX.Element {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {props.children}
        </a>
    );
}
