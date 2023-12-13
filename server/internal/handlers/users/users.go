package users

import (
	"log"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/api"
	"github.com/ZweZeya/CVWO/client/internal/database"
)

const (
	ListUsers = "users.HandleList"

	SuccessfulListUsersMessage = "Successfully listed users"
	ErrRetrieveDatabase        = "Failed to retrieve database in %s"
	ErrRetrieveUsers           = "Failed to retrieve users in %s"
	ErrEncodeView              = "Failed to retrieve users in %s"
)

// func HandleList(w http.ResponseWriter, r *http.Request) (*api.Response, error) {
// 	db, err := database.GetDB()

// 	if err != nil {
// 		return nil, errors.Wrap(err, fmt.Sprintf(ErrRetrieveDatabase, ListUsers))
// 	}

// 	users, err := users.List(db)
// 	if err != nil {
// 		return nil, errors.Wrap(err, fmt.Sprintf(ErrRetrieveUsers, ListUsers))
// 	}

// 	data, err := json.Marshal(users)
// 	if err != nil {
// 		return nil, errors.Wrap(err, fmt.Sprintf(ErrEncodeView, ListUsers))
// 	}

// 	return &api.Response{
// 		Payload: api.Payload{
// 			Data: data,
// 		},
// 		Messages: []string{SuccessfulListUsersMessage},
// 	}, nil
// }

func Test(w http.ResponseWriter, r *http.Request) (*api.Response, error) {
	_, err := database.ConnectDB()

	if err != nil {
		log.Fatal("failed to connect database")
	}

	return &api.Response{
		Payload: api.Payload{
			Data: []byte(`{"message": "success"}`),
		},
		Messages: []string{SuccessfulListUsersMessage},
	}, nil
}
