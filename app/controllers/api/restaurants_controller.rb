class Api::RestaurantsController < ApplicationController
    before_action :force_json, only: :index

    def index
        @q = Restaurant.ransack(name_cont: params[:q])
        @restaurants = @q.result(distinct: true)
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

    private

    def force_json
        request.format = :json
    end
end
