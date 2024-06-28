"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Article = {
  label: string;
  slug: string;
  title: string;
  content: string;
  imageUrl: string;
};

const Article = () => {
  const params = useParams();
  const { slug } = params;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => {
        const foundArticle = data.find((article: Article) => article.slug === slug);
        setArticle(foundArticle);
      });
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">{article.title}</h1>
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={800}  
        height={600} 
        className="w-full h-auto"
      />
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
