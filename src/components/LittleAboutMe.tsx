import { cn } from "@/lib/utils";
import Image from "next/image";

// refere this website https://www.theblondeabroad.com/travel-blog/
export default function LittleAboutMe(props: any) {
  return (
    <div
      className={cn(
        "flex justify-around items-center p-2 lg:p-8 relative bg-[#e6e6e6] w-[98vw] h-[90vh] ",
        props.className
      )}
    >
      <div className="relative h-[85%] w-[50%]">
        <Image
          src={
            "https://www.theblondeabroad.com/wp-content/uploads/2020/03/DSCF3965-2.jpg"
          }
          alt="author image"
          height={600}
          width={400}
          content="fill"
          className="w-[100%] h-[100%] "
        />
      </div>
      <div className="content-box h-[75%] relative w-[55%] bg-white left-[-10%] ">
        <p className="text-orange-200">Featured Post</p>
        <h1>Travel Bucket List for 2023</h1>
        <p>
          From jet-setting around the globe to seeing where your favorite TV
          show was set, renting vacation homes with friends, and making memories
          under the stars, here is my travel bucket list for 2023!
        </p>
      </div>
    </div>
  );
}
