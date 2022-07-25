class Api::ReservationsController < ApplicationController 
    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        if @reservation.destroy

        else
            render json: ['Unable to delete reservation']
        end

    end

    def reservation_params
        params.require(:reservation).permit(
            :user_id,
            :restaurant_id,
            :first_name,
            :last_name,
            :date,
            :time,
            :party_size,
            :phone_number,
            :email
            )
    end

end
