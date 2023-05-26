# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is an index method defined within the BlogPosts Controller. The Controller acts as a go between of the view and model.
class BlogPostsController < ApplicationController
  def index
    # ---2) The @posts is an instance variable, it is assigned the value returned by the BlogPost.all which will retrieve and dispaly all the instances from the BlogPost model 
    @posts = BlogPost.all
  end

  # ---3) This is the show method defined within the BlogPosts Controller. This retrieves and displays a  specific blog post from the database based on the provided id paramater. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is new method defined within the BlogPosts Controller. This displays an html form to create a new instance 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is the create method defined within the BlogPosts Controller. This saves the instance created from the user input on the new form. `@post.valid?` checks if the newly created blog post passes to model's validations. If the post is valid, it redirects the user to the show page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This is the edit method defined within the BlogPosts Controller. This displays an html form to modify an existing instance based on the provided id parameter 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This is the edit method defined within the BlogPosts Controller. This saves the instance modified from the user input on the edit form. post.valid?` checks if the newly created blog post passes to model's validations. If the post is valid, it redirects the user to the show page of the updated post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This is the destroy method defined within the BlogPosts Controller. The method retrieves an existing blog post and deletes it based on the ID parameter provided. In the conditional statement, if the destroy method is execuited, the user will be redirected to the index page. 
      redirect_to blog_posts_path
    end
  end

  # ---9) This is a private method called blog_post_params, used to enforce strong parameters. 
  private
  def blog_post_params
    # ---10) The require method ensures that the blog_post parameter is present. The permit method specifies the individual attributes that are allowed to be assigned. This protects against unintended data. 
    params.require(:blog_post).permit(:title, :content)
  end
end
