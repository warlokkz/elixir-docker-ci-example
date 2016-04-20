ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Mojs.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Mojs.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Mojs.Repo)

