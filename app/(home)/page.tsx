// 서버 컴포넌트

import { API_URL } from "../constants";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

// 메타 데이터 사용 가능
export const metadata = {
    title: "Home",
};

async function getMovies() {
    // 로딩 확인을 위해 일부러 시간 걸음 
    // await new Promise ((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
   const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    ); 
}