package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type ContactForm struct {
	gorm.Model
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

var db *gorm.DB

func initDB() {
	dsn := "host=localhost user=postgres password=2405 dbname=portfolio_db port=5432 sslmode=disable"
	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Auto migrate the schema
	db.AutoMigrate(&ContactForm{})
}

func main() {
	initDB()

	router := gin.Default()
	router.Use(cors.Default())

	router.POST("/api/contact", func(c *gin.Context) {
		var form ContactForm
		if err := c.BindJSON(&form); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
			return
		}

		// Save to DB
		if err := db.Create(&form).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save to database"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Thank you for contacting!"})
	})

	router.GET("/api/contact", func(c *gin.Context) {
		var forms []ContactForm
		db.Find(&forms)
		c.JSON(http.StatusOK, forms)
	})

	router.Run(":8080")
}
