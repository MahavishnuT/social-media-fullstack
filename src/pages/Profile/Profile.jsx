import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Profile = () => {

  const currentUser = useContext(AuthContext);
  // get userId in the url
  const userId = useLocation().pathname.split('/')[2];

  const { isLoading, isError, data: userData } = useQuery(['user'], async () => {
    const res = await makeRequest.get('/users/find/' + userId);
    return res.data || [];
  });
  const data = userData || [];

  console.log(userData);

  return (
    <div className="profile">
      <div className="images">
        <img src={data.coverPic} alt="" className="cover" />
        <img src={data.profilePic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="https://www.facebook.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="https://www.facebook.com">
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="https://www.facebook.com">
              <PinterestIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data.website}</span>
              </div>
            </div>
            {currentUser.currentUser.id === userId && <button>Follow</button>}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
