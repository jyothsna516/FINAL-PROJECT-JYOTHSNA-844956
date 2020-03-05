using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EMart.SellerService.Models
{
    public partial class EBuyDBContext : DbContext
    {
        public EBuyDBContext()
        {
        }

        public EBuyDBContext(DbContextOptions<EBuyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discount> Discount { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistoryTransactions> PurchaseHistoryTransactions { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-G21B2M8\\SQLEXPRESS;Initial Catalog=EBuyDB;Persist Security Info=True;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.Property(e => e.BuyerId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Createddatetime)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mobileno)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BreifDetails)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discount>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .IsRequired()
                    .HasColumnName("Discount_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("end_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.Percentage).HasColumnName("percentage");

                entity.Property(e => e.StartDate)
                    .HasColumnName("start_date")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__Items__3FB403AC37C3A4C4");

                entity.Property(e => e.ItemId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasColumnName("ItemName ")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Photo)
                    .HasColumnName("photo")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SubcategoryId)
                    .HasColumnName(" SubcategoryId ")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Items__category___1A14E395");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__Items__Seller_id__34C8D9D1");

                entity.HasOne(d => d.Subcategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubcategoryId)
                    .HasConstraintName("FK__Items__subcatego__1B0907CE");
            });

            modelBuilder.Entity<PurchaseHistoryTransactions>(entity =>
            {
                entity.ToTable("purchase_History_Transactions");

                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerId)
                    .HasColumnName("Buyer_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ItemId)
                    .HasColumnName("Item_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.NumberOfItems).HasColumnName("Number_of_items");

                entity.Property(e => e.Remarks)
                    .IsRequired()
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId)
                    .HasColumnName("Seller_id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionType)
                    .IsRequired()
                    .HasColumnName("transaction_type")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TranscationStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistoryTransactions)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__purchase___Buyer__1DE57479");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistoryTransactions)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__purchase___Item___1FCDBCEB");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHistoryTransactions)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__purchase___Selle__1ED998B2");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.Property(e => e.SellerId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BriefAboutcompany)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNumber)
                    .HasColumnName(" ContactNumber")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.Property(e => e.SubcategoryId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BreifDetails)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SubcategoryName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__SubCatego__categ__173876EA");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
