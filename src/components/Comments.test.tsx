import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Comments from './Comments';

describe("<Comments />", () => {
  it("receives the data and renders fields", () => {
    render(<Comments id={33528770}/>)

    expect(screen.getByTestId('comment-author')).toBeInTheDocument();
    expect(screen.getByTestId('comment-text')).toBeInTheDocument();
    expect(screen.getByTestId('comment-time')).toBeInTheDocument();
  });
})