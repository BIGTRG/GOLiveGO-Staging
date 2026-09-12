-- STAGING ONLY. Synthetic clients for the encounter-engine build. No real PHI.
SET NOCOUNT ON;
DECLARE @tenant INT = 1, @admin INT = (SELECT TOP 1 UserId FROM Users WHERE Username = 'admin');

IF NOT EXISTS (SELECT 1 FROM Clients WHERE RecordNumber = 'STG-1057')
INSERT INTO Clients (FirstName, LastName, BirthDate, Gender, Race, Address1, City, State, Zipcode, County, PrimaryPhone,
    PrimaryLanguage, MaritalStatus, LivingArrangements, ReferralDate, ReferralSource, AdmissionDate, ClientStatus, SystemStatus, RecordNumber, TenantId, Notes)
VALUES ('Ashley', 'Yolanda', '1979-03-14', 'Female', 'Black', 'No fixed address', 'Ahoskie', 'NC', '27910', 'Hertford', '252-555-0117',
    'English', 'Widowed', 'Homeless', CAST(GETDATE() AS DATE), 'Community', CAST(GETDATE() AS DATE), 'Active', 'Active', 'STG-1057', @tenant,
    'SYNTHETIC. Presenting: suicidal ideation, homeless, no food 2-3 days, husband died two weeks ago.');

IF NOT EXISTS (SELECT 1 FROM Clients WHERE RecordNumber = 'STG-1042')
INSERT INTO Clients (FirstName, LastName, BirthDate, Gender, Race, Address1, City, State, Zipcode, County, PrimaryPhone,
    PrimaryLanguage, ReferralDate, ReferralSource, AdmissionDate, ClientStatus, SystemStatus, RecordNumber, TenantId, Notes)
VALUES ('Jordan', 'Doe', '1988-11-02', 'Male', 'White', '14 Mill St', 'Windsor', 'NC', '27983', 'Bertie', '252-555-0142',
    'English', CAST(GETDATE() AS DATE), 'Law Enforcement', CAST(GETDATE() AS DATE), 'Active', 'Active', 'STG-1042', @tenant,
    'SYNTHETIC. Presenting: acute alcohol withdrawal risk, panic, lost job.');

IF NOT EXISTS (SELECT 1 FROM Clients WHERE RecordNumber = 'STG-2011')
INSERT INTO Clients (FirstName, LastName, BirthDate, Gender, Race, Address1, City, State, Zipcode, County, PrimaryPhone,
    PrimaryLanguage, GuardianName, ReferralDate, ReferralSource, AdmissionDate, ClientStatus, SystemStatus, RecordNumber, TenantId, Notes)
VALUES ('Sam', 'Rivers', '2013-06-21', 'Male', 'Hispanic', '220 Oak Ave', 'Ahoskie', 'NC', '27910', 'Hertford', '252-555-0188',
    'Spanish', 'Maria Rivers (mother)', CAST(GETDATE() AS DATE), 'School', CAST(GETDATE() AS DATE), 'Active', 'Active', 'STG-2011', @tenant,
    'SYNTHETIC. Child. Presenting: school threat statement, self-harm marks, parent overwhelmed.');

DECLARE @ay INT = (SELECT ClientId FROM Clients WHERE RecordNumber = 'STG-1057');
IF NOT EXISTS (SELECT 1 FROM CrisisEpisodes WHERE ClientId = @ay AND ClosedAt IS NULL)
BEGIN
    INSERT INTO CrisisEpisodes (ClientId, TenantId, OpenedAt, OpenedBy, PresentingTrigger, Phase, EncounterCount, ProjectedDischarge, Owner, OwnerCreateDate)
    VALUES (@ay, @tenant, GETDATE(), @admin, 'Suicidal ideation after husband''s death; homeless; no food for 2-3 days', 'E1', 0, DATEADD(DAY, 7, CAST(GETDATE() AS DATE)), @admin, GETDATE());
    DECLARE @ep INT = SCOPE_IDENTITY();

    INSERT INTO ClientGoals (ClientId, GoalType, Goal, Description, Status, TenantId, Owner, OwnerCreateDate, EpisodeId, Phase, IsProtocol,
        IsActiveMonday, IsActiveTuesday, IsActiveWednesday, IsActiveThursday, IsActiveFriday, IsActiveSaturday, IsActiveSunday)
    VALUES
    (@ay, 'Mobile Crisis', 'G-96', 'Client will remain safe from self-harm through this encounter; Columbia screen completed, means restricted, safety plan started.', 'Started', @tenant, @admin, GETDATE(), @ep, 'E1', 1, 0,0,0,0,0,0,0),
    (@ay, 'Mobile Crisis', 'G-01', 'Client will receive a hot meal within 4 hours and a 7-day food plan before the encounter ends.', 'Started', @tenant, @admin, GETDATE(), @ep, 'E1', 0, 0,0,0,0,0,0,0),
    (@ay, 'Mobile Crisis', 'G-21', 'Client will have a safe place to sleep tonight (emergency shelter or motel voucher) confirmed before the worker leaves.', 'Started', @tenant, @admin, GETDATE(), @ep, 'E1', 0, 0,0,0,0,0,0,0),
    (@ay, 'Mobile Crisis', 'G-71', 'Client will identify one grief support contact and agree to a follow-up conversation about the loss.', 'Not Started', @tenant, @admin, GETDATE(), @ep, 'E1', 0, 0,0,0,0,0,0,0),
    (@ay, 'Mobile Crisis', 'G-30', 'Worker will complete the full needs assessment (housing, food, income, medical, MH provider) with the client.', 'Not Started', @tenant, @admin, GETDATE(), @ep, 'E2', 1, 0,0,0,0,0,0,0),
    (@ay, 'Mobile Crisis', 'G-52', 'Client will be scheduled with a psychiatric provider for medication evaluation within 7 days.', 'Not Started', @tenant, @admin, GETDATE(), @ep, 'E3', 0, 0,0,0,0,0,0,0);
END
SELECT ClientId, RecordNumber, FirstName, LastName FROM Clients WHERE RecordNumber LIKE 'STG-%';
SELECT EpisodeId, ClientId, Phase, PresentingTrigger FROM CrisisEpisodes;
