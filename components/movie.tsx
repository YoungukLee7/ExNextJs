"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

interface IMovieProps{
    title: string;
    id: string;
    poster_path: string;
}

export default function Movie({title, id, poster_path}: IMovieProps){
    
    // 아래 return하는 div 안에 Link가 제목에만 적용되어 이미지를 클릭해도 아무일도 발생하지 않는 상황인데
    // router를 사용하여 onClick 이벤트를 이용하면 이미지를 클릭해도 링크로 이동시킬 수 있다.
    // useRouter는 클라이언트 사이드 라우팅을 처리하며 브라우저에서만 작동되기 때문에 "use client";를 붙여야 한다.
    const router = useRouter();
    const onclick = () => {
        router.push(`/movies/${id}`);
    };

    return(
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onclick}></img>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}