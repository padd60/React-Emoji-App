import styled from 'styled-components';

const Input = styled.input`
  width:100%;
  padding: 4px 8px;
  border: 1px solid gray;
  box-sizing: border-box;
  border-radius: 4px;
`;

const SearchBox = ({ onSearch }:{onSearch:(value:string)=>void}) => {
  return (
    <Input onChange={(e) => { onSearch(e.target.value); }} />
  );
};

export default SearchBox;
