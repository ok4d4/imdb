import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 10000 } }
  );
  const movie = await res.json();

  return movie;
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  //   console.log(movie);
  return (
    <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        width={600}
        height={500}
        className="rounded-lg"
        alt={movie.title || movie.original_name}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        style={{
          maxWidth: "100%",
          height: "100%",
        }}
      />{" "}
      <div className="p-2 max-w-xl">
        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
        <p className="text-lg mb-3">
          <span className="font-semibold mr-1">Overview:</span>
          {movie.overview}
        </p>
        <p className="text-lg mb-3">
          <span className="font-semibold mr-1">Date Released:</span>
          {movie.release_date || movie.first_air_date}
        </p>
        <p className="text-lg mb-3">
          <span className="font-semibold mr-1">Rating:</span>
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
}
