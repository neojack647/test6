using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NET6AngularSeed.Services.Helpers
{
    public class PagingParameters
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public string OrderBy { get; set; }
        public string Direction { get; set; }
        public string SearchValue { get; set; }
        public dynamic PageByObject { get; set; }
    }

    public class PagingResult
    {
        public int TotalCount { get; set; }
        public double TotalPages { get; set; }
        public List<dynamic> Collection { get; set; }
    }

    public static class PagingHelper
    {
        public static PagingResult GetPageResult<TEntity, TContext>(TContext context, IQueryable<TEntity> query,
            int pageSize, int pageNumber, string orderBy = "", string direction = "asc") where TEntity : class where TContext : DbContext
        {
            try
            {
                //IQueryable<T> query = repo.GetAllByImport(importId);
                var totalCount = query.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);
                var thisType = typeof(TEntity);

                if (QueryHelper.PropertyExists<TEntity>(orderBy))
                {
                    //query = direction == "desc" ? query.OrderBy(orderBy + " desc") : query.OrderBy(orderBy);
                    query = direction == "desc" ? query.OrderByDescending(x => orderBy) : query.OrderBy(x => orderBy);
                }
                else
                {
                    TEntity obj = (TEntity)Activator.CreateInstance(typeof(TEntity));
                    var pk = context.FindPrimaryKeyNames<TEntity>(obj);
                    query = query.OrderByDescending(x => pk.FirstOrDefault());
                }

                var collection = query.ToList().Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList<dynamic>();

                var result = new PagingResult
                {
                    TotalCount = totalCount,
                    TotalPages = totalPages,
                    Collection = collection
                };

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
