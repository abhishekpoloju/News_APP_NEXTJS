import { NewsArticle } from "@/models/NewsArticles";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
interface NewsArticleEntryProps {
  article: NewsArticle;
}
export const NewsArticleEntry = ({
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) => {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;
  return (
    <>
      <a href={url}>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={validImageUrl} alt="img-blur-shadow" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}||{""}
            </Typography>
            <Typography>{description}||{""}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </a>
    </>
  );
};
