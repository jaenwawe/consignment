class UsersController < ApplicationController
    skip_before_action :confirm_authentication, only: [:create]
    before_action :set_user, only: [:show, :update, :destroy]
    
    def index    
      render json: User.all, each_serializer: UserSerializer  
    end

    def signup 
        user=User.new(user_params)
        if user.save
          render json: user.name
        if test
           render json: {error: ""}, status: 401
        else
          
        end
        end
    end

    def show
      if current_user
         render json: current_user, status: :ok
      else
        not_current_user
      end 
    end


    # def show_else # where do custom methods go w/ authentication
    #   session[:page_views] ||= 0
    #   session[:page_views] += 1
      
    #   if session[:page_views] < 3
    #     found_user = User.find(params[:id])
    #     render json: found_user, status: :ok
    #   else
    #     render json: { error: "Maximum pageview limit reached" }, status: :unauthorized
    #   end
    # end
  
    
    
    def create
    new_user = User.new(user_params)
      if new_user.save
        session[:user_id] = new_user.id
        render json: new_user, status: :created
      else render json: new_user.errors.full_messages, status: :unprocessable_entity
      end
    end
      
      def update
      set_user
        if @user
        @user.update(user_params)
          if @user.valid?
            @user.save
            render json: @user
          else 
              not_found 
          end
        else        
        render json: {error: "Could not find index #{[:id]}"},  status: :unprocessable_entity 
        end      
      end
  
    def destroy
      set_user
      if @user
        @user.destroy
        render json: {message: "deleted"}, status: :ok
      else
        render json: {error: "Could not find index #{[:id]}"}
      end
    end
      
        
  
  private
        def user_params
          params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :email,  :phone_number, :address, :state, :zipcode, :gender, :store_name, :store)        
        end
        
        def not_current_user
          render json: { error: "Not authorized" }, status: :unauthorized
        end
  
        def not_found
          render :json => { :error => "user not found"}, :status => :not_found
            
        end
  
        def set_user
          @user = User.find(params[:id])
        end
      end