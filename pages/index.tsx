import { GetServerSideProps } from "next";
import Head from "next/head";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { NewsArticleEntry } from "@/components/NewsArticleEntry";
interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}
export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.NEWS_API_KEY
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles },
  };
};
export default function BreakingNewsPage({
  newsArticles,
}: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title>Breaking News-NextJS News App</title>
      </Head>
      <main className="">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm: sm:grid-cols-1 gap-3 p-2 bg-gray-400">
          {newsArticles.map((obj, index) => {
            return (
              <div key={index} className="">
                <NewsArticleEntry article={obj} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
