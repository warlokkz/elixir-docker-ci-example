defmodule Mojs.PageControllerTest do
  use Mojs.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) |> String.contains?("Hello Mojs!")
  end
end
