# Staging deploy (server #3, staging-g1.geniuseye.ai)

- Repo: BIGTRG/GOLiveGO-Staging, branch feat/encounter-engine. GOLiveGO itself is never deployed from here.
- SQL: container `g1-sql` (SQL Server 2022 Developer, 3 GB cap), DB `GeniusOneAi_Staging` built from GeniusOneDatabase/dbo scripts; VersionInfo pre-seeded so FluentMigrator skips the Serenity base migrations.
- Web: `docker compose -f deploy/docker-compose.staging.yml up -d --build` from /opt/g1-staging/web/src.
- Secrets: `/opt/g1-staging/web/g1-web.env` and `appsettings.machine.json` on the server only (see appsettings.machine.example.json).
- Synthetic data only. No production PHI on staging.
