import { useEffect, useState } from "react";
import { getItem } from "../api";
import { storyType } from "../types/story";
import { getDate } from "../utils/getDate";

const Comments = (props: { id: number }): JSX.Element => {
  const [story, setStory] = useState<storyType>(null);

  useEffect(() => {
    try {
      getItem(props.id).then(res => setStory(res.data));
    } catch {
      console.error("Unexpected request erorr");
    }
  }, [props.id]);

  const createMarkup = (richText: string) => {
    return {
      __html: richText,
    }
  }

  // const hasComments = (kids: number[]) => kids.length > 0;

  return (
    <li
      className="block bg-gray-200 my-1 p-3 pb-7 rounded-md"
    >
      <span className="text-sm font-bold" data-testid="comment-author">
        {story?.by + ": "}
      </span>
      <span
        dangerouslySetInnerHTML={createMarkup(story?.text || "")}
        className="text-sm"
        data-testid="comment-text"
      />
      <div className="mt-2 text-sm">
        <span className="float-right" data-testid="comment-time">
          Comments: {story?.kids?.length || 0} | {story?.time ? getDate(story.time) : ''}
        </span>
      </div>
    </li>
  );
}

export default Comments;