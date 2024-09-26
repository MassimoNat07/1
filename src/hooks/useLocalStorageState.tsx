import { useState } from "react";

export function useLocalStorageState<T>(key: string, initialValue: T): [T, (data: T) => void] {
	const storedData = localStorage.getItem(key);
	const [data, setData] = useState<T>(storedData ? JSON.parse(storedData) : initialValue);

	const updateData = (newData: T) => {
		setData(newData);
		localStorage.setItem(key, JSON.stringify(newData));
	};

	return [data, updateData];
}
