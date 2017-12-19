using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace HuRe.Migrations
{
    public partial class JobDbContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HinhThucLamViecs",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    Tag = table.Column<string>(nullable: true),
                    Ten = table.Column<string>(nullable: true),
                    TenVietTat = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HinhThucLamViecs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NhomViecs",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MoTa = table.Column<string>(nullable: true),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    Tag = table.Column<string>(nullable: true),
                    Ten = table.Column<string>(nullable: true),
                    URLHinhanh = table.Column<string>(nullable: true),
                    VietTat = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NhomViecs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PhanQuyens",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MoTa = table.Column<string>(nullable: true),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    PhanQuyenId = table.Column<long>(nullable: true),
                    Ten = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhanQuyens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhanQuyens_PhanQuyens_PhanQuyenId",
                        column: x => x.PhanQuyenId,
                        principalTable: "PhanQuyens",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SuKiens",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DiaDiem = table.Column<string>(nullable: true),
                    MoTaNgan = table.Column<string>(nullable: true),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    NoiDung = table.Column<string>(nullable: true),
                    Ten = table.Column<string>(nullable: true),
                    ThoiGianBatDau = table.Column<DateTime>(nullable: false),
                    ThoiGianKetThuc = table.Column<DateTime>(nullable: false),
                    TieuDe = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SuKiens", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DoanhNghieps",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DiaChi = table.Column<string>(nullable: true),
                    MoTa = table.Column<string>(nullable: true),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    NguoiDaiDien = table.Column<string>(nullable: true),
                    NhomViecId = table.Column<long>(nullable: false),
                    NhomViecId1 = table.Column<long>(nullable: true),
                    QuyMo = table.Column<string>(nullable: true),
                    SoDienThoai = table.Column<string>(nullable: true),
                    TenDoanhNghiep = table.Column<string>(nullable: true),
                    TenVietTat = table.Column<string>(nullable: true),
                    URLLogo = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoanhNghieps", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DoanhNghieps_NhomViecs_NhomViecId",
                        column: x => x.NhomViecId,
                        principalTable: "NhomViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DoanhNghieps_NhomViecs_NhomViecId1",
                        column: x => x.NhomViecId1,
                        principalTable: "NhomViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TaiKhoans",
                columns: table => new
                {
                    Guid = table.Column<Guid>(nullable: false),
                    AnhDaiDien = table.Column<string>(nullable: true),
                    DiaChi = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    GioiTinh = table.Column<bool>(nullable: false),
                    Ho = table.Column<string>(nullable: true),
                    Lop = table.Column<string>(nullable: true),
                    MatKhau = table.Column<string>(nullable: true),
                    NgaySinh = table.Column<DateTime>(nullable: false),
                    PhanQuyenId = table.Column<long>(nullable: false),
                    SDT = table.Column<string>(nullable: true),
                    Ten = table.Column<string>(nullable: true),
                    TenTaiKhoan = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaiKhoans", x => x.Guid);
                    table.ForeignKey(
                        name: "FK_TaiKhoans_PhanQuyens_PhanQuyenId",
                        column: x => x.PhanQuyenId,
                        principalTable: "PhanQuyens",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CongViecs",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BangCap = table.Column<string>(nullable: true),
                    ChucVu = table.Column<string>(nullable: true),
                    DiaChiLienHe = table.Column<string>(nullable: true),
                    DiaDiem = table.Column<string>(nullable: true),
                    DoTuoi = table.Column<string>(nullable: true),
                    DoanhNghiepId = table.Column<long>(nullable: false),
                    GioiTinh = table.Column<string>(nullable: true),
                    HanNopHoSo = table.Column<DateTime>(nullable: false),
                    HinhThucLamViecId = table.Column<long>(nullable: false),
                    HinhThucLamViecId1 = table.Column<long>(nullable: true),
                    KinhNghiem = table.Column<string>(nullable: true),
                    LuotNopHoSo = table.Column<string>(nullable: true),
                    LuotXem = table.Column<string>(nullable: true),
                    MoTaNgan = table.Column<string>(nullable: true),
                    MucLuongCaoNhat = table.Column<decimal>(nullable: false),
                    MucLuongThapNhat = table.Column<decimal>(nullable: false),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    NguoiLienHe = table.Column<string>(nullable: true),
                    QuyenLoi = table.Column<string>(nullable: true),
                    SDTLienHe = table.Column<string>(nullable: true),
                    SoLuong = table.Column<string>(nullable: true),
                    TagNganh = table.Column<string>(nullable: true),
                    ThoiGian = table.Column<string>(nullable: true),
                    ThongTinKhac = table.Column<string>(nullable: true),
                    TieuDe = table.Column<string>(nullable: true),
                    YeuCau = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CongViecs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CongViecs_DoanhNghieps_DoanhNghiepId",
                        column: x => x.DoanhNghiepId,
                        principalTable: "DoanhNghieps",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CongViecs_HinhThucLamViecs_HinhThucLamViecId",
                        column: x => x.HinhThucLamViecId,
                        principalTable: "HinhThucLamViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CongViecs_HinhThucLamViecs_HinhThucLamViecId1",
                        column: x => x.HinhThucLamViecId1,
                        principalTable: "HinhThucLamViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "HoSoCaNhans",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false),
                    TaiKhoanId = table.Column<Guid>(nullable: false),
                    DiaDiem = table.Column<string>(nullable: true),
                    HinhThucLamViecId = table.Column<long>(nullable: false),
                    HinhThucLamViecId1 = table.Column<long>(nullable: true),
                    KinhNghiem = table.Column<string>(nullable: true),
                    NgaySua = table.Column<DateTime>(nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false),
                    NhomViecId = table.Column<long>(nullable: false),
                    NhomViecId1 = table.Column<long>(nullable: true),
                    TrinhDo = table.Column<string>(nullable: true),
                    ViTriTimViec = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HoSoCaNhans", x => new { x.Id, x.TaiKhoanId });
                    table.UniqueConstraint("AK_HoSoCaNhans_Id", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HoSoCaNhans_HinhThucLamViecs_HinhThucLamViecId",
                        column: x => x.HinhThucLamViecId,
                        principalTable: "HinhThucLamViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HoSoCaNhans_HinhThucLamViecs_HinhThucLamViecId1",
                        column: x => x.HinhThucLamViecId1,
                        principalTable: "HinhThucLamViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_HoSoCaNhans_NhomViecs_NhomViecId",
                        column: x => x.NhomViecId,
                        principalTable: "NhomViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HoSoCaNhans_NhomViecs_NhomViecId1",
                        column: x => x.NhomViecId1,
                        principalTable: "NhomViecs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_HoSoCaNhans_TaiKhoans_TaiKhoanId",
                        column: x => x.TaiKhoanId,
                        principalTable: "TaiKhoans",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CongViecs_DoanhNghiepId",
                table: "CongViecs",
                column: "DoanhNghiepId");

            migrationBuilder.CreateIndex(
                name: "IX_CongViecs_HinhThucLamViecId",
                table: "CongViecs",
                column: "HinhThucLamViecId");

            migrationBuilder.CreateIndex(
                name: "IX_CongViecs_HinhThucLamViecId1",
                table: "CongViecs",
                column: "HinhThucLamViecId1");

            migrationBuilder.CreateIndex(
                name: "IX_DoanhNghieps_NhomViecId",
                table: "DoanhNghieps",
                column: "NhomViecId");

            migrationBuilder.CreateIndex(
                name: "IX_DoanhNghieps_NhomViecId1",
                table: "DoanhNghieps",
                column: "NhomViecId1");

            migrationBuilder.CreateIndex(
                name: "IX_HoSoCaNhans_HinhThucLamViecId",
                table: "HoSoCaNhans",
                column: "HinhThucLamViecId");

            migrationBuilder.CreateIndex(
                name: "IX_HoSoCaNhans_HinhThucLamViecId1",
                table: "HoSoCaNhans",
                column: "HinhThucLamViecId1");

            migrationBuilder.CreateIndex(
                name: "IX_HoSoCaNhans_NhomViecId",
                table: "HoSoCaNhans",
                column: "NhomViecId");

            migrationBuilder.CreateIndex(
                name: "IX_HoSoCaNhans_NhomViecId1",
                table: "HoSoCaNhans",
                column: "NhomViecId1");

            migrationBuilder.CreateIndex(
                name: "IX_HoSoCaNhans_TaiKhoanId",
                table: "HoSoCaNhans",
                column: "TaiKhoanId");

            migrationBuilder.CreateIndex(
                name: "IX_PhanQuyens_PhanQuyenId",
                table: "PhanQuyens",
                column: "PhanQuyenId");

            migrationBuilder.CreateIndex(
                name: "IX_TaiKhoans_PhanQuyenId",
                table: "TaiKhoans",
                column: "PhanQuyenId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CongViecs");

            migrationBuilder.DropTable(
                name: "HoSoCaNhans");

            migrationBuilder.DropTable(
                name: "SuKiens");

            migrationBuilder.DropTable(
                name: "DoanhNghieps");

            migrationBuilder.DropTable(
                name: "HinhThucLamViecs");

            migrationBuilder.DropTable(
                name: "TaiKhoans");

            migrationBuilder.DropTable(
                name: "NhomViecs");

            migrationBuilder.DropTable(
                name: "PhanQuyens");
        }
    }
}
