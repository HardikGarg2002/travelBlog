import AppHeader from "@/components/Header";
import LittleAboutMe from "@/components/LittleAboutMe";
import FeaturedBlogs from "@/section/FeaturedBlog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <AppHeader /> */}
      {/* <HeroSection /> showcases main page of the app */}
      <FeaturedBlogs />
      {/* three blogs for showcase, design from css tricks */}
      <LittleAboutMe />
      {/* <InstagramPhotos /> show some insta photos and vidios and redirect them */}
      {/* <SearchBlogs /> redirects to search page , show categories foe search for ex: nextjs ,react js or india/asia/europe*/}
      {/* <WorkWithMe /> a little info of earn through adds or or affialiate through blogs -- from figma design*/}
      {/* <Footer /> */}
    </main>
  );
}
