using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;

        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public void Update(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Attach(candidate);
            context.Entry(candidate).State = EntityState.Modified;
            context.SaveChanges();
        }

        public List<Candidate> GetByStatus(Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).OrderByDescending(c => c.FirstName).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public List<int> GetCounts()
        {
            var context = new CandidateDataContext(_connectionString);
            var result = new List<int>();
            result.Add(context.Candidates.Where(c => c.Status == Status.Pending).Count());
            result.Add(context.Candidates.Where(c => c.Status == Status.Refused).Count());
            result.Add(context.Candidates.Where(c => c.Status == Status.Confirmed).Count());
            return result;
        }

    }
}
