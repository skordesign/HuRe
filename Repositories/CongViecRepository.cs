using System.Collections.Generic;
using HuRe.Models;

namespace HuRe.Repositories
{
    public interface ICongViecRepository:IRepository<CongViec>
    {
        
    }
    public class CongViecRepository : ICongViecRepository
    {
        public IEnumerable<CongViec> All { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }

        public bool Add(CongViec o)
        {
            throw new System.NotImplementedException();
        }

        public bool Edit(CongViec o)
        {
            throw new System.NotImplementedException();
        }

        public CongViec Get(int id)
        {
            throw new System.NotImplementedException();
        }

        public bool Remove(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}