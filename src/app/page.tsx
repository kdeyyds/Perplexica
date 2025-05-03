import ChatWindow from '@/components/ChatWindow';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '聊天 - Perplexica',
  description: '与互联网聊天，与 Perplexica 聊天。',
};

const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Suspense fallback={<div>加载中...</div>}>
        <ChatWindow />
      </Suspense>
    </div>
  );
};

export default Home;
