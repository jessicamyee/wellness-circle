class UserSharesController < ApplicationController
  before_action :authorize_request
  before_action :set_user_share, only: [:show, :destroy]

  # GET /user_shares
  def index
    @user_share = UserShare.all
    render json: @user_share
  end

  # GET /user_shares/list
  def list
    render json: @current_user.shared_recipients()
  end

  # POST /user_shares
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
