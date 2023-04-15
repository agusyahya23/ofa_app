package main

import (
	"fmt"
	"log"
	"net/http"
	"context"
	"os"
	"encoding/json"

	"github.com/jackc/pgx/v5"
)
type Founder struct {
	Name string `json:"name"`
	Uni string `json:"uni"`
}

func main() {

	databaseUrl := "postgres://ofadev:yahyaahmad@postgres:5432/ofadev"

	dbPool, err := pgx.Connect(context.Background(), databaseUrl)

	if err != nil {
		fmt.Fprint(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer dbPool.Close(context.Background())

	handler := http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		
		var resp []byte
		if req.URL.Path == "/founder" {
			var name string
			var uni string
			query := "select name, uni from founder where uni = 'UI'"
			err = dbPool.QueryRow(context.Background(), query).Scan(&name, &uni)
			if err != nil {
				fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
				os.Exit(1)
			}
			fmt.Println(name, uni)
			dataFounder := &Founder {
				Name: name,
				Uni: uni,
			}
			fmt.Println(dataFounder)
			resp, err = json.Marshal(dataFounder)
			fmt.Println(resp)
			fmt.Println(string(resp))
			fmt.Println(err)
		} else {
			rw.WriteHeader(http.StatusNotFound)
			return
		}
		
		rw.Header().Set("Content-Type", "application/json")
		rw.Header().Set("Content-Length", fmt.Sprint(len(resp)))
		rw.Write(resp)
	})

	log.Println("Server is available at http://ofa-backend:8080")
	log.Fatal(http.ListenAndServe("ofa-backend:8080", handler))
}