import { NewsArticle } from "@/models/NewsArticles";
import React, { FormEvent, useState } from "react";
import { NewsArticleEntry } from "@/components/NewsArticleEntry";
import { Spinner } from "@material-tailwind/react";
const Search = () => {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();
    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        const response = await fetch("/api/search-news?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
      } catch (error) {
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  };
  return (
    <main className="flex items-center mt-3 flex-col">
      <p>Search News</p>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          type="text"
          name="searchQuery"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          className="border border-slate-900"
        />
        <button type="submit" disabled={searchResultsLoading}>
          Search
        </button>
      </form>
      <div className="">
        {searchResultsLoading && (
          <>
            <Spinner />;
          </>
        )}
        {searchResultsLoadingIsError && (
          <p>Something went wrong. please try again</p>
        )}
        {searchResults?.length === 0 && (
          <p>Nothing found. Try a differnt query</p>
        )}
        {
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: sm:grid-cols-1 gap-3 p-2">
            {searchResults?.map((obj, index) => {
              return (
                <div key={index} className="">
                  <NewsArticleEntry article={obj} />
                </div>
              );
            })}
          </div>
        }
      </div>
    </main>
  );
};

export default Search;
