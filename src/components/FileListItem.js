import React from 'react';
import PropTypes from 'prop-types';

import CommitMessage from './CommitMessage';
import FileIcon from './FileIcon';
import FileName from './FileName';
import Time from './Time';

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={ file.id }>
    <td className="file-icon"><FileIcon file={ file } /></td>
    <td className="file-name"><FileName file={ file } /></td>
    <td className="commit-message"><CommitMessage commit={ file.latestCommit } /></td>
    <td className="age"><Time time={ file.updatedAt } /></td>
  </tr>
);

FileListItem.propTypes = { file: PropTypes.object.isRequired };

export default FileListItem;
