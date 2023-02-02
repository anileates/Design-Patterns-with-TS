import chalk from "chalk";

/**
 * A demo DB service
 */
export class DBService {
    private users = [
        {
            id: 1,
            username: "anil",
            password: "12345",
            role: "root"
        },
        {
            id: 2,
            username: "erdem",
            password: "123456",
            role: "admin"
        },
        {
            id: 3,
            username: "aea",
            password: "1234",
            role: "user"
        }
    ]

    getUserByUsername(username: string): User | null {
        for(let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username) {
                return this.users[i];
            }
        }

        return null;
    }
}

export interface User {
    id: number;
    username: string;
    password: string;
    role: string;
}
