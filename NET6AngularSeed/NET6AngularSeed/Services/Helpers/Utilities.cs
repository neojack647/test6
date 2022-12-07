using System.ComponentModel.DataAnnotations;
using System.Linq.Expressions;
using System.Reflection;
using System.Security.Principal;

namespace NET6AngularSeed.Services.Helpers;

public static class Utilities
{
  public static Expression<Func<TEntity, bool>> BuildLambdaForFindByKey<TEntity>(int id)
      => BuildEqualsExpression<TEntity>(typeof(TEntity).Name + "Id", id);

  public static Expression<Func<TEntity, bool>> BuildLambaForFindByGuid<TEntity>(Guid id)
      => BuildEqualsExpression<TEntity>(typeof(TEntity).Name + "Id", id);

  public static Expression<Func<TEntity, bool>> BuildEqualsExpression<TEntity>(string propertyName, object inputValue)
  {
    var item = Expression.Parameter(typeof(TEntity), "entity");
    var lambda = BuildEqualsExpression<TEntity>(item, new Helper { PropertyName = propertyName, InputValue = inputValue });

    return lambda;
  }

  public static IEnumerable<Expression<Func<TEntity, bool>>> BuildEqualsExpression<TEntity>(params Helper[] inputs)
  {
    var paramExpression = Expression.Parameter(typeof(TEntity), "entity");
    return inputs.Select(input => BuildEqualsExpression<TEntity>(paramExpression, input));
  }

  public static IEnumerable<Expression<Func<TEntity, bool>>> BuildContainsExpression<TEntity>(params Helper[] inputs)
  {
    var paramExpression = Expression.Parameter(typeof(TEntity), "entity");
    return inputs.Select(input => BuildContainsExpression<TEntity>(paramExpression, input));
  }

  public static Expression<Func<TEntity, bool>> CombineExpressions<TEntity>(IEnumerable<Expression<Func<TEntity, bool>>> expressions)
  {
    if (expressions.Count() == 1)
      return expressions.Single();
    return Expression.Lambda<Func<TEntity, bool>>(expressions.Select(i => i.Body).Aggregate(Expression.Or), expressions.ElementAt(0).Parameters);
  }

  private static Expression<Func<TEntity, bool>> BuildContainsExpression<TEntity>(ParameterExpression parameterExpression, Helper input)
  {
    var propertyExp = Expression.Property(parameterExpression, input.PropertyName);
    var someValue = Expression.Constant(input.InputValue, typeof(string));
    var method = typeof(string).GetMethod("Contains", new[] { typeof(string) });
    var containsMethodExp = Expression.Call(propertyExp, method, someValue);

    return Expression.Lambda<Func<TEntity, bool>>(containsMethodExp, parameterExpression);
  }

  private static Expression<Func<TEntity, bool>> BuildEqualsExpression<TEntity>(ParameterExpression parameterExpression, Helper input)
  {
    var prop = Expression.Property(parameterExpression, input.PropertyName);
    var value = Expression.Constant(input.InputValue);
    var equal = Expression.Equal(prop, value);
    var lambda = Expression.Lambda<Func<TEntity, bool>>(equal, parameterExpression);

    return lambda;
  }

  public class Helper
  {
    public string PropertyName { get; set; }
    public object InputValue { get; set; }
  }

  // Alpha Numeric Comparers
  public class SemiNumericComparer : IComparer<string>
  {
    public int Compare(string x, string y)
    {
      string a = x?.Replace(" ", null);
      string b = y?.Replace(" ", null);


      if (string.IsNullOrEmpty(a))
      {
        if (string.IsNullOrEmpty(b))
        {
          return 0;
        }
        return 1;
      }
      if (string.IsNullOrEmpty(b))
      {
        return -1;
      }
      var aDigits = new string(a.TakeWhile(c => char.IsDigit(c)).ToArray());
      var bDigits = new string(b.TakeWhile(c => char.IsDigit(c)).ToArray());

      int aInt = String.IsNullOrEmpty(aDigits) ? 0 : int.Parse(aDigits);
      int bInt = String.IsNullOrEmpty(bDigits) ? 0 : int.Parse(bDigits);


      return aInt != bInt ? aInt.CompareTo(bInt) : a.CompareTo(b);
    }
  }

