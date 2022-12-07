#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
EXPOSE 1433
EXPOSE 1440


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["NET6AngularSeed/NET6AngularSeed.csproj", "NET6AngularSeed/"]
RUN dotnet restore "NET6AngularSeed/NET6AngularSeed.csproj"
COPY . .
WORKDIR "/src/NET6AngularSeed"
RUN dotnet build "NET6AngularSeed.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "NET6AngularSeed.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app

#COPY --from=publish /app/publish .
#RUN apt-get update
#RUN apt-get remove krb5-config krb5-user
#RUN apt install -y krb5-config
#run apt-get install -y krb5-user
#
#COPY krb5.conf /etc/krb5.conf
#COPY myUserName.keytab /app/myUserName.keytab
#
#COPY launch.sh /launch.sh
#ENTRYPOINT /launch.sh


ENTRYPOINT ["dotnet", "NET6AngularSeed.dll"]
