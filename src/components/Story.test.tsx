import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Story from './Story';
import { BrowserRouter } from 'react-router-dom';

describe("<Story />", () => {
  it("receives the data and renders fields", () => {
    render(
      <BrowserRouter>
        <Story id={33528663}/>
      </BrowserRouter>
    )

    expect(screen.getByTestId('story-title')).toBeInTheDocument();
    expect(screen.getByTestId('story-author')).toBeInTheDocument();
    expect(screen.getByTestId('story-time')).toBeInTheDocument();
    expect(screen.getByTestId('story-score')).toBeInTheDocument();
    expect(screen.getByTestId('story-descendants')).toBeInTheDocument();
  });
})