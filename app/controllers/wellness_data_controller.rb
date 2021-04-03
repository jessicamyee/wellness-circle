class WellnessDataController < ApplicationController
  before_action :authorize_request
  before_action :set_wellness_datum, only: [:show, :update, :destroy]

  # GET /wellness_data
  def index
    render json: {
      personal_average_data: @current_user.personal_average_data,
      historical_data: @current_user.historical_data,
    }
  end

  # POST /wellness_data
  def create
    @wellness_datum = WellnessDatum.new(wellness_datum_params)
    @wellness_datum.user = @current_user
    if @wellness_datum.save
      render json: @wellness_datum, status: :created, location: @wellness_datum
    else
      render json: @wellness_datum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wellness_data/1
  def update
    if @wellness_datum.update(wellness_datum_params)
      render json: @wellness_datum
    else
      render json: @wellness_datum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wellness_data/1
  def destroy
    @wellness_datum.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wellness_datum
      @wellness_datum = @current_user.wellness_data.find(params[:id])
    end
    

    # Only allow a list of trusted parameters through.
    def wellness_datum_params
      params.require(:wellness_datum).permit(
        :social_score,
        :physical_score,
        :emotional_score,
        :intellectual_score,
        :occupational_score,
        :spiritual_score,
        :user_id,
      )
    end

    # def put_wellness_datum_params
    #   params.require(:wellness_datum).permit(
    #     :socialScore,
    #     :physicalScore,
    #     :emotionalScore,
    #     :intellectualScore,
    #     :occupationalScore,
    #     :spiritualScore,
    #     :userId
    #     )
    # end
end
