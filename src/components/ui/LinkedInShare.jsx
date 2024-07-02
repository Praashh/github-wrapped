import React from "react";
import { LinkedinShareButton } from "react-share";

const LinkedInShare = ({ url, text }) => {
  return (
    <div>
      <LinkedinShareButton
        url={url}
        title={text}
        via={"PrashantSony6"}
        hashtags={["flexYourGithubWrap", "GithubWrapped2023"]}
      >
        Share on
      </LinkedinShareButton>
    </div>
  );
};

export default LinkedInShare;
