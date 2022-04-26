import styled from 'styled-components';

import {BsTrash,} from "react-icons/bs";

import {BiEdit} from "react-icons/bi";
import {FcPlus} from "react-icons/fc";

export const PlusIcon = styled(FcPlus)`
  margin: 1px;
`;
export const TrashIcon = styled(BsTrash)`
  margin: 2px;
  color: red;
  cursor: pointer;

  &:hover {
    color: darkred;
  }

`;


export const EditIcon = styled(BiEdit)`
  margin: 2px;
  color: lightblue;
  cursor: pointer;

  &:hover {
    color: lightskyblue;
  }
`;


export const RapperCommentsComponent = styled.div`
  .comment-content {
    padding: 15px;
    margin: 15px;
  }

  .add-comment {
    cursor: pointer;
    margin: 10px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    float: right;
    padding: 5px;
    border-radius: 10px;

    &:hover {
      background-color: wheat;
    }
  }

  .pull-right {
    float: right;
  }

  .time {
    margin: 5px;
    padding: 5px;
  }

  button {
    cursor: pointer;
  }
`;