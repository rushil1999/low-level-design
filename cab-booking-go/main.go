package main
import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Run("localhost:8000")
}