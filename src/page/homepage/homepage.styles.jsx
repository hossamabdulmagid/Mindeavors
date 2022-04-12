import styled from 'styled-components';


export const RapperHeaderComponent = styled.div`
  color: black;
  margin: 5px;
  padding: 5px;

  h1 {
    padding: 4px;
    margin-bottom: 10px;
  }

  span {
    border: 1px solid limegreen;
    width: 80px;
    display: inline-flex;
    margin-bottom: 10px;
  }

  .About {
    color: white;
  }

  h3 {
    padding: 5px;
    margin-bottom: 15px;
  }

  ul {
    border-bottom: 2px solid limegreen;
    list-style: none;
    padding: 10px;
    margin: 4px;

    &:hover {
      padding: 10px;
      box-shadow: 4px 5px limegreen;
      margin: 4px;

    }
  }

  strong {
    color: lightseagreen;
  }

  .mb-3 {
    margin: 20px;
  }

 
`;