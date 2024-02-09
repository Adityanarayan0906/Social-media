import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList=currPostList;
  if(action.type==="DELETE_POST")
  {
    newPostList=currPostList.filter(post => post.id !== action.payload.postId)
  }
  else if(action.type==="ADD_POST")
  {
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
};

const PostlistProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POSTLIST );
  const addPost = (userId,postTitle,postBody,reactions,tags) => 
  {
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id:Date.now(),title:postTitle,body:postBody,reactions:reactions,userId:userId,tags:tags
      }
    })
  };

  const deletePost = (postId) => 
  {
    dispatchPostList({
      type:"DELETE_POST",
      payload:{postId}
    })
  };

  return (
    <PostList.Provider value={{ postList , addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi firends i am going to mumbai for my vaccation.Peace out.",
    reactions: "0",
    userId: "user-9",
    tags: ["vaccation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho gaye",
    body: "4 saal ki masti k baad bhi ho gye hain pass . Hard to beleive.",
    reactions: "15",
    userId: "",
    tags: ["graduating"],
  },
];

export default PostlistProvider;
