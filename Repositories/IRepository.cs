using System.Collections.Generic;

namespace HuRe.Repositories
{
    public interface IRepository<T> where T:class
    {
        bool Add(T o);
        bool Edit(T o);
        T Get(int id);
        IEnumerable<T> All { get; set; }
        bool Remove(int id);
    }
}