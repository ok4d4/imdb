import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&include_adult=true&query=${searchTerm}`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
