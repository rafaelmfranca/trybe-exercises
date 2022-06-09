import { Posts } from '@models';

export default {
  getAll: async () => {
    const [posts] = JSON.parse(JSON.stringify(await Posts.getAll()));
    return posts;
  },
};
