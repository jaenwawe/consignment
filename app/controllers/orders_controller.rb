class OrdersController < ApplicationController
    skip_before_action :confirm_authentication, only: [:create]
    before_action :set_order, only: [:show, :update, :destroy]
    
    def index    
      render json: Order.all, each_serializer: OrderSerializer  
    end
      
    def create
        new_order = Order.new(order_params)
          if new_order.save
            session[:order_id] = new_order.id
            render json: new_order, status: :created
          else render json: new_order.errors.full_messages, status: :unprocessable_entity
          end
        end
          
          def update
          set_order
            if @order
            @order.update(order_params)
              if @order.valid?
                @order.save
                render json: @order
              else 
                  not_found 
              end
            else        
            render json: {error: "Could not find index #{[:id]}"},  status: :unprocessable_entity 
            end      
          end
      
        def destroy
          set_order
          if @order
            @order.destroy
            render json: {message: "deleted"}, status: :ok
          else
            render json: {error: "Could not find index #{[:id]}"}
          end
        end

    def show
      if current_order
         render json: current_order, status: :ok
      else
        not_current_order
        # render json: {error: "No active session"}, status: :unauthorized
      end 
    end


    # def show_else # where do custom methods go w/ authentication
    #   session[:page_views] ||= 0
    #   session[:page_views] += 1
      
    #   if session[:page_views] < 3
    #     found_order = Order.find(params[:id])
    #     render json: found_order, status: :ok
    #   else
    #     render json: { error: "Maximum pageview limit reached" }, status: :unauthorized
    #   end
    # end
  
    

      
        
  
  private
        def order_params
          params.permit(:first_name, :last_name, :ordername, :password, :password_confirmation, :email,  :phone_number, :address, :state, :zipcode, :gender, :store_name, :store)        
        end
        
        def not_current_order
          render json: { error: "Not authorized" }, status: :unauthorized
        end
  
        def not_found
          render :json => { :error => "order not found"}, :status => :not_found
            
        end
  
        def set_order
          @order = Order.find(params[:id])
        end
      end
