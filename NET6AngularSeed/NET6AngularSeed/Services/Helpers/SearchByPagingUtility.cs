using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace NET6AngularSeed.Services.Helpers
{
    public static class PagingUtility
    {

        public static PagingResult SearchByPage<T>(
            DbContext context,
            Expression<Func<T, bool>> filterExpression,
            string searchValue,
            int pageSize,
            int pageNumber,
            string orderBy,
            string direction) where T : class
        {
            using (context)
            {
                IQueryable<T> query;
                if (!string.IsNullOrEmpty(searchValue))
                {
                    query = context.Set<T>().Where(filterExpression).AsNoTracking().AsQueryable();
                }
                else
                {
                    query = context.Set<T>().AsNoTracking().AsQueryable();
                }

                try
                {
                    var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
                    return result;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

        public static PagingResult SearchByPage<T>(
            DbContext context,
            List<Expression<Func<T, object>>> includeExpressions,
            Expression<Func<T, bool>> filterExpression,
            string searchValue,
            int pageSize,
            int pageNumber,
            string orderBy,
            string direction) where T : class
        {
            using (context)
            {
                IQueryable<T> query;
                if (!string.IsNullOrEmpty(searchValue))
                {
                    query = context.Set<T>().Where(filterExpression).AsNoTracking().AsQueryable();
                    foreach (var includeExpression in includeExpressions)
                    {
                        query = query.Include(includeExpression);
                    }
                }
                else
                {
                    query = context.Set<T>().AsNoTracking().AsQueryable();
                    foreach (var includeExpression in includeExpressions)
                    {
                        query = query.Include(includeExpression);
                    }
                }

                try
                {
                    var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
                    return result;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

    internal static object SearchByPage<T>(
      DbContext context,
      Expression<Func<T, object>>[] includeExpressions,
      Expression<Func<T, bool>> conditionExpression,
      Expression<Func<T, bool>> filterExpession,
      string searchValue,
      int pageSize,
      int pageNumber,
      string orderBy,
      string direction
      ) where T : class
    {
      using (context)
      {
        IQueryable<T> query;
        if (!string.IsNullOrEmpty(searchValue))
        {
          query = context.Set<T>().Where(conditionExpression).Where(filterExpession).AsNoTracking().AsQueryable();
          foreach (var includeExpression in includeExpressions)
          {
            query = query.Include(includeExpression);
          }
        }
        else
        {
          query = context.Set<T>().Where(conditionExpression).AsNoTracking().AsQueryable();
          foreach (var includeExpression in includeExpressions)
          {
            query = query.Include(includeExpression);
          }
        }

        try
        {
          var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
          return result;
        }
        catch (Exception e)
        {
          Console.WriteLine(e);
          throw;
        }
      }
    }

    internal static object SearchByPage<T>(
      DbContext context,
      List<Expression<Func<T, object>>> includeExpressions,
      Expression<Func<T, bool>> conditionExpression,
      Expression<Func<T, bool>> filterExpession,
      string searchValue,
      int pageSize,
      int pageNumber,
      string orderBy,
      string direction
      ) where T : class
    {
      using (context)
      {
        IQueryable<T> query;
        if (!string.IsNullOrEmpty(searchValue))
        {
          query = context.Set<T>().Where(conditionExpression).Where(filterExpession).AsNoTracking().AsQueryable();
          foreach (var includeExpression in includeExpressions)
          {
            query = query.Include(includeExpression);
          }
        }
        else
        {
          query = context.Set<T>().Where(conditionExpression).AsNoTracking().AsQueryable();
          foreach (var includeExpression in includeExpressions)
          {
            query = query.Include(includeExpression);
          }
        }

        try
        {
          var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
          return result;
        }
        catch (Exception e)
        {
          Console.WriteLine(e);
          throw;
        }

      }

    }

    public static PagingResult SearchByPage<T>(
            DbContext context,
            Expression<Func<T, bool>> conditionExpression,
            Expression<Func<T, bool>> filterExpression,
            string searchValue,
            int pageSize,
            int pageNumber,
            string orderBy,
            string direction) where T : class
        {
            using (context)
            {
                IQueryable<T> query;
                if (!string.IsNullOrEmpty(searchValue))
                {
                    query = context.Set<T>().Where(conditionExpression).Where(filterExpression).AsNoTracking().AsQueryable();
                }
                else
                {
                    query = context.Set<T>().Where(conditionExpression).AsNoTracking().AsQueryable();
                }

                try
                {
                    var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
                    return result;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

        public static PagingResult SearchByPage<T>(
            DbContext context,
            Expression<Func<T, object>> includeExpression,
            Expression<Func<T, bool>> conditionExpression,
            Expression<Func<T, bool>> filterExpression,
            string searchValue,
            int pageSize,
            int pageNumber,
            string orderBy,
            string direction) where T : class
        {
            using (context)
            {
                IQueryable<T> query;
                if (!string.IsNullOrEmpty(searchValue))
                {
                    query = context.Set<T>().Include(includeExpression).Where(conditionExpression).Where(filterExpression).AsNoTracking().AsQueryable();
                }
                else
                {
                    query = context.Set<T>().Include(includeExpression).Where(conditionExpression).AsNoTracking().AsQueryable();
                }

                try
                {
                    var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
                    return result;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

        public static PagingResult SearchByPage<T>(
            DbContext context,
            Expression<Func<T, object>> includeExpression,
            Expression<Func<T, bool>> filterExpression,
            string searchValue,
            int pageSize,
            int pageNumber,
            string orderBy,
            string direction) where T : class
        {
            using (context)
            {
                IQueryable<T> query;
                if (!string.IsNullOrEmpty(searchValue))
                {
                    query = context.Set<T>().Include(includeExpression).Where(filterExpression).AsNoTracking().AsQueryable();
                }
                else
                {
                    query = context.Set<T>().Include(includeExpression).AsNoTracking().AsQueryable();
                }

                try
                {
                    var result = PagingHelper.GetPageResult(context, query, pageSize, pageNumber, orderBy, direction);
                    return result;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }

            }
        }

    }
}
