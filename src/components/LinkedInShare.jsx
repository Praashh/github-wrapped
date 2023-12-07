import React from 'react'
import { LinkedinShareButton } from 'react-share';

const LinkedInShare = ({url, text}) => {
  return (
    <div>
      <LinkedinShareButton url={url} title={text}>
         Share on LinkedIn
      </LinkedinShareButton>
    </div>
  )
}

export default LinkedInShare
