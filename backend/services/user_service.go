package services

import "pandao/models"

//DB imitation

var users = make(map[string]models.User)

func CreateUser(user *models.User) error {
	// In real project here should be iteraction with DB
	users[user.WalletAddress] = *user
	return nil
}
