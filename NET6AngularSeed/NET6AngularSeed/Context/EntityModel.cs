using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using NET6AngularSeed.Context.Entities;

namespace NET6AngularSeed.Context
{

  public class EntityModel : DbContext
  {
    // private readonly IConfiguration Configuration;


    //public EntityModel(DbContextOptions<EntityModel> options, IConfiguration configuration) : base(options)
    //{
    //  Configuration = configuration;
    //}

    //public string GetConnectionString()
    //{
    //    var connString = Configuration["ConnectionStrings.EntityModel"];
    //    return connString;
    //}

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //  if (!optionsBuilder.IsConfigured)
    //  {
    //    var connectionString = GetConnectionString();
    //    optionsBuilder.UseSqlServer(connectionString);
    //  }
    //}
    public EntityModel()
    {
    }
    public EntityModel(DbContextOptions<EntityModel> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        IConfigurationRoot configuration = new ConfigurationBuilder()
           .SetBasePath(Directory.GetCurrentDirectory())
           .AddJsonFile("appsettings.json")
           .Build();
        var connectionString = configuration.GetConnectionString("EntityModel");
        optionsBuilder.UseSqlServer(connectionString);
      }
    }


    public DbSet<Thing> Things { get; set; }
    public DbSet<ThingType> Types { get; set; }
    public DbSet<Tag> Tags { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

      modelBuilder.Entity<Tag>(entity =>
      {
        entity.HasMany(e => e.Things)
        .WithMany(e => e.Tags);

        entity.HasMany(e => e.Things)
        .WithMany(e => e.Tags)
        .UsingEntity<TagThing>(
            x => x.HasOne(y => y.Thing).WithMany().HasForeignKey(y => y.ThingId),
            y => y.HasOne(x => x.Tag).WithMany().HasForeignKey(x => x.TagId)
          ).HasKey(x => new { x.TagId, x.ThingId });

      });



    }
  }
}
