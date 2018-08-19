import { findByUrl } from 'utils/functions';
import { GITHUB_TOKEN } from 'utils/constants';

const GET_FILE_TREE = `
  query ($branch: GitObjectID){
    repository(owner: "Ironimus", name: "Ironimus.github.io") {
      object(expression: "master:", oid: $branch) {
        ... on Tree {
          entries {
            oid
            name
            type
          }
        }
      }
    }
  }
`;

const GET_FILE = `
  query ($id: GitObjectID){ 
    repository(owner: "Ironimus", name: "portfolio") {
      object(oid: $id) {   
        ... on Blob {
          text
        }
      }
    }
  }
`;

export const DEFAULT_FILE_URL = 'README.md';

const determineSyntax = name => {
  switch(/[^.]+$/.exec(name)[0]) {
    case 'js': 
      return 'js';
    case 'md':
      return 'markdown';
    default:
      return 'clike'
  }
}

const request = body => fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Authorization' : `bearer ${GITHUB_TOKEN}`
  },
  body: JSON.stringify(body)
}).then(r => r.json());

// have to fetch file tree this way because I can't use any server-side code
export const fetchFileTree = async (branch=null, url='', depth=0) => {
  const { data: { repository: { object: { entries } } } } = await request({
    query: GET_FILE_TREE,
    variables: {
      branch
    }
  });
  return await Promise.all(entries.map(async e => e.type === 'tree'
    ? {
      ...e,
      children: await fetchFileTree(e.oid, `${url}${e.name}/`, depth + 1),
      isOpen: false,
      iconType: 'folderClosed',
      url: url + e.name
    }
    : {
      ...e,
      url: url + e.name,
      iconType: 'file',
      syntax: determineSyntax(e.name),
      isActive: e.name === DEFAULT_FILE_URL
    }
  ));
}

export const getFile = async ({url, fileTree}) => {
  const id = findByUrl(url, fileTree).oid;
  const { data: { repository: { object: { text } } } } = await request({
    query: GET_FILE,
    variables: {
      id
    }
  });
  return text;
}