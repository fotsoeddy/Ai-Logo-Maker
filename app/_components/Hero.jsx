"use client"

import React, { useState } from 'react';
import Lookup from '../_data/Lookup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  const [logoTitle, setLogoTitle] = useState('');

  return (
    <div className="flex flex-col items-center mt-24 gap-6 px-4">
      <h1 className="text-primary text-4xl sm:text-5xl text-center font-bold">
        {Lookup.HeroHeading}
      </h1>
      <h2 className="text-3xl sm:text-4xl text-center font-semibold text-gray-800">
        {Lookup.HeroSubheading}
      </h2>
      <p className="text-base sm:text-lg text-gray-500 text-center max-w-2xl">
        {Lookup.Herodesc}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mt-8">
        <input
          type="text"
          placeholder={Lookup.InputTitlePlaceholder}
          value={logoTitle}
          onChange={(e) => setLogoTitle(e.target.value)}
          className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          aria-label="Enter logo title"
        />
        <Link href={`/create?title=${encodeURIComponent(logoTitle)}`}>
          <Button
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md shadow-md transition-transform transform hover:scale-105"
            aria-label="Start creating your logo"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}