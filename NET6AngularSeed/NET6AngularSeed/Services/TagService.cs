using NET6AngularSeed.Context;
using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Services.Helpers;
using System.Linq.Expressions;
using NET6AngularSeed.Services.Base;

namespace NET6AngularSeed.Services;

public interface ITagService: IService<Tag>
{
  Task<List<Tag>> SearchAsync(string text);
}

public class TagService : BaseService<Tag, EntityModel>, ITagService
{
  private readonly EntityModel _context;
  public TagService(EntityModel context)
  {
    _context = context;
  }

  public async Task<List<Tag>> SearchAsync(string text)
  {
    using (_context)
    {
      string term = text.ToLower();
      Expression<Func<Tag, bool>> filter = x => x.Description.ToLower().Contains(term);
      var tags = await Task.FromResult(_context.Tags.Where(filter).OrderBy(y => y.Description).ToList());
      return tags;
    }
  }
}
