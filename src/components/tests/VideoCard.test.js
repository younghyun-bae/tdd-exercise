import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, useLocation } from 'react-router-dom';

import { formatAgo } from '../../util/date';
import VideoCard from '../VideoCard';
import { fakeVideo as video } from '../../tests/videos';
import { withRouter } from '../../tests/utils';

describe('VideoCard', () => {

  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  it('renders video item', () => {
    render(
      withRouter(<Route path='/' element={<VideoCard video={video} />} />)
    );

    const image = screen.getByRole('img');
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt))).toBeInTheDocument();
  });

  it('navigates to detailed video page with video state when clicked', async () => {
    function LocationStateDisplay() {
      const location = useLocation();
      return <pre>{JSON.stringify(location.state, null, 2)}</pre>;
    }
    render(
      withRouter(
        <>
          <Route path='/' element={<VideoCard video={video} />} />
          <Route 
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>
      )
    );
    const card = screen.getByRole('listitem');
    userEvent.click(card);

    await screen.findByText(/"id": 1/);
    expect(screen.getByText(/"title": "title"/)).toBeInTheDocument();
  });
});
