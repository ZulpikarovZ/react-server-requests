import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import error404 from '../../assets/space404.png';

export const NotFound = () => {
	return (
		<main className={styles.main}>
			<div className={styles.text}>
				<p>This page does not exist.</p>
				<p>How you got here is still a mystery to the universe.</p>
			</div>
			<div>
				<img className={styles.img} src={error404} alt="" />
			</div>
			<Link className={styles.link} to={'/'}>
				<button>Go back to the main page</button>
			</Link>
		</main>
	);
};
