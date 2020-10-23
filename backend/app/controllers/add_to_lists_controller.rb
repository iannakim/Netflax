class AddToListsController < ApplicationController
 
 
  def index
    @addtolists = AddToList.all 
    render json: @addtolists
  end


  def create
    @addToList= AddToList.create(addToList_params)
    render json: @addToList
  end

  def delete
    @item = AddToList.find(params[:id])
    @item.destroy
    render json: @item
  end
  
private

  def addToList_params
    params.permit(:list_id, :show_id)
  end

end
