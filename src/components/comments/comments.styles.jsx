import styled from 'styled-components';

import {BsTrash,} from "react-icons/bs";

import {BiEdit} from "react-icons/bi";


export const TrashIcon = styled(BsTrash)``;


export const EditIcon = styled(BiEdit)``;


export const RapperCommentsComponent = styled.div`
  .add-comment {
    margin: 15px;
  }

  .pull-right {
    float: right;
    display: inline;
  }

  button {
    cursor: pointer;
  }
`;