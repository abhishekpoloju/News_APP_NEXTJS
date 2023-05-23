import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import BreakingNewsPage from "..";
interface CategoryNewsArticlesProps {
  newsArticles: NewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  
  const paths=categorySlugs.map(slug=>({params:{category:slug}}))
  return{
    paths,
    fallback:false
  }
};

export const getStaticProps: GetStaticProps<
  CategoryNewsArticlesProps
> = async ({ params }) => {
  const category = params?.category?.toString();
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=` +
      process.env.NEWS_API_KEY
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles },
    revalidate: 5*60
  };
};

const CategoryNewsArticles = ({ newsArticles }: CategoryNewsArticlesProps) => {
  return <>
    <BreakingNewsPage newsArticles={newsArticles}/>  
  </>;
};

export default CategoryNewsArticles;
