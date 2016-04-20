defmodule Mojs.Router do
  use Mojs.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Mojs do
    pipe_through :browser # Use the default browser stack

    get "/", MojsController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", Mojs do
  #   pipe_through :api
  # end
end
