import "./BugatiLive.css";

// You can get these icons from a library like react-icons or use SVGs/Unicode
const HeartIcon = () => <span className="icon">♡</span>; // Or use an actual SVG/icon
const CommentIcon = () => <span className="icon">💬</span>; // Or use an actual SVG/icon
const PlayIcon = () => (
  <div className="play-icon-overlay">
    <div className="play-icon">▶</div>
  </div>
);

const formatCount = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
};

const imageData = [
  {
    id: 1,
    src: "https://scontent-fra3-1.cdninstagram.com/v/t51.2885-15/499815959_18512172790001456_6352546278936047915_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QFkjRgSWVwYVjG_ginDtVkf1m8h5dP6Jw4kByP-CpV_J5secn8SwBv02se7G93DzEo&_nc_ohc=TR8WzDJlQdsQ7kNvwFLTFHE&_nc_gid=tCogQs0Y3H9RTN03Q9q2fw&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfI4hzlcN4SH1Hh0WzO8Fv3cz-gOh_NAK7OH6Z0MGm_OKA&oe=683675C1&_nc_sid=cc8940",
    alt: "Blue Bugatti on a scenic road",
    likes: 58000,
    comments: 230,
    isVideo: true,
  },
  {
    id: 2,
    src: "https://scontent-fra3-1.cdninstagram.com/v/t51.2885-15/499631476_18511986598001456_3934188316735848634_n.jpg?stp=dst-jpg_e15_p480x480_tt6&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QHxedNRPielCiImmBHmFnB23wjHj5tRZ5IMbxfjCKaC1kOunmRoJiEgtFIEBX0ZKKU&_nc_ohc=XD9t6H3EF4cQ7kNvwHMqNEn&_nc_gid=3gTt_2IFNrOWz_EEuIfm0A&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfLfVa6zB4s5o8CKxCGpjz8CmYpM88Yx310GDQERxJsAlw&oe=68351EBA&_nc_sid=cc8940",
    alt: "Bugatti leading a convoy on a dirt road",
    likes: 211000,
    comments: 389,
    isVideo: false,
  },
  {
    id: 3,
    src: "https://scontent-fra3-1.cdninstagram.com/v/t51.2885-15/499492485_18511780768001456_5721126546441076912_n.jpg?stp=dst-jpg_e15_p480x480_tt6&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QFC26MLTBH8SmSxFoJ-XInL1crMcu7q1nyu8KnpwJbAS9Yd-LNXeQUdcKNyXyOWmhc&_nc_ohc=-Qio6yAcxyEQ7kNvwHxyw6Q&_nc_gid=cPVbMwUsiEYo7DNm4RkmYQ&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfJ1d5oJcXPTtxVbAA4DOxLk4EOAaWH5TzZQXGZshR4BqA&oe=6833D33F&_nc_sid=cc8940",
    alt: "Line of Bugattis next to a vineyard",
    likes: 291000,
    comments: 643,
    isVideo: false,
  },
  {
    id: 4,
    src: "https://media-api.flockler.com/instagram/image/3636745465760040885",
    alt: "Line of Bugattis next to a vineyard",
    likes: 234000,
    comments: 743,
    isVideo: false,
  },
  {
    id: 5,
    src: "https://media-api.flockler.com/instagram/image/3635260585449380302",
    alt: "Line of Bugattis next to a vineyard",
    likes: 234000,
    comments: 743,
    isVideo: false,
  },
  {
    id: 6,
    src: "https://media-api.flockler.com/instagram/image/3634535780525236838",
    alt: "Line of Bugattis next to a vineyard",
    likes: 234000,
    comments: 743,
    isVideo: false,
  },
];

function ImageCard({ src, alt, likes, comments, isVideo }) {
  return (
    <div className="image-card">
      <img src={src} alt={alt} className="card-image" />
      {isVideo && <PlayIcon />}
      <div className="card-stats">
        <div className="stat-item">
          <HeartIcon />
          <span>{formatCount(likes)}</span>
        </div>
        <div className="stat-item">
          <CommentIcon />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
}

function BugatiLive() {
  return (
    <div className="bugatti-live-container">
      <h1 className="main-title">BUGATTI LIVE</h1>
      <div className="image-grid">
        {imageData.map((image) => (
          <ImageCard
            key={image.id}
            src={image.src}
            alt={image.alt}
            likes={image.likes}
            comments={image.comments}
            isVideo={image.isVideo}
          />
        ))}
      </div>
    </div>
  );
}

export default BugatiLive;
