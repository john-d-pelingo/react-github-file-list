/* eslint-disable react/require-default-props */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';

import FileListItem from './components/FileListItem';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {
        files.map(file => (
          <FileListItem key={ file.id } file={ file } />
        ))
      }
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array.isRequired
};

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updatedAt: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updatedAt: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updatedAt: '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  }
];


ReactDOM.render(
  <FileList files={ testFiles } />,
  document.getElementById('root')
);
