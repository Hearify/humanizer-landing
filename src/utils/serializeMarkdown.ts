import rehypeSlug from 'rehype-slug';
import { serialize } from 'next-mdx-remote/serialize';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const options = {
  mdxOptions: {
    commonMark: true,
    rehypePlugins: [rehypeSlug],
  },
};

const serializeMarkdown = async (mdxText: string): Promise<MDXRemoteSerializeResult> => {
  return serialize(mdxText, options);
};

export default serializeMarkdown;
