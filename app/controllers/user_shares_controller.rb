class UserSharesController < ApplicationController
  before_action :set_user_share, only: [:show, :destroy]

  # GET /user_share
  def index
    @user_share = UserShare.all

    render json: @user_share
  end

  # ADD THE MATH LOGIC HERE!!!!

  # GET /user_share/list
  def list
    render json: @user_share
  end

  # POST /user_share
  def create
    @user_share = UserShare.new(user_share_params)

    if @user_share.save
      render json: @user_share, status: :created, location: @user_share
    else
      render json: @user_share.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_share
      @user_share = UserShare.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_share_params
      params.require(:user_share).permit(:user_id, :user_id)
    end
end
