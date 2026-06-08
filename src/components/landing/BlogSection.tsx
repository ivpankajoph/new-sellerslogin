import Image from "next/image";
import { images } from "@/lib/images";

const posts = [
  {
    image: images.blogStrategy,
    cat: "E-commerce Strategy",
    title:
      "10 Proven Ways to Increase Your Online Store Conversion Rate in 2025",
    author: "Sarah Chen",
    read: "8 min read",
    delay: "",
  },
  {
    image: images.blogAi,
    cat: "AI & Automation",
    title:
      "How AI is Transforming Inventory Management for Small Businesses",
    author: "Marcus Williams",
    read: "6 min read",
    delay: "reveal-delay-1",
  },
  {
    image: images.blogMarketing,
    cat: "Marketing",
    title:
      "The Ultimate Guide to Email Marketing for E-commerce: 2025 Edition",
    author: "Priya Sharma",
    read: "11 min read",
    delay: "reveal-delay-2",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-12 max-md:flex-col max-md:items-center max-md:gap-6">
          <div>
            <div className="reveal inline-block bg-white/50 border border-fog rounded-pill py-1.5 px-3.5 text-[12px] font-bold text-obsidian uppercase tracking-[0.05em] mb-4 shadow-sm">Blog</div>
            <h2
              className="reveal reveal-delay-1 text-[clamp(32px,4vw,48px)] font-bold text-obsidian leading-[1.1] tracking-tight mb-0"
            >
              Learn, grow, sell more
            </h2>
          </div>
          <button
            type="button"
            className="reveal bg-purple-200 text-black border border-purple-300 shadow-sm py-[10px] px-[20px] rounded-full font-semibold text-[15px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-purple-300"
          >
            View All Articles →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div
              key={p.title}
              className={`reveal ${p.delay} bg-snow border border-fog rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-pebble group`.trim()}
            >
              <div className="w-full aspect-[16/10] relative overflow-hidden">
                <Image src={p.image} alt={`Sellers Login ${p.cat} article image`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[12px] font-bold text-obsidian uppercase tracking-[0.05em] mb-3 block">{p.cat}</span>
                <h3 className="text-[20px] font-bold text-obsidian leading-[1.3] mb-4 transition-colors duration-200 group-hover:text-steel">{p.title}</h3>
                <div className="flex items-center gap-2 text-[13px] text-steel">
                  <span>{p.author}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
