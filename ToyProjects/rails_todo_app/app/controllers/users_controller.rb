class UsersController < ApplicationController
  # use before_action to restrain the user from doing certain things
  # skip_before_action :verify_authenticity_token
  # restrain the user from being shown unless logged in
  # before_action :required_signed_in!, only: [:show]
  # don't let the user create another account if they are logged in
  # before_action :required_signed_out!, only: [:new, :create]
  
  def new 
    @user = User.new
  end 

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save 
      sign_in(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 402
    end 
  end 

  private 
  def user_params 
    params.required(:user).permit(:name, :password)
  end 
end
