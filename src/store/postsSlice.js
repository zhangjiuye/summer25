import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../config/constant";

// 创建异步 thunk 来获取所有帖子
export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    try {
      console.log("开始请求所有帖子");
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error("请求失败");
      }
      const data = await response.json();
      // console.log("成功获取帖子数据", data);
      return data;
    } catch (error) {
      console.error("请求帖子数据失败", error);
      throw error;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        console.log("帖子数据请求中");
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        console.log("帖子数据请求成功");
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        console.log("帖子数据请求失败");
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
