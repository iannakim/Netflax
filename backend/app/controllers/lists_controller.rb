class ListsController < ApplicationController

    def index
      @lists = List.all 
      render json: @lists
    end

    def findlist
      @found_list = List.find_by(user_id: params[:user_id])
      if @found_list
        render json: @found_list
      else
        render json: {error: "The user has no list"}
      end
    end

    def create
      @list = List.create(list_params)
      render json: @list
    end

    def update
    end

    def destroy
    end

  private

    def list_params
      params.permit(:name, :user_id)
    end


end
