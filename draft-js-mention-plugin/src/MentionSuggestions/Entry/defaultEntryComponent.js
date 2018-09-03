import React from 'react';
import Avatar from './Avatar';

const defaultEntryComponent = (props) => {
  const {
    mention,
    theme,
    onError,
    isFocused, // eslint-disable-line no-unused-vars
    searchValue, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <Avatar mention={mention} theme={theme} onError={onError} />
      <span className={theme.mentionSuggestionsEntryText}>{mention.name}</span>
    </div>
  );
};

export default defaultEntryComponent;
