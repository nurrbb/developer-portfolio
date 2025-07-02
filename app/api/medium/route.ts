import { NextResponse } from "next/server"

interface MediumArticle {
  title: string
  link: string
  pubDate: string
  description: string
  readTime: string
}



export async function GET() {
  try {
    // Fetch Medium RSS feed
    const response = await fetch("https://medium.com/feed/@nurbulbul", {
       headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0",
    "Accept": "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch Medium feed")
    }

    const xmlText = await response.text()

    // Parse XML to extract articles
    const articles = parseRSSFeed(xmlText)

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("Error fetching Medium articles:", error)

    // Return fallback articles if API fails
    const fallbackArticles = [
      {
        title: "Spring Security İle JWT Kimlik Doğrulama",
        link: "https://medium.com/@nurbulbul",
        pubDate: "2024-12-30",
        description:
          "JWT (JSON Web Token), microservice ve REST API dünyasında authentication için neredeyse endüstri standardı haline geldi...",
        readTime: "8 dk okuma",
      },
      {
        title: "Modern Web Uygulamaları İçin Bloklamayan Mimariler: Spring WebFlux",
        link: "https://medium.com/@nurbulbul",
        pubDate: "2024-12-27",
        description:
          "Spring WebFlux, Spring ekosisteminin modern web uygulamaları için geliştirdiği bloklamayan, reaktif programlama destekli web...",
        readTime: "10 dk okuma",
      },
      {
        title: "Inversion of Control (IoC) Nedir? Derinlemesine İnceleme",
        link: "https://medium.com/@nurbulbul",
        pubDate: "2024-06-20",
        description:
          "Geleneksel programlama yaklaşımlarında, bir nesne başka bir nesnenin bağımlılıklarını kendisi oluşturur ve yönetir...",
        readTime: "12 dk okuma",
      },
      {
        title: "Serializable Arayüzü: Java'da Veri Serileştirmenin Temelleri",
        link: "https://medium.com/@nurbulbul",
        pubDate: "2024-03-11",
        description:
          "Java uygulamaları geliştirirken bazen nesnelerimizi bir dosyaya kaydetmek, bir ağ üzerinden göndermek veya bir veritabanında...",
        readTime: "9 dk okuma",
      },
    ]

    return NextResponse.json({ articles: fallbackArticles })
  }
}

function parseRSSFeed(xmlText: string): MediumArticle[] {
  const articles: MediumArticle[] = []

  try {
    // Simple XML parsing for RSS items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/
    const linkRegex = /<link>(.*?)<\/link>/
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/
    const descriptionRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/

    let match
    while ((match = itemRegex.exec(xmlText)) !== null && articles.length < 6) {
      const itemContent = match[1]

      const titleMatch = titleRegex.exec(itemContent)
      const linkMatch = linkRegex.exec(itemContent)
      const pubDateMatch = pubDateRegex.exec(itemContent)
      const descriptionMatch = descriptionRegex.exec(itemContent)

      if (titleMatch && linkMatch && pubDateMatch) {
        const pubDate = new Date(pubDateMatch[1])
        const description = descriptionMatch
          ? descriptionMatch[1].replace(/<[^>]*>/g, "").substring(0, 150) + "..."
          : ""

        // Estimate read time based on description length
        const wordCount = description.split(" ").length
        const readTime = Math.max(3, Math.ceil(wordCount / 200)) + " dk okuma"

        articles.push({
          title: titleMatch[1],
          link: linkMatch[1],
          pubDate: pubDate.toISOString().split("T")[0],
          description,
          readTime,
        })
      }
    }
  } catch (error) {
    console.error("Error parsing RSS feed:", error)
  }

  return articles
}
