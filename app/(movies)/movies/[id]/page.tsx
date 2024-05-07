import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// url에 있는 id 가져오기
interface IParams {
    params: {id: string};
}

export async function generateMetadata({params:{id}} : IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({params: {id}}: IParams) {
        return (
        <div>
            <h3>Movie detail</h3>
            <Suspense fallback={<h1>Loading Movie info</h1>}>
                <MovieInfo id = {id}/>
            </Suspense>
            <h3>Movie videos</h3>
            <Suspense fallback={<h1>Loading Movie video</h1>}>
                <MovieVideos id = {id}/>
            </Suspense>
        </div>
        );
    }