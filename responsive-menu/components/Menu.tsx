
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Article = {
  label: string;
  slug: string;
};

const Menu = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {articles.map(article => (
          <Link key={article.slug} href={`/article/${article.slug}`} className="hover:underline">
            {article.label}
          </Link>
        ))}
        <Link href="/home" className="hover:underline">Home</Link>
      </div>
    </nav>
  );
};

export default Menu;
