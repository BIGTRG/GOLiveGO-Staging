# GOLiveGO
## Demonstration data (feat/encounter-engine)

On startup, after the migrations, `Initialization/DemoDataSeeder.cs` seeds:

1. The goal library (`GeniusOneDatabase/Seed/goal_library_seed.sql`): 164 goals, 644 interventions, 260 projected outcomes, 1,514 outcome questions, 28 crisis needs. Idempotent by goal code; always applied.
2. The demonstration case unless `"DemoData": { "Enabled": false }` is set: synthetic clients STG-1057 Ashley Yolanda, STG-1042 Jordan Doe, STG-2011 Sam Rivers, and a completed, signed adult crisis assessment for Jordan Doe that opens his episode and copies the goals for every encounter (E1 to Day 21) through `AssessmentEngine.Complete`.

To see it: Patient Manager > Jordan Doe > Assessments tab (signed assessment, Document), Episodes tab (episode with goals grouped by encounter), then Start Encounter 1 on the episode; the progress note opens with the goals, interventions and outcome questions pre-loaded. Consent must be recorded (in person, link, or verbal) before Encounter 1 can be signed. Set `DemoData:Enabled` to `false` in `appsettings.machine.json` on any server with real clients.
