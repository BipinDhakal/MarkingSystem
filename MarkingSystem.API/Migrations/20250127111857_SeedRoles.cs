using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MarkingSystem.API.Migrations
{
    /// <inheritdoc />
    public partial class SeedRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0519c2b2-5d5e-465e-a166-a8665af66595");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "81138a85-979a-4d88-9302-53c27e941048");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fd018718-6143-4f2c-9106-0b99d8faf185");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "64c2ae22-f89e-4c3b-bce9-bd47d90fbc5c", "2", "Teacher", "TEACHER" },
                    { "74f6f141-dae2-4bb0-8d4b-64996d6ea8fa", "1", "Admin", "ADMIN" },
                    { "de29e9c9-ee53-4490-87d2-a638263bc38c", "3", "Student", "STUDENT" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "64c2ae22-f89e-4c3b-bce9-bd47d90fbc5c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74f6f141-dae2-4bb0-8d4b-64996d6ea8fa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "de29e9c9-ee53-4490-87d2-a638263bc38c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0519c2b2-5d5e-465e-a166-a8665af66595", "2", "Student", "STUDENT" },
                    { "81138a85-979a-4d88-9302-53c27e941048", "1", "Admin", "ADMIN" },
                    { "fd018718-6143-4f2c-9106-0b99d8faf185", "1", "Teacher", "TEACHER" }
                });
        }
    }
}
