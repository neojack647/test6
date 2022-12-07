using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Security.Principal;
using NET6AngularSeed.Services.Helpers;
using static NET6AngularSeed.Services.Helpers.Utilities;

namespace NET6AngularSeed.Services.Base;

public class BaseService<TEntity, TContext> : IService<TEntity>
    where TEntity : class, IAuditable
    where TContext : DbContext, new()
{

    public BaseService()
    {
    }

    public async Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy, params Expression<Func<TEntity, object>>[] includeProperties)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        return repo.Get(filter, orderBy, includeProperties);
      }
    }

    public async virtual  Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter = null,
       Func<IQueryable<TEntity>,
           IOrderedQueryable<TEntity>> orderBy = null,
           params string[] includeProperties)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        return await repo.GetAsync(filter, orderBy, includeProperties);
      }
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync()
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        return await repo.GetAllAsync();
      }
    }

    public IQueryable<TEntity> GetAllQueryBy(Expression<Func<TEntity, bool>> expression)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        return repo.GetAllQueryBy(expression);
      }
    }

    public async Task<TEntity> GetByIdAsync(params object[] id)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        return await repo.GetByIdAsync(id);
      }
    }

    public PagingResult SearchPaging(string searchValue, int pageSize, int pageNumber, string orderBy, string direction,
        Expression<Func<TEntity, object>>[] includes = null,
        Expression<Func<TEntity, bool>> conditions = null,
        Expression<Func<TEntity, bool>> filters = null)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        return repo.SearchPaging(searchValue, pageSize, pageNumber, orderBy, direction, includes, conditions, filters);
      }
    }

    public async Task<TEntity> UpsertAsync(TEntity entity, IPrincipal user)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        TEntity e = repo.Upsert(entity, user);
        await context.SaveChangesAsync();
        return e;
      }
    }

    public void Delete(params object[] id)
    {
      using (var context = CreateContext())
      {
        var repo = new BaseRepository<TEntity>(context);
        repo.Delete(id);
        context.SaveChanges();
      }
    }

    private static TContext CreateContext()
    {
      var context = new TContext();
      return context;
    }


}

