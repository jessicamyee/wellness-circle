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
    params.require(:recipientUsername)
    recipient_username = params[:recipientUsername]
    recipient_user = User.find_by(username: recipient_username)
    sharer_user = @current_user
    @user_share = UserShare.new(sharer: sharer_user, recipient: recipient_user)
    if @user_share.save
      render json: @user_share, status: :created
    else
      render json: @user_share.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_share
      @user_share = UserShare.find(params[:id])
    end
end
