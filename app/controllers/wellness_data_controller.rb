class WellnessDataController < ApplicationController
  before_action :set_wellness_datum, only: [:show, :update, :destroy]

  # GET /wellness_data
  def index
    @wellness_data = WellnessDatum.all

    render json: @wellness_data
  end

  # GET /wellness_data/1
  def show
    render json: @wellness_datum
  end

  # POST /wellness_data
  def create
    @wellness_datum = WellnessDatum.new(wellness_datum_params)

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
      @wellness_datum = WellnessDatum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def wellness_datum_params
      params.require(:wellness_datum).permit(:social_score, :physical_score, :emotional_score, :intellectual_score, :occupational_score, :spiritual_score, :user_id)
    end
end
