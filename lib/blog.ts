import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogRoot = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
  content: string;
  readingTime: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
  readingTime: string;
}

// Calcular tiempo de lectura (palabras por minuto)
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

function getPostsDirectory(lang: string): string {
  const dir = path.join(blogRoot, lang);
  // Fallback to Spanish if lang directory doesn't exist
  return fs.existsSync(dir) ? dir : path.join(blogRoot, "es");
}

export async function getAllPosts(lang = "es"): Promise<BlogPostMetadata[]> {
  const postsDirectory = getPostsDirectory(lang);

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        image: data.image,
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
      };
    });

  // Ordenar posts por fecha (más reciente primero)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export async function getPostBySlug(
  slug: string,
  lang = "es"
): Promise<BlogPost | null> {
  try {
    const postsDirectory = getPostsDirectory(lang);
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convertir markdown a HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      image: data.image,
      tags: data.tags || [],
      content: contentHtml,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error loading post ${slug} (${lang}):`, error);
    return null;
  }
}

export async function getPostsByTag(
  tag: string,
  lang = "es"
): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts(lang);
  return allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export async function getAllTags(lang = "es"): Promise<string[]> {
  const allPosts = await getAllPosts(lang);
  const tagsSet = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

export async function getRelatedPosts(
  currentSlug: string,
  lang = "es",
  limit = 3
): Promise<BlogPostMetadata[]> {
  const currentPost = await getPostBySlug(currentSlug, lang);
  if (!currentPost) return [];

  const allPosts = await getAllPosts(lang);

  // Filtrar el post actual
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);

  // Calcular relevancia basada en tags compartidos
  const postsWithScore = otherPosts.map((post) => {
    const sharedTags = post.tags.filter((tag) =>
      currentPost.tags.includes(tag)
    );
    return {
      post,
      score: sharedTags.length,
    };
  });

  // Ordenar por score y luego por fecha
  const sorted = postsWithScore.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return a.post.date < b.post.date ? 1 : -1;
  });

  return sorted.slice(0, limit).map((item) => item.post);
}
