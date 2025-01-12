import Image from "next/image";
import Link from "next/link";
import BookCallButton from "./bookCallButton";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Will AI take over Art?",
    author: "The Reformist",
    date: "May 29th, 2024",
    image: "/assets/images/ai.webp",
    slug: "will-ai-take-over-art",
  },
  {
    id: 2,
    title: "Cryptocurrency vs Tokens",
    author: "The Reformist",
    date: "May 29th, 2024",
    image: "/assets/images/crypt.webp",
    slug: "cryptocurrency-vs-tokens",
  },
  {
    id: 3,
    title: "Cryptocurrency and Crypto asset",
    author: "The Reformist",
    date: "May 29th, 2024",
    image: "/assets/images/crypt_assets.webp",
    slug: "cryptocurrency-and-crypto-asset",
  },
];

export default function BlogList() {
  return (
    <div className="bg-[#080414]">
      <div className="grid grid-cols-3 gap-10 p-20">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href=""
            className="group overflow-hidden rounded-3xl transition-transform hover:scale-[1.02]"
          >
            <div className="aspect-[16/9] relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="">
              <div className="space-y-4">
                <span className="inline-block px-2 py-1 text-sm font-medium text-white rounded-full">
                  Blog
                </span>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="py-10 space-y-7">
        <h1 className="text-center text-white text-5xl ">
          <span className="block text-[#084484]">Ready to Scale?</span>
          <span className="block ">
            Join successful brands that chose us <br />
          </span>
          <span className="block text-[#084484]">
            as their growth accelerator
          </span>
        </h1>
        <BookCallButton />
      </div>
    </div>
  );
}
