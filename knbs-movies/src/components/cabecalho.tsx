

import styles from "../styles/styles.module.css"
function Navbar() {
    return (
        <div className={styles["header"]}>
            <div className={styles["container"]}>
                <div className={styles["dsmovie-nav-content"]}>
                    <h1>Knbs Movies</h1>
                    <div className={styles["dsmovie-contact-container"]}>
                        <p className={styles['dsmovie-contact-link']}>/KevinShinohara</p>
                        <p className={styles['dsmovie-contact-link']}>/gustavomendes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;