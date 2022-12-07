using Microsoft.EntityFrameworkCore;
using NET6AngularSeed.Services.Helpers;
using System.Linq.Expressions;
using System.Security.Principal;
using static NET6AngularSeed.Services.Helpers.Utilities;
using NET6AngularSeed.Context;

namespace NET6AngularSeed.Services.Base;

public class BaseRepository<TEntity> where TEntity : class, IAuditable
{
  private readonly DbContext _context;
  private DbSet<TEntity> _dbSet;
  private object context;

  public BaseRepository(DbContext context)
  {
    _context = context;
    _dbSet = context.Set<TEntity>();
  }

  public virtual IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null,
      Func<IQueryable<TEntity>,
          IOrderedQueryable<TEntity>> orderBy = null,
          params Expression<Func<TEntity, object>>[] includeProperties)
  {
    IQueryable<TEntity> query = _dbSet;
    if (filter != null)
    {
      query = query.Where(filter);
    }

    foreach (var includeProperty in includeProperties)
    {
      query = query.Include(includeProperty);
    }

    if (orderBy != null)
    {
      return orderBy(query).ToList();
    }
    else
    {
      return query.AsNoTracking().ToList();
    }
  }

  public async virtual Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter = null,
     Func<IQueryable<TEntity>,
         IOrderedQueryable<TEntity>> orderBy = null,
         params string[] includeProperties)
  {
    IQueryable<TEntity> query = _dbSet;
    if (filter != null)
    {
      query = query.Where(filter);
    }

    foreach (var includeProperty in includeProperties)
    {
      query = query.Include(includeProperty);
    }

    if (orderBy != null)
    {
      return await Task.FromResult(orderBy(query).ToList());
    }
    else
    {
      return await Task.FromResult(query.AsNoTracking().ToList());
    }
  }

  public async virtual Task<IEnumerable<TEntity>> GetAllAsync() => await _dbSet.AsNoTracking().ToListAsync();

  public async virtual Task<TEntity?> GetByIdAsync(params object[] id) => await _dbSet.FindAsync(id);

  public IQueryable<TEntity> GetAllQueryBy(Expression<Func<TEntity, bool>> expression)
      => _dbSet.AsNoTracking().Where(expression).AsQueryable();

  public PagingResult SearchPaging(string searchValue, int pageSize, int pageNumber, string orderBy, string direction,
      Expression<Func<TEntity, object>>[] includes = null,
      Expression<Func<TEntity, bool>> conditions = null,
      Expression<Func<TEntity, bool>> filters = null
      )
  {
    var result = PagingUtility.SearchByPage(_context, includes, conditions, filters,
        searchValue, pageSize, pageNumber, orderBy, direction);
    return (PagingResult)result;

  }

  public virtual TEntity Upsert(TEntity entity, IPrincipal userPrincipal)
  {
    /*
    *  if key property is not a default value,
    *  get the existing insert prop values dropped off by DTO
    */
    var id = Utilities.GetIdPropertyValue(entity);
    if (id != default(int))
    {
      var e = _dbSet.Find(id);
      _context.Entry(e).State = EntityState.Detached;  //stop tracking this entity
      entity.InsertBy = e.InsertBy;
      entity.InsertDate = e.InsertDate;
      entity.Status = e.Status;
    }
    // Udate Audit tracking properties
    Utilities.UpdateAudit(entity, userPrincipal);
    var idValue = entity.GetIdPropertyValue();
    if (idValue == default(int))
    {
      _dbSet.Add(entity);
    }
    else
    {
      _dbSet.Attach(entity);
      //_dbSet.SafeAttach(entity); ?? missing in .NET 5+
      _context.Entry(entity).State = EntityState.Modified;
    }
    return entity;
  }

  public void Delete(params object[] id)
  {
    var entity = _dbSet.Find(id);
    _context.Entry(entity).State = EntityState.Deleted;
  }

}