  public class NumeralAlphaCompare : IComparer<string>
  {
    public int Compare(string x, string y)
    {
      int nIndexX = x.Replace(":", " ").IndexOf(" ");
      int nIndexY = y.Replace(":", " ").IndexOf(" ");
      bool bSpaceX = nIndexX > -1;
      bool bSpaceY = nIndexY > -1;

      long nX;
      long nY;
      if (bSpaceX && bSpaceY)
      {
        if (long.TryParse(x.Substring(0, nIndexX).Replace(".", ""), out nX)
            && long.TryParse(y.Substring(0, nIndexY).Replace(".", ""), out nY))
        {
          if (nX < nY)
          {
            return -1;
          }
          else if (nX > nY)
          {
            return 1;
          }
        }
      }
      else if (bSpaceX)
      {
        if (long.TryParse(x.Substring(0, nIndexX).Replace(".", ""), out nX)
            && long.TryParse(y, out nY))
        {
          if (nX < nY)
          {
            return -1;
          }
          else if (nX > nY)
          {
            return 1;
          }
        }
      }
      else if (bSpaceY)
      {
        if (long.TryParse(x, out nX)
            && long.TryParse(y.Substring(0, nIndexY).Replace(".", ""), out nY))
        {
          if (nX < nY)
          {
            return -1;
          }
          else if (nX > nY)
          {
            return 1;
          }
        }
      }
      else
      {
        if (long.TryParse(x, out nX)
            && long.TryParse(y, out nY))
        {
          if (nX < nY)
          {
            return -1;
          }
          else if (nX > nY)
          {
            return 1;
          }
        }
      }
      return x.CompareTo(y);
    }
  }

  //Audit Tracking
  public interface IAuditable
  {
    string InsertBy { get; set; }
    DateTime InsertDate { get; set; }
    string UpdateBy { get; set; }
    DateTime UpdateDate { get; set; }
    string Status { get; set; }
  }
  public static void UpdateAudit(this IAuditable auditable, IPrincipal userPrincipal)
  {
    var idValue = auditable.GetIdPropertyValue();

    if (idValue == default(int)) // or guid or int
    {
      auditable.InsertBy = userPrincipal.Identity.Name;
      auditable.InsertDate = DateTime.Now;
      auditable.Status = "A";
    }
    auditable.UpdateBy = userPrincipal.Identity.Name;
    auditable.UpdateDate = DateTime.Now;
  }


  public static PropertyInfo GetIdProperty(this object obj)
      => obj.GetType().GetProperties().Single(x => Attribute.IsDefined(x, typeof(KeyAttribute)));

  public static int GetIdPropertyValue(this object obj)
      => (int)obj.GetIdProperty().GetValue(obj);


  public static int LevenshteinCompare(string source, string target)
  {
    if (string.IsNullOrEmpty(source))
    {
      if (string.IsNullOrEmpty(target)) return 0;
      return target.Length;
    }
    if (string.IsNullOrEmpty(target)) return source.Length;

    if (source.Length > target.Length)
    {
      var temp = target;
      target = source;
      source = temp;
    }

    var m = target.Length;
    var n = source.Length;
    var distance = new int[2, m + 1];
    // Initialize the distance matrix
    for (var j = 1; j <= m; j++) distance[0, j] = j;

    var currentRow = 0;
    for (var i = 1; i <= n; ++i)
    {
      currentRow = i & 1;
      distance[currentRow, 0] = i;
      var previousRow = currentRow ^ 1;
      for (var j = 1; j <= m; j++)
      {
        var cost = (target[j - 1] == source[i - 1] ? 0 : 1);
        distance[currentRow, j] = Math.Min(Math.Min(
              distance[previousRow, j] + 1,
              distance[currentRow, j - 1] + 1),
              distance[previousRow, j - 1] + cost);
      }
    }
    return distance[currentRow, m];
  }

}
