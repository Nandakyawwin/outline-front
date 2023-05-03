export class Loki {

    static save(data: any) {
        localStorage.setItem('token', data)
    }
    static savename(name: any) {
        localStorage.setItem('name', name)
    }
    static admin(role: any) {
        localStorage.setItem('role',role)
    }

    static check() {
        let data = localStorage.getItem(
            'token'
        );
        if (data != null || data != undefined) {
            return true;

        } else {
            return false;
        }
    }

    static checkName() {
        let name = localStorage.getItem(
            'name'
        );
        if (name != null || name != undefined) {
            return true;

        } else {
            return false;
        }
    }
    static checkRole() {
        let role = localStorage.getItem(
            'role'
        );
        if (role != null || role != undefined) {
            return true;
        } else {
            return false;
        }
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static getName() {
        return localStorage.getItem('name');
    }
    static getRole() {
        return localStorage.getItem('role');
    }
    static remove() {
        return localStorage.removeItem(('token'));
    }
    static removeName() {
        return localStorage.removeItem(('name'));
    }
    static removeRole() {
        return localStorage.removeItem('role');
    }
}