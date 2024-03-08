import HomeHeader from "@/components/HomeHeader";
import PhotoCard from "@/components/PhotoCard";
import StatusPostCard from "@/components/StatusPostCard";
import { getAllPost } from "@/lib/actions/post";

export default async function Home() {
  const data = await getAllPost();
  return (
    <div className=" flex flex-col   py-2  h-full gap-6">
      <div className="flex flex-col gap-3">
        {data?.posts.map((item: any, i: number) => (
          <div key={i}>
            {item.type === "Status" && (
              <StatusPostCard
                author={item?.author}
                comments={item.comments}
                content={item.content}
              />
            )}
            {item.type === "Photo" && <PhotoCard {...item} />}
          </div>
        ))}
      </div>
    </div>
  );
}
