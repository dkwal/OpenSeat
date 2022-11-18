class Api::FavoritesController < ApplicationController
    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save

        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        if @favorite.destroy

        else
            render json: ['Unable to delete favorite']
        end
    end

    def favorite_params
        params.require(:favorite).permit(
            :user_id,
            :restaurant_id
        )
    end
end
