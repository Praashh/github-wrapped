import React from "react";
import { TwitterShareButton } from "react-share";

const TwitterShare = ({ url, text, image }) => {
  return (
    <div>
      <TwitterShareButton
        url={url}
        title={text}
        via={"PrashantSony6"}
        hashtags={["flexYourGithubWrap", "GithubWrapped2023"]}
      >
        Share on
      </TwitterShareButton>
    </div>
  );
};

export default TwitterShare;
