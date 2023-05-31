import { Request, Response } from 'express';

interface User {
  id: number;
  username: string;
  name?: string;
}

class UserController {
  private users: User[] = [];
  private nextUserId = 1;

  public createUser(req: Request, res: Response) {
    const { username, name } = req.body;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const newUser: User = {
      id: this.nextUserId++,
      username,
      name,
    };

    this.users.push(newUser);

    return res.status(201).json(newUser);
  }

  public getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = this.users.find((u) => u.id === Number(id));

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  }

  public getUsers(_req: Request, res: Response) {
    return res.json(this.users);
  }

  public updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { username, name } = req.body;
    const user = this.users.find((u) => u.id === Number(id));

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.username = username || user.username;
    user.name = name || user.name;

    return res.json(user);
  }

  public deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const index = this.users.findIndex((u) => u.id === Number(id));

    if (index === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    const deletedUsers = this.users.splice(index, 1);

    return res.json(deletedUsers[0]);
  }
}

export default UserController;
