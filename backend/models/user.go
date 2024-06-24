package models

type User struct {
	ID            string  `json:"id"`
	WalletAddress string  `json:"wallet_address"`
	Username      string  `json:"username"`
	Email         string  `json:"email"`
	Rating        float64 `json:"rating"`
}
