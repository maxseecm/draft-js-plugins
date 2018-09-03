import React from 'react';

const Avatar = ({ mention, theme = {}, onError }) => {
  if (mention.avatar) {
    return (
      <img
        src={mention.avatar}
        className={theme.mentionSuggestionsEntryAvatar}
        role="presentation"
        onError= {onError}
      />
    );
  }

  return null;
};

export default Avatar;
