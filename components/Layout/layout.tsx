import styles from "./layout.module.css"

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
}

export function Layout({children}: LayoutProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}