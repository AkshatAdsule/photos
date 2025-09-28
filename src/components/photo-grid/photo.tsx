interface PhotoProps {
  type: "portrait" | "landscape";
}

function Photo({ type }: PhotoProps) {
  const ratio = type === "landscape" ? "720/1080" : "1080/720";

  return <img src={`https://picsum.photos/${ratio}`} />;
}

export default Photo;
