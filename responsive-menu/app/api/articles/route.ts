
import { NextResponse } from 'next/server';

export async function GET() {

  const articles = [
    {
      label: 'Fashion',
      slug: 'fashion',
      title: 'Latest Fashion Trends',
      content: 'Explore the latest trends in the fashion industry.',
      imageUrl: '/images/fashion.png',
    },
    {
      label: 'Art',
      slug: 'art',
      title: 'Art in the Modern World',
      content: 'Discover how contemporary art is evolving.',
      imageUrl: '/images/art.png',
    },
    {
      label: 'Travel',
      slug: 'travel',
      title: 'Top Travel Destinations',
      content: 'Plan your next trip to these amazing places.',
      imageUrl: '/images/travel.png',
    },
    {
      label: 'Food',
      slug: 'food',
      title: 'Delicious Food Recipes',
      content: 'Try out these delicious and easy recipes.',
      imageUrl: '/images/food.png',
    },
  ];
  return NextResponse.json(articles);
}
