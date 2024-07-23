import { useQuery } from 'react-query';
import { makeRequest } from '../../axios';
import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
  const { data, isLoading, isError } = useQuery(['posts'], async () => {
    const res = await makeRequest.get('/posts');
    return res.data;
  });

  return (
    <div className="posts">
      {isLoading
        ? 'Loading...'
        : isError
        ? 'Something went wrong!'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
