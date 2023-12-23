import TopicCreateFrom from '@/components/topics/topic-create-form';
import TopicList from '@/components/topics/topic-list';
import { Divider } from '@nextui-org/react';
export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <div className="text-xl-m2">
          <h1 className="text-xl m-2">Top Posts</h1>
        </div>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateFrom />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
