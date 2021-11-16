import config from '../config/index';

async function register(user) {
    const res = await fetch(config.apiUrl + '/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

async function checkAvailabilityUser(username) {
    const res = await fetch(`${config.apiUrl}/user/available`, {
        method: 'POST',
        body: JSON.stringify({username}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const isAvailable = await res.json();
    return isAvailable;
}

async function login(user) {
    const res = await fetch(config.apiUrl + '/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

async function me() {
    const token = localStorage.getItem('token');
    if (!token) {
        return {};
    }
    const res = await fetch(config.apiUrl + '/user/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    });
    return res.json();
}

async function getUser(username) {
	const token = localStorage.getItem('token');
	if (!token) {
		return {};
	}
	const res = await fetch(config.apiUrl + '/user/' + username, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	});
	return res.json();
}

async function search(query) {
	const res = await fetch(config.apiUrl + '/search/user/' + query, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem('token')
        }
    });
	return res.json();
}

 function follow(username) {
	return fetch(config.apiUrl + '/user/' + username + '/follow', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem('token')
        }
    });
}

 function unfollow(username) {
	return fetch(config.apiUrl + '/user/' + username + '/unfollow', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem('token')
        }
    });
}

export { register, checkAvailabilityUser, login, me, getUser, search, follow, unfollow };