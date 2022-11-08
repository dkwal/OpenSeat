class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        if @review.save
            redirect_to api_restaurant_url(review_params[:restaurant_id])
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy

        else
            render json: ['Unable to delete review']
        end
    end

    def review_params
        params.require(:review).permit(
            :user_id,
            :restaurant_id,
            :body,
            :overall_rating,
            :food_rating,
            :service_rating,
            :ambience_rating,
            :value_rating
        )
    end
end
