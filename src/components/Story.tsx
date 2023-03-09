import { useEffect, useState } from "react";
import { getItem } from "../api";
import { storyType } from "../types/story";
import { Link } from "react-router-dom";
import { getDate } from "../utils/getDate";
import { useDispatch } from "react-redux";

const Story = (props: { id: number }): JSX.Element => {
  const [story, setStory] = useState<storyType>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      getItem(props.id).then(res => setStory(res.data));
    } catch {
      console.error("Unexpected request erorr");
    }
  }, [props.id]);

  const saveStory = () => {
    dispatch({type: 'story/saveStory', payload: story});
  };

  return (
    <Link to={`/news/${props.id}`} onClick={saveStory}>
      <li
        className="block bg-gray-300 hover:bg-gray-400 my-2 p-2 rounded-md cursor-pointer"
      >
        <span
          className="block mb-1 text-sm font-bold"
          data-testid="story-title"
        >
          {story?.title}
        </span>
        <span className="mr-2 text-sm" data-testid="story-author">
          By {story?.by} |
        </span>
        <span className="mr-2 text-sm" data-testid="story-time">
          {story?.time ? getDate(story.time) : ''} |
        </span>
        <span className="mr-2 text-sm" data-testid="story-score">
          {story?.score} points |
        </span>
        <span className="mr-2 text-sm" data-testid="story-descendants">
          {story?.descendants} comments
        </span>
      </li>
    </Link>
  );
}

export default Story;