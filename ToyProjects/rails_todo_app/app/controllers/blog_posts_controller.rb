class BlogPostsController < ApplicationController

  def show 
    @blog_post = BlogPost.find(params[:id])
  end 

  def index 
    @blog_posts = BlogPost.all 
  end 

  def create 
    @blog_post = BlogPost.new(blog_post_params)

    if @blog_post.save 
      render '/blog_posts/show'
    else 
      render json: @blog_post.error.full_messages, error: 402
    end 
  end 

  def destroy
    @blog_post = BlogPost.find(params[:id])

    @blog_post.destroy

    render json: @blog_post
  end 

  private 

  def blog_post_params 
    params.required(:blog_post).permit(:user_id, :title, :body)
  end 
end
