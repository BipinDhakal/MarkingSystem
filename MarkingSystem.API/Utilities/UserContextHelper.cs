using MarkingSystem.API.DataBaseContext;
using MarkingSystem.API.Models.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace MarkingSystem.API.Utilities
{
    public class UserContextHelper
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly UserManager<ApplicationUser> _userManager;

        public UserContextHelper(IHttpContextAccessor httpContextAccessor, UserManager<ApplicationUser> userManager)
        {
            _httpContextAccessor = httpContextAccessor;
            _userManager = userManager;
        }

        public async Task<int> GetCurrentUserIdAsync()
        {
            var user = _httpContextAccessor.HttpContext?.User;
            if (user == null)
                throw new UnauthorizedAccessException("User is not authenticated.");

            // Fetching the email or UserName from the Claims
            var userEmail = user.FindFirst(ClaimTypes.Email)?.Value;
            if (string.IsNullOrEmpty(userEmail))
                throw new UnauthorizedAccessException("User email not found in claims.");

            // Query the database to get the UserId based on the email
            var applicationUser = await _userManager.FindByEmailAsync(userEmail);

            if (applicationUser == null)
                throw new UnauthorizedAccessException("User not found in the database.");

            return applicationUser.UserId; // Return the custom UserId
        }

        public async Task<string> GetCurrentUserFullNameAsync()
        {
            var user = _httpContextAccessor.HttpContext?.User;
            if (user == null)
                throw new UnauthorizedAccessException("User is not authenticated.");

            // Fetching the email or UserName from the Claims
            var userEmail = user.FindFirst(ClaimTypes.Email)?.Value;
            if (string.IsNullOrEmpty(userEmail))
                throw new UnauthorizedAccessException("User email not found in claims.");

            // Query the database to get the UserId based on the email
            var applicationUser = await _userManager.FindByEmailAsync(userEmail);

            if (applicationUser == null)
                throw new UnauthorizedAccessException("User not found in the database.");

            return applicationUser.FullName; // Return the custom FullName
        }

        public async Task<string>GetNameById(string id)
        {
            var user = _httpContextAccessor.HttpContext?.User;
            if (user == null)
                throw new UnauthorizedAccessException("User is not authenticated.");

            var userDetail = await _userManager.FindByIdAsync(id);

            return userDetail?.FullName;

        }
    }
}


