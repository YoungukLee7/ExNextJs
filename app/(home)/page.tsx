// 서버 컴포넌트

import Link from "next/link";

// 메타 데이터 사용 가능
export const metadata = {
    title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
        <div>
            {movies.map(movie => <li key = {movie.id}><Link href = {`/movies/${movie.id}`}>{movie.title}</Link></li>)};
        </div>
    ); 
}