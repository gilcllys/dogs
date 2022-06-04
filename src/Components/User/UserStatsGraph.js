import React from "react";
import styles from "./UserStatsGraph.module.css";

const UserStatsGraph = ({ data }) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        setTotal(
            data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
        );
        console.log(data);
    },[data]);

    return (
        <section className={`${styles.graph} animeLeft`}>
            <p className={styles.total}>Acessos: {total}</p>
        </section>
    );
};

export default UserStatsGraph;
