import MiniCardBlog from "@/components/MiniCardBlog";

export default async function FeaturedBlogs() {
  return (
    <section className="flex ">
      <MiniCardBlog className="h-[60vh]" />
      <MiniCardBlog className="h-[60vh]" />
      <MiniCardBlog className="h-[60vh]" />
      {/* <MiniCardBlog />
      <MiniCardBlog /> */}
    </section>
  );
}
