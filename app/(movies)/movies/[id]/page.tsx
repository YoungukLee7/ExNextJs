import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import LoadingComponent from "../../../loading_component";

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
            <Suspense fallback={<h1>Loading Movie info No Component</h1>}>
                <MovieInfo id = {id}/>
            </Suspense>
            <Suspense fallback={<LoadingComponent message="Loading Movie Video Yes Component"/>}>
                <MovieVideos id = {id}/>
            </Suspense>
        </div>
        );
    }