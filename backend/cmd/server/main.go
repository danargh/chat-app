package main

import (
	"fmt"

	jwt "github.com/dgrijalva/jwt-go"
)

func main() {
	fmt.Println("Hello, World!")
	jwt.New(jwt.SigningMethodHS256)
}
