"use client"

import { useState, useEffect } from "react"

interface MediumArticle {
  title: string
  link: string
  pubDate: string
  description: string
  readTime: string
}

export function useMediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true)
        const response = await fetch("/api/medium")

        if (!response.ok) {
          throw new Error("Failed to fetch articles")
        }

        const data = await response.json()
        setArticles(data.articles)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
        console.error("Error fetching Medium articles:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return { articles, loading, error }
}
