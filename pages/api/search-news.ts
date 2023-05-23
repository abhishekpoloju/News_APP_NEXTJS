// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsResponse } from "@/models/NewsArticles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();
  if (!searchQuery) {
    return res.status(400).json({ error: "please provide a search query" });
  }
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${"ca70d18e2e1840689d5a19f076c2da5c"}`
  );
  const newsResponse: NewsResponse = await response.json();
  res.status(200).json(newsResponse.articles);
}
