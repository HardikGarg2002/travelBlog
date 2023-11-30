import { cn } from "@/lib/utils";
import Image from "next/image";
import SpecialLabel from "./SpecialLabel/SpecialLabel";
interface MiniCard {
  className?: string;
}
export default function MiniCardBlog(props: MiniCard) {
  return (
    <div className={cn("m-2 bg-red-500 p-2 relative", props.className)}>
      <SpecialLabel />
      <div className="p-4 pt-0 bg-[#fbfaf9] flex flex-col justify-between">
        <div>
          <Image
            src="https://www.theblondeabroad.com/wp-content/uploads/2020/03/starting-a-blog-1.jpg"
            alt="sample image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "50%" }}
            className="max-h-52"
          />
          <h2>Animating CSS Grid (How To + Examples)</h2>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={
              "https://css-tricks.com/wp-content/uploads/2022/11/liam-80x80.jpg"
            }
            alt="author image"
            height={40}
            width={40}
            className="rounded-full"
          />
          <h4>Sam Altson</h4>
        </div>
      </div>
    </div>
  );
}
