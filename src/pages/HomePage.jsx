import { useTrendingList } from '../utils/hooks/useTrendingList';
import { TrendingList } from 'components/TrendingList/TrendingList';

const HomePage = () => {

  const { trendingMovies }  = useTrendingList();
  return (
    <div>
      <TrendingList movies={trendingMovies} />
    </div>
  );
}
export default HomePage;