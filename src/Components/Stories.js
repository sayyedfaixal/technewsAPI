import { useGlobalContext } from "../context";
const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return <h2>Loading data ...</h2>;
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((eachHit) => {
          const { title, author, url, objectID, num_comments } = eachHit;
          return (
            <div className="card" key={parseInt(objectID)}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> |<span> {num_comments} comments</span>
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read more
                </a>
                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
