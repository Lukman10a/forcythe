import Image from "next/image";
import BookCallButton from "./bookCallButton";
import Typewriter from "./ui/animated/typewriter";

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

// export default function BlogList() {
//   return (
//     <div className="bg-[#080414]">
//       <div className="grid grid-cols-3 gap-10 p-20 cursor-pointer ">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="space-y-6 hover:border-2 hover:rounded-3xl hover:ease-in-out"
//           >
//             <div className="aspect-[16/9] relative">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 fill
//                 className="object-cover rounded-3xl"
//               />
//             </div>

//             <div className="border-l-2 pl-5 ml-5">
//               <span className="inline-block text-xl font-medium text-white rounded-full">
//                 Blog
//               </span>
//               <div className=" space-x-2 text-lg text-gray-300 pb-4">
//                 <span>{post.author}</span>
//                 <span>•</span>
//                 <span>{post.date}</span>
//               </div>
//               <div className="space-y-1 mb-6">
//                 <h2 className="text-2xl font-bold text-white ">{post.title}</h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="py-10 space-y-7">
//         <h1 className="text-center text-white text-5xl ">
//           <span className="block text-[#084484]">Ready to Scale?</span>
//           <span className="block ">
//             Join successful brands that chose us <br />
//           </span>
//           <span className="block text-[#084484]">
//             as their growth accelerator
//           </span>
//         </h1>
//         <BookCallButton />
//       </div>
//     </div>
//   );
// }
export default function BlogList() {
  return (
    <div className="bg-[#080414] p-20 sm:p-10">
      <div className="flex justify-between items-center sm:flex-col sm:gap-5 text-white py-16">
        <h1 className="text-5xl">
          <Typewriter
            text="Read our articles, news and product blog"
            delay={100}
          />
        </h1>
        <div className="sm:self-start">
          <BookCallButton />
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 cursor-pointer">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="space-y-6 hover:rounded-3xl transition-transform duration-300 ease-in-out group hover:border-2 "
          >
            {/* Image Container */}
            <div className="aspect-[16/9] relative overflow-hidden rounded-3xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Text Container */}
            <div className="border-l-2 pl-5 transition-transform duration-300 ease-in-out group-hover:translate-x-5">
              <span className="inline-block text-xl font-medium text-white rounded-full">
                Blog
              </span>
              <div className="space-x-2 text-lg text-gray-300 pb-4">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <div className="space-y-1 mb-6">
                <h2 className="text-2xl font-bold text-white">{post.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 space-y-7">
        <h1 className="text-center text-white text-5xl sm:text-2xl">
          <span className="block text-[#084484]">Ready to Scale?</span>
          <span className="block">
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
