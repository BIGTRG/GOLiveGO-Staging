# GeniusOneAi.Web - staging image. Build context = repo root.
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY NuGet.config ./
COPY pro-packages ./pro-packages
COPY GeniusOneAi.sln ./
COPY GeniusOneAi/GeniusOneAi.Web/GeniusOneAi.Web.csproj GeniusOneAi/GeniusOneAi.Web/
RUN dotnet restore GeniusOneAi/GeniusOneAi.Web/GeniusOneAi.Web.csproj
COPY GeniusOneAi ./GeniusOneAi
RUN dotnet publish GeniusOneAi/GeniusOneAi.Web/GeniusOneAi.Web.csproj -c Release -o /app/publish /p:TypeScriptCompileBlocked=true

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
# native deps for PDF / document libraries
RUN apt-get update && apt-get install -y --no-install-recommends libgdiplus libc6-dev libx11-6 libxext6 libxrender1 libfontconfig1 fonts-liberation && rm -rf /var/lib/apt/lists/*
COPY --from=build /app/publish ./
RUN mkdir -p App_Data/Mail App_Data/DocumentRepository/temporary wwwroot/App_Data/DocumentCache
ENV ASPNETCORE_URLS=http://+:8080 ASPNETCORE_ENVIRONMENT=Staging
EXPOSE 8080
ENTRYPOINT ["dotnet", "GeniusOneAi.Web.dll"]
