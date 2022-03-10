import Board from '@components/Board';
import ClearWord from '@components/ClearWord';
import ResultWord from '@components/ResultWord';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.boardSection}>
        <ClearWord />
        <Board />
        <div className={styles.resultContent}>
          <ResultWord />
        </div>
      </section>
    </main>
  );
};
export default Home;
