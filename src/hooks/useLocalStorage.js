
import {  useState } from 'react'


export function uselocalStorage(key, initialValue) {
	const [storedValue, setValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item !== null ? JSON.parse(item) : initialValue
		} catch (e) {
			return initialValue
		}
	})

	const setLocaStorage = values => {
		try {
			window.localStorage.setItem(key, JSON.stringify(values))
			setValue(values)
		} catch (error) {
			console.error(error)

		}
	}

	return [storedValue,setLocaStorage]
}