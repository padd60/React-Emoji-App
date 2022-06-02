import styled from 'styled-components';
import EmojiListItem from './EmojiListItem';

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

type emojiType = {
  symbol:string,
  title:string,
  keywords: string,
}

type propsType = {
  emojis: emojiType[],
  keyword:string,
}

const EmojiList = ({
  emojis, keyword,
}:propsType) => {
  return (
    <Container>
      {emojis
        .filter(
          (emoji) => emoji.title.indexOf(keyword) >= 0
          || emoji.keywords.indexOf(keyword) >= 0,
        )
        .slice(0, 10)
        .map((emoji) => (
          <EmojiListItem emoji={emoji} key={emoji.title} />
        ))}
    </Container>
  );
};

export default EmojiList;
