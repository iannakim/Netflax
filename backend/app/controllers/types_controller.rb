class TypesController < ApplicationController
  
  def index
    @types = Type.all 
    render json: @types
  end


end
