using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MarkingSystem.API.Migrations
{
    /// <inheritdoc />
    public partial class CreateEntityStudent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.StudentId);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "08bccc44-2c2e-4f48-9401-18f79b03499a", "3", "Student", "STUDENT" },
                    { "79784835-524f-4eed-8faf-0c4768ad438b", "1", "Admin", "ADMIN" },
                    { "dd03a1b9-24bf-4547-b369-f1059ba425a4", "2", "Teacher", "TEACHER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "08bccc44-2c2e-4f48-9401-18f79b03499a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "79784835-524f-4eed-8faf-0c4768ad438b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dd03a1b9-24bf-4547-b369-f1059ba425a4");

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
    }
}
