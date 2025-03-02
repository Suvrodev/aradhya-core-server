import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";
import { userModel } from "../user/user.model";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

//create Blog By Admin
const createBlogIntoDB = async (blogData: TBlog) => {
  console.log("In blog service: ----------------------------", blogData);
  const result = await BlogModel.create(blogData);

  console.log("Now Result##########################", result);
  return result;
};

///Get All Blog
const getAllBlog = async () => {
  const res = await BlogModel.find();
  return res;
};

//Get Single Blog
const getSingleBlogFromDB = async (blogId: string) => {
  try {
    const result = await BlogModel.findOne({ _id: blogId });
    return result;
  } catch (error) {
    throw new Error("Blog Not Found");
  }
};

//delete Blog
const deleteBlogFromDB = async (blogId: string) => {
  //main work
  const result = await BlogModel.findByIdAndDelete({ _id: blogId });
  return result;
};

//Update book
const updateBlogFromDB = async (blogId: string, blogData: TBlog) => {
  const result = await BlogModel.findByIdAndUpdate({ _id: blogId }, blogData, {
    new: true,
  });
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlog,
  getSingleBlogFromDB,
  deleteBlogFromDB,
  updateBlogFromDB,
};
