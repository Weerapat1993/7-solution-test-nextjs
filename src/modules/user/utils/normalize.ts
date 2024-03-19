import { collect } from 'collect.js'

export const filterMale = (data: any): number => data.reduce((prev: number, cur: any) => {
	const add = cur?.gender === 'male' ? 1 : 0
	return prev + add
}, 0)

export const filterFemale = (data: any): number => data.reduce((prev: number, cur: any) => {
	const add = cur?.gender === 'female' ? 1 : 0
	return prev + add
}, 0)

export const filterMinAge = (data: any): number => data.reduce((prev: number, cur: any) => cur?.age < prev ? cur?.age : prev, 404)
export const filterMaxAge = (data: any): number => data.reduce((prev: number, cur: any) => cur?.age > prev ? cur?.age : prev, 0)
export const filterAgeRange = (data: any): string => data.reduce(() => {
	const min = filterMinAge(data)
	const max = filterMaxAge(data)
	if(min === max) {
		return `${min}`
	} else if(min === 404 && max) {
		return `${max}`
	} else if(max === 0 && min) {
		return `${min}`
	} else {
		return `${min}-${max}`
	}
}, 'Error!')

export const filterAddressUser = (data: any) => {
	const result: any = {}
	data.forEach((item: any) => {
		const key = `${item.firstName}${item.lastName}`
		result[key] = item.address.postalCode
	})
	return result
}

export const userNormalization = (data) => {
	const collection = collect(data)
	const grouped = collection.groupBy('company.department')
	const result = grouped.all()
	Object.keys(result).forEach((key: string) => {
		const collectionInside = collect(result[key])
		const dataInside = collectionInside.all()
		const male: number = filterMale(dataInside)
		const female: number = filterFemale(dataInside)
		const ageRange: string = filterAgeRange(dataInside)
		const addressUser: object = filterAddressUser(dataInside)
		const hairCollection = collect(dataInside)
		const hairGrouped = hairCollection.groupBy('hair.color')
		const	hair = hairGrouped.all()
		Object.keys(hair).forEach((key2: string) => {
			const hairInside = collect(hair[key2])
			const hairResult = hairInside.all()
			hair[key2] = hairResult.length
		})
		result[key] = {
			male,
			female,
			ageRange,
			hair,
			addressUser,
		}
	})
	return result
}