import useQuery from '../../hooks/query';
import InfiniteScroll from '../../components/InfiniteScroll';

export default function MainPage() {
  useQuery();

  return <InfiniteScroll />;
}
