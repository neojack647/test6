using NET6AngularSeed.Context.Entities;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;

namespace NET6AngularSeed.Services.Helpers
{
    public class ADUtility
    {
        private readonly IConfiguration Configuration;
        private static string AppRoot;
        private static string ConnectionString;
        public ADUtility(IConfiguration configuration)
        {
            Configuration = configuration;
            AppRoot = Configuration["AppRoot"];
            ConnectionString = Configuration["ConnectionStrings.EntityModel"];
        }
    
        public static List<Employee> ADSearch(string name)
        {
            using (var context = new PrincipalContext(ContextType.Domain))
            {
                var LDAPADAddress = "LDAP://IECGROUP";
                DirectoryEntry de = new DirectoryEntry(LDAPADAddress);
                DirectorySearcher search = new DirectorySearcher(de);
                search.Filter = "(&(objectCategory=person)(objectClass=user)(!userAccountControl:1.2.840.113556.1.4.803:=2)(|(anr=" + name + "*)))";
                search.PropertiesToLoad.Add("thumbnailPhoto");
                search.PropertiesToLoad.Add("title");
                search.PropertiesToLoad.Add("employeeID");
                search.PropertiesToLoad.Add("userPrincipalName");
                search.PropertiesToLoad.Add("sAMAccountName");
                search.PropertiesToLoad.Add("aCSIdentityName");
                search.PropertiesToLoad.Add("givenName");
                search.PropertiesToLoad.Add("displayName");
                search.PropertiesToLoad.Add("sn");
                search.PropertiesToLoad.Add("cn");
                SearchResultCollection employees;
                var employeeCollection = new List<Employee>();

                try
                {
                    employees = search.FindAll();
                    foreach (SearchResult e in employees)
                    {
                        var cn = e.Properties["cn"][0] as string;
                        var sn = e.Properties["sn"][0] as string;
                        var displayName = e.Properties["displayName"][0] as string;
                        if (!cn.Contains("_admin") && !sn.Contains("_admin") && !cn.Contains("Admin") && !sn.Contains("Admin"))
                        {
                            var firstName = "";
                            var lastName = "";
                            var fullName = "";
                            var employeeId = "";
                            var userPrincipal = "";
                            byte[] image = new byte[] { };
                            firstName = e.Properties["givenName"][0] as string;
                            lastName = e.Properties["sn"][0] as string;
                            fullName = displayName;
                            employeeId = e.Properties["sAMAccountName"][0] as string;
                            userPrincipal = e.Properties["userPrincipalName"][0] as string;

                            Employee employee = new Employee
                            {
                                FirstName = firstName,
                                LastName = lastName,
                                FullName = fullName,
                                EmployeeId = employeeId,
                                UserPrincipal = userPrincipal,
                            };
                            employeeCollection.Add(employee);
                        }

                    }

                  // employeeCollection = employeeCollection.OrderBy(x => x.FullName).ToList();
                  // employeeCollection = employeeCollection.OrderBy(x => Utilities.LevenshteinCompare(x.FullName, name)).ToList();
                  return employeeCollection;

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    throw;
                }

            }
        }


