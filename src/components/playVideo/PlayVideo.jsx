import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import thumbnail1 from "../../assets/thumbnail1.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const fetchVideoData = async () => {
    // Fetching videos data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    // Fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
      apiData && apiData.snippet.channelId
    }&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // Fetching Comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setCommentsData(data.items);
      });
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  // So from here when the video id is given video data is fetched and when this video data is fetched, other data also fetched.

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className='play-video-info'>
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K "} views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt='like' /> {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt='dislike' />
          </span>
          <span>
            <img src={share} alt='share' /> share
          </span>
          <span>
            <img src={save} alt='save' /> save
          </span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt='jack' />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
        </div>
        <button>subscribe</button>
      </div>
      <div className='vid-subscription'>
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102} Comments</h4>
        {commentsData.map((item, index) => {
          const comment = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className='comment'>
              <img src={comment.authorProfileImageUrl} alt='user' />
              <div>
                <h3>
                  {comment.authorDisplayName} <span>{moment(comment.publishedAt).fromNow()}</span>
                </h3>
                <p>
                  {comment.textDisplay}
                  <div className='comment-action'>
                    <img src={like} alt='like' />
                    <span>{value_converter(comment.likeCount)}</span>
                    <img src={dislike} alt='dislike' />
                  </div>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
