"use client";

import { useState, useEffect } from "react";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  const handleNewQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      let newQuote = getRandomQuote();
      while (newQuote === currentQuote) {
        newQuote = getRandomQuote();
      }
      setCurrentQuote(newQuote);
      setIsLoading(false);
    }, 150);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-4">
      <div className="w-full max-w-xl">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 border border-zinc-200 dark:border-zinc-700">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Random Quote Generator
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2">
              Click the button for a dose of inspiration
            </p>
          </div>

          {currentQuote && (
            <div className="relative mb-8 min-h-[120px] flex items-center justify-center">
              <blockquote className="text-center">
                <p className="text-xl sm:text-2xl font-light text-zinc-800 dark:text-zinc-200 leading-relaxed italic transition-opacity duration-200">
                  "{currentQuote.text}"
                </p>
                <footer className="mt-6 text-lg font-medium text-zinc-600 dark:text-zinc-300">
                  — {currentQuote.author}
                </footer>
              </blockquote>
            </div>
          )}

          <button
            onClick={handleNewQuote}
            disabled={isLoading}
            className="w-full py-4 px-6 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium text-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? "Loading..." : "New Quote"}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              {quotes.length} quotes in collection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}