        public static List<Employee> ADSearchByUID(string uid)
        {
            using (var context = new PrincipalContext(ContextType.Domain))
            {
                var LDAPADAddress = "LDAP://IECGROUP";
                DirectoryEntry de = new DirectoryEntry(LDAPADAddress);
                DirectorySearcher search = new DirectorySearcher(de);
                search.Filter = "(&(objectCategory=person)(objectClass=user)(sAMAccountName=" + uid + "*))";
                search.PropertiesToLoad.Add("thumbnailPhoto");
                search.PropertiesToLoad.Add("title");
                search.PropertiesToLoad.Add("employeeID");
                search.PropertiesToLoad.Add("userPrincipalName");
                search.PropertiesToLoad.Add("sAMAccountName");
                search.PropertiesToLoad.Add("aCSIdentityName");
                search.PropertiesToLoad.Add("givenName");
                search.PropertiesToLoad.Add("displayName");
                search.PropertiesToLoad.Add("sn");
                search.PropertiesToLoad.Add("cn");
                search.PropertiesToLoad.Add("department");
                search.PropertiesToLoad.Add("manager");
                SearchResultCollection employees;
                var employeeCollection = new List<Employee>();

                try
                {
                    employees = search.FindAll();
                    foreach (SearchResult e in employees)
                    {
                        var cn = e.Properties["cn"][0] as string;
                        var sn = e.Properties["sn"][0] as string;
                        var displayName = e.Properties["displayName"][0] as string;
                        if (!cn.Contains("_admin") && !sn.Contains("_admin") && !cn.Contains("Admin") && !sn.Contains("Admin"))
                        {

                            var title = "";
                            var firstName = "";
                            var lastName = "";
                            var fullName = "";
                            var employeeId = "";
                            var userPrincipal = "";
                            var department = "";
                            var managerStr = "";
                            var manager = "";
                            byte[] image = new byte[] { };
                            firstName = e.Properties["givenName"][0] as string;
                            lastName = e.Properties["sn"][0] as string;
                            fullName = displayName;
                            employeeId = e.Properties["sAMAccountName"][0] as string;
                            userPrincipal = e.Properties["userPrincipalName"][0] as string;
                            title = e.Properties["title"][0] as string;
                            department = e?.Properties["department"][0] as string;
                            try
                            {
                                managerStr = e?.Properties["manager"][0] as string;
                                managerStr = managerStr.Split(",")[0];
                                manager = managerStr.Substring(3);

                            }
                            catch (Exception)
                            {
                                manager = "";
                            }
                            try
                            {
                                image = e.Properties["thumbnailPhoto"][0] as byte[];
                            }
                            catch (Exception)
                            {
                                image = GenerateDefaultImg();
                            }

                            Employee employee = new Employee
                            {
                                FirstName = firstName,
                                LastName = lastName,
                                FullName = fullName,
                                Title = title,
                                Department = department,
                                Manager = manager,
                                EmployeeId = employeeId,
                                UserPrincipal = userPrincipal,
                                ThumbnailPhoto = image
                            };
                            employeeCollection.Add(employee);
                        }

                    }

                    return employeeCollection;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    throw;
                }

            }
        }

        public static byte[] GenerateDefaultImg()
        {
            var filePath = Path.Combine(AppRoot, "default-profile.jpg");
            using (FileStream stream = File.OpenRead(filePath))
            {
                MemoryStream ms = new MemoryStream();
                stream.CopyTo(ms);
                byte[] imageBytes = ms.ToArray();
                return imageBytes;
            }
        }

        public static string ADRetrieveManager(string uid)
        {
            using (var context = new PrincipalContext(ContextType.Domain))
            {
                var LDAPADAddress = "LDAP://IECGROUP";
                DirectoryEntry de = new DirectoryEntry(LDAPADAddress);
                DirectorySearcher search = new DirectorySearcher(de);
                search.Filter = "(&(objectClass=user)(sAMAccountName=" + uid + "*))";
                search.PropertiesToLoad.Add("sn");
                search.PropertiesToLoad.Add("cn");
                search.PropertiesToLoad.Add("manager");
                SearchResult employee;

                try
                {
                    employee = search.FindOne();
                    if (employee != null)
                    {
                        var cn = employee.Properties["cn"][0] as string;
                        var sn = employee.Properties["sn"][0] as string;
                        var mgr = "";
                        if (!cn.Contains("_admin") && !sn.Contains("_admin") && !cn.Contains("Admin") && !sn.Contains("Admin"))
                        {
                            mgr = employee.Properties.Contains("manager") ? employee.Properties["manager"][0] as string : null;
                            if (mgr != null)
                            {
                                var mgrSubstring = mgr.Substring(0, mgr.IndexOf(","));
                                DirectorySearcher mgrSearch = new DirectorySearcher(de);
                                mgrSearch.Filter = "(&(objectClass=user)(" + mgrSubstring + "*))";
                                mgrSearch.PropertiesToLoad.Add("mail");
                                mgrSearch.PropertiesToLoad.Add("userPrincipalName");
                                SearchResult result;
                                try
                                {
                                    result = mgrSearch.FindOne();
                                    if (result != null)
                                    {
                                        var email = result.Properties["mail"][0] as string;
                                        var userPrincipalName = result.Properties["userPrincipalName"][0] as string;
                                        return email;
                                    }
                                }
                                catch (Exception ex)
                                {
                                    throw new Exception(ex.Message);
                                }
                            }
                            else
                            {
                                return "";
                            }
                        }
                    }

                    return null;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    throw;
                }

            }
        }

    }
}
