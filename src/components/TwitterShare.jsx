import React from "react";
import { TwitterShareButton } from "react-share";

const TwitterShare = ({ url, text, image }) => {
  return (
    <div>
      <TwitterShareButton
        url={url}
        title={text}
        via={"yourTwitterHandle"}
        hashtags={["tag1", "tag2"]}
      >
        Share on
      </TwitterShareButton>
    </div>
  );
};

export default TwitterShare;
