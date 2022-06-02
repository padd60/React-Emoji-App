import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const Symbol = styled.div`
  font-size: 24px;
  margin-right: 16px;
`;

const Title = styled.div`
  width: 200px;
`;

const Keywords = styled.div`
  flex: 1;
`;

type emojiType = {
  symbol:string,
  title:string,
  keywords: string,
}

type propsType = {
  emoji: emojiType,
}

const EmojiListItem = ({ emoji }:propsType) => {
  return (
    <ListItem onClick={() => navigator.clipboard.writeText(emoji.symbol)}>
      <Symbol>{emoji.symbol}</Symbol>
      <Title>{emoji.title}</Title>
      <Keywords>{emoji.keywords}</Keywords>
    </ListItem>
  );
};

export default EmojiListItem;
