defmodule Mojs.PageController do
  use Mojs.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
