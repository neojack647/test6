namespace NET6AngularSeed.Context.Entities
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        public string Department { get; set; }
        public string Manager { get; set; }
        public string EmployeeId { get; set; }
        public string UserPrincipal { get; set; }
        public byte[] ThumbnailPhoto { get; set; }
    }
}