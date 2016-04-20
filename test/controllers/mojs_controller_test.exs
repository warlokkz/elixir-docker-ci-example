defmodule Mojs.MojsControllerTest do
  use ExUnit.Case, async: false
  use Plug.Test

  test "/index returns http 200 response" do
    response = conn(:get, "/") |> send_request

    assert response.status == 200
  end

  defp send_request(conn) do
    conn
    |> put_private(:plug_skip_csrf_protection, true)
    |> Mojs.Endpoint.call([])
  end
end