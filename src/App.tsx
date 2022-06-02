import { useState } from 'react';
import emojiJson from './data/emoji.json';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import EmojiList from './components/EmojiList';

const App = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
};

export default App;
