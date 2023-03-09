import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getItem } from "../api";
import Comments from "../components/Comments";
import { storyType } from "../types/story";
import { getDate } from "../utils/getDate";
import { useSelector } from "react-redux";

const NewsPage = (): JSX.Element => {
  const story = useSelector((state: { storyReducer: { story: storyType } }) => state.storyReducer.story);
  const { newsId } = useParams<{ newsId: string }>();
  const [comments, setComments] = useState<storyType>(null);
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  const reloadComments = () => {
    setCommentsUpdated(!commentsUpdated);
  }

  useEffect(() => {
    getItem(+newsId).then(res => setComments(res.data));
  }, [commentsUpdated, newsId]);

  return(
    <div className="flex flex-col items-center justify-center mx-5">
      <div className="flex justify-center items-center mb-3">
        <Link to="/">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 text-sm rounded-md"
            >
              Back to all stories
            </button>
          </div>
        </Link>
        <div className="ml-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 text-sm rounded-md"
            onClick={reloadComments}
          >
            Reload comments
          </button>
        </div>
      </div>
      <h1 className="block text-2xl font-libre font-normal">
        {story?.title}
      </h1>
      <span className="block text-blue-600 underline mb-1 text-sm font-bold">
        <a href={story?.url}>Link</a>
      </span>
      <div className="flex flex-col items-start justify-center mt-5 p-5 bg-gray-100 rounded-md">
        <span>
          Date: {story?.time ? getDate(story.time) : ''}
        </span>
        <span>
          Author: {story?.by}
        </span>
        <span>
          Comments: {story?.descendants}
        </span>
        <ul className="block">
          {
            comments?.kids?.length ? 
            comments?.kids.map(id => {
              return <Comments key={id} id={id} />
            }) :
            null
          }
        </ul>
      </div>
    </div>
  );
};

export default NewsPage;