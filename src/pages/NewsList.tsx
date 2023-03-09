import { useEffect, useState } from "react";
import { getStoriesList } from "../api";
import Story from "../components/Story";

const NewsList = (): JSX.Element => {
  const [stories, setStories] = useState<number[]>([]);
  const [storiesUpdated, setStoriesUpdated] = useState(false);
  const [limit, setLimit] = useState(0);

  const updateStories = () => {
    setStoriesUpdated(!storiesUpdated);
    setLimit(0);
  }

  useEffect(() => {
    try {
      getStoriesList().then(res => setStories(res.data));
    } catch {
      console.error("Unexpected request erorr");
    }
    const intervalId = setInterval(() => {
      getStoriesList().then(res => setStories(res.data));
      setStoriesUpdated(!storiesUpdated);
      setLimit(0);
    }, 60000);
    return () => {
      clearInterval(intervalId);
   }
  }, [limit, storiesUpdated]);

  const canShowNextStories = limit <= 400;

  const showNextStories = () => {
    if(canShowNextStories) {
      setLimit((limit) => limit + 100);
      window.scrollTo(0, 0);
    }
  }

  return(
    <div className="mx-5 flex flex-col items-center justify-center">
      <h1 className="block text-3xl font-libre font-normal">News List</h1>
      <div className="my-3">
        <button
          onClick={updateStories}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 text-sm rounded-md"
        >
          Update
        </button>
      </div>
      <ul className="block">
        {stories.slice(limit, limit + 100).map(storyId => {
          return <Story id={storyId} key={storyId} />
        })}
      </ul>
      {
        canShowNextStories ?
        <div className="my-3">
          <button
          onClick={showNextStories}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 text-sm rounded-md"
          >
            Load next
          </button>
        </div>
        :
        null
      }
    </div>
  );
};

export default NewsList;