"use client";
import React, { useState } from "react";
import { LinkCard } from "@/components/link-card";
import { markdownPages } from "@/lib/markdownPages";
export default function MarkdownPagesList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPages = markdownPages.filter(mdPage =>
      mdPage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mdPage.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="mx-auto max-w-xl py-8">
        <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 w-full"
        />
        {filteredPages.map((mdPage, idx) => (
            <div className="mb-4" key={idx}> 
              <LinkCard navItem={{
                title: mdPage.name,
                tooltip: mdPage.description,
                disabled: false,
                external: false,
                img: mdPage.featuredImage,
                icon: undefined,
                href: mdPage.url.toString()
              }} {...mdPage} />
            </div>
        ))}
      </div>
  )
}
