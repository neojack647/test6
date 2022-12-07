using NET6AngularSeed.Services.Helpers;
using System.Linq.Expressions;
using System.Security.Principal;
using static NET6AngularSeed.Services.Helpers.Utilities;

#nullable enable
namespace NET6AngularSeed.Services.Base;
public interface IService<TEntity> where TEntity : class, IAuditable
{
  // read
  Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter,
      Func<IQueryable<TEntity>,
      IOrderedQueryable<TEntity>> orderBy,
      params Expression<Func<TEntity, object>>[] includeProperties);

  Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter,
  Func<IQueryable<TEntity>,
  IOrderedQueryable<TEntity>> orderBy,
      params string[] includeProperties);

  PagingResult SearchPaging(string searchValue, int pageSize,
      int pageNumber, string orderBy, string direction,
      Expression<Func<TEntity, object>>[] includes = null,
      Expression<Func<TEntity, bool>> conditions = null,
      Expression<Func<TEntity, bool>> filters = null);

  Task<IEnumerable<TEntity?>> GetAllAsync();
  Task<TEntity?> GetByIdAsync(params object[] id);
  IQueryable<TEntity?> GetAllQueryBy(Expression<Func<TEntity, bool>> expression);
  // write
  Task<TEntity> UpsertAsync(TEntity entity, IPrincipal user);
  void Delete(params object[] id);

}
